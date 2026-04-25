import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AvatarImg from "@/assets/profileImg.png";
import ProfileCard from "../ProfileCard";
import AboutContent from "./content";
import SkillsContent from "@/components/Skills/skills";

const About = () => {
  const profileRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(profileRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[minmax(0,420px)_1fr] gap-8 lg:gap-20 px-6 lg:px-12 py-24">
      {/* Sticky Profile Sidebar */}
      <motion.div
        ref={profileRef}
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="hidden lg:block sticky top-28 self-start pt-8 max-h-screen overflow-y-auto z-10"
      >
        <ProfileCard
          name="Lance Brixter Mendoza"
          title="Web Developer"
          handle="javicodes"
          status="Online"
          contactText="Contact Me"
          avatarUrl={AvatarImg}
          showUserInfo={false}
          enableTilt={true}
          enableMobileTilt
          onContactClick={() => console.log('Contact clicked')}
          behindGlowColor="rgba(125, 190, 255, 0.67)"
          behindGlowEnabled
          innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
        />
      </motion.div>

      {/* Mobile Profile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="lg:hidden mb-16 max-w-md mx-auto"
      >
        <ProfileCard
          name="Lance Brixter Mendoza"
          title="Web Developer"
          handle="javicodes"
          status="Online"
          contactText="Contact Me"
          avatarUrl={AvatarImg}
          showUserInfo={false}
          enableTilt={true}
          enableMobileTilt
          onContactClick={() => console.log('Contact clicked')}
          behindGlowColor="rgba(125, 190, 255, 0.67)"
          behindGlowEnabled
          innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
        />
      </motion.div>

      {/* Main Scrollable Content */}
      <main className="space-y-32 lg:space-y-40">
        <section id="about">
          <AboutContent />
        </section>
        
        <section id="skills">
          <SkillsContent />
        </section>
        
        {/* Add more sections */}
      </main>
    </div>
  );
};

export default About;