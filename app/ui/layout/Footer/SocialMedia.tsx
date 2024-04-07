import { ExternalLink } from "../../features/ExternalLink";
import { BUSINESS_FACEBOOK, BUSINESS_INSTAGRAM } from "../../constants";
import { AiFillFacebook, ImInstagram } from "../../icons";

export function SocialMedia() {
  return (
    <ul className="text-white text-sm w-full mt-4 md:mt-0 space-y-3 [&_li_a]:hover:text-white">
      <li className="w-full border-t border-primary-600 flex items-start mt-6 md:mt-0">
        <div className="heading-h3 bg-primary-600 p-2 py-1 rounded-bl-md rounded-br-md">
          <h3 className="text-xs font-semibold">Social Media</h3>
        </div>
      </li>
      <li>
        <ExternalLink
          href={BUSINESS_FACEBOOK}
          className="flex flex-col items-start justify-center"
        >
          <span className="flex items-baseline justify-start">
            <AiFillFacebook />
            <strong className="text-xs text-inherit flex items-baseline justify-start underline ml-2 mt-4">
              Facebook
            </strong>
          </span>
        </ExternalLink>
      </li>
      <li>
        <ExternalLink
          href={BUSINESS_INSTAGRAM}
          className="flex flex-col items-start justify-center"
        >
          <span className="flex items-baseline justify-start">
            <ImInstagram />
            <strong className="text-xs text-inherit flex items-baseline justify-start underline ml-2 mt-4">
              Instagram
            </strong>
          </span>
        </ExternalLink>
      </li>
      <li className="w-full border-t border-primary-600 flex items-start mt-6">
        <div className="heading-h3 bg-primary-600 p-2 py-1 rounded-bl-md rounded-br-md">
          <h3 className="text-xs font-semibold">Find Us in Google Map</h3>
        </div>
      </li>
      <li className="h-52 w-full lg:w-3/4 rounded-md overflow-hidden mt-4 ">
        <iframe
          src={
            "https://www.google.com/maps/place/Hotel+Quinto+Nivel+RD/@19.3805972,-70.4256792,17z/data=!3m1!4b1!4m9!3m8!1s0x8eae296e50e06303:0x4141e3bda5d73fec!5m2!4m1!1i2!8m2!3d19.3805922!4d-70.4231043!16s%2Fg%2F11h18w_m9k?entry=ttu"
          }
          width="100%"
          height="100%"
          loading="lazy"
        />
      </li>
    </ul>
  );
}
