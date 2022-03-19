import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Link from "next/link";

function Dropdown({ toggle, setToggle }) {
  const [showMenu, setShowMenu] = useState(false);

  const handleClose = () => {
    setToggle(!toggle);
  };

  return (
    <div
      className={`bg-custom-red text-white font-Roboto font-[13px] font-medium absolute w-full lg:hidden text-sm uppercase transition-all duration-300 cursor-pointer ${
        toggle ? "block" : "hidden"
      }`}
    >
      <div onClick={handleClose}>
        <Link passHref href="#about">
          <p className="dropdown_link">About us</p>
        </Link>
        <Link passHref href="/newsfeed">
          <p className="dropdown_link">News feed</p>
        </Link>
        <Link passHref href="#how-it-works">
          <p className="dropdown_link">How it works</p>
        </Link>
        <Link passHref href="/auth">
          <p className="dropdown_link">Sign in</p>
        </Link>
      </div>
      <div
        className="flex items-center justify-between dropdown_link"
        onClick={() => setShowMenu(!showMenu)}
      >
        <p className="">Sign up</p>
        <div className="text-lg">
          {showMenu ? <FaAngleUp /> : <FaAngleDown />}
        </div>
      </div>
      {showMenu ? (
        <div className="">
          <Link passHref href="/auth/affiliate">
            <p className="px-10 py-3 hover:bg-red-400 transition-all duration-500">
              Affiliate
            </p>
          </Link>
          <Link passHref href="/auth/advertiser">
            <p className="px-10 py-3 hover:bg-red-400 transition-all duration-500">
              Advertiser
            </p>
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Dropdown;
