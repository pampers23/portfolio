import { Navbar } from "../ui/resizable-navbar";
import { Spotlight } from "@/components/ui/spotlight-new";

export function Home() {
  return (
    <div className="relative min-h-screen w-full bg-neutral-950 text-slate-200 overflow-hidden">
      <Spotlight gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 65%, .18) 0, hsla(210, 100%, 55%, .08) 50%, hsla(210, 100%, 45%, 0) 80%)" gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 65%, .12) 0, hsla(210, 100%, 55%, .06) 80%, transparent 100%)" gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 65%, .08) 0, hsla(210, 100%, 45%, .04) 80%, transparent 100%)" />
      <Navbar>
        <div className="flex items-center justify-between w-full px-8 py-4">
          <span className="text-xl font-bold">Lance</span>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </Navbar>
      <div className="relative z-10 flex w-full max-w-5xl items-center justify-between px-8 py-20 mx-auto" style={{ minHeight: 'calc(100vh - 80px)' }}>
        <div className="flex-1 flex flex-col items-start justify-center">
          <h1 className="text-5xl font-extrabold text-slate-100">I'm Lance</h1>
        </div>
        <div className="flex-1 flex items-center justify-end">
          <img
            src="https://via.placeholder.com/300x300.png?text=Your+Photo"
            alt="Lance"
            className="rounded-full w-64 h-64 object-cover shadow-lg border-4 border-neutral-800"
          />
        </div>
      </div>
    </div>
  );
}
