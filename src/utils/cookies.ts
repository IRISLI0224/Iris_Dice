

const COOKIES_NAME = 'react-dice-cookies';


export const getCookies = () => localStorage.getItem(COOKIES_NAME);


export const setCookies = (cookies) => localStorage.setItem(COOKIES_NAME, cookies);


export const removeCookies = () => localStorage.removeItem(COOKIES_NAME);


