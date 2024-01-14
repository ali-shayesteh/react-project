import Sample from "./sample";
import LibrariesTable from "./librariesTable";
import Summary from "./summary";

export default function Home() {
  return (
    <>
      <Summary />

      <LibrariesTable />

      <Sample />
    </>
  );
}
