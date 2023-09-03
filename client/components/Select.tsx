interface Props {
    value: string | number,
    onChange: any,
    label?: string
    options?: Option[] | undefined,
}

interface Option {
    value: number
    label: string
}



function Select({ value, options, onChange, label} : Props) {

    return (
        <div className="input-container">
            <label htmlFor={`select-id-${label}`} className="input-label">{label}</label>
            <select className="input" id={`select-id-${label}`} value={value} onChange={onChange}>
                {options?.map(option => <option key={option.value} value={option.value}>{option.label} </option>)}
            </select>
        </div>
    )
}

export default Select