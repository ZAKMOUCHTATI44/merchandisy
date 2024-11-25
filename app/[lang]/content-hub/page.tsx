import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="bg-main-color text-white py-32 text-center">
        <h2 className="text-5xl font-bold">Content HUB</h2>
      </div>
      <div className="my-24 container mx-auto grid lg:grid-cols-8 gap-5">
        <div className="col-span-2 w-full">
          <div className=" bg-[#f4f4f4] p-5 rounded-lg">
            <span className="text-[#9fa2a3]">Filters</span>
            <ul className="flex flex-col gap-5 mt-5">
              <li className="border border-black text-lg font-semibold rounded-lg px-5 py-2 hover:bg-black hover:text-white duration-700 ease-in-out">
                All
              </li>
              <li className="border border-black text-lg font-semibold rounded-lg px-5 py-2 hover:bg-black hover:text-white duration-700 ease-in-out">
                Articles
              </li>
              <li className="border border-black text-lg font-semibold rounded-lg px-5 py-2 hover:bg-black hover:text-white duration-700 ease-in-out">
                News
              </li>
              <li className="border border-black text-lg font-semibold rounded-lg px-5 py-2 hover:bg-black hover:text-white duration-700 ease-in-out">
                Case studies
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-6 flex flex-col gap-5">
          <div className="bg-[#f1f1f1] text-black rounded-lg p-5 border  border-[#f1f1f1] hover:border-black flex gap-5">
            <Image
              src={"/blog/blog-1.png"}
              alt="BLOG"
              width={400}
              height={250}
            />
            <div className="flex flex-col gap-5">
              <div>
                <span className=" border border-black text-lg font-semibold rounded-lg px-5 py-2 hover:bg-black hover:text-white duration-700 ease-in-out">
                  Case studies
                </span>
              </div>
              <h5 className="text-xl font-bold ">
                New custom Christmas gifts collection
              </h5>
              <p>
                Jingle bells! The best season for recognition is at the corner,
                and October is the perfect time to order your custom Christmas
                gifts. We are happy to introduce our new cozy and warm selection
                of winter holiday gifts. Each product is produced or selected
                with care, crafted from high-quality materials and beautifully
                presented. Let’s have […]
              </p>
            </div>
          </div>
          <div className="bg-[#f1f1f1] text-black rounded-lg p-5 border  border-[#f1f1f1] hover:border-black flex gap-5">
            <Image
              src={"/blog/blog-2.png"}
              alt="BLOG"
              width={400}
              height={250}
            />
            <div className="flex flex-col gap-5">
              <div>
                <span className=" border border-black text-lg font-semibold rounded-lg px-5 py-2 hover:bg-black hover:text-white duration-700 ease-in-out">
                  Articles
                </span>
              </div>
              <h5 className="text-xl font-bold ">
                Event swag collection for Alpha Affiliates
              </h5>
              <p>
                Jingle bells! The best season for recognition is at the corner,
                and October is the perfect time to order your custom Christmas
                gifts. We are happy to introduce our new cozy and warm selection
                of winter holiday gifts. Each product is produced or selected
                with care, crafted from high-quality materials and beautifully
                presented. Let’s have […]
              </p>
            </div>
          </div>

          <div className="bg-[#f1f1f1] text-black rounded-lg p-5 border  border-[#f1f1f1] hover:border-black flex gap-5">
            <Image
              src={"/blog/blog-3.png"}
              alt="BLOG"
              width={400}
              height={250}
            />
            <div className="flex flex-col gap-5">
              <div>
                <span className=" border border-black text-lg font-semibold rounded-lg px-5 py-2 hover:bg-black hover:text-white duration-700 ease-in-out">
                News
                </span>
              </div>
              <h5 className="text-xl font-bold ">
              Branded gifts for Wargaming: 6K+ items to 14 countries in 4 months
              </h5>
              <p>
                Jingle bells! The best season for recognition is at the corner,
                and October is the perfect time to order your custom Christmas
                gifts. We are happy to introduce our new cozy and warm selection
                of winter holiday gifts. Each product is produced or selected
                with care, crafted from high-quality materials and beautifully
                presented. Let’s have […]
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
