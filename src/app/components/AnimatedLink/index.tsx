import useAnimatedRouter from "@/app/hooks/useAnimatedRouter";
import Link from "next/link";
import React, { useEffect } from "react";

import "./animatedLink.scss";
import { useRouter, usePathname } from "next/navigation";

type Props = {
  href: string;
  hasActiveClass: boolean;
  children: React.ReactNode;
};
export default function AnimatedLink({
  href,
  hasActiveClass,
  children,
  hasTarget,
  isHover,
  handleMouseEnter,
  handleMouseLeave,
  title,
  name,
}: any) {
  const { animatedRoute } = useAnimatedRouter();
  const pathname = usePathname();
  // const router = useRouter();

  // console.log('pathname', pathname);
  
  // console.log('name', name);
  // console.log('title', title);

  // useEffect(() => {
  //   if (pathname === "/services") {
  //     router.push("/services/ecology");
  //   } else if (pathname === "/services/used-car") {
  //     router.push("/services/used-car");
  //   }
  // }, [pathname]);

  console.log('title', title);
  // console.log('name', name);
  

  return (
    <Link
      href={hasTarget ? "https://www.veko-products.com" : pathname}
      target={hasTarget ? "_blank" : ""}
      onClick={() => {
        animatedRoute(href);
      }}
      passHref
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
