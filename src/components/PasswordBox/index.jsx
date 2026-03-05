import "./styles.css"

function PasswordBox({ password }) {

        const charClass = (char) => {
        if (char.match(/[a-zA-Z]/)) return "letter";
        if (char.match(/[0-9]/)) return "digit";
        return "symbol";
 
    };

    const splitPassword = (passwordString) => (
        Array.from(passwordString).map(
            (char, index) => (
                <span key={index} className={charClass(char)}>{char}</span>
            )
        )
    );

    return (
        <div className="password-container">
            <p className="password-display">
                {splitPassword(password)}
            </p>
        </div>
    );
}

export default PasswordBox