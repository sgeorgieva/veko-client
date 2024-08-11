"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { Icon } from "gestalt";
import AnimatedLink from "../AnimatedLink";
import SearchComponent from "../SearchComponent";
import detectVersion from "../../../../utils/functions";
import Logo from "../../../../public/images/Logo_Veko.png";

import "./header.scss";

export default function Header({
  classname,
  isOpen,
  setIsOpen,
}: {
  classname: string;
  isOpen: boolean;
  setIsOpen: object;
}) {
  const isMobile = detectVersion();
  const pathname = usePathname();
  const [sticky, setSticky] = useState("");
  const [isHover, setHover] = useState(false);
  const { t, lang } = useTranslation("home");
  const [name, setName] = useState(t("common:car-dealership-title"));

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({ value: "Български", label: "BG" });

  const router = useRouter();

  const handleMouseEnter = (e) => {
    setName(e?.target?.innerHTML);
    setHover(true);
  };

  const handleMouseLeave = (e) => {
    setHover(false);
  };

  const onSelect = ({ item }: any) => {
    // if (typeof window !== "undefined") {
    //   // changeLanguage(item.label.toLowerCase());
    // }
    setSelected(item);
    setOpen((prevVal) => !prevVal);
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  useEffect(() => {
    const isExistsDarkClass = !!document.querySelector(".bc-dark");
    const isExistsLightClass = !!document.querySelector(".bc-light");

    if (isExistsDarkClass || isExistsLightClass) {
      document.getElementsByTagName("html")[0].style.overflowY = "hidden";
    } else {
      document.getElementsByTagName("html")[0].style.overflowY = "auto";
    }
  }, [isOpen]);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 50 ? "scrollbar" : "";
    setSticky(stickyClass);
  };

  return (
    <div className={`container-fluid ${isMobile ? "header-mobile" : ""}`}>
      <div
        className={`row customer-support-info align-items-center ${
          !isHover ? "background-overlay" : "background-white"
        }`}
      >
        <div className="col-md-8">
          <span>
            <Icon color="#2b2b2b" inline={true} icon="phone" size={14} />
            <a href="tel:+ +359 66 861 616" className="ps-2">
              +359 66 861 616
            </a>
          </span>
          <span className="ms-3">
            <Icon color="#2b2b2b" inline={true} icon="gmail" size={14} />
            <a href="mailto:veko@veko-oil.eu" className="ps-2">
              veko@veko-oil.eu
            </a>
          </span>
        </div>
        <div className="col-md-4">
          <SearchComponent
            open={open}
            selected={selected}
            onSelect={onSelect}
            isHover={isHover}
          />
        </div>
      </div>
      <div
        className={`row align-items-center ${sticky ? "scrollbar" : ""} ${
          isHover ? "row-links-nested" : ""
        }`}
      >
        {isMobile ? (
          <div
            className={`mobile-header-links ${
              pathname === "/projects" ? "mb-ps" : ""
            }`}
          >
            <AnimatedLink href="#" class="navlink">
              {" "}
              Home{" "}
            </AnimatedLink>
            <AnimatedLink href="#" class="navlink">
              {" "}
              About{" "}
            </AnimatedLink>
            <AnimatedLink href="#" class="navlink">
              {" "}
              Products{" "}
            </AnimatedLink>
            <AnimatedLink href="#" class="navlink">
              {" "}
              Privacy{" "}
            </AnimatedLink>
            <AnimatedLink href="#" class="navlink">
              {" "}
              FAQ{" "}
            </AnimatedLink>
            <AnimatedLink href="#" class="navlink">
              {" "}
              Contact{" "}
            </AnimatedLink>
            <Image
              priority
              src={Logo}
              alt="veko-oil logo"
              className="mobile-logo"
            />
          </div>
        ) : (
          <main className={`text-start ${!isHover ? "col" : "p-0"}`}>
            <div
              className={`header-links ${isHover ? "header-links-nested" : ""}`}
            >
              <AnimatedLink
                isHover={isHover}
                title={"Автомобилно представителство"}
                name={"Автомобилно представителство"}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                href="/car-dealership"
                hasActiveClass={pathname.includes("/car-dealership")}
              >
                Автомобилно представителство
                {isHover && name === "Автомобилно представителство" ? (
                  <div className="row">
                    <div className="col">
                      <ul className="d-block header-nested-links">
                        <li className="d-flex-inline">
                          <AnimatedLink
                            href="/car-dealership/brands"
                            pathname="/car-dealership/brands"
                          >
                            Марки
                          </AnimatedLink>
                        </li>
                        <li>
                          <AnimatedLink
                            href="/car-dealership/car-centers"
                            hasTarget
                          >
                            Автоцентрове
                          </AnimatedLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : null}
              </AnimatedLink>
              <AnimatedLink
                title="Търговия"
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                name={name}
                isHover={isHover}
                href="/trade"
                hasActiveClass={pathname.includes("/trade")}
              >
                Търговия
                {isHover && name === "Търговия" ? (
                  <div className="row">
                    <div className="col">
                      <ul className="d-block header-nested-links">
                        <li className="d-flex-inline">
                          <AnimatedLink href="/trade/oils" hasTarget>
                            Масла
                          </AnimatedLink>
                        </li>
                        <li>
                          <AnimatedLink href="/trade/accumulators" hasTarget>
                            Акумулатори
                          </AnimatedLink>
                        </li>
                        <li>
                          <AnimatedLink
                            href="/trade/auto-consumables"
                            hasTarget
                          >
                            Автоконсумативи
                          </AnimatedLink>
                        </li>
                        <li>
                          <AnimatedLink href="/trade/special-liquids" hasTarget>
                            Специални течности
                          </AnimatedLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : null}
              </AnimatedLink>
              <AnimatedLink
                href="/services"
                title="Услуги"
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                name={name}
                isHover={isHover}
                hasActiveClass={pathname.includes("/services")}
              >
                Услуги
                {isHover && name === "Услуги" ? (
                  <div className="row">
                    <div className="col">
                      <ul className="d-block header-nested-links">
                        <li className="d-flex-inline">
                          <AnimatedLink
                            pathname="/services/ecology"
                            href="/services/ecology"
                          >
                            Екология
                          </AnimatedLink>
                        </li>
                        <li>
                          <AnimatedLink
                            pathname="/services/used-car"
                            href="/services/used-car"
                          >
                            Автооказион
                          </AnimatedLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : null}
              </AnimatedLink>
              <AnimatedLink
                title="Veko продукти"
                href="/veko-products"
                hasActiveClass={pathname == "/veko-products"}
              >
                VEKO® продукти
              </AnimatedLink>
              <AnimatedLink
                title="За нас"
                href="/about"
                hasActiveClass={pathname == "/about"}
              >
                За нас
              </AnimatedLink>
              <AnimatedLink
                title="Контакти"
                href="/contact"
                hasActiveClass={pathname == "/contact"}
              >
                Контакти
              </AnimatedLink>
            </div>
            <AnimatedLink hasActiveClass={false} href="/">
              <Image
                priority
                src={Logo}
                alt="veko-oil logo"
                className={`${isMobile ? "mobile-logo" : "logo"}`}
              />
            </AnimatedLink>
            {!isHover && (
              <hr
                className={isMobile ? "line-xs" : "line"}
                data-content="&nbsp;&nbsp;"
              />
            )}
          </main>
        )}
      </div>
    </div>
  );
}
