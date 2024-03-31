import atomLogo from "../assets/react-core-concepts.png";
import "./Header.css";

export default function Header() {
  const descriptions = ["Fundamental", "Crucial", "Core"];

  const getRandomDescriptionIndex = () => Math.floor(Math.random() * descriptions.length);

  return (
    <header>
      <img src={atomLogo} alt="atom-logo" />
      <h1>React Essentials</h1>
      <p>{descriptions[getRandomDescriptionIndex()]} React concepts you will need for almost any app you are going to build</p>
    </header>
  );
}