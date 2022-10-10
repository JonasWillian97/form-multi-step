import React from "react";

function InfoPessoal({ formData, setFormData }) {
  return (
    <div className="info-pessoal-container">
      <input
        type="text"
        placeholder="Primeiro nome..."
        value={formData.primeironome}
        onChange={(e) => {
          setFormData({ ...formData, primeironome: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Segundo nome..."
        value={formData.segundonome}
        onChange={(e) => {
          setFormData({ ...formData, segundonome: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Nome de usuário"
        value={formData.nomedeusuario}
        onChange={(e) => {
          setFormData({ ...formData, nomedeusuario: e.target.value });
        }}
      />
    </div>
  );
}

export default InfoPessoal;