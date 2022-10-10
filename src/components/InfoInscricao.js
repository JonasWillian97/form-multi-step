import React from "react";

function InfoInscricao({ formData, setFormData }) {
  return (
    <div className="info-inscricao-container">
      <input
        type="text"
        placeholder="Email..."
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      <input
        type="password"
        placeholder="Senha..."
        value={formData.senha}
        onChange={(event) =>
          setFormData({ ...formData, senha: event.target.value })
        }
      />
      <input
        type="password"
        placeholder="Confirme sua senha..."
        value={formData.confirmesenha}
        onChange={(event) =>
          setFormData({ ...formData, confirmesenha: event.target.value })
        }
      />
    </div>
  );
}

export default InfoInscricao;

