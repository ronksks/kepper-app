import React from "react";

const currentYear = new Date().getFullYear();
function Footer() {

    return (
        <div>
            <footer>
                Copyright @ {currentYear}
            </footer>
        </div>

    );
}

export default Footer;