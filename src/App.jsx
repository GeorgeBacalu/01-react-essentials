import { useState } from "react";
import { coreConcepts, examples } from "./data";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import TabContent from "./components/TabContent";

export default function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleSelect = value => setSelectedTopic(value);

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>{coreConcepts.map(concept => <CoreConcept key={concept.title} {...concept} />)}</ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>{Object.entries(examples).map(([key, value]) => <TabButton key={key} isSelected={selectedTopic === value} onSelect={() => handleSelect(value)}>{value.title}</TabButton>)}</menu>
          {selectedTopic ? <TabContent {...selectedTopic} /> : <p>Please select a topic!</p>}
        </section>
      </main>
    </>
  );
}