import { useState } from "react";
import axios from "axios";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:8000/api/messages", formData)
      .then((response) => {
        console.log("Successo:", response.data);
        alert("Messaggio inviato correttamente!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Errore:", error);
        alert("Errore durante l'invio.");
      });
  }

  return (
    <div className="main-content container py-3 py-md-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="text-center mb-2 mb-md-5">
            <h1 className="display-4 text-uppercase mb-2">Contattami</h1>
            <p className="text-secondary">
              Hai un progetto in mente? Parliamone.
            </p>
          </div>

          <div className="bg-white p-4 p-md-5 rounded-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="small fw-bold text-secondary text-uppercase">
                  Nome
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm mt-1  border-0 bg-light py-3"
                  placeholder="Inserisci il tuo nome"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div className="mb-3">
                <label className="small fw-bold text-secondary text-uppercase">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control  form-control-sm mt-1 border-0 bg-light py-3"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div className="mb-4">
                <label className="small fw-bold text-secondary text-uppercase">
                  Messaggio
                </label>
                <textarea
                  className="form-control  form-control-sm mt-1 border-0 bg-light py-3"
                  rows="2"
                  placeholder="Come posso aiutarti?"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-outline-orange btn-sm w-100 py-2 fw-bold rounded-1"
              >
                Invia Messaggio
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
