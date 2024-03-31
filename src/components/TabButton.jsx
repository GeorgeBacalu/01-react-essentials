import "./TabButton.css";

export default function TabButton({ isSelected, children, ...actions }) {
  return <li><button className={isSelected ? "active" : undefined} {...actions}>{children}</button></li>;
}