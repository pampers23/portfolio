import {
  Mail,
  User,
  MessageSquare,
  Linkedin,
  Github,
  MapPin,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { FaWhatsapp } from "react-icons/fa";
import profile from "@/assets/profile.jpg"
import { formSchema } from "@/zod-schema";
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onSubmit(values: any) {
    console.log("Submitted:", values);
  }

  return (
    <div className="min-h-screen w-full bg-neutral-950 text-slate-200 px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-center gap-12">
      {/* Left: Contact Form */}
      <Toaster/>
      <div className="max-w-xl w-full space-y-8">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <p className="text-slate-400 mt-2">
            Feel free to drop a message — I’d love to hear from you!
          </p>
        </div>

    <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

            {/* Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Your name"
                        className="pl-10 bg-neutral-900 border border-neutral-800 focus:ring-sky-500"
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="you@example.com"
                        className="pl-10 bg-neutral-900 border border-neutral-800 focus:ring-sky-500"
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Message Field */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 text-slate-400" size={18} />
                    <FormControl>
                      <Textarea
                        {...field}
                        rows={5}
                        placeholder="Your message"
                        className="pl-10 bg-neutral-900 border border-neutral-800 focus:ring-sky-500 resize-none"
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button 
              type="submit" 
              className="w-full bg-sky-600 hover:bg-sky-700"
              onClick={() => {
                const success = true; 
                if (success) {
                  toast.success("Message sent successfully!");
                } else {
                  toast.error("Something went wrong");
                }
              }}
            >
              Send Message
            </Button>
          </form>
        </Form>
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
