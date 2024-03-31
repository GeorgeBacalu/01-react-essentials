import { useState } from "react";
import { examples } from "../data";
import Section from "./Section";
import TabButton from "./TabButton";
import TabContent from "./TabContent";
import "./Examples.css";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleSelect = value => setSelectedTopic(value);

  return (
    <Section title="Examples" id="examples">
      <menu>{Object.entries(examples).map(([key, value]) => <TabButton key={key} isSelected={selectedTopic === value} onClick={() => handleSelect(value)}>{value.title}</TabButton>)}</menu>
      {selectedTopic ? <TabContent {...selectedTopic} /> : <p>Please select a topic!</p>}
    </Section>
  );
}