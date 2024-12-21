import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { motion } from "framer-motion";
import { UserDetails, saveUserDetails } from "@/utils/userDetailsStorage";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  phone: z.string().min(10, "Numéro de téléphone invalide"),
  email: z.string().email("Email invalide"),
  address: z.string().min(5, "Adresse invalide"),
  country: z.string().min(2, "Pays invalide"),
  zipCode: z.string().min(5, "Code postal invalide"),
});

interface UserDetailsFormProps {
  onComplete: (details: UserDetails) => void;
  initialData?: UserDetails | null;
}

const UserDetailsForm = ({ onComplete, initialData }: UserDetailsFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
      country: "",
      zipCode: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    saveUserDetails(values);
    onComplete(values);
    toast({
      title: "Détails sauvegardés",
      description: "Vos informations ont été enregistrées avec succès",
      className: "bg-red-50 border-red-200",
      style: {
        backgroundColor: '#700100',
        color: 'white',
        border: '1px solid #590000',
      },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
    >
      <h2 className="text-xl font-serif text-[#1A1F2C] mb-6">Vos Informations</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prénom</FormLabel>
                  <FormControl>
                    <Input placeholder="Jean" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <Input placeholder="Dupont" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Téléphone</FormLabel>
                  <FormControl>
                    <Input placeholder="+33 6 12 34 56 78" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="jean.dupont@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Adresse</FormLabel>
                <FormControl>
                  <Input placeholder="123 Rue de la Paix" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pays</FormLabel>
                  <FormControl>
                    <Input placeholder="France" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="zipCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Code Postal</FormLabel>
                  <FormControl>
                    <Input placeholder="75001" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#700100] text-white px-4 py-3 rounded-md hover:bg-[#591C1C] transition-all duration-300 mt-6"
          >
            Sauvegarder mes informations
          </button>
        </form>
      </Form>
    </motion.div>
  );
};

export default UserDetailsForm;