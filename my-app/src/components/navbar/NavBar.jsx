import React, { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { 
    NavBarContainer,
    NavigationBar,
    StyledLink,
    NavItemsContainer,
    MenuButton,
    NavBarUl,
    NavBarButton,
    NavBarListItem,
    NavBarLink,
    HireMeButton,
 } from "./NavBar.styled";

const navItems = [
    {
        id: 0,
        name: "Home",
    },
    {
        id: 1,
        name: "Skills",
    },
    {
        id: 2,
        name: "Work",
    },
    {
        id: 3,
        name: "Resume",
    },
    {
        id: 4,
        name: "Contact",
    },
];

const NavBar = ({ toggleDarkMode, darkMode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);

    // Toggle the NavBar
    const toggleNav = (name) => {
        setIsOpen(false);
        setActiveIndex(name === activeIndex ? null : name);
    };
    
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <NavBarContainer scrollPosition={scrollPosition}>
            <NavigationBar>
                <div data-aos="fade-down" className="logo">
                    <StyledLink onClick={() => window.scrollTo(0,0)} to="/">PORTFOLIO</StyledLink>
                </div>
                <NavItemsContainer data-aos="fade-down">
                    <MenuButton onClick={toggleNav}>
                        <HiMenu size={25} />
                    </MenuButton>
                    <NavBarUl isOpen={isOpen}>
                        <NavBarButton onClick={toggleNav}>
                            <RxCross2 size={25} />
                        </NavBarButton>
                        {navItems.map((item) => (
                            <NavBarListItem
                              key={item.id}
                            >
                                <NavBarLink
                                  onClick={() => toggleNav(item.name)}
                                  href={`#${item.name}`}
                                >
                                    {item.name}
                                </NavBarLink>
                            </NavBarListItem>
                        ))}
                        <HireMeButton
                          href=" "                          
                        >
                            HIRE ME
                        </HireMeButton>
                    </NavBarUl>
                </NavItemsContainer>
            </NavigationBar>
        </NavBarContainer>
    );
};

export default NavBar;
