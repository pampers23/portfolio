import { PointerHighlight } from "../ui/pointer-highlight";


const About = () => {
  return (
    <div className="relative min-h-screen w-full bg-neutral-950 text-slate-200 overflow-hidden px-6 py-12">
      <h1 className="text-6xl text-center font-bold mb-8">About Me</h1>
      <div className="max-w-3xl mx-auto text-lg leading-relaxed text-center">
        <p className="mb-4">
          I am a graduate of AMA Computer College Cabanatuan with a Bachelor's Degree in Information Technology. 
          Currently, I serve as a <PointerHighlight><span>System Associate Developer at VizServe Private Limited</span></PointerHighlight>, 
          where I specialize in building modern, responsive web applications.
        </p>
        <p className="mb-4">
          Passionate about continuous learning, I stay abreast of the latest industry trends and best practices to deliver 
          high-quality, scalable solutions. My commitment to clean code and user-centric design drives me to create applications 
          that not only function seamlessly but also provide exceptional user experiences.
        </p>
      </div>
    </div>
  );
};

export default About;
