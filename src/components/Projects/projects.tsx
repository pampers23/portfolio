import { Link } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";
import { projects } from "../data/data";
import type { Project } from "@/type";

function TiltCard({ project, index }: { project: Project, index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-50, 50], [8, -8]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(x, [-50, 50], [-8, 8]), { stiffness: 200, damping: 20 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.65, 0, 0.35, 1] }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-primary/40 via-transparent to-secondary/40"
    >
      <div className="rounded-3xl glass overflow-hidden h-full w-full">
        <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        className="block"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            loading="lazy"
            width={1280}
            height={800}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
        </div>

        <div className="p-6">
          <p className="text-xs uppercase tracking-widest text-primary">{project.tagline}</p>
          <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
            View Project
            <span aria-hidden>→</span>
          </div>
        </div>
      </Link>
      </div>
    </motion.div>
  )
}


const Projects = () => {
  return (
    <section id="projects" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-xs uppercase tracking-widest text-primary">Selected Work</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
            Projects that <span className="text-gradient">shipped</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A few recent builds. Click any card to read the full case study.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <TiltCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects