import useGetCellTowers from "@/hooks/cell-towers/useGetCellTowers";
import Analytics from "./components/Analytics";
import Charts from "./components/Charts";
import CellTowersTable from "./components/CellTowersTable";
import HomeLoading from "./loading";
import RequestError from "@/components/shared/RequestError";

export default function HomePage() {
  const { data, loading, error } = useGetCellTowers();

  // using something like react-query will prevent the need for this condition since we can use the useSuspenseQuery hook,
  // which will enable us to handle the loading state in a wrapper react suspense component
  if (loading) return <HomeLoading />;

  if (!data || error) return <RequestError message={error} />;

  return (
    <>
      <Analytics towers={data} />
      <Charts towers={data} />
      <CellTowersTable data={data} />
    </>
  );
}
