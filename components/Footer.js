import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="mt-5 text-center">
      <div className=" grid grid-cols-1 lg:grid-cols-3 place-items-center">
        <div className="">
          <Image
            src="/images/logoFooter.png"
            alt="logo"
            width={170}
            height={114}
          />
          <p className="mt-3 text-sm">4137 forley st elhmust 11373 new York</p>
        </div>

        <div className="mt-5">
          <h3 className="text-xl">Necessary links</h3>
          <div className="mt-5 flex flex-col gap-4 font-semibold tracking-wider text-[14px] uppercase">
            <Link href="/newsfeed">Offer of the week</Link>
            <Link href="/affiliates-tips">Affiliate tips</Link>
            <Link href="#">Topclientoffer news</Link>
          </div>
        </div>

        <div className="mt-7 flex flex-col">
          <div className="text-[13px] lg:text-[15px] uppercase">
            <p className="">Privacy policy</p>
            <p className="mt-5">Terms of use</p>
          </div>

          <div className="mt-8 flex gap-8 text-3xl">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-custom-red mx-4">
        <p className="pt-8 pb-4 text-xs lg:text-[15px] text-center">
          Copyright ©2021 TopClientOffer | All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
