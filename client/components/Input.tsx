interface Props {
    name: string,
    value: string | number,
    type: string,
    placeholder: string,
    onChange: any,
    label?: string
}

function Input({ name, value, type, placeholder, onChange, label} : Props) {
    return (
        <div className="input-container">
            <label htmlFor={`input-id-${label}`} className="input-label">{label}</label>
            <input name={name} id={`input-id-${label}`} className="input"
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                required
            />
        </div>
    )
}

export default Input