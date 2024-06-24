import { ShareDataPropTypes } from "@/types/types";
import {
  BUSINESS_ADDRESS,
  BUSINESS_DEVELOPER_EMAIL,
  BUSINESS_EMAIL,
  BUSINESS_EMAIL_FROM_VISITOR,
  BUSINESS_MAP_LOCATION,
  BUSINESS_WEB_DOMAIN,
  BUSINESS_WHATSAPP_DIRECT_CHAT,
} from "../../constants";
import { ExternalLink } from "../../features/ExternalLink";
import { ShareBtn } from "../../features/ShareBtn";
import {
  AiFillPhone,
  FaInternetExplorer,
  FaMapMarkerAlt,
  MdEmail,
} from "../../icons";

export const Contact = ({ data }: ShareDataPropTypes) => {
  return (
    <ul className="w-full space-y-3 text-sm text-white [&_li_a]:hover:text-white">
      <li className="flex w-full items-start border-t border-primary-600">
        <div className="heading-h3 rounded-bl-md rounded-br-md bg-primary-600 p-2 py-1">
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
              <strong className="underlined ml-2 mt-4 flex items-center justify-start text-xs text-inherit">
                Phone Number
              </strong>
            </span>
            <span className="mr-2 text-[0.7rem] underline">+1809-753-7500</span>
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
              <strong className="underlined ml-2 mt-4 flex items-center justify-start text-xs text-inherit">
                E-Mail
              </strong>
            </span>
            <span className="mr-2 text-[0.7rem] underline">
              {BUSINESS_EMAIL}
            </span>
          </>
        </ExternalLink>
      </li>
      <li className="my-2 flex items-center justify-between md:justify-start md:space-x-10">
        <ExternalLink
          href={BUSINESS_WEB_DOMAIN}
          className="flex flex-col items-start justify-center"
        >
          <span className="flex items-baseline justify-start">
            <FaInternetExplorer />
            <strong className="underlined ml-2 mt-4 flex items-center justify-start text-xs text-inherit">
              Website
            </strong>
          </span>
          <span className="flex w-full items-baseline justify-between">
            <span className="mr-2 text-[0.7rem] underline">
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
              <strong className="underlined ml-2 mt-4 flex items-center justify-start text-xs text-inherit">
                Address
              </strong>
            </span>
            <span className="mr-2 text-left text-[0.7rem] underline">
              {BUSINESS_ADDRESS}
            </span>
          </>
        </ExternalLink>
      </li>
      <li className="mt-6 flex w-full items-start border-t border-primary-600">
        <div className="heading-h3 rounded-bl-md rounded-br-md bg-primary-600 p-2 py-1">
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
              <strong className="underlined ml-2 mt-4 flex items-center justify-start text-xs text-inherit">
                E-Mail
              </strong>
            </span>
            <span className="mr-2 text-[0.7rem] underline">
              {BUSINESS_DEVELOPER_EMAIL}
            </span>
          </>
        </ExternalLink>
      </li>
    </ul>
  );
};
