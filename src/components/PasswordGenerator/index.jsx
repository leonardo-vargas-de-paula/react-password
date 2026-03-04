import { useState, useEffect } from "react";
import Slider from "../Slider";
import "./styles.css";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [digitLength, setDigitLength] = useState(2);
  const [symbolLength, setSymbolLength] = useState(2);
  const setPasswordValue = ({ target }) => {
    return setPasswordLength(parseInt(target.value));
  };
  const setDigitValue = ({ target }) => {
    return setDigitLength(parseInt(target.value));
  };
  const setSymbolvalue = ({ target }) => {
    return setSymbolLength(parseInt(target.value));
  };

  //eu faria isso provavelmente em um backend, 
  //aqui está assmi para seguir a didatica do curso
  const randomDigit = () => {
    const digits = "0123456789";
    return digits[Math.floor(Math.random() * digits.length)];
  };

  const randomSymbol = () => {
    const symbols = "#$()-+_*&%@!?°{}";
    return symbols[Math.floor(Math.random() * symbols.length)];
  };

  const randomLetters = () => {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const letter = letters[Math.floor(Math.random() * letters.length)];
    return (Math.random() >= 0.5) ? letter : letter.toUpperCase();
};

  //apenas de teste para usar o useEffect
  useEffect(() => {
    const draftPassword = [];

    draftPassword.push(...Array.from({length: digitLength},randomDigit));
    draftPassword.push(...Array.from({length: symbolLength},randomSymbol));
    draftPassword.push(...Array.from({length: passwordLength},randomLetters));
    
    
    

    setPassword(
      draftPassword
        .slice(0, passwordLength)
        .sort(() => Math.random() - 0.5)
        .join(""),
    );
  }, [passwordLength, digitLength, symbolLength]);


  return (
    <>
      <Slider
        className="password-length"
        min={4}
        max={64}
        value={passwordLength}
        onChange={setPasswordValue}
        type="Length"
      ></Slider>
      <Slider
        className="digitslength"
        min={0}
        max={64}
        value={digitLength}
        onChange={setDigitValue}
        type="Digits"
      ></Slider>
      <Slider
        className="symbol-length"
        min={0}
        max={64}
        value={symbolLength}
        onChange={setSymbolvalue}
        type="Symbols"
      ></Slider>

      <h1 className="password-display">Senha: {password}</h1>
    </>
  );
}

export default PasswordGenerator;
