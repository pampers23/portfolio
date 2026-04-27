import { Project } from "@/type";
import hotelImg from "@/assets/hotel.png"
import Admin from "@/assets/admin-shoe.png"
import Task from "@/assets/task.png"


export const projects: Project[] = [
  {
    slug: "hotel-website",
    title: "Lumière Hotel",
    tagline: "Luxury booking experience",
    description:
      "A high-end hotel website with immersive imagery, smooth scroll storytelling, and an end-to-end booking flow.",
    image: hotelImg,
    stack: ["React", "Tailwind", "Framer Motion", ],
    features: [
      "Immersive scroll storytelling with parallax",
      "Real-time room availability and pricing",
      "Multi-language and multi-currency",
      "3-step mobile-first booking funnel",
      "Sub-1.5s LCP on 3G",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "TanStack Query", "Supabase"],
  },
  {
    slug: "admin-dashboard",
    title: "Admin Shoee Dashboard",
    tagline: "Shoe E-commerce Admin Panel",
    description:
      "An analytics-rich admin dashboard for a sneaker brand — inventory, sales, and customer insights in one place.",
    image: Admin,
    stack: ["React", "TypeScript", "Recharts", "Supabase"],
    features: [
      "Live inventory across 12 warehouses",
      "Cohort and LTV analytics",
      "Bulk product editor with CSV import",
      "Role-based access control",
      "Exportable PDF / CSV reports",
    ],
    technologies: ["React", "TypeScript", "Recharts", "TanStack Query", "Supabase", "Tailwind"],
  },
  {
    slug: "task-management",
    title: "Task Management App",
    tagline: "Team task management",
    description:
      "A keyboard-first task manager with realtime collaboration, drag-and-drop boards, and offline support.",
    image: Task,
    stack: ["React", "TypeScript", "Zustand", "Realtime"],
    features: [
      "Drag-and-drop Kanban with smooth animations",
      "Offline-first with background sync",
      "Realtime presence and cursors",
      "Keyboard shortcuts for everything",
      "Markdown comments and mentions",
    ],
    technologies: ["React", "TypeScript", "Zustand", "Tailwind",],
  }  
]