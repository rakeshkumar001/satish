import { Avatar, Dropdown, Navbar, DarkThemeToggle } from "flowbite-react";
import blogLogo from "../assets/images/download.png"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="border-b-primary shadow-primary  shadow-lg border-solid fixed z-10 w-full top-0 m-0">
            <Navbar fluid rounded >
                <Navbar.Brand href="/home">
                    <img src={blogLogo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <DarkThemeToggle />
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm font-bold">Bonnie Green</span>
                        </Dropdown.Header>
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item><Link to={"/login"}>Sign out</Link></Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link><Link to={"/home"}>Home</Link></Navbar.Link>
                    <Navbar.Link ><Link to={"/blogs"}>Blogs</Link></Navbar.Link>
                    <Navbar.Link><Link to={"/talk_to_us"}>Contact</Link></Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header
