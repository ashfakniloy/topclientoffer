import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import { offerList } from "../data/offerList";

function NewsFeedPage() {
  return (
    <Layout title="News feed">
      <div className="text-white">
        <div className="container mt-8 mb-14 px-4 grid grid-cols-1 lg:grid-cols-2 gap-7 ">
          {offerList.map((news) => (
            <div key={news.id}>
              <Link href={`/offer-of-the-week/${news.slug}`} passHref>
                <div className="flex flex-col items-start gap-4  w-full lg:w-[547px] cursor-pointer">
                  <Image
                    src={news.img}
                    alt={news.name}
                    width={600}
                    height={400}
                  />

                  <a
                    // target="_blank"
                    className="text-[30px] lg:text-[40px] text-[#0170b9] hover:text-black duration-300 font-semibold leading-none"
                  >
                    {news.name}
                  </a>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default NewsFeedPage;
