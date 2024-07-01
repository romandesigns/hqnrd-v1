"use client";
import { useEffect, useState } from "react";
// Import only used Swiper styles to reduce bundle size
import { SubHeader } from "@/app/ui/features";
import { Locale } from "@/i18n-config";
import homeBillboards from "@/public/assets/data/homeBillboard.json";
import type { Swiper as SwiperType } from "swiper";

import {
  BackgroundSwiper,
  CardSwiper,
  GoogleRating,
  HeaderButtonsGroup,
  TextHeadingSwiper,
} from ".";
import { UserProfileTypes } from "@/types/types";

export const HeaderContent = ({
  lang,
  user,
}: {
  lang: Locale;
  user: UserProfileTypes;
}) => {
  const [userProfile, setUserProfile] = useState<UserProfileTypes>(user);
  const [controlledSwiper, setControlledSwiper] = useState<SwiperType | null>(
    null,
  );
  const [textControlledSwipper, setTextControlledSwipper] =
    useState<SwiperType | null>(null);

  useEffect(() => {
    setUserProfile(user);
  }, [user]);

  return (
    <section className="w-full md:flex md:flex-col md:items-start md:justify-center">
      <SubHeader lang={lang} />
      <div className="relative grid h-full w-full grid-cols-1 grid-rows-1 overflow-hidden rounded-md md:p-4">
        <div className="align-center z-[3] mx-auto grid h-full w-full grid-cols-1 grid-rows-[auto_auto_2rem_auto] overflow-hidden rounded-md md:h-auto md:max-w-6xl md:grid-cols-2 md:grid-rows-1">
          {/* Description*/}
          <div className="flex-[0.14] bg-gradient-to-b from-black/50 md:self-center md:bg-none">
            <GoogleRating className="hidden md:mb-4 md:inline-block" />
            <TextHeadingSwiper
              className="relative !z-[3]"
              homeBillboards={homeBillboards.billboard}
              setTextControlledSwipper={setTextControlledSwipper}
            />
            <HeaderButtonsGroup
              userProfile={userProfile}
              className="relative z-[3] hidden pr-32 md:flex md:p-0 md:py-4"
              lang={lang}
            />
          </div>

          {/* Card Swipper*/}
          <CardSwiper
            controlledSwiper={controlledSwiper}
            textControlledSwipper={textControlledSwipper}
            homeBillboards={homeBillboards.billboard}
            className="flex-1"
          />

          {/* Rating mobile  */}
          <GoogleRating className="flex-[0.11] md:hidden" />

          {/* Buttons Group mobile*/}
          <HeaderButtonsGroup
            userProfile={userProfile}
            className="relative z-[3] md:hidden"
            lang={lang}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 top-0 z-[2] h-full w-full bg-black/15 backdrop-blur-md backdrop-filter" />
        <BackgroundSwiper
          homeBillboards={homeBillboards.billboard}
          setControlledSwiper={setControlledSwiper}
        />
      </div>
    </section>
  );
};
