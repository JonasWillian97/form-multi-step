import React, { useState } from "react";
import InfoInscricao from "./InfoInscricao";
import InfoPessoal from "./InfoPessoal";
import OutrasInfo from "./OutrasInfo";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
   confirmeSenha: "",
   primeiroNome: "",
    segundoNome: "",
    nomedeUsuario: "",
    nacionalidade: "",
    outro: "",
  });

  const FormTitles = ["SingUp", "Info Pessoal", "Other"];

  const PageDisplay = () => {
    if (page === 0) {
      return <InfoInscricao formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <InfoPessoal formData={formData} setFormData={setFormData} />;
    } else {
      return <OutrasInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Anterior
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Enviar" : "Próximo"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;