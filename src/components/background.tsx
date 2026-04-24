import { motion } from "framer-motion";
import Particles from "@/components/Particles";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      
      {/* Layer 1: Particles */}
      <motion.div className="absolute inset-0">
        <Particles
          particleCount={300}
          particleSpread={10}
          speed={0.1}
          particleColors={["#ffffff", "#3b82f6"]}
          moveParticlesOnHover={true}
          particleHoverFactor={2}
          alphaParticles={true}
          particleBaseSize={100}
          sizeRandomness={1}
          cameraDistance={25}
          disableRotation={false}
        />
      </motion.div>

      {/* Layer 2: Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Layer 3: Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />
    </div>
  );
};

export default Background;