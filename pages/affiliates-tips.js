import Image from "next/image";
import Layout from "../components/Layout";

const affiliateList = [
  {
    id: 1,
    name: "Best CPA Network in 2022 For Highest Payout | Topclientoffer",
    img: "/images/affiliates/affiliate1.jpg",
  },
  {
    id: 2,
    name: "Best Smartlink CPA Network in 2022",
    img: "/images/affiliates/affiliate2.jpg",
  },
  {
    id: 3,
    name: "What is sweepstakes Offer?",
    img: "/images/affiliates/affiliate3.jpg",
  },
  {
    id: 4,
    name: "What is SmartLink?",
    img: "/images/affiliates/affiliate4.jpg",
  },
];

function AffiliatesTipsPage() {
  return (
    <Layout>
      <div className="text-white">
        <div className="container mt-8 mb-14 px-4 grid grid-cols-1 lg:grid-cols-2 gap-7 ">
          {affiliateList.map((affiliate) => (
            <div
              key={affiliate.id}
              className="flex flex-col items-start gap-4 w-[320px] lg:w-[547px] cursor-pointer"
            >
              <Image
                src={affiliate.img}
                alt={affiliate.name}
                width={600}
                height={400}
              />
              <h1 className="text-[30px] lg:text-[40px] text-[#0170b9] hover:text-black duration-300 font-semibold leading-none">
                {affiliate.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default AffiliatesTipsPage;
