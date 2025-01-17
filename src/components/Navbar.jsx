import React from "react";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import SideMenu from "./SideMenu";
import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileDropdown from "./ProfileDropdown";
const Navbar = ({ cart }) => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    return (
        <div className="flex justify-center md:justify-between items-center border-b-2 h-16 px-6 md:px-32 text-lg">
            <div className="md:hidden w-20 flex justify-start">
                <SideMenu />
            </div>
            <div className="flex items-center justify-center">
                <a href="/">
                    <img
                        className="w-48 md:w-52 md:min-w-52"
                        src="/logo4.png"
                    />
                </a>
                <div className="hidden md:flex md:justify-start md:items-center">
                    <Link className="px-4 hover:underline" to={"/products"}>
                        Collection
                    </Link>
                    <Link className="px-4 hover:underline" to={"/about"}>
                        About Us
                    </Link>
                    <Link className="px-4 hover:underline" to={"/contact"}>
                        Contact
                    </Link>
                </div>
            </div>
            <div className="flex w-20 md:w-[500px] justify-end items-center">
                <Link to={"/cart"} className="relative mr-3 md:mr-6">
                    <div>
                        <div className="md:text-2xl">
                            <BsBag />
                        </div>
                        {cart.length > 0 && (
                            <div className="absolute p-2 inline-flex items-center justify-center w-4 h-4 text-xs font-semibold text-white bg-gray-600 border-2 border-white rounded-full -top-2 -end-2">
                                {cart.length}
                            </div>
                        )}
                    </div>
                </Link>
                <div className="hidden md:block">
                    {isAuthenticated ? <ProfileDropdown /> : <LoginButton />}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
