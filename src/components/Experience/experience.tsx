"use client"
import { Briefcase, GraduationCap, Monitor } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import type { ExperienceItem } from "@/type"

function TimelineItem({ year, title, company, description, icon, side, index }: ExperienceItem) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative mb-16 last:mb-0"
    >
      <div className="flex items-center relative">
        {/* Left side content */}
        {side === "left" && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="w-5/12 pr-8 relative"
          >
            {/* Year badge positioned on the card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
              className="absolute -top-3 left-6 z-20"
            >
              <div className="bg-gray-800 text-white px-4 py-2 rounded-full font-medium text-sm border border-gray-600">
                {year}
              </div>
            </motion.div>

            <div className="bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700 hover:shadow-blue-500/20 hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {title}
                </h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                  <p className="text-blue-400 font-semibold">{company}</p>
                </div>
                <p className="text-gray-300 leading-relaxed">{description}</p>
                <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30 group-hover:opacity-100 transition-opacity duration-300 mt-6" />
              </div>
            </div>
          </motion.div>
        )}

        {/* Center timeline dot */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
          className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white z-20 shadow-xl border-4 border-black"
        >
          {icon}
        </motion.div>

        {/* Right side content */}
        {side === "right" && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="w-5/12 pl-8 ml-auto relative"
          >
            {/* Year badge positioned on the card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
              className="absolute -top-3 right-6 z-20"
            >
              <div className="bg-gray-800 text-white px-4 py-2 rounded-full font-medium text-sm border border-gray-600">
                {year}
              </div>
            </motion.div>

            <div className="bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700 hover:shadow-blue-500/20 hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {title}
                </h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                  <p className="text-blue-400 font-semibold">{company}</p>
                </div>
                <p className="text-gray-300 leading-relaxed">{description}</p>
                <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30 group-hover:opacity-100 transition-opacity duration-300 mt-6" />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default function TimelineDemo() {
  const timelineData = [
    {
      year: "2025",
      title: "System Associate Developer",
      company: "VizServe Private Limited",
      description:
        "Working as a System Associate Developer gaining hands-on experience in software development and system integration. Collaborating with development teams on various projects and implementing modern development practices.",
      icon: <Briefcase className="w-7 h-7" />,
      side: "right" as const,
    },
    {
      year: "2023-2024",
      title: "OJT/Intern",
      company: "AMA Computer College Cabanatuan",
      description:
        "Completed On-the-Job Training from October 2023 to January 2024, applying theoretical knowledge in real-world scenarios and developing practical IT skills. Gained experience in professional work environments.",
      icon: <Monitor className="w-7 h-7" />,
      side: "left" as const,
    },
    {
      year: "2020-2024",
      title: "Bachelor Of Science In Information Technology",
      company: "AMA University",
      description:
        "Completed a comprehensive degree in Information Technology, providing a strong foundation in web development, database management, and software design principles which I apply to real-world projects.",
      icon: <GraduationCap className="w-7 h-7" />,
      side: "right" as const,
    },
  ]

  return (
    <div className="w-full max-w-7xl mx-auto py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-blue-600 bg-clip-text text-transparent mb-4">
          My Professional Journey
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          From education to professional development - here's my timeline in Information Technology
        </p>
      </motion.div>

      <div className="relative">
        {/* Vertical timeline line */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 rounded-full"
        />

        {/* Background decorative line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gray-700 rounded-full -z-10" />

        {timelineData.map((item, index) => (
          <TimelineItem key={index} {...item} index={index} />
        ))}
      </div>
    </div>
  )
}
