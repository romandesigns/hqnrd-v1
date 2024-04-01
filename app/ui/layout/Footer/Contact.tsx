import { ShareDataPropTypes } from "@/types";
import { ExternalLink } from "../../common/ExternalLink";
import { ShareBtn } from "../../common/ShareBtn";
import {
  BUSINESS_ADDRESS,
  BUSINESS_DEVELOPER_EMAIL,
  BUSINESS_EMAIL,
  BUSINESS_EMAIL_FROM_VISITOR,
  BUSINESS_MAP_LOCATION,
  BUSINESS_WEB_DOMAIN,
  BUSINESS_WHATSAPP_DIRECT_CHAT,
} from "../../constants";
import {
  AiFillPhone,
  FaInternetExplorer,
  FaMapMarkerAlt,
  MdEmail,
} from "../../icons";

export const Contact = ({ data }: ShareDataPropTypes) => {
  return (
    <ul className="text-white text-sm w-full space-y-3 [&_li_a]:hover:text-white">
      <li className="w-full border-t border-primary-600 flex items-start">
        <div className="heading-h3 bg-primary-600 p-2 py-1 rounded-bl-md rounded-br-md">
          <h3 className="text-xs font-semibold">Contact Us</h3>
        </div>
      </li>
      <li>
        <ExternalLink
          href={BUSINESS_WHATSAPP_DIRECT_CHAT}
          className="flex flex-col items-start justify-center"
        >
          <>
            <span className="flex items-baseline justify-start">
              <AiFillPhone />
              <strong className="text-xs text-inherit flex items-center justify-start underlined ml-2 mt-4">
                Phone Number
              </strong>
            </span>
            <span className="mr-2 underline text-[0.7rem]">+1809-753-7500</span>
          </>
        </ExternalLink>
      </li>
      <li>
        <ExternalLink
          href={BUSINESS_EMAIL_FROM_VISITOR}
          className="flex flex-col items-start justify-center"
        >
          <>
            <span className="flex items-baseline justify-start">
              <MdEmail />
              <strong className="text-xs text-inherit flex items-center justify-start underlined ml-2 mt-4">
                E-Mail
              </strong>
            </span>
            <span className="mr-2 underline text-[0.7rem]">
              {BUSINESS_EMAIL}
            </span>
          </>
        </ExternalLink>
      </li>
      <li className="flex items-center justify-between my-2 md:justify-start md:space-x-10">
        <ExternalLink
          href={BUSINESS_WEB_DOMAIN}
          className="flex flex-col items-start justify-center"
        >
          <span className="flex items-baseline justify-start">
            <FaInternetExplorer />
            <strong className="text-xs text-inherit flex items-center justify-start underlined ml-2 mt-4">
              Website
            </strong>
          </span>
          <span className="flex items-baseline justify-between w-full">
            <span className="mr-2 underline text-[0.7rem]">
              {BUSINESS_WEB_DOMAIN}
            </span>
          </span>
        </ExternalLink>
        <ShareBtn data={data} />
      </li>
      <li>
        <ExternalLink
          href={BUSINESS_MAP_LOCATION}
          className="flex flex-col items-start justify-center"
        >
          <>
            <span className="flex items-baseline justify-start">
              <FaMapMarkerAlt />
              <strong className="text-xs text-inherit flex items-center justify-start underlined ml-2 mt-4">
                Address
              </strong>
            </span>
            <span className="mr-2 underline text-[0.7rem] text-left">
              {BUSINESS_ADDRESS}
            </span>
          </>
        </ExternalLink>
      </li>
      <li className="w-full border-t border-primary-600 flex items-start mt-6">
        <div className="heading-h3 bg-primary-600 p-2 py-1 rounded-bl-md rounded-br-md">
          <h3 className="text-xs font-semibold">Technical Support</h3>
        </div>
      </li>
      <li>
        <ExternalLink
          href="mailto:roman@wavystyle.io?cc=trfm1987@gmail.com&subject=HQNRD Support Request"
          className="flex flex-col items-start justify-center"
        >
          <>
            <span className="flex items-baseline justify-start">
              <MdEmail />
              <strong className="text-xs text-inherit flex items-center justify-start underlined ml-2 mt-4">
                E-Mail
              </strong>
            </span>
            <span className="mr-2 underline text-[0.7rem]">
              {BUSINESS_DEVELOPER_EMAIL}
            </span>
          </>
        </ExternalLink>
      </li>
    </ul>
  );
};
