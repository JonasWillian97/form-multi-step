import React from "react";

function OutrasInfo({ formData, setFormData }) {
  return (
    <div className="outras-info-container">
      <input
        type="text"
        placeholder="Nacionalidade..."
        value={formData.nacionalidade}
        onChange={(e) => {
          setFormData({ ...formData, nacionalidade: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Other..."
        value={formData.other}
        onChange={(e) => {
          setFormData({ ...formData, other: e.target.value });
        }}
      />
    </div>
  );
}

export default OutrasInfo;