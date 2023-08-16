"use client"
import './navbar.scss';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai"
import { useState } from 'react';
import { selectTheme } from '@/redux/slice/themeSlice';
import { RESET_USER } from '@/redux/slice/authSlice';
import { ActionBtn } from './ActionBtn';
import { Theme } from './Theme';
import { MobileMenu } from './MobileMenu';
import { DangerBtn } from './DangerBtn';
import Search from './Search';

export const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  const token = process.env.COOKIE_TOKEN;

  //redux store states
  const theme = useSelector(selectTheme);

  //navigation fns
  const router = useRouter();
  const dispatch = useDispatch();

  //remove cookie 
  const logOut = () => {
    Cookies.remove(token);
    dispatch(RESET_USER());//remove user from redux
    router.push("/login");
  }



  //handle click event
  const handleClick = () => {
    router.push(router.pathname === "/edit" ? "/" : "/edit");
  }


  return (
    <nav className={`navbar-container ${theme}-nav`}>
      <h1 className='logo'>Jokes App</h1>
      {/* display limit selectror when viewing table */}
      {
        showMobileNav ?
          <AiOutlineClose
            size={30}
            className="menu-icon"
            onClick={() => setShowMobileNav(!showMobileNav)}
          />
          :
          <HiOutlineMenuAlt3
            size={30}
            className="menu-icon"
            onClick={() => setShowMobileNav(!showMobileNav)}
          />
      }
      <Search />

      <div className={`nav-items ${showMobileNav && "mobile-nav"}`}>

        <div className="link-container">
          {/* <ActionBtn clickHandler={handleClick}>  {location.pathname !== "/edit" ? "Add New Joke" : "Back to Jokes"}</ActionBtn> */}
          <DangerBtn clickHandler={logOut}>Logout</DangerBtn>
        </div>
        <Theme />
      </div>

      {/* menu that shows on mobile screen */}
      {showMobileNav && <div className="mobile-menu-container">
        <MobileMenu />
      </div>
      }

    </nav>
  )
}