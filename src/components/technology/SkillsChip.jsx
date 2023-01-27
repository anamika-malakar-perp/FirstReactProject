import React from 'react';
import './Technology.css'

const SkillsChip = ({props}) => {
    return (
        <>
            {props.map((data, i) =>
                <div className='skills'>{data}</div>
            )}
        </>
    )
}

export default SkillsChip