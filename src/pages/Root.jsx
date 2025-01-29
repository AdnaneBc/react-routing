import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
function Layout() {
  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === "loading" && <p>loading ...</p>} */}
        <Outlet />
      </main>
    </>
  );
}
export default Layout;
