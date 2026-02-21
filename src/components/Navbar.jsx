import { Link } from 'react-router-dom';
import { Package } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <Package className="text-primary" />
                    <span>Stash-It</span>
                </Link>
                <div className="navbar-links">
                    <Link to="/host/dashboard">Host</Link>
                    <Link to="/seller/dashboard">Seller</Link>
                    <Link to="/admin/dashboard">Admin</Link>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
