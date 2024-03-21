import './navbar.css';

function Navbar() {
    return (
        <><nav className="navbar">
            <div className="container">
                <div className="logo">
                </div>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">Skills</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav><div className='header'>
            </div></>
    );
}

export default Navbar;
