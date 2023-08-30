import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="mt-5 text-center">
      <div className=" grid grid-cols-1 lg:grid-cols-3 place-items-center">
        <div>
          <Image
            src="/images/logoFooter.png"
            alt="logo"
            width={170}
            height={114}
          />
          <p className="mt-3 text-sm">4137 Forley st elhmust 11373 New York</p>
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
            <p>Privacy policy</p>
            <p className="mt-5">Terms of use</p>
          </div>

          <div className="mt-8 flex gap-8 text-3xl">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
      </div>

      <div className="mt-8 border-t pt-8 pb-4 text-xs lg:text-[15px] border-custom-red mx-4 flex flex-col lg:flex-row gap-2 lg:gap-0 justify-between items-center">
        <p>Copyright ©2022 TopClientOffer | All Rights Reserved.</p>

        <p>
          <span className="font-semibold mr-2">Developed by:</span>
          <a
            href="https://niloy.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="text-blue-300 hover:text-blue-500 underline transition-colors duration-200"
          >
            Ashfak Ahmed Niloy
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
