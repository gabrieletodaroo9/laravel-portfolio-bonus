import { useParams, Link } from "react-router-dom";

export default function ProjectDetail({ projects }) {
  const { slug } = useParams();
  const storageUrl = "http://127.0.0.1:8000/storage/";

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="container py-5 text-center">
        <p className="text-muted">Caricamento in corso...</p>
      </div>
    );
  }

  return (
    <div className="main-content container py-5">
      <div className="mb-4">
        <Link
          to="/projects"
          className="btn btn-sm btn-outline-orange border-0 rounded-1"
        >
          ← Torna alla lista
        </Link>
      </div>

      <div className=" d-flex justify-content-between px-0 px-lg-5 align-items-center mb-4">
        <h1 className=" display-3 text-uppercase mb-4 text-center">
          {project.title}
        </h1>
        <span
          className="badge rounded-pill px-4 py-2"
          style={{ backgroundColor: project.type.color }}
        >
          {project.type.name}
        </span>
      </div>

      <div className="bg-white overflow-hidden">
        <div className="border-0 p-3">
          <img
            src={`${storageUrl}${project.img_url}`}
            alt={project.title}
            className="img-fluid w-100 object-fit-contain"
            style={{ maxHeight: "500px" }}
          />
        </div>

        <div className="p-4 p-md-5">
  <div className="row g-5">
    
    <div className="col-md-9">
      <div className="pe-md-5"> 
        <h6 className="text-first text-uppercase fw-bold mb-3" style={{ letterSpacing: '1px' }}>
          Descrizione progetto
        </h6>
        <p className="text-first lh-lg mb-0" style={{ fontSize: '1.1rem' }}>
          {project.description}
        </p>
      </div>
    </div>

    <div className="col-md-3 border-start border-2">
      <div className="ps-md-2">
        
        <div className="mb-3">
          <h6 className="text-secondary text-uppercase fw-bold mb-3 small">
            Tecnologie
          </h6>
          <div className="d-flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <div 
                key={tech.id} 
                className=" p-2 rounded-2 d-flex align-items-center justify-content-center"
                title={tech.name}
              >
                <img
                  src={`${storageUrl}${tech.img_url}`}
                  alt={tech.name}
                  width="25"
                  height="25"
                  className="object-fit-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <a
            href={project.link_github}
            className="btn w-100 py-2 rounded-pill d-flex align-items-center justify-content-start gap-2"
          >
            <span>Link GitHub <i className="ms-2 bi bi-github"></i> </span>
          </a>
        </div>

      </div>
    </div>

  </div>
</div>
      </div>
    </div>
  );
}
