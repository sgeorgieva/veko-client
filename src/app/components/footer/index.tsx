import { usePathname } from "next/navigation";
import Image from "next/image";
import { Icon } from "gestalt";
import Link from "next/link";
import AnimatedLink from "../AnimatedLink";
import Logo from "../../../../public/images/veko-oil.png";
import SgLogo from "../../../../public/images/sg-dark-logo.png";
import SearchOpLogo from "../../../../public/images/searchoplogo.png";

import "./footer.scss";

export default function Footer({ isMobile }: { isMobile: boolean }) {
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
            Автомобилно представителство
          </AnimatedLink>
          <AnimatedLink
            href="/trade"
            hasActiveClass={pathname == "/about" ? true : false}
          >
            Търговия
          </AnimatedLink>
          <AnimatedLink
            href="/services"
            hasActiveClass={pathname == "/services" ? true : false}
          >
            Услуги
          </AnimatedLink>
          <AnimatedLink
            href="/veko-products"
            hasActiveClass={pathname == "/veko-products" ? true : false}
          >
            VEKO® продукти
          </AnimatedLink>
        </div>
        <div className="d-flex col-md-4 flex-column">
          <AnimatedLink
            href="/about"
            hasActiveClass={pathname == "/about" ? true : false}
          >
            За нас
          </AnimatedLink>
          <AnimatedLink
            href="/contact"
            hasActiveClass={pathname == "/contact" ? true : false}
          >
            Контакти
          </AnimatedLink>
          <div className="social-icons">
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
          &#169; {new Date().getFullYear()} Всички права запазени
        </span>
        <div
          className={`authors-brand-images ${
            isMobile ? "text-center" : "text-end"
          }`}
        >
          <span className="text-capitalize">
            Дизайн | Разработка
            <Link
              href="https://santiyageorgieva.com"
              target="_blank"
              className="text-right"
            >
              <img className="w-3" src={SgLogo.src} alt="sg-logo" />
            </Link>
          </span>
          <span> & </span>
          <Link
            href="https://search-op.com"
            target="_blank"
            className={`${isMobile ? "text-center" : "text-right me-5"}`}
          >
            <img className="w-5" src={SearchOpLogo.src} alt="SearchOp-logo" />
          </Link>
        </div>
      </div>
    </div>
  );
}
