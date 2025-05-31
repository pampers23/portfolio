"use client"

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar"
import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Download, Github } from "lucide-react"
import { FlipWords } from "@/components/ui/flip-words"
import profile from "@/assets/profile.jpg"

export function Home() {
  const words = ["Lance", "Web Designer", "Web Developer"]
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ]

  return (
    <div className="relative min-h-screen w-full bg-neutral-950 text-slate-200 overflow-hidden">
      {/* Navbar */}
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-black hover:text-blue-400 transition-colors"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Main Content Container */}
      <div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 mt-20"
        style={{ minHeight: "calc(100vh - 80px)" }}
      >
        {/* Responsive Layout: Stack on mobile, side-by-side on desktop */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12 h-full">
          {/* Text Content */}
          <div className="flex-1 flex flex-col items-start justify-center text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-blue-100 leading-tight">
              I'm <FlipWords words={words} className="text-blue-400" />
            </h1>
            <div className="mt-4 sm:mt-6 lg:mt-8 space-y-2 sm:space-y-3">
              <p className="text-base sm:text-lg lg:text-xl font-medium text-slate-300">
                A <span className="text-blue-400">Web Developer</span> based in the Philippines
              </p>
              <p className="text-sm sm:text-base lg:text-lg font-light text-slate-300 max-w-lg">
                Passionate of creating modern and responsive web applications.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Button className="group/github-btn relative overflow-hidden w-full sm:w-40 h-10 sm:h-12 cursor-pointer bg-blue-600 hover:bg-blue-700 transition-colors">
                <span className="group-hover/github-btn:translate-x-40 transition duration-500 text-sm sm:text-base">
                  Github
                </span>
                <div className="-translate-x-40 group-hover/github-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 z-20">
                  <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
              </Button>

              <Button className="group/resume-btn relative overflow-hidden w-full sm:w-40 h-10 sm:h-12 cursor-pointer border border-blue-500 bg-transparent hover:bg-blue-500/10 transition-colors">
                <span className="group-hover/resume-btn:translate-x-40 transition duration-500 text-sm sm:text-base">
                  Resume
                </span>
                <div className="-translate-x-40 group-hover/resume-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 z-20">
                  <Download className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
              </Button>
            </div>
          </div>

          {/* Avatar */}
          <div className="flex-1 flex items-center justify-center lg:justify-end order-first lg:order-last">
            <div className="relative">
              {/* Glow effect behind avatar */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-xl opacity-20 scale-110"></div>
              <Avatar className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 border-2 border-blue-500/30">
                <AvatarImage src={profile || "/placeholder.svg"} className="object-cover" />
                <AvatarFallback className="text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-br from-blue-500 to-blue-700 text-white">
                  LM
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
