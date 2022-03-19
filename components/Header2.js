import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Dropdown2 from "./Dropdown2";

function Header2() {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className="bg-gradient-to-r from-[#ff0004] to-black text-white">
        <div className="container flex justify-between items-center px-4 py-2">
          <div className="">
            <Link passHref href="/">
              <div className="w-[80px] lg:w-[170px]">
                <Image
                  src="/images/logoFooter.png"
                  alt="logo"
                  width={170}
                  height={110}
                />
              </div>
            </Link>
          </div>

          <button
            className="lg:hidden text-xl pr-2"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              <div className="transition-all duration-300">
                <FaTimes />
              </div>
            ) : (
              <FaBars />
            )}
          </button>

          <div className="hidden lg:flex justify-between items-center gap-8 font-semibold uppercase cursor-pointer">
            <Link href="/newsfeed">Offer of the week</Link>
            <Link href="/affiliates-tips">Affiliate tips</Link>
            <Link href="">Topclientoffer news</Link>
          </div>
        </div>
        <Dropdown2 toggle={toggle} setToggle={setToggle} />
      </div>
    </div>
  );
}

export default Header2;
