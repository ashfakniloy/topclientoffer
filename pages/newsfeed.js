import Image from "next/image";
import Header2 from "../components/header2";
import Layout from "../components/Layout";

const offerList = [
  {
    id: 1,
    name: "Best Smartlinks Offers- Exclusive Payout on TopClientOffer Smartlinks",
    img: "/images/newsfeed/news1.jpg",
  },
  {
    id: 2,
    name: " IDIQ OFFER",
    img: "/images/newsfeed/news2.jpg",
  },
  {
    id: 3,
    name: "Earn More with Profitable DEU Offers",
    img: "/images/newsfeed/news3.jpg",
  },
];

function newsfeed() {
  return (
    <Layout>
      <div className="text-white">
        <div className="container mt-8 mb-14 px-4 grid grid-cols-1 lg:grid-cols-2 gap-7 ">
          {offerList.map((offer) => (
            <div
              key={offer.id}
              className="flex flex-col items-start gap-4  w-[320px] lg:w-[547px] cursor-pointer"
            >
              <Image
                src={offer.img}
                alt={offer.name}
                width={600}
                height={400}
              />
              <h1 className="text-[30px] lg:text-[40px] text-[#0170b9] hover:text-black duration-300 font-semibold leading-none">
                {offer.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default newsfeed;
