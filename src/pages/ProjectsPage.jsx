import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProjectsPage({ projects }) {
  const storageUrl = "http://127.0.0.1:8000/storage/";

  // STATI
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [search, setSearch] = useState("");
  const [currentType, setCurrentType] = useState("");
  const [currentTech, setCurrentTech] = useState("");

  useEffect(() => {
    let results = projects;

    if (search) {
      results = results.filter((project) =>
        project.title.toLowerCase().includes(search.toLowerCase()),
      );
    }
    if (currentType) {
      results = results.filter((project) => project.type.slug === currentType);
    }
    if (currentTech) {
      results = results.filter((project) => {
        const techs = project.technologies.map((tech) => tech.slug);
        return techs.includes(currentTech);
      });
    }

    setFilteredProjects(results);
  }, [search, currentType, currentTech, projects]);

  return (
    <div className="main-content container py-3 py-md-5">
      <h1 className="display-4 text-uppercase text-center pb-4 mb-3 mb-md-5">
        I miei <span className="text-orange">Progetti</span>
      </h1>

      <div className="row g-2 g-md-4 mb-5 p-2 bg-light rounded-1 shadow-sm">
        <div className="col-md-4 my-2">
          <label className="small fw-bold text-secondary text-uppercase">
            Cerca
          </label>
          <input
            type="text"
            className="form-control border-0 shadow-sm"
            placeholder="Nome progetto..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-md-4 mt-2">
          <label className="small fw-bold text-secondary text-uppercase">
            Tipologia
          </label>
          <select
            className="form-select border-0 shadow-sm"
            onChange={(e) => setCurrentType(e.target.value)}
          >
            <option value="">Tutte le categorie</option>
            <option value="front-end">Front-end</option>
            <option value="back-end">Back-end</option>
            <option value="full-stack">Full-stack</option>
          </select>
        </div>
        <div className="col-md-4 mt-2">
          <label className="small fw-bold text-secondary text-uppercase">
            Tecnologia
          </label>
          <select
            className="form-select border-0 shadow-sm"
            onChange={(e) => setCurrentTech(e.target.value)}
          >
            <option value="">Tutte le tech</option>
            <option value="react">React</option>
            <option value="laravel">Laravel</option>
            <option value="php">PHP</option>
            <option value="javascript">JavaScript</option>
            <option value="mysql">MySQL</option>
          </select>
        </div>
      </div>

      {!filteredProjects || filteredProjects.length === 0 ? (
        <div className="text-center py-5">
          <p className="fs-4 text-muted">
            Nessun progetto corrisponde ai filtri selezionati.
          </p>
        </div>
      ) : (
        <div className="row g-3 g-md-5 mt-2">
          {filteredProjects.map((project) => (
            <div key={project.id} className="col-lg-6">
              <Link
                to={`/projects/${project.slug}`}
                className="text-decoration-none text-dark"
              >
                <div className="card h-100 border-0 overflow-hidden bg-white ">
                  <div className="row g-0 h-100">
                    <div className="col-md-6">
                      <img
                        src={`${storageUrl}${project.img_url}`}
                        className="img-fluid h-100 w-100 ps-3 py-2"
                        alt={project.title}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="card-body d-flex flex-column h-100 p-4">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div className="d-flex justify-content-between align-items-baseline w-100">
                            <h3 className="h4 fw-bold mb-3">{project.title}</h3>
                            <span
                              className="badge rounded-pill px-4 py-2"
                              style={{
                                backgroundColor: project.type.color,
                                fontSize: "0.7rem",
                              }}
                            >
                              {project.type.name}
                            </span>
                          </div>
                        </div>

                        <p className="text-muted small flex-grow-1">
                          {project.description.substring(0, 100)}...
                        </p>

                        <div className="pt-3 border-top">
                          <p
                            className="text-uppercase fw-bold text-secondary mb-2"
                            style={{ fontSize: "0.6rem", letterSpacing: "1px" }}
                          >
                            Tech Stack
                          </p>
                          <div className="d-flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <img
                                key={tech.id}
                                src={`${storageUrl}${tech.img_url}`}
                                alt={tech.name}
                                title={tech.name}
                                style={{
                                  width: "22px",
                                  height: "22px",
                                  objectFit: "contain",
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
