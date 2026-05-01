import "./Navbar.css";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";

function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <Search />
      <Button>
        Give Feedback
      </Button>
    </nav>
  );
}

export default Navbar;