import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Welcome to Your New Project
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Start building something amazing with modern tools and beautiful design.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;