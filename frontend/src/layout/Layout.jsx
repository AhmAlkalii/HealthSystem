import { Outlet } from "react-router-dom";
import { Nav } from "../components/Nav";


export const Layout = () => {
  return (
    <div className="layout">
      <Nav/>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}