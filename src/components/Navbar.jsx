import react from "../assets/react.svg";
import Button from "./Button";
export default function Navbar() {
  return (
    <div className="navbar">
      <img src={react} alt="react image" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <Button />
    </div>
  );
}
