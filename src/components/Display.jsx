import React from 'react'


const Display = (props) => {
    const boxStyle = {
        height: '100px',
        width: '100px'
    }

    const displayContainer = {
        display: 'flex',
        flexFlow: 'row wrap',
        padding: '30px'
    }

    return (
        <div style={ displayContainer }>
            {props.boxList.map((eachBox, idx) => {
                return (
                    <div key={idx} style={{ ...boxStyle, margin: '8px',backgroundColor: eachBox }}></div>
                )
            })}
        </div>
    )
}

export default Display