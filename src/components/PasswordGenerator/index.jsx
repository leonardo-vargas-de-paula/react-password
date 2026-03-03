import { useState } from "react";
import Slider from "../Slider"

function PasswordGenerator() {
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
    return (
        <>
            <Slider className="password-length" min={4} max={64} value={passwordLength} onChange={setPasswordValue} type="Length"></Slider>
            <Slider className="digitslength" min={4} max={64} value={digitLength} onChange={setDigitValue} type="Digits"></Slider>
            <Slider className="symbol-length" min={4} max={64} value={symbolLength} onChange={setSymbolvalue} type="Symbols"></Slider>

        </>
    );
}

export default PasswordGenerator 