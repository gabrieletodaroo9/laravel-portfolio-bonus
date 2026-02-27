export default function HomePage({ tod }) {
  const imageUrl = `url('http://127.0.0.1:8000/storage/${tod.profile_image}')`;

  return (
    <>
      {!tod ? (
        "loading"
      ) : (
        <>
          <div className="main-content">
            <section
              className="jumbo-profile"
              style={{ "--bg-image": imageUrl }}
            >
              <div className="jumbo-content">
                <h1 className="display-1 fw-bold mb-2 text-orange text-deep">
                  {tod.name}
                </h1>
                <p className="fs-2 0 mb-lg-5 pb-3 text-white text-deep">
                  {tod.job_title}
                </p>

                <div className="d-flex gap-3">
                  <a
                    href={tod.github_link}
                    className="btn btn-outline-orange btn-lg"
                  >
                    <i className="bi bi-github me-2"></i>GitHub
                  </a>
                  <a 
                    href={tod.linkedin_link}
                    className="btn btn-outline-light btn-lg"
                  >
                    <i className="bi bi-linkedin me-2"></i>LinkedIn
                  </a>
                </div>
              </div>
            </section>

            <section className="container-lg mt-4 mt-md-5 p-0">
              <div className="d-flex justify-content-start align-items-center">
                <div className="text-lg-center container-lg">
                  <p className="fs-4 lh-lg">{tod.bio}</p>
                </div>
              </div>
            </section>
          </div>
        </>
      )}
    </>
  )
}
