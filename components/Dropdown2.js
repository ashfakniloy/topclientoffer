import Link from "next/link";

function Dropdown2({ toggle, setToggle }) {
  const handleClose = () => {
    setToggle(!toggle);
  };

  return (
    <div
      className={`bg-gradient-to-r from-[#ff0004] to-black text-white z-20 font-Roboto font-[13px] font-medium absolute w-full lg:hidden text-sm uppercase transition-all duration-300 cursor-pointer ${
        toggle ? "block" : "hidden"
      }`}
    >
      <div className="px-5 py-4 flex flex-col gap-5" onClick={handleClose}>
        <Link passHref href="/newsfeed">
          <p>Offers of the week</p>
        </Link>
        <Link passHref href="/affiliates-tips">
          <p>Affiliates tips</p>
        </Link>
        <Link passHref href="#">
          <p>Topclientoffer news</p>
        </Link>
      </div>
    </div>
  );
}

export default Dropdown2;
