import "./index.css";

const Navbar = () => {
    return (
    <nav className="navbar">
    <div className="manuka-container">
        <div class="nav-icon">
            &#9776;
        </div>
        <button className="manuka-button">WHICH MANUKA IS FOR ME?</button>
        <ul className="nav-links">
            <li><a href="/">Shop</a></li>
            <li><a href="/">Explore</a></li>
        </ul>
    </div>
    <div className="logo">
        <img src='https://res.cloudinary.com/dwnmq44oa/image/upload/v1756567749/Link_opmxg1.png' alt="NewZelanad Honey Co." />
    </div>
        <ul className="nav-links">
            <li><a href="/">About</a></li>
            <li><a href="/">Rewards</a></li>
            <li><a href="/">Contact</a></li>
        </ul>
        <div className="nav-icons">
            <img src="https://res.cloudinary.com/dwnmq44oa/image/upload/v1756567187/SVG1_ojajmq.png" alt="profile-icon"/>
            <img src="https://res.cloudinary.com/dwnmq44oa/image/upload/v1756567168/details-modal_Details_Slot_Button_dialog_-_Search_ywbkaj.png" alt="search-icon" />
            <img src="https://res.cloudinary.com/dwnmq44oa/image/upload/v1756567154/Button_dialog_a9jjgj.png" alt="cart-icon"/>
        </div>
    </nav>
    );
};

export default Navbar;
