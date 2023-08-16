import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import "./mobile-menu.scss";
import { useRouter } from 'next/router';
import { Theme } from './Theme';
import { ActionBtn } from './ActionBtn';
import { DangerBtn } from './DangerBtn';

export const MobileMenu = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const logOut = () => {
        Cookies.remove(token);
        router.push("/login");
    }

    const token = process.env.COOKIE_TOKEN;



    //handle click event
    const handleClick = () => {
        router.push(router.pathname === "/edit" ? "/" : "/edit");
    }

    return (
        <div className='menu-items'>
            <Theme />
            <ActionBtn clickHandler={handleClick}>  {router.pathname !== "/edit" ? "Add New Joke" : "Back to Jokes"}</ActionBtn>
            <DangerBtn clickHandler={logOut}>Logout</DangerBtn>
        </div>
    )
}