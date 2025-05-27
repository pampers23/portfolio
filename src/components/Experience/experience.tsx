"use client"
import { Briefcase, GraduationCap, Monitor } from "lucide-react"
import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
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

function TimelineItem({ year, title, company, description, icon, side, index }: TimelineItemProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: side === "left" ? -100 : 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: side === "left" ? -100 : 100 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative flex items-center mb-16 last:mb-0"
    >
      {/* Timeline dot with animation */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
        className="absolute left-1/2 transform -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white z-10 shadow-lg border-4 border-white"
      >
        {icon}
      </motion.div>

      {/* Year label with animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
        className={`absolute left-1/2 transform -translate-x-1/2 ${
          side === "left" ? "-translate-x-32" : "translate-x-32"
        } text-gray-500 font-semibold text-sm whitespace-nowrap bg-white px-3 py-1 rounded-full shadow-sm border`}
      >
        {year}
      </motion.div>

      {/* Content card with enhanced design */}
      <div className={`w-5/12 ${side === "left" ? "mr-auto pr-8" : "ml-auto pl-8"}`}>
        <motion.div
          whileHover={{ y: -5, scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
        >
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Content */}
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {title}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                  <p className="text-blue-600 font-semibold text-sm">{company}</p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed text-sm mb-4">{description}</p>

            {/* Decorative bottom border */}
            <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Decorative corner element */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-bl-full opacity-50" />
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
      icon: <Briefcase className="w-6 h-6" />,
      side: "right" as const,
    },
    {
      year: "2023-2024",
      title: "OJT/Intern",
      company: "AMA Computer College Cabanatuan",
      description:
        "Completed On-the-Job Training from October 2023 to January 2024, applying theoretical knowledge in real-world scenarios and developing practical IT skills. Gained experience in professional work environments.",
      icon: <Monitor className="w-6 h-6" />,
      side: "left" as const,
    },
    {
      year: "2020-2024",
      title: "Bachelor Of Science In Information Technology",
      company: "AMA University",
      description:
        "Completed a comprehensive degree in Information Technology, providing a strong foundation in web development, database management, and software design principles which I apply to real-world projects.",
      icon: <GraduationCap className="w-6 h-6" />,
      side: "right" as const,
    },
  ]

  const containerRef = useRef(null)

  return (
    <div className="w-full max-w-7xl mx-auto py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          My Professional Journey
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          From education to professional development - here's my timeline in Information Technology
        </p>
      </motion.div>

      <div ref={containerRef} className="relative">
        {/* Enhanced vertical line with gradient */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 rounded-full"
        />

        {/* Background decorative elements */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gray-200 rounded-full -z-10" />

        {timelineData.map((item, index) => (
          <TimelineItem key={index} {...item} index={index} />
        ))}
      </div>
    </div>
  )
}
