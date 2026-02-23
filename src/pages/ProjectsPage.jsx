import { Link } from 'react-router-dom';

export default function ProjectsPage({ projects }) {
  const storageUrl = "http://127.0.0.1:8000/storage/";

  return (
    <div className="main-content container py-5">
      <h1 className="display-4 fw-bold text-center mb-5">
        I miei <span style={{ color: '#F0801B' }}>Progetti</span>
      </h1>

      {!projects || projects.length === 0 ? (
        <div className="text-center fs-3">Caricamento progetti...</div>
      ) : (
        <div className="row g-5">
          {projects.map((project) => (
            <div key={project.id} className="col-lg-6">
              
              <Link to={`/projects/${project.slug}`} className="text-decoration-none text-dark">
                <div className="card bg-light h-100 shadow-sm border-0 rounded-0 overflow-hidden project-card">
                  
                  <div className="row g-0 h-100">
                    <div className="col-md-6">
                      <img 
                        src={`${storageUrl}${project.img_url}`} 
                        className="img-fluid h-100" 
                        alt={project.title}
                        style={{ objectFit: 'cover', minHeight: '250px' }}
                      />
                    </div>

                    <div className="col-md-6">
                      <div className="card-body d-flex flex-column h-100 p-4">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <h3 className="card-title fw-bold mb-0">{project.title}</h3>
                          <span 
                            className="badge rounded-pill" 
                            style={{ backgroundColor: project.type.color, fontSize: '0.75rem' }}
                          >
                            {project.type.name}
                          </span>
                        </div>

                        <div className="mt-3">
                          <p className="small fw-bold text-uppercase text-secondary mb-2" style={{ fontSize: '0.7rem' }}>
                            Tecnologie
                          </p>
                          <div className="d-flex flex-wrap gap-2">
                            {project.technologies.map(tech => (
                              <img 
                                key={tech.id}
                                src={`${storageUrl}${tech.img_url}`} 
                                alt={tech.name} 
                                title={tech.name}
                                style={{ width: '22px', height: '22px', objectFit: 'contain' }}
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