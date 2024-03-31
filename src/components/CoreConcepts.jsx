import { coreConcepts } from "../data";
import Section from "./Section";
import CoreConcept from "./CoreConcept";
import "./CoreConcepts.css"

export default function CoreConcepts() {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>{coreConcepts.map(concept => <CoreConcept key={concept.title} {...concept} />)}</ul>
    </Section>
  );
}