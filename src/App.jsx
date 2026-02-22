import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/homepage";
import AboutMePage from "./pages/aboutmepage";
import ProjectsPage from "./pages/projectspage";
import ProjectPage from "./pages/projectpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route element={<DefaultLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/aboutme" element={<AboutMePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:id" element={<ProjectPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
