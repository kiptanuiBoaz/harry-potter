"use client"
import './navbar.scss';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { usePathname, useRouter } from 'next/navigation';
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
import { GrNext } from 'react-icons/gr';

export const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  const token = process.env.COOKIE_TOKEN;
  const pathname = usePathname();

  //redux store states
  const theme = useSelector(selectTheme);

  //navigation fns
  const router = useRouter();
  const dispatch = useDispatch();

  //remove cookie 
  const logOut = () => {
    if (token) {
      Cookies.remove(token);
      dispatch(RESET_USER()); // remove user from redux
      router.push("/login");
    }
    dispatch(RESET_USER());//remove user from redux
    router.push("/login");
  }



  //handle click event
  const handleClick = () => {
    router.push("/");
  }


  return (
    <nav className={`navbar-container ${theme}-nav`}>
      <h1 className='logo'>Harry Potter</h1>
      {/* display limit selectror when viewing table */}

      {!pathname.includes("/character") && <Search />}

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
      <div className={`nav-items ${showMobileNav && "mobile-nav"}`}>

        <div className="link-container">
          {pathname.includes("/character") && <ActionBtn clickHandler={handleClick}> All Characters <GrNext />      </ActionBtn>}
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