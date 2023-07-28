import React from "react";
import { Head } from "@inertiajs/inertia-react";
import MasterLayout from "../../Layouts/master-layout";
// import Table from "../../Components/Table";

const Home = () => {
    return (
        <>
            <Head title="Home" />
            <MasterLayout>
                <div className="pt-20">
                    <h1>HOme</h1>

                    {/* <Table /> */}
                </div>
            </MasterLayout>
        </>
    );
};

export default Home;
