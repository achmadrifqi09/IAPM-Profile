import React from "react";
import { Link } from "@inertiajs/inertia-react";

const LinkWithIcon = (props) => {
    const { url, children } = props;

    return (
        <>
            <Link
                className="flex items-center gap-2 bg-amber-500 px-4 py-2 rounded-lg"
                href={url}
                as="button"
            >
                {children}
            </Link>
        </>
    );
};

export default LinkWithIcon;
