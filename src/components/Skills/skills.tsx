import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Highlight } from "../ui/hero-highlight";
import {
  Atom,
  Code2,
  Palette,
  Server,
  Database,
  Cloud,
  Wrench
} from "lucide-react";

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "React Js", level: 95, icon: Atom },
    { name: "TypeScript", level: 85, icon: Code2 },
    { name: "Tailwind CSS", level: 90, icon: Palette },
    { name: "Node.js", level: 80, icon: Server },
    { name: "PostgreSQL", level: 75, icon: Database },
    { name: "Supabase", level: 85, icon: Cloud },
  ];
    
  const techStack = [
    { name: "React", icon: Atom },
    { name: "TypeScript", icon: Code2 },
    { name: "Tailwind", icon: Palette },
    { name: "shadcn/ui", icon: Wrench },
    { name: "Node.js", icon: Server },
    { name: "Express", icon: Server },
    { name: "Supabase", icon: Cloud },
    { name: "PostgreSQL", icon: Database },
  ];

  return (
    <div ref={ref} className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          My <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Technologies and skills I use to build amazing web experiences.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
        {/* Skills Progress */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <h3 className="font-display text-2xl md:text-3xl font-semibold mb-8">
            Proficiency Levels
          </h3>
          
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <skill.icon className="w-4 h-4 text-primary" />
                    <span>{skill.name}</span>
                  </div>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1.2, delay: 0.8 + index * 0.1 }}
                    className="h-full glass-card bg-gradient-to-r from-primary to-secondary rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-8"
        >
          <h3 className="font-display text-2xl md:text-3xl font-semibold">
            Tech <Highlight className="text-white">Stack</Highlight>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1 + index * 0.05 }}
                className="glass-card p-4 text-center py-6 hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center gap-2">
                    <tech.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <p className="font-medium text-sm group-hover:text-primary transition-colors">
                        {tech.name}
                    </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;