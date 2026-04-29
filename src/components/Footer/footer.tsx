import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-[var(--glass-border)] mt-32 py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Lance — Web Developer</p>
        <div className="flex items-center gap-5">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
          <Link to="/" className="hover:text-foreground transition-colors">Top ↑</Link>
        </div>
      </div>
    </footer>
  );
}
