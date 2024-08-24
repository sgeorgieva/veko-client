import { usePathname } from "next/navigation";
import Image from "next/image";
import { Icon } from "gestalt";
import Link from "next/link";
import AnimatedLink from "../AnimatedLink";
import Logo from "../../../../public/images/veko-oil.png";
import SgLogo from "../../../../public/images/sg-dark-logo.png";

import "./footer.scss";

export default function Footer({
  isMobile,
  translations,
  translationsFooter,
}: {
  isMobile: boolean;
  translations: any;
  translationsFooter: any;
}) {
  const pathname = usePathname();

  return (
    <div className={`footer ${isMobile ? "footer-mobile" : ""}`}>
      <div
        className={`d-flex row align-items-center justify-content-around ${
          isMobile ? "px-3" : "px-5"
        }`}
      >
        <div className="d-flex col-md-4 flex-column">
          <AnimatedLink
            href="/car-dealership"
            hasActiveClass={pathname == "/car-dealership" ? true : false}
          >
            {translations.car_delership}
          </AnimatedLink>
          <AnimatedLink
            href="/trade"
            hasActiveClass={pathname == "/about" ? true : false}
          >
            {translations.trade}
          </AnimatedLink>
          <AnimatedLink
            href="/services"
            hasActiveClass={pathname == "/services" ? true : false}
          >
            {translations.services}
          </AnimatedLink>
          <AnimatedLink
            href="/veko-products"
            hasActiveClass={pathname == "/veko-products" ? true : false}
          >
            {translations.veko_products}
          </AnimatedLink>
        </div>
        <div className="d-flex col-md-4 flex-column">
          <AnimatedLink
            href="/about"
            hasActiveClass={pathname == "/about" ? true : false}
          >
            {translations.about}
          </AnimatedLink>
          <AnimatedLink
            href="/contact"
            hasActiveClass={pathname == "/contact" ? true : false}
          >
            {translations.contact}
          </AnimatedLink>
          <div className={isMobile ? "text-end" : ""}>
            <Link
              target="_blank"
              href="https://www.facebook.com/AutocenterVEKO"
            >
              <Icon color="#2b2b2b" inline={true} icon="facebook" size={18} />
            </Link>
            <Link
              target="_blank"
              href="https://www.youtube.com/@vekooilltd.7582"
              className="ps-1"
            >
              <Icon color="#2b2b2b" inline={true} icon="youtube" size={18} />
            </Link>
          </div>
        </div>
        <div
          className={`d-flex col-md-4 flex-column ${
            isMobile ? "text-center" : "text-end"
          }`}
        >
          <AnimatedLink hasActiveClass={false} href="/">
            <Image
              unoptimized
              priority
              src={Logo}
              alt="veko-oil logo"
              className="footer-logo"
            />
          </AnimatedLink>
        </div>
      </div>
      <hr />
      <div
        className={`d-flex align-items-center ${
          isMobile
            ? "justify-content-center flex-column"
            : "justify-content-between"
        }`}
      >
        <span className={`pageFooter ${isMobile ? "" : "ms-5"}`}>
          &#169; {new Date().getFullYear()} {translationsFooter.copy_rights}
        </span>
        <div
          className={`authors-brand-images ${
            isMobile ? "text-center" : "text-end"
          }`}
        >
          <span className="text-capitalize">
            {translationsFooter.design_development}
            <Link
              href="https://santiyageorgieva.com"
              target="_blank"
              className="text-right"
            >
              <img className="me-3 ms-1 w-10" src={SgLogo.src} alt="sg-logo" />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
