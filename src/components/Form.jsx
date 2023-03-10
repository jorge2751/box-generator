import React, {useState} from 'react'

const Form = (props) => {
    const [box, setBox] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleSentBox(box)
        setBox("")
    }

    const formStyle = {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '20px',

    }


    return (
        <div>
            <form onSubmit={handleSubmit} style={ formStyle }>
                <label style={{margin: '15px'}} htmlFor="color">Color</label>
                <input style={{margin: '15px'}} type="text" onChange={(e) => setBox(e.target.value)} value={box}/>
                <input style={{margin: '15px'}} type="submit" value="Add" />
            </form>
        </div>
    )
}

export default Form