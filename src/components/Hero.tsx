import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const roles = [
  "Web Developer",
  "IT Educator", 
  "Data Science Enthusiast",
  "Analytics Expert"
];

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-hero-gradient">
      <div className="absolute inset-0 bg-background/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Profile Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-32 h-32 rounded-full mx-auto mb-8 bg-gradient-to-br from-primary to-secondary shadow-large animate-float"
          />

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground"
          >
            Your Name Here
          </motion.h1>

          {/* Rotating Role */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-3xl font-semibold mb-8 h-12 flex items-center justify-center"
          >
            <span className="text-primary-foreground/90">I'm a </span>
            <motion.span
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="ml-2 text-primary-foreground font-bold"
            >
              {roles[currentRole]}
            </motion.span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about creating innovative web solutions, empowering learners through technology education, and transforming data into actionable insights.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-large hover:shadow-glow transition-smooth px-8 py-6 text-lg font-semibold"
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-large px-8 py-6 text-lg font-semibold"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-large px-8 py-6 text-lg font-semibold"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="animate-bounce cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            <ChevronDown className="h-8 w-8 text-primary-foreground/60 mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}