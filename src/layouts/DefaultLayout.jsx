import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DefaultLayout() {
  return (
    <>
      <div className="min-vh-100 d-flex flex-column">
        <Header />
        <div className="flex-grow-1">
          <Outlet />
        </div>
        <Footer/>
      </div>
    </>
  );
}
