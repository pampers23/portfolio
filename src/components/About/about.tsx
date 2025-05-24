import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { InView } from "@/components/ui/in-view";

const About = () => {
  return (
    <div className="relative min-h-screen w-full bg-neutral-950 text-slate-200 overflow-hidden px-6 py-12">
      <h1 className="text-6xl text-center font-bold mb-8">About Me</h1>
      <div className="max-w-3xl mx-auto text-lg leading-relaxed text-justify">
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
          viewOptions={{ margin: '0px 0px -200px 0px' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <p className="mb-4">
          I am a graduate of AMA Computer College Cabanatuan with a Bachelor's Degree in Information Technology. I serve as{' '}
          <PointerHighlight
            rectangleClassName="bg-blue-400 dark:bg-blue-900 border-blue-300 dark:border-blue-700 leading-loose"
            pointerClassName="text-blue-500 h-3 w-3"
            containerClassName="inline-block mx-1"
          >
            <span className="relative z-10">System Associate Developer at Vizserve Private Limited</span>
          </PointerHighlight>{' '}
          from January 13, 2025 to May 30, 2025, where I specialize in building modern, responsive web applications.
        </p>

        <p className="mb-4">
          Passionate about continuous learning, I stay abreast of the latest industry trends and best practices to deliver 
          high-quality, scalable solutions. My commitment to clean code and user-centric design drives me to create applications 
          that not only function seamlessly but also provide exceptional user experiences.
        </p>

        <p className="mb-4">
          In my free time, I enjoy playing instrumental music, playing video games, and exploring new technologies.
        </p>

        </InView>
      </div>
    </div>
  );
};

export default About;