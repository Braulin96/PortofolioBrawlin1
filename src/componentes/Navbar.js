const Navbar = () => {
    return (  
        <nav className="navbar">    
            <div className="navbarContainer">
                <a href="/">
                    <abbr title="Author of the quotes/ Creator of the page"> <h1> Brawlin Pires</h1></abbr>
                </a>
                <div className="links">
                    <ul>
                    <a href="/">Home</a>
                    <a href="/text">Text</a>
                    <a href="/slam">Slam/Poetry</a>
                    </ul>
                </div>
            </div>

        </nav>
    );
}
 
export default Navbar ;