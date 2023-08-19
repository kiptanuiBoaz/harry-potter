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
import { RESET_USER } from '@/redux/slice/authSlice';

export const MobileMenu = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const pathname = usePathname();

    let token: string | undefined = "";
    token = process.env.NEXT_PUBLIC_COOKIE_TOKEN;

    const logOut = () => {
        if (token) {
            Cookies.remove(token);
            dispatch(RESET_USER()); // remove user from redux
            router.push("/login");
        };
    }


    //handle click event
    const handleClick = () => {
        router.push("/");
    }

    return (
        <div className='menu-items'>
            <Theme />
            {pathname !== ("/") &&  pathname !== "/login" && <ActionBtn clickHandler={handleClick}> All Characters <GrNext />      </ActionBtn>}
            {pathname !== ("/login") && <DangerBtn clickHandler={logOut}>Logout</DangerBtn>}
        </div>
    )
}