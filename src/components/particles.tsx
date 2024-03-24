//
// ParSearch particles background
//

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.


export const Parts = () => {
 
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadBasic(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });

  const particlesLoaded = async (container?: Container): Promise<void> => {
    // console.log(container);
  };
  
  const options = {
      background: {
        color: {
          value: "#222A35",
        },
      },
      fpsLimit: 200,
      particles: {
        color: {
          value: "#8989e1"
        },
        links: {
          enable: true,
          color: "#d9d9d9",
          distance: 200,
          opacity: 0.8,
          width: 1,
        },
        move: {
          enable: true
        },
        number: {
            value: 70,
            density: {
                enable: true,
                value_area: 400
            }
        },
        size: {
          value: { min: 6, max: 6 },
        },
        opacity: {
          value: 0.5,
        },
      }
    }

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};