import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route element={<DefaultLayout />}>
              <Route index element={<HomePage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
