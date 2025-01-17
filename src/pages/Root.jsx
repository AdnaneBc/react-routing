import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
function Layout() {
  const navigation = useNavigation();
  console.log(navigation);
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
