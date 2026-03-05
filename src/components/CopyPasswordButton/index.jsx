import "./styles.css"

function CopyPasswordButton({ password }) {


    const CopyPasswordToClipboard = async () => {
        try {
            
            await navigator.clipboard.writeText(password);
            alert("Password copied!");
        } catch (err) {
            console.error("Error when copying: ", err);
        }
    }

    return (
        <div className="actions">
            <button className="copy-password-to-clipboard"
                onClick={CopyPasswordToClipboard}>
                copy
            </button>
        </div>
    );
}

export default CopyPasswordButton;