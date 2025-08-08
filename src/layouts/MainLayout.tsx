import Header from "@/components/header/Header";
import Home from "@/pages/home";

export default function MainLayout() {
  return (
    <main>
      <Header />
      {/* this will normally be the <Outlet /> component for nested routes but for now since there's only one route without a routing library, 
      we'll just render the Home component */}
      <Home />
    </main>
  );
}
