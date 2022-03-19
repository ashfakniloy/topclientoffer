import Link from "next/link";

function Join() {
  return (
    <div className="px-2 pt-8 ">
      <h1 className="text-custom-red text-center text-[43px] lg:text-[63px] font-bold uppercase">
        Join us!
      </h1>

      <div className="mt-10 mx-6 grid grid-cols-1 lg:grid-cols-2 gap-14 place-items-center ">
        <div className="flex flex-col gap-6 py-3 px-5 items-center bg-gradient-to-tr from-black via-custom-red  to-black">
          <h1 className="text-3xl uppercase">Advertiser</h1>
          <p className="text-[17px]">
            A performance based network of top affiliates which understands your
            product and deliver it to perfect target audience.
          </p>
          <Link passHref href="/auth/advertiser">
            <button className="mt-5 btn text-[15px] hover:scale-110 duration-300 rounded-lg uppercase">
              Sign up!
            </button>
          </Link>
        </div>

        <div className="flex flex-col gap-6 py-3 px-5 items-center bg-gradient-to-tr from-black via-custom-red to-black">
          <h1 className="text-3xl uppercase">Affiliate</h1>
          <p className="text-[17px]">
            Join Us to get exclusive direct offers & make most out of your
            traffics.Most converting and highest payout offer in the
            market.So,Join us today
          </p>
          <Link passHref href="/auth/affiliate">
            <button className="mt-5 btn text-[15px] hover:scale-110 duration-300 rounded-lg uppercase">
              Join now!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Join;
