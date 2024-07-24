import React from "react";
import useAnimatedRouter from "@/app/hooks/useAnimatedRouter";
import Link from "next/link";

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
  shallow
}: any) {
  const { animatedRoute } = useAnimatedRouter();

  return (
    <Link
      href={passHref && locale !== '' ? `${locale}${href}` : href}
      onClick={() => {
        if (passHref && locale !== '') { 
          animatedRoute(`${locale}${href}`);
        } 
        else if (!passHref && locale === '') {
          animatedRoute(href);
        }
      }}
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
            href === "/trade") &&
          name === title
            ? "active-hover"
            : ""
        }`}
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
    >
      {children}
    </Link>
  );
}
