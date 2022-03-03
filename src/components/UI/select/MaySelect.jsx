import React from 'react';

const MaySelect = ({ oprions, defoltValue, value, onChange }) => {
    return (
        <select
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled value="">{defoltValue}</option>
            {oprions.map(opti =>
                <option key={opti.value} value={opti.value}>
                    {opti.name}
                </option>
            )}
        </select>
    );
}

export default MaySelect;
