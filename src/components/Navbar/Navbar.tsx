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

const NavbarMenu = () => {

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
    <div>
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
                className="relative text-white hover:text-blue-400 transition-colors"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  )
}

export default NavbarMenu
