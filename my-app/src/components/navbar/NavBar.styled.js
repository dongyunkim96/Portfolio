import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBarContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  position: fixed;
  top: 0;
  padding: 1rem;
  z-index: 30;
  background-color: ${({ scrollPosition }) => scrollPosition > 0 ? '#fff' : 'transparent'};
  box-shadow: ${({ scrollPosition }) => scrollPosition > 0 ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: background-color 0.3s, box-shadow 0.3s;
`;

export const NavigationBar = styled.nav`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 3x1;
  font-weight: bold;
`;

export const NavItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 11rem;
`;

export const MenuButton = styled.button`
  cursor: pointer;
  font-size: 2x1;
  display: none;

  /* @media (min-width: 768px) {
    display: block;
  } */
`;

export const NavBarUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  /* @media (min-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    margin: auto;
    top: 0;
    right: -100%;
    width: 78%;
    height: 100vh;
    background-color: #fff;
  } */
`;

export const NavBarButton = styled.button`
  font-size: 3x1;
  display: none;
  position: relative;
  right: 0;
  top: 4rem;
  margin: auto;

  /* @media (min-width: 768px) {
    display: block;
  } */
`;

export const NavBarListItem = styled.li`
  /* @media (min-width: 768px) {
    margin: 6rem;
    display: flex;
    gap: 6rem;
    align-items: center;
    justify-content: center;
  } */
`;

export const NavBarLink = styled.a`
  text-transform: uppercase;
  cursor: pointer;
  color: black;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #ffed4a;
  }

  ${({ isActive }) => isActive && `color: #ffed4a;`}
`;

export const HireMeButton = styled.a`
  background-color: #000;
  color: #fff;
  font-size: 1rem;
  padding: 8px;
  border-radius: 8px;
  font-weight: bold;
  transition: color 0.3s, background-color 0.3s;

  &:hover {
    color: #ffed4a;
    background-color: #1a1a1a;
  }

  /* @media (min-width: 768px) {
    margin: 5rem;
    display: block;
    margin: auto;
    width: fit-content;
    padding: 2px 15px;
    font-size: 0.875rem;
  }

  @media (min-width: 1024px) {
    padding: 2px 10px;
  } */
`;