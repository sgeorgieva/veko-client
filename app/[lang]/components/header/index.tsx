"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Locale } from "@/i18n.config";
import Image from "next/image";
import { Icon, Link } from "gestalt";
import { Navbar, Nav, NavItem, Collapse } from "reactstrap";
import { links } from "../../../../constants";
import AnimatedLink from "../AnimatedLink";
import SearchComponent from "../SearchComponent";
import detectVersion from "../../../../utils/functions";
import Logo from "../../../../public/images/Logo_Veko.png";
import Message from "../MessageComponent";

import "./header.scss";

export default function Header({
  lang,
  props,
  classname,
  isOpen,
  setIsOpen,
  translations,
  translationsUsedCars,
}: {
  lang: Locale;
  props: any;
  classname: string;
  isOpen: boolean;
  setIsOpen: any;
  translations: any;
  translationsUsedCars: any;
}) {
  const isMobile = detectVersion();
  const pathname = usePathname();
  const [sticky, setSticky] = useState("");
  const [isHover, setHover] = useState(false);
  const [name, setName] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [open, setOpen] = useState(false);
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const [selected, setSelected] = useState({ value: "Български", label: "BG" });
  const [locale, setLocale] = useState("bg");

  const handleMouseEnter = (e) => {
    setName(e?.target?.innerHTML);
    setHover(true);
  };

  const handleLinesBreak = (value) => {
    return value
      .split(" ") // find spaces and make array from string
      .map((item, idx) => (idx % 1 === 0 ? item : item + "\n")) // add line break to every second word
      .join(" ");
  };

  const handleMouseLeave = (e) => {
    setHover(false);
  };

  const onSelect = ({ item }: any) => {
    setSelected(item);
    setIsOpen((prevVal) => !prevVal);
  };

  const handleOpenLanguageMenu = (item: any) => {
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

  const toggleMobileMenu = () => {
    setIsOpenMobileMenu((prevState) => !prevState);
  };

  const handleLinkClick = () => {
    setIsOpenMobileMenu(false);
  };

  return (
    <div
      className={`container-fluid ${isMobile ? "header-mobile" : ""} ${
        isMobile && isOpenMobileMenu ? "header-mobile-menu" : ""
      }`}
    >
      {isMobile && (
        <>
          <div className="menuToggle" onClick={toggleMobileMenu}>
            <span
              className={`${
                isOpenMobileMenu ? "close-icon close" : "hamburger-icon"
              }`}
            >
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <Navbar
            expand="md"
            className={`small ${isOpenMobileMenu ? "bc-blue" : ""}`}
          >
            <Collapse isOpen={isOpenMobileMenu} navbar>
              <Nav className="menu" navbar>
                {links.map((element, i) => {
                  return (
                    isOpen && (
                      <NavItem
                        onClick={({ target }) => {
                          target && target?.classList.toggle("active");
                          handleLinkClick();
                        }}
                        key={i}
                      >
                        <AnimatedLink to={element.to}>
                          {element.name}
                        </AnimatedLink>
                      </NavItem>
                    )
                  );
                })}
              </Nav>
            </Collapse>
          </Navbar>
        </>
      )}
      {!isOpenMobileMenu && (
        <div
          className={`row customer-support-info align-items-center ${
            !isHover ? "background-overlay" : "background-white"
          }`}
        >
          <div className="col-md-8 col-sm-12">
            <span>
              <Icon color="#2b2b2b" inline={true} icon="phone" size={14} />
              <a href="tel: 0700 20 320" className="ps-2">
                0700 20 320
              </a>
            </span>
            <span className="ms-3">
              <Icon color="#2b2b2b" inline={true} icon="gmail" size={14} />
              <a href="mailto:veko@veko-oil.eu" className="ps-2">
                office@veko-oil.eu
              </a>
            </span>
          </div>
          <div className="col-md-4 col-sm-12">
            <SearchComponent
              translations={translations}
              translationsUsedCars={translationsUsedCars}
              open={open}
              selected={selected}
              onSelect={onSelect}
              isHover={isHover}
              handleOpenLanguageMenu={handleOpenLanguageMenu}
              setShowToast={setShowToast}
              setLocale={setLocale}
              locale={locale}
            />
          </div>
        </div>
      )}
      <div
        className={`row align-items-center ${sticky ? "scrollbar" : ""} ${
          isHover ? "row-links-nested" : ""
        }`}
      >
        {isMobile && !isOpenMobileMenu && (
          <Link href={pathname.includes("/en") ? "/en" : "/"}>
            <Image
              unoptimized
              priority
              src={Logo}
              alt="veko-oil logo"
              className="mobile-logo"
            />
          </Link>
        )}
        {isMobile ? (
          isOpenMobileMenu ? (
            <div className="mobile-header-links">
              <AnimatedLink
                onClick={({ target }) => {
                  target && target?.classList.toggle("active");
                  handleLinkClick();
                  setIsOpenMobileMenu(false);
                }}
                href="/"
                class="navlink"
                lang={lang}
              >
                {translations.home}
              </AnimatedLink>
              <AnimatedLink lang={lang} href="/car-dealership" class="navlink">
                {translations.car_delership}
              </AnimatedLink>
              <AnimatedLink lang={lang} href="/service-station" class="navlink">
                {translations.service_station}
              </AnimatedLink>
              <AnimatedLink lang={lang} href="/services" class="navlink">
                {translations.services}
              </AnimatedLink>
              <AnimatedLink lang={lang} href="/veko-products" class="navlink">
                {translations.veko_products}
              </AnimatedLink>
              <AnimatedLink lang={lang} href="/about" class="navlink">
                {translations.about}
              </AnimatedLink>
              <AnimatedLink lang={lang} href="/contact" class="navlink">
                {translations.contact}
              </AnimatedLink>
            </div>
          ) : null
        ) : (
          <main className={`text-start ${!isHover ? "col" : "p-0"}`}>
            <div
              className={`header-links ${isHover ? "header-links-nested" : ""}`}
            >
              {showToast && (
                <Message
                  type="success"
                  message="Успешно отписване"
                  setShowToast={setShowToast}
                />
              )}
              <AnimatedLink
                title={`${translations.home}`}
                href="/"
                lang={lang}
                hasActiveClass={pathname === "/" && pathname.includes("/")}
              >
                {translations.home}
              </AnimatedLink>
              <AnimatedLink
                isHover={isHover}
                title={`${translations.car_dealership}`}
                name={`${translations.car_dealership}`}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                href="/car-dealership"
                hasActiveClass={pathname.includes("car-dealership")}
                lang={lang}
              >
                <span className="d-block text-center">{translations.car}</span>
                <span className="d-block text-center">
                  {translations.dealership}
                </span>
                {isHover &&
                name.includes(
                  `<span class="d-block text-center">${translations.car}</span><span class="d-block text-center">${translations.dealership}</span>`
                ) ? (
                  <div className="row">
                    <div className="col">
                      <ul className="d-block header-nested-links">
                        <li className="d-flex-inline">
                          <AnimatedLink
                            lang={lang}
                            href="/car-dealership/brands"
                            pathname="/car-dealership/brands"
                          >
                            {translations.brands}
                          </AnimatedLink>
                        </li>
                        <li>
                          <AnimatedLink
                            lang={lang}
                            href="/car-dealership/car-centers"
                            hasTarget
                          >
                            {translations.car_centers}
                          </AnimatedLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : null}
              </AnimatedLink>
              <AnimatedLink
                lang={lang}
                title={`${translations.service_station}`}
                href="/service-station"
                hasActiveClass={pathname.includes("service-station")}
              >
                <span className="d-block text-center">
                  {translations.service}
                </span>
                <span className="d-block text-center">
                  {translations.station}
                </span>
              </AnimatedLink>
              <AnimatedLink
                isHover={isHover}
                title={`${translations.services}`}
                name={`${translations.services}`}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                href="/services"
                hasActiveClass={pathname.includes("services")}
                lang={lang}
              >
                <div className="d-block text-center">
                  {translations.services}
                </div>
                <div className="d-block text-center">
                  {translations.rent_a_car_title}
                </div>
                {isHover &&
                name ===
                  `<div class="d-block text-center">${translations.services}</div><div class="d-block text-center">${translations.rent_a_car_title}</div>` ? (
                  <div className="row">
                    <div className="col">
                      <ul className="d-block header-nested-links">
                        <li>
                          <AnimatedLink
                            lang={lang}
                            pathname="/services/used-car"
                            href="/services/used-car"
                          >
                            {translations.used_cars}
                          </AnimatedLink>
                        </li>
                        <li>
                          <AnimatedLink
                            lang={lang}
                            pathname="/services/rent-a-car"
                            href="/services/rent-a-car"
                          >
                            <div className="d-block">
                              {translations.rent_a_car}
                            </div>
                            <div className="d-block">
                              {translations.comming_soon}
                            </div>
                          </AnimatedLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : null}
              </AnimatedLink>
              <AnimatedLink
                lang={lang}
                title={`${translations.insurance}`}
                href="/insurance"
                hasActiveClass={pathname.includes("insurance")}
              >
                {translations.insurance}
              </AnimatedLink>
              <AnimatedLink
                lang={lang}
                title={`${translations.veko_products}`}
                href="/veko-products"
                hasActiveClass={pathname.includes("veko-products")}
              >
                <span className="d-block text-center">
                  {translations.distribution_with}
                </span>
                <span className="d-block text-center">
                  {translations.auto_consumables}
                </span>
              </AnimatedLink>
              <AnimatedLink
                title={`${translations.about}`}
                href="/about"
                lang={lang}
                hasActiveClass={pathname.includes("about")}
              >
                {translations.about}
              </AnimatedLink>
              <AnimatedLink
                lang={lang}
                title={`${translations.contact}`}
                href="/contact"
                hasActiveClass={pathname == "/contact"}
              >
                {translations.contact}
              </AnimatedLink>
            </div>
            <Link href={pathname.includes("/en") ? "/en" : "/"}>
              <Image
                unoptimized
                priority
                src={Logo}
                alt="veko-oil logo"
                className={`${isMobile ? "mobile-logo" : "logo"}`}
              />
            </Link>
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
