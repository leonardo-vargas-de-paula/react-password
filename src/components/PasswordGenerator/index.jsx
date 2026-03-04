import { useState, useEffect } from "react";
import Slider from "../Slider";

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

  //apenas de teste para usar o useEffect
  useEffect(() => {
    const draftPassword = [];

    draftPassword.push("1");
    draftPassword.push("2");
    draftPassword.push("&");
    draftPassword.push("*");
    draftPassword.push("x");
    draftPassword.push("y");
    draftPassword.push("x");
    draftPassword.push("y");
    draftPassword.push("x");
    draftPassword.push("y");
    draftPassword.push("x");
    draftPassword.push("y");


    setPassword(draftPassword
        .slice(0,passwordLength)
        .sort(()=> Math.random()-0.5)
        .join(""));
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
        min={4}
        max={64}
        value={digitLength}
        onChange={setDigitValue}
        type="Digits"
      ></Slider>
      <Slider
        className="symbol-length"
        min={4}
        max={64}
        value={symbolLength}
        onChange={setSymbolvalue}
        type="Symbols"
      ></Slider>

      <h1>Senha: {password}</h1>
    </>
  );
}

export default PasswordGenerator;
