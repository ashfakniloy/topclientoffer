import { useState } from "react";
import Image from "next/image";
import { Waypoint } from "react-waypoint";
import { motion } from "framer-motion";

function HowItWorks() {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  const onVWEnter = () => {
    setViewPortEntered(true);
  };

  const variantsLeft = {
    hidden: {
      x: -800,
      opacity: 0.1,
    },
    visible: {
      x: "0px",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const variantsRight = {
    hidden: {
      x: 800,
      opacity: 0.1,
    },
    visible: {
      x: "0px",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <Waypoint onEnter={onVWEnter}>
      <div id="how-it-works" className="pt-48 px-2">
        <h1 className="text-custom-red text-[47px] lg:text-[95px] font-bold">
          How It Works
        </h1>

        <p className="mt-4 lg:mt-0 text-[13px] lg:text-[30px]">
          Take advantage of all favorite dating offers in one link
        </p>

        {viewPortEntered && (
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16">
            <motion.div
              className=""
              initial="hidden"
              animate="visible"
              variants={variantsLeft}
              transition={{
                type: "tween",
              }}
            >
              <p className="mt-16">
                We are using affigate for tracking solution.Affigate is highly
                and advanced tracking in this market now.They have highly fraud
                detection system in their tracking.we can get report for each
                conversation immediately.So that we can know the conversation
                fraud or not.They are using fraud marks by detect fraud
              </p>

              <div className="mt-5 leading-tight text-custom-red">
                <p>Fraud analytics:</p>
                <p>40+ is low risk score</p>
                <p>75+ is suspicious</p>
                <p>85+ is really high risk</p>
                <p>100+ is 100% fraud</p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={variantsRight}
              transition={{
                type: "tween",
              }}
              className="mt-6 flex w-full h-[120px] lg:w-[510px] lg:h-[254px]"
            >
              <Image
                src="/images/stats.png"
                alt="stats"
                width={510}
                height={254}
              />
            </motion.div>
          </div>
        )}
      </div>
    </Waypoint>
  );
}

export default HowItWorks;
