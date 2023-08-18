"use client"
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import "./mobile-menu.scss";
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { Theme } from './Theme';
import { ActionBtn } from './ActionBtn';
import { DangerBtn } from './DangerBtn';
import { GrNext } from 'react-icons/gr';

export const MobileMenu = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const pathname = usePathname();

    const logOut = () => {
        if (token) {
            Cookies.remove(token);
            router.push("/login");
        }
    }

    const token = process.env.COOKIE_TOKEN;

    //handle click event
    const handleClick = () => {
        router.push(pathname === "/edit" ? "/" : "/edit");
    }

    return (
        <div className='menu-items'>
            <Theme />
            {pathname.includes("/character") && <ActionBtn clickHandler={handleClick}> All Characters <GrNext/></ActionBtn>}
            <DangerBtn clickHandler={logOut}>Logout</DangerBtn>
        </div>
    )
}