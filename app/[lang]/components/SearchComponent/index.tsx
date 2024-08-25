import {
  Box,
  Flex,
  IconButton,
  SearchField,
  CompositeZIndex,
  FixedZIndex,
  Avatar,
  Button,
  Text,
  Popover,
} from "gestalt";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { i18n } from "@/i18n.config";
import { usePathname } from "next/navigation";
import Login from "../../admin-panel/login/page";

import "./searchComponent.scss";
import { endpoints, linkUrl } from "@/utils/functions";
import axios from "axios";
import { log } from "console";

export default function SearchComponent({
  isHover,
  open,
  setShowToast,
  handleOpenLanguageMenu,
  translations,
  locale,
  setLocale,
}: any) {
  const [searchValue, setSearchValue] = useState("");
  const TOOLTIP__ZINDEX = new FixedZIndex(6);
  const [isOpenLoginModal, setOpenLoginModal] = useState(false);
  const [openLoginMenu, setOpenLoginMenu] = useState(false);
  const anchorSecondRef = useRef(null);
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [searchedNews, setSearchedNews] = useState("");
  const [searchedCars, setSearchedCars] = useState("");
  const settingsLinkRef = useRef(null);
  const settingsRef = useRef(null);

  useEffect(() => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    if (settingsRef.current || settingsLinkRef.current) {
      router.push("/admin-panel");
    }
  }, [settingsRef, settingsLinkRef]);

  const toggleLoginModal = () => {
    setOpenLoginModal(!isOpenLoginModal);
  };

  useEffect(() => {
    setIsClient(true);

    if (anchorSecondRef.current !== null) {
      // router.push("/admin-panel");
    }
  }, [anchorSecondRef]);

  if (!isClient) {
    return null;
  }

  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) {
      setLocale("bg");
      return "/";
    } else {
      setLocale("/en");
    }

    const pathnameIsMissingLocale = i18n.locales.every(
      (locale) =>
        !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`
    );

    if (pathnameIsMissingLocale) {
      if (locale === i18n.defaultLocale) {
        setLocale(locale);
        return pathName;
      }
      setLocale(i18n.defaultLocale);
      return `/${locale}${pathName}`;
    } else {
      if (locale === i18n.defaultLocale) {
        const segments = pathName.split("/");
        const isHome = segments.length === 2;
        if (isHome) return "/";

        segments.splice(1, 1);
        return segments.join("/");
      }

      const segments = pathName.split("/");
      segments[1] = locale;
      return segments.join("/");
    }
  };

  const handleSearch = (value) => {
    setSearchValue(value);

    if (value) {
      fetchSearch(value);
    } else {
      setSearchedNews("");
      setSearchedCars("");
    }
  };

  const fetchSearch = async (value) => {
    try {
      const response = await axios.get(
        `${linkUrl()}${endpoints.search}?=${value}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`, // Replace with your actual authorization token
          },
        }
      );
      if (response.status === 200) {
        setSearchedNews(response.data.results.news);
        setSearchedCars(response.data.results.occasion);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    localStorage.setItem("isLoginIn", false);
    localStorage.removeItem("activeTabIndex");
    router.push("/");
    setShowToast(true);
  };

  return (
    <div className="search-wrapper">
      <Box display="flex" alignItems="center" justifyContent="center">
        <Flex alignItems="center" flex="grow" gap={{ row: 4, column: 0 }}>
          <Flex.Item flex="grow">
            <SearchField
              accessibilityClearButtonLabel="Clear search field"
              accessibilityLabel="Search all of Pinterest"
              id="searchFieldA11yExample"
              onChange={({ value }) => handleSearch(value)}
              value={searchValue}
              autoComplete="on"
            />

            {searchedNews &&
              searchedCars &&
              (searchedNews.length > 0 || searchedCars.length > 0) && (
                <div className="background-search">
                  <div className="d-flex">
                    {searchedNews.length > 0 && (
                      <div>
                        <h3 className="mb-3">Новини</h3>
                        {searchedNews.map((item, index) => (
                          <Link href={`/posts/${item.title}`}>
                            <p>{item.title}</p>
                          </Link>
                        ))}
                      </div>
                    )}
                    {searchedCars.length > 0 && (
                      <div>
                        <h3 className="mb-3">Автомобили</h3>
                        {searchedCars.map((item, index) => (
                          <Link href={`/posts/${item.model}`}>
                            <p>{item.model}</p>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
          </Flex.Item>
          <Link href={pathName.includes("/en") ? "/en" : "/"}>
            <IconButton
              accessibilityLabel="Home"
              tooltip={{
                text: translations.home,
                idealDirection: "down",
                zIndex: new CompositeZIndex([TOOLTIP__ZINDEX]),
              }}
              icon="home"
              size="sm"
              iconColor={`${isHover ? "darkGray" : "white"}`}
            />
          </Link>
          <>
            <Flex height="100%" justifyContent="center" width="100%">
              <Box>
                <IconButton
                  ref={anchorSecondRef}
                  accessibilityControls="subtext-dropdown-example"
                  accessibilityExpanded={open}
                  accessibilityHaspopup
                  accessibilityLabel="More Languages"
                  tooltip={{
                    text: translations.languages,
                    idealDirection: "down",
                    zIndex: new CompositeZIndex([TOOLTIP__ZINDEX]),
                  }}
                  icon="arrow-up-right"
                  iconColor={`${isHover ? "darkGray" : "white"}`}
                  onClick={() => handleOpenLanguageMenu((prevVal) => !prevVal)}
                  selected={open}
                  size="sm"
                />
              </Box>
            </Flex>
            {open && (
              <Popover
                accessibilityLabel="Languages"
                anchor={anchorSecondRef.current}
                id="a11l-example"
                idealDirection="forceDown"
                shouldFocus={true}
                positionRelativeToAnchor={true}
                size="sm"
                showDismissButton={false}
                __overflow="hidden"
                onDismiss={() => {}}
                // onKeyDown={() => router.push("/admin-panel")}
              >
                <Box
                  padding={2}
                  zIndex={new CompositeZIndex([TOOLTIP__ZINDEX])}
                  marginEnd={2}
                >
                  {i18n.locales.map((locale, key) => {
                    return (
                      <Link key={key} href={redirectedPathName(locale)}>
                        <Box paddingY={1}>
                          <Flex alignItems="center" justifyContent="end">
                            <Text
                              size="200"
                              align="end"
                              color="default"
                              weight="bold"
                            >
                              {locale === "en"
                                ? translations.en_lang
                                : translations.bg_lang}
                            </Text>
                          </Flex>
                        </Box>
                      </Link>
                    );
                  })}
                </Box>
              </Popover>
            )}
          </>

          {!localStorage.getItem("jwt") ? (
            <IconButton
              type="button"
              size="sm"
              icon="person"
              iconColor={`${isHover ? "darkGray" : "white"}`}
              accessibilityPopupRole="dialog"
              onClick={toggleLoginModal}
              tooltip={{
                text: translations.login,
                idealDirection: "down",
                zIndex: new CompositeZIndex([TOOLTIP__ZINDEX]),
              }}
            />
          ) : (
            <>
              <Flex
                alignItems="center"
                height="100%"
                justifyContent="end"
                width="100%"
              >
                <Box>
                  <Flex alignItems="center" gap={{ row: 1, column: 1 }}>
                    <Button
                      ref={anchorSecondRef}
                      accessibilityControls="a11l-example"
                      accessibilityExpanded={openLoginMenu}
                      accessibilityHaspopup
                      color="transparent"
                      onClick={() => setOpenLoginMenu((o) => !o)}
                      size="sm"
                      text={
                        <Flex height="100%" justifyContent="center">
                          <Box>
                            <Avatar name="Yasen" size="sm" />
                          </Box>
                        </Flex>
                      }
                    />
                  </Flex>
                </Box>

                {openLoginMenu && (
                  <Popover
                    accessibilityLabel="Logout"
                    anchor={anchorSecondRef.current}
                    id="a11l-example"
                    idealDirection="forceDown"
                    shouldFocus={true}
                    positionRelativeToAnchor={true}
                    size="sm"
                    showDismissButton={false}
                    __overflow="hidden"
                    onDismiss={() => {}}
                    // onKeyDown={() => router.push("/admin-panel")}
                  >
                    <Box
                      zIndex={new CompositeZIndex([TOOLTIP__ZINDEX])}
                      marginEnd={2}
                    >
                      <Link href="/admin-panel">
                        <Flex alignItems="center" justifyContent="end">
                          <Text
                            size="200"
                            align="end"
                            color="default"
                            weight="bold"
                          >
                            Настройки
                          </Text>
                          <IconButton
                            accessibilityLabel="Settings"
                            tooltip={{
                              text: "Настройки",
                              idealDirection: "top",
                              zIndex: new CompositeZIndex([TOOLTIP__ZINDEX]),
                            }}
                            size="sm"
                            icon="cog"
                          />
                        </Flex>
                      </Link>
                    </Box>
                    <Box
                      zIndex={new CompositeZIndex([TOOLTIP__ZINDEX])}
                      marginEnd={2}
                    >
                      <Link
                        href={pathName.includes("/en") ? "/en" : "/"}
                        onClick={handleLogout}
                      >
                        <Flex alignItems="center" justifyContent="end">
                          <Text
                            align="end"
                            color="default"
                            weight="bold"
                            size="200"
                          >
                            Изход
                          </Text>
                          <IconButton
                            accessibilityLabel="Settings"
                            tooltip={{
                              text: "Изход",
                              idealDirection: "down",
                              zIndex: new CompositeZIndex([TOOLTIP__ZINDEX]),
                            }}
                            size="sm"
                            icon="visit"
                            onClick={handleLogout}
                          />
                        </Flex>
                      </Link>
                    </Box>
                  </Popover>
                )}
              </Flex>
            </>
          )}
        </Flex>
        {isOpenLoginModal && (
          <Login
            isMobile={isMobile}
            closeModal={toggleLoginModal}
            setOpenLoginMenu={setOpenLoginMenu}
          />
        )}
      </Box>
    </div>
  );
}
