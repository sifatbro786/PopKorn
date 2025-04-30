export default function Dropdown({ title, options, handleChange }) {
    return (
        <div className="select">
            <select name="format" id="format" defaultValue={0} onChange={handleChange}>
                <option value="0" disabled>
                    {title}
                </option>
                {options.map((item) => (
                    <option key={item} value={item}>
                        {item.toUpperCase()}
                    </option>
                ))}
            </select>
        </div>
    );
}
