import { motion } from "framer-motion";
import { aboutAnimation } from "../styles/Animate";
import { useScroll } from "./useScroll";

function About() {
  const [element, controls] = useScroll();

  return (
    <div id="about" className="" ref={element}>
      <div className="px-2 pt-[260px] pb-4 ">
        <motion.h1
          className="w-full text-custom-red text-center  text-[43px] lg:text-[80px] font-bold"
          initial="initial"
          animate={controls}
          variants={aboutAnimation}
        >
          About us
        </motion.h1>
        <p className="text-[18px] lg:text-[25px] mt-3 leading-loose text-justify">
          Welcome to the world of TopClientOffer. We are one of the leading CPA
          affiliate networks in the world. Our affiliate managers are well
          experienced and have wide knowledge on business as well as affiliate
          marketers. Through our various channels, we will help your business
          grow and connect you with the highest quality of traffic delivered.
          Topclientoffer is always ready to share with you our last exclusive
          offers. In fact, we are here for your business needs. We ensure your
          constant profit growth with us and help you to become a supper
          affiliate.We are glad to provide free training for affiliates and
          payouts weekly, bi- weekly or monthly and it depends on offer. We
          always prefer to introduce modern and innovative business ideas to
          fulfill the needs and requirements of our honorable partners. We
          ensure our partners unique service that will express our creativity,
          integrity, sincerity and professional attitude.So, if you are looking
          for an open business we will be an ideal platform for you. Our quality
          work will certainly impress you and we do believe you will enjoy
          working with us. Be a part of our team and let’s grow together.
        </p>
      </div>
    </div>
  );
}

export default About;
