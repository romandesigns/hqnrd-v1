import { ExternalLink } from "../../features/ExternalLink";
import { BUSINESS_FACEBOOK, BUSINESS_INSTAGRAM } from "../../constants";
import { AiFillFacebook, ImInstagram } from "../../icons";

export function SocialMedia() {
  return (
    <ul className="mt-4 w-full space-y-3 text-sm text-white md:mt-0 [&_li_a]:hover:text-white">
      <li className="mt-6 flex w-full items-start border-t border-primary-600 md:mt-0">
        <div className="heading-h3 rounded-bl-md rounded-br-md bg-primary-600 p-2 py-1">
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
            <strong className="ml-2 mt-4 flex items-baseline justify-start text-xs text-inherit underline">
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
            <strong className="ml-2 mt-4 flex items-baseline justify-start text-xs text-inherit underline">
              Instagram
            </strong>
          </span>
        </ExternalLink>
      </li>
      <li className="mt-6 flex w-full items-start border-t border-primary-600">
        <div className="heading-h3 rounded-bl-md rounded-br-md bg-primary-600 p-2 py-1">
          <h3 className="text-xs font-semibold">Find Us in Google Map</h3>
        </div>
      </li>
      <li className="mt-4 h-52 w-full overflow-hidden rounded-md lg:w-3/4 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.735731141567!2d-70.4231043!3d19.3805922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eae296e50e06303%3A0x4141e3bda5d73fec!2sHotel%20Quinto%20Nivel%20RD!5e0!3m2!1sen!2sus!4v1712705679198!5m2!1sen!2sus"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen={true}
          referrerPolicy="no-referrer-when-downgrade"
        />
      </li>
    </ul>
  );
}
