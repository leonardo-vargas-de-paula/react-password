import "./styles.css"

function Slider({ min, max, value, onChange, type }) {
    return (
        <div className="slider">
            <label htmlFor={`${type}-length`}>{type}</label>
            <input type="range" min={min} max={max} value={value} onChange={onChange} />
            <span className="lengthValue">
                {value}
            </span>
        </div>
    );

}

export default Slider;