'use client'

import React, { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Locale } from '@/i18n.config'
import Image from 'next/image'
import { Icon } from 'gestalt'
import { Navbar, Nav, NavItem, Collapse } from 'reactstrap'
import { links } from '../../../../constants'
import AnimatedLink from '../AnimatedLink'
import SearchComponent from '../SearchComponent'
import detectVersion from '../../../../utils/functions'
import Logo from '../../../../public/images/Logo_Veko.png'
import Message from '../MessageComponent'

import './header.scss'

export default function Header({
  lang,
  props,
  classname,
  isOpen,
  setIsOpen,
  translations
}: {
  lang: Locale
  props: any
  classname: string
  isOpen: boolean
  setIsOpen: any
  translations: any
}) {
  const isMobile = detectVersion()
  const pathname = usePathname()
  const [sticky, setSticky] = useState('')
  const [isHover, setHover] = useState(false)
  const [name, setName] = useState('')
  const [showToast, setShowToast] = useState(false)
  const [open, setOpen] = useState(false)
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)
  const [selected, setSelected] = useState({ value: 'Български', label: 'BG' })

  const handleMouseEnter = e => {
    setName(e?.target?.innerHTML)
    setHover(true)
  }

  const handleMouseLeave = e => {
    setHover(false)
  }

  const onSelect = ({ item }: any) => {
    // if (typeof window !== "undefined") {
    //   // changeLanguage(item.label.toLowerCase());
    // }
    setSelected(item)
    setIsOpen(prevVal => !prevVal)
  }

  const handleOpenLanguageMenu = (item: any) => {
    setOpen(prevVal => !prevVal)
  }

  useEffect(() => {
    window.addEventListener('scroll', isSticky)
    return () => {
      window.removeEventListener('scroll', isSticky)
    }
  }, [])

  useEffect(() => {
    const isExistsDarkClass = !!document.querySelector('.bc-dark')
    const isExistsLightClass = !!document.querySelector('.bc-light')

    if (isExistsDarkClass || isExistsLightClass) {
      document.getElementsByTagName('html')[0].style.overflowY = 'hidden'
    } else {
      document.getElementsByTagName('html')[0].style.overflowY = 'auto'
    }
  }, [isOpen])

  const isSticky = () => {
    const scrollTop = window.scrollY
    const stickyClass = scrollTop >= 50 ? 'scrollbar' : ''
    setSticky(stickyClass)
  }

  const toggleMobileMenu = () => {
    setIsOpenMobileMenu(prevState => !prevState)
  }

  const handleLinkClick = () => {
    setIsOpenMobileMenu(false)
  }

  return (
    <div
      className={`container-fluid ${isMobile ? 'header-mobile' : ''} ${
        isMobile && isOpenMobileMenu ? 'header-mobile-menu' : ''
      }`}
    >
      {isMobile && (
        <>
          <div className='menuToggle' onClick={toggleMobileMenu}>
            <span
              className={`${
                isOpenMobileMenu ? 'close-icon close' : 'hamburger-icon'
              }`}
            >
              <input type='checkbox' />
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <Navbar
            expand='md'
            className={`small ${isOpenMobileMenu ? 'bc-blue' : ''}`}
          >
            <Collapse isOpen={isOpenMobileMenu} navbar>
              <Nav className='menu' navbar>
                {links.map((element, i) => {
                  return (
                    isOpen && (
                      <NavItem
                        onClick={({ target }) => {
                          target && target?.classList.toggle('active')
                          handleLinkClick()
                        }}
                        key={i}
                      >
                        <AnimatedLink to={element.to}>
                          {element.name}
                        </AnimatedLink>
                      </NavItem>
                    )
                  )
                })}
              </Nav>
            </Collapse>
          </Navbar>
        </>
      )}
      {!isOpenMobileMenu && (
        <div
          className={`row customer-support-info align-items-center ${
            !isHover ? 'background-overlay' : 'background-white'
          }`}
        >
          <div className='col-md-8'>
            <span>
              <Icon color='#2b2b2b' inline={true} icon='phone' size={14} />
              <a href='tel:+ +359 66 861 616' className='ps-2'>
                +359 66 861 616
              </a>
            </span>
            <span className='ms-3'>
              <Icon color='#2b2b2b' inline={true} icon='gmail' size={14} />
              <a href='mailto:veko@veko-oil.eu' className='ps-2'>
                veko@veko-oil.eu
              </a>
            </span>
          </div>
          <div className='col-md-4'>
            <SearchComponent
              translations={translations}
              open={open}
              selected={selected}
              onSelect={onSelect}
              isHover={isHover}
              handleOpenLanguageMenu={handleOpenLanguageMenu}
              setShowToast={setShowToast}
            />
          </div>
        </div>
      )}
      <div
        className={`row align-items-center ${sticky ? 'scrollbar' : ''} ${
          isHover ? 'row-links-nested' : ''
        }`}
      >
        {isMobile && !isOpenMobileMenu && (
          <Image
            priority
            src={Logo}
            alt='veko-oil logo'
            className='mobile-logo'
          />
        )}
        {isMobile ? (
          isOpenMobileMenu ? (
            <div className='mobile-header-links'>
              <AnimatedLink
                onClick={({ target }) => {
                  target && target?.classList.toggle('active')
                  handleLinkClick()
                  setIsOpenMobileMenu(false)
                }}
                href='/'
                class='navlink'
              >
                {translations.home}
              </AnimatedLink>
              <AnimatedLink href='/car-dealership' class='navlink'>
                {translations.car_delership}
              </AnimatedLink>
              <AnimatedLink href='/trade' class='navlink'>
                {translations.trade}
              </AnimatedLink>
              <AnimatedLink href='/services' class='navlink'>
                {translations.services}
              </AnimatedLink>
              <AnimatedLink href='/veko-products' class='navlink'>
                {translations.veko_products}
              </AnimatedLink>
              <AnimatedLink href='/about' class='navlink'>
                {translations.about}
              </AnimatedLink>
              <AnimatedLink href='/contact' class='navlink'>
                {translations.contact}
              </AnimatedLink>
            </div>
          ) : null
        ) : (
          <main className={`text-start ${!isHover ? 'col' : 'p-0'}`}>
            <div
              className={`header-links ${isHover ? 'header-links-nested' : ''}`}
            >
              {showToast && (
                <Message
                  type='success'
                  message='Успешно отписване'
                  setShowToast={setShowToast}
                />
              )}
              <AnimatedLink
                isHover={isHover}
                title={`${translations.car_dealership}`}
                name={`${translations.car_dealership}`}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                href='/car-dealership'
                hasActiveClass={pathname.includes('/car-dealership')}
              >
                {translations.car_delership}
                {isHover && name === translations.car_delership ? (
                  <div className='row'>
                    <div className='col'>
                      <ul className='d-block header-nested-links'>
                        <li className='d-flex-inline'>
                          <AnimatedLink
                            href='/car-dealership/brands'
                            pathname='/car-dealership/brands'
                          >
                            {translations.brands}
                          </AnimatedLink>
                        </li>
                        <li>
                          <AnimatedLink
                            href='/car-dealership/car-centers'
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
                title={`${translations.trade}`}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                name={name}
                isHover={isHover}
                href='/trade'
                hasActiveClass={pathname.includes('/trade')}
              >
                {translations.trade}
                {isHover && name === translations.trade ? (
                  <div className='row'>
                    <div className='col'>
                      <ul className='d-block header-nested-links'>
                        <li className='d-flex-inline'>
                          <AnimatedLink href='/trade/oils' hasTarget>
                            {translations.oils}
                          </AnimatedLink>
                        </li>
                        <li>
                          <AnimatedLink href='/trade/accumulators' hasTarget>
                            {translations.accumulators}
                          </AnimatedLink>
                        </li>
                        <li>
                          <AnimatedLink
                            href='/trade/auto-consumables'
                            hasTarget
                          >
                            {translations.autoconsumables}
                          </AnimatedLink>
                        </li>
                        <li>
                          <AnimatedLink href='/trade/special-liquids' hasTarget>
                            {translations.special_liquids}
                          </AnimatedLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : null}
              </AnimatedLink>
              <AnimatedLink
                href='/services'
                title={`${translations.services}`}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                name={name}
                isHover={isHover}
                hasActiveClass={pathname.includes('/services')}
              >
                {translations.services}
                {isHover && name === translations.services ? (
                  <div className='row'>
                    <div className='col'>
                      <ul className='d-block header-nested-links'>
                        <li className='d-flex-inline'>
                          <AnimatedLink
                            pathname='/services/ecology'
                            href='/services/ecology'
                          >
                            {translations.ecology}
                          </AnimatedLink>
                        </li>
                        <li>
                          <AnimatedLink
                            pathname='/services/used-car'
                            href='/services/used-car'
                          >
                            {translations.used_cars}
                          </AnimatedLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : null}
              </AnimatedLink>
              <AnimatedLink
                title={`${translations.veko_products}`}
                href='/veko-products'
                hasActiveClass={pathname == '/veko-products'}
              >
                {translations.veko_products}
              </AnimatedLink>
              <AnimatedLink
                title={`${translations.about}`}
                href='/about'
                hasActiveClass={pathname == '/about'}
              >
                {translations.about}
              </AnimatedLink>
              <AnimatedLink
                title={`${translations.contact}`}
                href='/contact'
                hasActiveClass={pathname == '/contact'}
              >
                {translations.contact}
              </AnimatedLink>
            </div>
            <AnimatedLink hasActiveClass={false} href={`${pathname}`}>
              <Image
                priority
                src={Logo}
                alt='veko-oil logo'
                className={`${isMobile ? 'mobile-logo' : 'logo'}`}
              />
            </AnimatedLink>
            {!isHover && (
              <hr
                className={isMobile ? 'line-xs' : 'line'}
                data-content='&nbsp;&nbsp;'
              />
            )}
          </main>
        )}
      </div>
    </div>
  )
}
