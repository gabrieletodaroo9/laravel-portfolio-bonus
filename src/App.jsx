import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/homepage";
import ProjectsPage from "./pages/projectspage";
import ProjectPage from "./pages/projectpage";
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [profile, setProfile] = useState({});
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/projects")
      .then((res) => setProjects(res.data.data))
      .catch(err=>console.log(err));

      axios
      .get("http://127.0.0.1:8000/api/profile")
      .then((res) => setProfile(res.data.data))
      .catch(err=>console.log(err));

  }, []);

  console.log(projects);
  console.log(profile);

  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route element={<DefaultLayout />}>
              <Route index element={<HomePage tod={profile} />} />
              <Route path="/projects" element={<ProjectsPage projects={projects}/>} />
              <Route path="/projects/:slug" element={<ProjectPage projects={projects} />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
