import { ExternalLink } from "../../common/ExternalLink";
import {
  BUSINESS_FACEBOOK,
  BUSINESS_INSTAGRAM,
  BUSINESS_MAP_LOCATION,
} from "../../constants";
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
          src={BUSINESS_MAP_LOCATION}
          width="100%"
          height="100%"
          loading="lazy"
        />
      </li>
    </ul>
  );
}
