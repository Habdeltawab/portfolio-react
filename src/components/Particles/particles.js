import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Import the slim package

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  // Run the initialization once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Load the slim package
    }).then(() => {
      setInit(true); // Set the init state to true once the engine is initialized
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container); // Callback when particles are loaded
  };

  // Memoize the particles options
  const particlesOptions = useMemo(
    () => ({
      particles: {
        number: {
          value: 60,
        },
        size: {
          value: 3,
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
      },
    }),
    []
  );

  // Render the Particles component once initialized
  return (
    <>
      {init && (
        <div className="h-particles">
          <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={particlesOptions} />
        </div>
      )}
    </>
  );
};

export default ParticlesComponent;
