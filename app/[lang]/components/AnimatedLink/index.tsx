import React from "react";
import useAnimatedRouter from "../../../../hooks/useAnimatedRouter";
import Link from "next/link";
import { i18n } from "@/i18n.config";

import "./animatedLink.scss";
export default function AnimatedLink({
  href,
  locale,
  prefetch,
  passHref,
  hasActiveClass,
  children,
  isHover,
  handleMouseEnter,
  handleMouseLeave,
  title,
  name,
  shallow,
  lang,
}: any) {
  // const { animatedRoute } = useAnimatedRouter();
  const isDefaultLang = lang === i18n.defaultLocale;
  const path = isDefaultLang ? href : `/${lang}${href}`;

  return (
    <section>
      <Link
        href={path}
        shallow={shallow}
        locale={locale}
        passHref={prefetch}
        prefetch={passHref}
        className={`${hasActiveClass ? "active" : ""} ${
          href === "car-dealership" ? "pr-0" : ""
        }
          ${
            isHover &&
            (href === "/car-dealership" ||
              href === "/services" ||
              href === "/service_station") &&
            name === title
              ? "active-hover"
              : ""
          }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </Link>
    </section>
  );
}
