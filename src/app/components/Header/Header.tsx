"use client"
import './Header.css'
import { BIO, TECHNOLOGIES_USED, MY_WORK, ABOUT_ME } from '../../constants/headerConstants'
import MobileNavDropdown from '../../../assets/mobile-nav-dropdown.svg'
import MobileCloseDropdown from '../../../assets/mobile-close-dropdown.svg'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const headerButtons = [
    BIO, TECHNOLOGIES_USED, MY_WORK, ABOUT_ME
]
const Header = () => {
    const [isDesktop, setIsDesktop] = useState<boolean>(false);
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

    useEffect(() => {
        const updatePredicate = () => {
          setIsDesktop(window.innerWidth > 704);
          if (window.innerWidth > 704) {
            setDropdownOpen(false);
          }
        };
    
        updatePredicate();
        window.addEventListener('resize', updatePredicate);
    
        return () => {
          window.removeEventListener('resize', updatePredicate);
        };
    }, []);

    const renderHeaderButton = (headerButton: any) => {
        return (
            <div
                key={headerButton}
                className={'header-text header-button'}
                onClick={() => handleClick(headerButton)}
            >
                <div className={'header-item-text'}>{headerButton}</div>
                <div className={'header-underline'}>
                </div>
            </div>
        )
    }

    const renderHeaderButtons = () => {
        return (
            headerButtons.map(headerButton => renderHeaderButton(headerButton))
        )
    }

    const handleClick = (headerButton: any) => {
        switch (headerButton) {
        case BIO:
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
            break
        case TECHNOLOGIES_USED:
            window.scrollTo({
                top: 500,
                left: 0,
                behavior: 'smooth'
            })
            break
        case MY_WORK:
            window.scrollTo({
                top: 1400,
                left: 0,
                behavior: 'smooth'
            })
            break
        case ABOUT_ME:
            window.scrollTo({
                top: 2600,
                left: 0,
                behavior: 'smooth'
            })
            break
        default:
            break
        }
    }

    const handleMobileDropdown = () => {
        setDropdownOpen(!dropdownOpen)
    }

    const renderMobileHeaderButtons = () => {
        return (
            headerButtons.map(headerButton => renderMobileHeaderButton(headerButton))
        )
    }

    const renderMobileHeaderButton = (headerButton: any) => {
        return (
            <div
                key={headerButton}
                className={'header-text mobile-header-button'}
                onClick={() => handleClick(headerButton)}
            >
                <div className={'header-item-text'}>{headerButton}</div>
                <div className={'header-underline'}>
                </div>
            </div>
        )
    }

    return (
        <div className={'header'}>
            <div className={'header-text-container'} onClick={() => handleClick(BIO)}>
                <div className={'header-text header-title typed-out'}>
                    {'John Ojo'}
                </div>
            </div>
            <div className={'f-1'}/>
            {(!isDesktop && !dropdownOpen) && <Image className={'dropdown'} src={MobileNavDropdown} alt={'dropdown'} onClick={() => handleMobileDropdown()}/>}
            {isDesktop && renderHeaderButtons()}
            {(!isDesktop && dropdownOpen) &&
            <div className={'mobile-header-buttons'}>
                {(!isDesktop && dropdownOpen) && <Image className={'dropdown-close'} src={MobileCloseDropdown} alt={'dropdown'} onClick={() => handleMobileDropdown()}/>}
                {renderMobileHeaderButtons()}
            </div>
            }
        </div>
    )
}

export default Header
