import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, Github, MessageCircle, Phone, Send, Copy, Check, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { formSchema, FormValues } from "@/zod-schema";
import { zodResolver } from "@hookform/resolvers/zod"
import emailjs from "@emailjs/browser";
import { EMAILJS } from "@/lib/config";

const CONTACTS = [
  { id: "email", icon: Mail, label: "Email", value: "lancemendoza502@gmail.com", href: "mailto:lancemendoza502@gmail.com", copy: "lancemendoza502@gmail.com", accent: "from-sky-500/20 to-blue-500/10" },
  { id: "github", icon: Github, label: "GitHub", value: "github.com/pampers23", href: "https://github.com/pampers23", copy: "https://github.com/pampers23", accent: "from-violet-500/20 to-fuchsia-500/10" },
  { id: "whatsapp", icon: MessageCircle, label: "WhatsApp", value: "0970 712 7269", href: "https://wa.me/639707127269", copy: "09707127269", accent: "from-emerald-500/20 to-teal-500/10" },
  { id: "viber", icon: Phone, label: "Viber", value: "0970 712 7269", href: "viber://chat?number=%2B639707127269", copy: "09707127269", accent: "from-purple-500/20 to-indigo-500/10" },
] as const;

function Contact() {
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const onSubmit = async (values: FormValues) => {
    setLoading(true);
    const templateParams = {
      from_name: values.user_name,
      from_email: values.user_email,
      message: values.message,
    };
    emailjs
      .send(
        EMAILJS.SERVICE_ID, 
        EMAILJS.TEMPLATE_ID, 
        templateParams, 
        EMAILJS.PUBLIC_KEY)
      .then(() => {
        toast.success("Message sent successfully!");
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        toast.error("Failed to send message. Try again later.");
      });
  };

  const copy = async (id: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(id);
      toast.success("Copied to clipboard", { description: value });
      setTimeout(() => setCopied(null), 1600);
    } catch {
      toast.error("Couldn't copy");
    }
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user_name: "",
      user_email: "",
      message: "",
    }
  })

  return (
    <section id="contact" className="relative py-24 sm:py-32 scroll-mt-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        {/* Split layout */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 items-start">
          {/* LEFT — Intro + Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Spotlight glow */}
            <div className="pointer-events-none absolute -top-24 -left-10 h-72 w-72 rounded-full bg-[image:var(--gradient-primary)] opacity-20 blur-3xl" />

            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-widest text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Contact
            </span>
            <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Let's build <span className="text-gradient">something great</span> together
            </h2>
            <p className="mt-5 text-muted-foreground max-w-md">
              I'm open to freelance work, collaborations, or full-time opportunities. Feel free to reach out.
            </p>

            {/* Terminal */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-8 rounded-2xl glass-strong overflow-hidden shadow-[var(--shadow-card)]"
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background/40">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                <span className="ml-3 text-xs text-muted-foreground font-mono">~/lance — zsh</span>
              </div>
              <pre className="px-5 py-5 text-sm font-mono leading-relaxed text-foreground/90 whitespace-pre-wrap">
                <span className="text-primary">$</span> whoami
                <span className="text-muted-foreground">lance — frontend developer</span>

                <span className="text-primary"> $</span> cat status.json
                {`{`}
                <span className="text-gray-500">"status"</span>: <span className="text-emerald-500">"available"</span>,
                <span className="text-gray-500">"role"</span>: <span className="text-emerald-500">"frontend developer"</span>,
                <span className="text-gray-500">"focus"</span>: <span className="text-emerald-500">"clean UI, scalable apps"</span>,
                <span className="text-gray-500">"reply"</span>: <span className="text-emerald-500">"within 24h"</span>
                {`}`}

            <span className="text-primary">$</span> <span className="inline-block w-2 h-4 align-[-2px] bg-primary animate-pulse" />
              </pre>
            </motion.div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-3xl glass-strong p-6 sm:p-8 shadow-[var(--shadow-card)]">
              <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />

              <div className="mb-6">
                <h3 className="text-2xl font-semibold">Send a message</h3>
                <p className="text-sm text-muted-foreground mt-1">I'll reply to your email shortly.</p>
              </div>

              <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" {...form.register("user_name")} required placeholder="Jane Doe" className="rounded-2xl h-11 bg-background/40 focus-visible:ring-primary/40" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" {...form.register("user_email")} type="email" required placeholder="you@email.com" className="rounded-2xl h-11 bg-background/40 focus-visible:ring-primary/40" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" {...form.register("message")} required rows={6} placeholder="Tell me about your project…" className="rounded-2xl bg-background/40 focus-visible:ring-primary/40 resize-none" />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="group h-12 rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-95 hover:shadow-[var(--shadow-glow)] transition-all"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Sending…</span>
                    </>
                  ) : (
                    <>
                      <span>Send message</span>
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Contact info grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14"
        >
          <div className="flex items-end justify-between mb-5">
            <h3 className="text-lg font-semibold">Or reach me directly</h3>
            <span className="text-xs text-muted-foreground">Tap to open · click copy to clipboard</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CONTACTS.map((c, i) => {
              const Icon = c.icon;
              const isCopied = copied === c.id;
              return (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="group relative"
                >
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className={`block relative overflow-hidden rounded-2xl glass-strong p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]`}
                  >
                    <div className={`pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${c.accent} blur-2xl opacity-60 group-hover:opacity-100 transition-opacity`} />
                    <div className="flex items-center justify-between">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-background/50 border border-border text-primary group-hover:scale-110 transition-transform">
                        <Icon className="h-5 w-5" />
                      </div>
                      <button
                        type="button"
                        onClick={(e) => { e.preventDefault(); copy(c.id, c.copy); }}
                        aria-label={`Copy ${c.label}`}
                        className="grid h-8 w-8 place-items-center rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                      >
                        {isCopied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                      </button>
                    </div>
                    <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{c.label}</p>
                    <p className="mt-1 text-sm font-medium truncate">{c.value}</p>
                  </a>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;