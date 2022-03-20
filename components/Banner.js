import Link from "next/link";
import Typewriter from "typewriter-effect";

function Banner() {
  return (
    <div className="">
      <div className="bg-[url('/images/banner2.png')] z-10 pt-[200px] lg:pt-[300px] ">
        <div className="container flex flex-col items-center lg:items-start gap-3">
          <h1 className="text-[42px] lg:text-[87px] font-bold">
            TopClientOffer
          </h1>
          <div className="lg:text-[43px]">
            <Typewriter
              options={{
                strings: [
                  "High Traffic Monetization CPA network",
                  "Daily Payment on exclusive offers",
                  "Best CPA network in the market",
                ],
                delay: 12.5,
                deleteSpeed: 12.5,
                autoStart: true,
                loop: true,
                cursor: "",
              }}
            />
          </div>
          <div className="mt-4 flex gap-5 items-center">
            <Link href="/auth/affiliate" passHref>
              <button className="btn bg-custom-red border-custom-red rounded">
                Affiliate
              </button>
            </Link>
            <Link href="/auth/advertiser" passHref>
              <button className="btn bg-transparent rounded">Advertiser</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
