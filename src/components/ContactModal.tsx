import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

interface ContactModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactModal = ({ isOpen, onOpenChange }: ContactModalProps) => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+21650813355', '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#471818]/80 backdrop-blur-md border-none shadow-lg sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-center">Contactez-nous</DialogTitle>
          <DialogDescription className="text-center text-white-600">
            Envoyez-nous un message ou contactez-nous via WhatsApp
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                id="subject"
                placeholder="Sujet"
                className="bg-white/10 border-gray-200"
              />
            </div>
            <div className="space-y-2">
              <Textarea
                id="message"
                placeholder="Votre message"
                className="min-h-[100px] bg-white/10 border-gray-200"
              />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              Envoyer
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white/100 px-2 text-gray-500">Ou</span>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              type="button"
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="w-5 h-5" />
              Contactez-nous sur WhatsApp
            </Button>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;