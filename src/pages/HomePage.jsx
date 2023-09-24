import { Header, Counter } from "../components";

export function HomePage() {
  return (
    <main>
      <Header
        heading="Word Counter"
        subHeading="Free online character and word count tool"
      />
      <Counter />
    </main>
  );
}
