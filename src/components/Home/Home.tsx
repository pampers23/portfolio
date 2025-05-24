import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Spotlight } from "@/components/ui/spotlight-new";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { Button } from "@/components/ui/button"
import { Github, Download  } from 'lucide-react';
import NavbarMenu from "../Navbar/Navbar";

export function Home() {
  return (
    <div className="relative min-h-screen w-full bg-neutral-950 text-slate-200 overflow-hidden">
      <Spotlight gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 65%, .18) 0, hsla(210, 100%, 55%, .08) 50%, hsla(210, 100%, 45%, 0) 80%)" gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 65%, .12) 0, hsla(210, 100%, 55%, .06) 80%, transparent 100%)" gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 65%, .08) 0, hsla(210, 100%, 45%, .04) 80%, transparent 100%)" />
      <NavbarMenu />
      <div className="relative z-10 flex w-full max-w-5xl items-center justify-between px-8 py-20 mx-auto" style={{ minHeight: 'calc(100vh - 80px)' }}>
        <div className="flex-1 flex flex-col items-start justify-center">
          <h1 className="text-5xl font-extrabold text-slate-100">I'm 
            <ContainerTextFlip words={["Lance", "Web Developer"]}/>
          </h1>
          <div className="mt-5">
            <p className="mt-4 text-lg font-medium text-slate-300">A <span className="text-blue-400">Web Developer</span> based in the Philippines</p>
            <p className="mt-2 text-lg font-light text-slate-300">Passionate of creating modern and responsive web applications.</p>
          </div>
          <div className="mt-4">
            <Button className="group/github-btn relative overflow-hidden w-40 h-10 cursor-pointer">
              <span className="group-hover/github-btn:translate-x-40 transition duration-500">
                Github
              </span>
              <div className="-translate-x-40 group-hover/github-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 z-20">
                <Github className="h-4 w-4" />
              </div>
            </Button>
            <Button className="group/github-btn relative overflow-hidden w-40 h-10 cursor-pointer ml-4">
              <span className="group-hover/github-btn:translate-x-40 transition duration-500">
                Resume
              </span>
              <div className="-translate-x-40 group-hover/github-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 z-20">
                <Download className="h-4 w-4" />
              </div>
            </Button>
        </div>
        </div>
        <div className="flex-1 flex items-center justify-end">
        <Avatar className="w-70 h-70">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>LM</AvatarFallback>
        </Avatar>
        </div>
      </div>
    </div>
  );
}
