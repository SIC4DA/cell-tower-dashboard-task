import Header from "@/components/header/Header";
import useGetCellTowers from "@/hooks/useGetCellTowers";
import Analytics from "./components/Analytics";
import Charts from "./components/Charts";
import CellTowersTable from "./components/CellTowersTable";

export default function HomePage() {
  const { data, loading } = useGetCellTowers();

  if (loading) return <div>Loading...</div>;

  if (!data) return <div>No data</div>;

  return (
    <main>
      <Header />
      <Analytics towers={data} />
      <Charts towers={data} />
      <CellTowersTable data={data} />
    </main>
  );
}
