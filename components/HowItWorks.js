import Image from "next/image";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { leftSection, rightSection } from "../styles/Animation";

function HowItWorks() {
  const [element, controls] = useScroll();

  return (
    <div id="how-it-works" className="pt-48 px-2" ref={element}>
      <h1 className="text-custom-red text-[47px] lg:text-[95px] font-bold">
        How It Works
      </h1>

      <p className="mt-4 lg:mt-0 text-[13px] lg:text-[30px]">
        Take advantage of all favorite dating offers in one link
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16">
        <motion.div variants={leftSection} initial="initial" animate={controls}>
          <p className="mt-16">
            We are using affigate for tracking solution.Affigate is highly and
            advanced tracking in this market now.They have highly fraud
            detection system in their tracking.we can get report for each
            conversation immediately.So that we can know the conversation fraud
            or not.They are using fraud marks by detect fraud
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
          variants={rightSection}
          initial="initial"
          animate={controls}
          className="mt-10 mx-5"
        >
          <Image src="/images/stats.png" alt="stats" width={512} height={227} />
        </motion.div>
      </div>
    </div>
  );
}

export default HowItWorks;
