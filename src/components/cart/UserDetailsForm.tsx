import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { UserDetails, saveUserDetails } from "@/utils/userDetailsStorage";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { User, Phone, Mail, MapPin, Globe } from "lucide-react";

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

const steps = [
  {
    title: "Informations Personnelles",
    description: "Vos coordonnées de base",
    fields: ["firstName", "lastName"],
    icon: <User className="w-6 h-6" />,
  },
  {
    title: "Contact",
    description: "Comment vous joindre",
    fields: ["phone", "email"],
    icon: <Phone className="w-6 h-6" />,
  },
  {
    title: "Adresse",
    description: "Où livrer votre commande",
    fields: ["address", "country", "zipCode"],
    icon: <MapPin className="w-6 h-6" />,
  },
];

const UserDetailsForm = ({ onComplete, initialData }: UserDetailsFormProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: initialData?.firstName || "",
      lastName: initialData?.lastName || "",
      phone: initialData?.phone || "",
      email: initialData?.email || "",
      address: initialData?.address || "",
      country: initialData?.country || "",
      zipCode: initialData?.zipCode || "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      saveUserDetails(values as UserDetails);
      onComplete(values as UserDetails);
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
    }
  };

  const currentFields = steps[currentStep].fields;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-8 rounded-lg shadow-lg border border-gray-100"
    >
      {/* Progress Steps */}
      <div className="flex justify-between mb-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center w-1/3">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-colors ${
                index <= currentStep ? 'bg-[#700100] text-white' : 'bg-gray-200'
              }`}
            >
              {step.icon}
            </div>
            <div className="text-center">
              <p className={`font-medium ${index <= currentStep ? 'text-[#700100]' : 'text-gray-400'}`}>
                {step.title}
              </p>
              <p className="text-sm text-gray-500">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              {currentFields.map((fieldName) => (
                <FormField
                  key={fieldName}
                  control={form.control}
                  name={fieldName as keyof z.infer<typeof formSchema>}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">
                        {fieldName === "firstName" && "Prénom"}
                        {fieldName === "lastName" && "Nom"}
                        {fieldName === "phone" && "Téléphone"}
                        {fieldName === "email" && "Email"}
                        {fieldName === "address" && "Adresse"}
                        {fieldName === "country" && "Pays"}
                        {fieldName === "zipCode" && "Code Postal"}
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="border-gray-300 focus:border-[#700100] focus:ring-[#700100]"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between mt-8">
            {currentStep > 0 && (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep - 1)}
                className="px-6 py-2 border border-[#700100] text-[#700100] rounded-md hover:bg-[#700100] hover:text-white transition-colors"
              >
                Précédent
              </button>
            )}
            <button
              type="submit"
              className="ml-auto px-6 py-2 bg-[#700100] text-white rounded-md hover:bg-[#591C1C] transition-colors"
            >
              {currentStep === steps.length - 1 ? "Sauvegarder" : "Suivant"}
            </button>
          </div>
        </form>
      </Form>
    </motion.div>
  );
};

export default UserDetailsForm;