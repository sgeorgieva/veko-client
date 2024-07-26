import {
  Box,
  Flex,
  IconButton,
  SearchField,
  CompositeZIndex,
  Dropdown,
  FixedZIndex
} from "gestalt";
import Link from "next/link";
import { useRef, useState } from "react";
import Login from "../../../app/administration/login/page";

import './searchComponent.scss';

export default function SearchComponent({ isHover, open, handleOpenLanguageMenu, onSelect, selected }: any) {
  const [searchValue, setSearchValue] = useState("");
  const PAGE_HEADER_ZINDEX = new FixedZIndex(10);
  const TOOLTIP__ZINDEX = new FixedZIndex(6);
  const [isOpenLoginModal, setOpenLoginModal] = useState(false);
  const anchorRef = useRef(null);

  const toogleLoginModal = () => {
    setOpenLoginModal(!isOpenLoginModal);
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
              tooltip={{ text: 'Начало', idealDirection: 'down', zIndex: new CompositeZIndex([TOOLTIP__ZINDEX])}}
              icon="home"
              size="sm"
              iconColor={`${isHover ? "darkGray" : "white"}`}
            />
          </Link>
          <>
            <Flex height="100%" justifyContent="center" width="100%">
              <Box margin={2}>
                <IconButton
                  ref={anchorRef}
                  accessibilityControls="subtext-dropdown-example"
                  accessibilityExpanded={open}
                  accessibilityHaspopup
                  accessibilityLabel="More Options"
                  tooltip={{ text: 'Езици', idealDirection: 'down', zIndex: new CompositeZIndex([TOOLTIP__ZINDEX])}}
                  icon="arrow-up-right"
                  iconColor={`${isHover ? "darkGray" : "white"}`}
                  onClick={() => handleOpenLanguageMenu((prevVal) => !prevVal)}
                  selected={open}
                  size="sm"
                />
              </Box>
            </Flex>
            {open && (
              <Dropdown
                anchor={anchorRef.current}
                id="subtext-dropdown-example"
                // onDismiss={toogleLoginModal}
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
          <IconButton
            type="button"
            size="sm"
            icon="person"
            iconColor={`${isHover ? "darkGray" : "white"}`}
            accessibilityPopupRole="dialog"
            onClick={toogleLoginModal}
            tooltip={{ text: 'Вход', idealDirection: 'down', zIndex: new CompositeZIndex([TOOLTIP__ZINDEX])}}
          />
        </Flex>
        {isOpenLoginModal && <Login isOpen={isOpenLoginModal} closeModal={toogleLoginModal} />}
      </Box>
    </div>
  );
}