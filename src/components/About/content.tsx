import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Highlight } from "../ui/hero-highlight";

const Content = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          About <span className="text-gradient">Me</span>
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Get to know who I am and what drives my passion for development.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="space-y-6 max-w-4xl mx-auto"
      >
        <h3 className="font-display text-2xl md:text-3xl font-semibold">
          Building the web, one pixel at a time
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          I'm a full-stack web developer with over 2 years of experience creating 
          digital experiences that make a difference. Based in Nueva Ecija, Philippines. I 
          specialize in building modern, responsive, and accessible web applications.
        </p>
        
        <p className="text-muted-foreground leading-relaxed">
          I work as an <Highlight className="text-white">Associate System Developer</Highlight> at <Highlight className="text-white">VizServe Private Limited</Highlight>, building and 
          maintaining web applications while collaborating on scalable, efficient solutions. 
          I focus on clean code, user-friendly interfaces, and continuous learning.
        </p>

        <div className="flex flex-col gap-4 pt-4">
          {[
            "Built fullstack food ordering system (PERN)",
            "Integrated Supabase auth & real-time DB",
            "Developed responsive UI with Tailwind + shadcn",
            "Experience with API, auth, and database design",
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="glass-card p-1 flex items-center gap-2"
            >
              <span className="text-primary text-xl">✔</span>
              <p className="text-sm text-muted-foreground">{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Content;