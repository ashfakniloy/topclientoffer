import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import { affiliateList } from "../../data/affiliateList";

function AffiliatesTipsPage() {
  return (
    <Layout title="Affiliate tips">
      <div className="text-white">
        <div className="container mt-8 mb-14 px-4 grid grid-cols-1 lg:grid-cols-2 gap-7">
          {affiliateList.map((affiliate) => (
            <div key={affiliate.id}>
              <Link href={`/affiliates-tips/${affiliate.slug}`} passHref>
                <div className="flex flex-col items-start gap-4 w-full lg:w-[547px] cursor-pointer">
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
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default AffiliatesTipsPage;
