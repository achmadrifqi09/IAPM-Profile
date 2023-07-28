import React from "react";
import SideBar from "../Components/Sidebar";
import PanelFooter from "../Components/Footer/PanelFooter";
const MasterLayout = ({ children }) => {
    return (
        <>
            <SideBar />
            <main className="max-w-screen-xxl p-4 md:px-8 mx-auto font-inter min-h-screen pt-20">
                {children}
            </main>
            <PanelFooter />
        </>
    );
};

export default MasterLayout;
