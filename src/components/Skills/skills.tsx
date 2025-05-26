import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiMongodb, SiPostgresql, SiDirectus } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { AnimatedGroup } from '@/components/ui/animated-group'

const skills = [
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-300" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-300" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-300" /> },
  { name: "Supabase", icon: <RiSupabaseFill className="text-green-800" /> },
  { name: "Directus", icon: <SiDirectus className="text-purple-900" /> }
];

const Skills = () => {
  return (
    <div className="relative min-h-screen w-full bg-neutral-950 text-slate-200 overflow-hidden px-6 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Skills</h2>

        <AnimatedGroup
          className="grid grid-cols-2 gap-4 p-8 md:grid-cols-3 lg:grid-cols-4"
        triggerOnce={false}
        threshold={0.2}
        variants={{
          container: {
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
              },
            },
          },
          item: {
            hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 1.2,
                type: "spring",
                bounce: 0.3,
              },
            },
          },
        }}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              data-animated-item
              className="flex flex-col items-center justify-center bg-neutral-900 p-6 rounded-2xl"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-lg font-medium">{skill.name}</p>
            </div>
          ))}
        </AnimatedGroup>
      </div>
    </div>
  );
};

export default Skills;
