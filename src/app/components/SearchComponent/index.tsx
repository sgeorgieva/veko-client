import {
  Box,
  Flex,
  IconButton,
  SearchField,
  CompositeZIndex,
  Dropdown,
  FixedZIndex,
  Avatar,
  Button,
  Text,
  Popover,
} from "gestalt";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/navigation";
import Login from "../../../app/admin-panel/login/page";

import "./searchComponent.scss";

export default function SearchComponent({
  isHover,
  open,
  onSelect,
  selected,
}: any) {
  const [searchValue, setSearchValue] = useState("");
  const PAGE_HEADER_ZINDEX = new FixedZIndex(10);
  const TOOLTIP__ZINDEX = new FixedZIndex(6);
  const [isOpenLoginModal, setOpenLoginModal] = useState(false);
  const anchorRef = useRef(null);
  const [openLoginMenu, setOpenLoginMenu] = useState(false);
  const anchorSecondRef = useRef(null);
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      setIsMobile(true);
    }
  }, []);

  const toggleLoginModal = () => {
    setOpenLoginModal(!isOpenLoginModal);
  };

  const { t, lang } = useTranslation("common");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const handleLogout = () => {
    console.log("here in logout");

    localStorage.removeItem("jwt");
    router.push("/");
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
              onChange={({ value }) => setSearchValue(value)}
              value={searchValue}
              autoComplete="on"
            />
          </Flex.Item>
          <Link href="/">
            <IconButton
              accessibilityLabel="Home"
              tooltip={{
                text: "Начало",
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
                  accessibilityLabel="More Options"
                  tooltip={{
                    text: "Езици",
                    idealDirection: "down",
                    zIndex: new CompositeZIndex([TOOLTIP__ZINDEX]),
                  }}
                  icon="arrow-up-right"
                  iconColor={`${isHover ? "darkGray" : "white"}`}
                  onClick={onSelect}
                  selected={open}
                  size="sm"
                />
              </Box>
            </Flex>
            {open && (
              <Dropdown
                anchor={anchorRef.current}
                id="subtext-dropdown-example"
                zIndex={new CompositeZIndex([PAGE_HEADER_ZINDEX])}
              >
                <Dropdown.Section label="Езици">
                  {/* {langs} */}
                  <Dropdown.Item
                    onSelect={onSelect}
                    option={{ value: "Български", label: "BG" }}
                    selected={selected}
                  >
                    {/* {t(`layout:language-name-${lng}`)} */}
                  </Dropdown.Item>
                  <Dropdown.Item
                    onSelect={onSelect}
                    option={{
                      value: "Английски",
                      label: "EN",
                    }}
                    selected={selected}
                  />
                </Dropdown.Section>
              </Dropdown>
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
                text: "Вход",
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
                    positionRelativeToAnchor={false}
                    size="sm"
                    showDismissButton={false}
                    __overflow="hidden"
                    onDismiss={handleLogout}
                  >
                    <Box
                      zIndex={new CompositeZIndex([TOOLTIP__ZINDEX])}
                      marginTop={1}
                      marginEnd={5}
                    >
                      <Flex direction="column">
                        <Text align="end" color="default" weight="bold">
                          Изход
                        </Text>
                      </Flex>
                    </Box>
                  </Popover>
                )}
              </Flex>
              {open && (
                <Dropdown
                  anchor={anchorRef.current}
                  id="subtext-dropdown-example"
                  zIndex={new CompositeZIndex([PAGE_HEADER_ZINDEX])}
                >
                  <Dropdown.Section label="Езици">
                    <Dropdown.Item
                      onSelect={onSelect}
                      option={{ value: "Български", label: "BG" }}
                      selected={selected}
                    />
                    <Dropdown.Item
                      onSelect={onSelect}
                      option={{
                        value: "Английски",
                        label: "EN",
                      }}
                      selected={selected}
                    />
                  </Dropdown.Section>
                </Dropdown>
              )}
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
