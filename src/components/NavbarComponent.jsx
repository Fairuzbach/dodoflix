import { Navbar } from 'flowbite-react'
import logo from '../asset/DODO.png';
const NavbarComponent = () => {
    return (
        <Navbar
            fluid
            rounded
        >
            <Navbar.Brand>
                <img
                    alt="Flowbite Logo"
                    className="mr-3 h-6 sm:h-9"
                    src={logo}
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    DodoFlix
                </span>
            </Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link active href="/">
                    Home
                </Navbar.Link>
                <Navbar.Link href="/subscribe">
                    Subscribe
                </Navbar.Link>
                <Navbar.Link href="/pricing">
                    Pricing
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar >
    )
}
export default NavbarComponent