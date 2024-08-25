import { Link } from "react-router-dom";
import  {useLogout} from "../hooks/useLogout";

const BlogsNav = () => {

    const { logout } = useLogout();

    function handleClick() {
        // localStorage.removeItem("user");
        console.log("logout clicked");
        logout();
        // window.location.reload();
    }

    return (
        <nav className="navbar">
            <div className="site-title">
                <Link to="/">BLOGS NAV</Link>
            </div>
            <ul>
                <li> <Link to="/blogs">All Blogs</Link> </li>
                <li> <Link to="/about">About</Link> </li>
                <li><Link to="/newblog">New Blog</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Register</Link></li>
            </ul>
            <div><button onClick={handleClick}>Logout</button></div>
        </nav>
    );
}

export default BlogsNav;
