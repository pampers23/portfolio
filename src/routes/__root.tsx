import { createRootRoute, Outlet } from '@tanstack/react-router'
import { ThemeProvider } from '@/components/theme-provider'
import Background from '@/components/background'
import NavbarMenu from '@/components/Navbar/Navbar'

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen relative">
        <Background />
        <NavbarMenu />
        <Outlet />
      </div>
    </ThemeProvider>
  ),
})
