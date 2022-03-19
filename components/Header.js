import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import Dropdown from "./Dropdown";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <div className="fixed z-10 w-full">
      <div className={scroll ? "bg-black duration-300" : "duration-300"}>
        <div className="container flex justify-between items-center px-2 text-slate-100">
          <div className="pt-2 w-[66px] lg:w-[132px]">
            <Image src="/images/logo.png" alt="logo" width={132} height={123} />
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

          <div className="hidden lg:flex items-center text-[15px] font-semibold gap-4 uppercase">
            <Link passHref href="#about">
              <p className="header-link">About us</p>
            </Link>
            <Link passHref href="/newsfeed">
              <p className="header-link">News feed</p>
            </Link>
            <Link passHref href="/#how-it-works">
              <p className="header-link">How it works</p>
            </Link>
            <Link passHref href="/auth">
              <p className="header-link">Sign in</p>
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setShowMenu(true)}
              onMouseLeave={() => setShowMenu(false)}
            >
              <div className="header-link  hover:border-transparent">
                <p className="">Sign up</p>
              </div>

              {showMenu ? (
                <div className="absolute transition-all duration-300 top-4">
                  <div className="h-8 "></div>
                  <div className="text-[13px] bg-custom-red flex flex-col  ">
                    <Link passHref href="/auth/affiliate">
                      <a className="hover:bg-red-400 duration-300 py-3 px-7">
                        Affiliate
                      </a>
                    </Link>
                    <Link passHref href="/auth/advertiser">
                      <a className="hover:bg-red-400 duration-300 py-3 px-7">
                        Advertiser
                      </a>
                    </Link>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      {toggle ? <Dropdown toggle={toggle} setToggle={setToggle} /> : null}
    </div>
  );
}

export default Header;
