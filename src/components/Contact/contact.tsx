import {
  Mail,
  User,
  MessageSquare,
  Linkedin,
  Github,
  MapPin,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import profile from "@/assets/profile.jpg"

const Contact = () => {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-slate-200 px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-center gap-12">
      {/* Left: Contact Form */}
      <div className="max-w-xl w-full space-y-8">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <p className="text-slate-400 mt-2">
            Feel free to drop a message — I’d love to hear from you!
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Your name"
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-4 text-slate-400" size={18} />
              <textarea
                rows={5}
                placeholder="Your message"
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-sky-600 hover:bg-sky-700 transition-colors py-2 rounded-lg font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Right: Profile Contact Card */}
      <div className="bg-neutral-900 text-white shadow-lg rounded-xl p-6 max-w-sm w-full space-y-4">
        {/* Profile Header */}
        <div className="flex items-center gap-4">
          <img
            src={profile}
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h2 className="text-xl font-bold text-white">Lance Brixter Mendoza</h2>
            <p className="text-gray-500 text-sm">Web Developer</p>
          </div>
        </div>

        {/* Contact List */}
        <div className="space-y-3">
          <ContactItem
            icon={<FaWhatsapp className="text-green-500 w-5 h-5" />}
            label="WhatsApp"
            href="https://wa.me/639707127269"
          />
          <ContactItem
            icon={<Linkedin className="text-blue-700 w-5 h-5" />}
            label="LinkedIn"
            href="https://www.linkedin.com/in/lance-brixter-mendoza-4877b9368/"
          />
          <ContactItem
            icon={<Github className="text-purple-800 w-5 h-5" />}
            label="GitHub"
            href="https://github.com/pampers23"
          />
          <ContactItem
            icon={<MapPin className="text-red-500 w-5 h-5" />}
            label="Nueva Ecija, Philippines"
          />
        </div>
      </div>
    </div>
  );
};

const ContactItem = ({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href?: string;
}) => {
  const classes =
    "flex items-center gap-3 px-4 py-3 rounded-lg border hover:bg-neutral-800 border-neutral-500 transition";
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </a>
  ) : (
    <div className={classes}>
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
};

export default Contact;
