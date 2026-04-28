"use client"

import { Briefcase, GraduationCap, Monitor } from "lucide-react"
import type React from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface TimelineItemProps {
  year: string
  title: string
  company: string
  description: string
  icon: React.ReactNode
  side: "left" | "right"
  index: number
}

function TimelineItem({
  year,
  title,
  company,
  description,
  icon,
  side,
  index,
}: TimelineItemProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: side === "left" ? -60 : 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative flex items-center mb-16 last:mb-0"
    >
      {/* Timeline Dot - Lower z-index */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
        className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10 bg-background border-2 border-border shadow-lg backdrop-blur"
      >
        {icon}
      </motion.div>

      {/* Card - HIGHEST z-index */}
      <div
        className={`w-full md:w-5/12 ${
          side === "left" ? "mr-auto md:pr-16" : "ml-auto md:pl-16"
        } z-20`}
      >
        <motion.div
          whileHover={{ y: -4, scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative p-8 rounded-3xl bg-background/90 backdrop-blur-xl border border-border/50 
          shadow-2xl hover:shadow-primary/20 hover:border-primary/60 transition-all duration-500 group
          before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-r 
          before:from-primary/5 before:to-secondary/5 before:opacity-0 before:group-hover:opacity-100"
        >
          {/* Year Badge - INSIDE card, properly positioned */}
          <div className="absolute -top-4 left-6 px-4 py-2 text-xs font-medium rounded-full 
            bg-background border-2 border-border shadow-lg text-foreground z-30
            group-hover:bg-primary/10 group-hover:border-primary/50 group-hover:text-primary
            transition-all duration-300">
            {year}
          </div>

          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>

          <p className="text-base text-primary font-semibold mb-4">
            {company}
          </p>

          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const timelineData = [
    {
      year: "2025",
      title: "System Associate Developer",
      company: "VizServe Private Limited",
      description:
        "Working as a System Associate Developer gaining hands-on experience in software development and system integration. Collaborating with development teams on various projects and implementing modern development practices.",
      icon: <Briefcase className="w-6 h-6 text-primary" />,
      side: "right" as const,
    },
    {
      year: "2023-2024",
      title: "OJT/Intern",
      company: "AMA Computer College Cabanatuan",
      description:
        "Completed On-the-Job Training from October 2023 to January 2024, applying theoretical knowledge in real-world scenarios and developing practical IT skills.",
      icon: <Monitor className="w-6 h-6 text-primary" />,
      side: "left" as const,
    },
    {
      year: "2020-2024",
      title: "Bachelor Of Science In Information Technology",
      company: "AMA University",
      description:
        "Completed a degree in Information Technology with a strong foundation in web development, databases, and software design.",
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
      side: "right" as const,
    },
  ]

  return (
    <section className="w-full max-w-6xl mx-auto py-24 px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-foreground to-primary/80 bg-clip-text text-transparent">
          My <span className="text-primary">Journey</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed">
          From education to real-world experience in development.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line - Behind everything */}
        <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-border to-primary/30 transform -translate-y-12" />

        {timelineData.map((item, index) => (
          <TimelineItem key={index} {...item} index={index} />
        ))}
      </div>
    </section>
  )
}