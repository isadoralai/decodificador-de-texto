import React, { useState, useEffect } from "react";
import "./OutputTextStyle.css";

function OutputText({ encryptedText }) {
  const [outputText, setOutputText] = useState(encryptedText);

  useEffect(() => {
    setOutputText(encryptedText);
  }, [encryptedText]);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(outputText);
    } catch (err) {
      console.error("Erro ao copiar o texto: ", err);
    }
  };

  const handleClearClick = () => {
    setOutputText("");
  };

  return (
    <div className="main-div-output">
      <div>
        <p>{outputText}</p>
      </div>

      <div className="btn-div">
        <button className="btn" onClick={handleCopyClick}>
          Copiar
        </button>
        <button className="btn" onClick={handleClearClick}>
          Limpar
        </button>
      </div>
    </div>
  );
}

export default OutputText;
