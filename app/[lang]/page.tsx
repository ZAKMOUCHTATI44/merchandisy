import About from "@/components/Home/About";
import GetStartedNow from "@/components/Home/GetStartedNow";
import Hero from "@/components/Home/Hero";
import Testimonials from "@/components/Home/Testimonials";
import WhatCanWeDoForYou from "@/components/Home/WhatCanWeDoForYou";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionaries";
import React from "react";

const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { homepage } = await getDictionary(lang);

  return (
    <div>
      <Hero content={homepage.hero} />
      <WhatCanWeDoForYou title={homepage.WhatCanWeDoForYou.title} />
      <Testimonials />
      <GetStartedNow />
      <About content={homepage.aboutUs} />
    </div>
  );
};

export default page;
