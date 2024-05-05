import React from 'react';
import './Dropdown.css';

function Dropdown({ title, options, func }) {
    return (
        <div className="select  h-full  text-zinc-200 p-[3px] ">
            <select defaultValue="0" name="format" id="format" style={{ width: '100%' }} className='p-[.5vw]' onChange={func}>
                <option value="0" disabled>
                    {title}
                </option>
                {
                    options.map((o, idx) => (
                        <option value={o} key={idx} >{o.toUpperCase()}</option>
                    ))
                }
            </select>
        </div>
    );
}

export default Dropdown;
