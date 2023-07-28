import React from "react";
import Logo from "../../../../public/assets/image/ic-logo.webp";
const ScreenLoader = () => {
    return (
        <section className="bg-gray-900 place-items-center grid h-screen w-screen gap-4 fixed top-0 left-0 z-50 bg-opacity-50">
            <div className="bg-amber-500 w-48 h-48  absolute animate-ping rounded-full delay-5s shadow-xl"></div>
            <div className="bg-amber-300 w-32 h-32 absolute animate-ping rounded-full shadow-xl"></div>
            <div className="bg-white w-24 h-24 absolute animate-pulse rounded-full shadow-xl"></div>
            <img src={Logo} alt="" className=" absolute z-50 h-12 w-12" />
        </section>
    );
};

export default ScreenLoader;
