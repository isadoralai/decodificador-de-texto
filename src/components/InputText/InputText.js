import React, { useState } from "react";
import "./InputText.css";
import OutputText from "../OutputText/OutputText";

function InputText() {
  const [text, setText] = useState("");
  const [encryptedText, setEncryptedText] = useState("");

  const handleEncryptClick = () => {
    // Substituir a letra "e" por "enter"
    const modifiedTextE = text.replace(/e/gi, "enter");

    // Substituir a letra "i" por "imes"
    const modifiedTextEI = modifiedTextE.replace(/i/gi, "imes");

    // Substituir a letra "a" por "ai"
    const modifiedTextEIA = modifiedTextEI.replace(/a/gi, "ai");

    // Substituir a letra "o" por "ober"
    const modifiedTextEIAO = modifiedTextEIA.replace(/o/gi, "ober");

    // Substituir a letra "u" por "ufat"
    const modifiedTextEIAOU = modifiedTextEIAO.replace(/u/gi, "ufat");

    setEncryptedText(modifiedTextEIAOU);
  };

  const handleDecryptClick = () => {
    // Substituir "ai" por "a"
    const modifiedTextA = text.replace(/ai/gi, "a");

    // Substituir "enter" por "e"
    const modifiedTextAE = modifiedTextA.replace(/enter/gi, "e");

    // Substituir "imes" por "i"
    const modifiedTextAEI = modifiedTextAE.replace(/imes/gi, "i");

    // Substituir "ober" por "o"
    const modifiedTextAEIO = modifiedTextAEI.replace(/ober/gi, "o");

    // Substituir "ufat" por "u"
    const modifiedTextAEIOU = modifiedTextAEIO.replace(/ufat/gi, "u");

    setEncryptedText(modifiedTextAEIOU);
  };

  return (
    <div className="main-div-input">
      <div>
        <h1>Decodificador de Texto</h1>
      </div>
      <div className="texts">
        <div className="textarea-btn-div">
          <textarea
            type="text"
            placeholder="Digite seu texto aqui (apenas letras minúsculas, sem acentos ou caracteres especiais)."
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <div className="btn-div">
            <button className="btn" onClick={handleEncryptClick}>
              Criptografar
            </button>
            <button className="btn" onClick={handleDecryptClick}>
              Descriptografar
            </button>
          </div>
        </div>

        <div>
          <OutputText encryptedText={encryptedText} />
        </div>
      </div>
    </div>
  );
}

export default InputText;
