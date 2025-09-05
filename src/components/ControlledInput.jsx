import React, {useState} from 'react';

const ControlledInput = ({}) => {
    const[fullName, setFullName] = useState('');
    const handleChange = (event) =>{
        setFullName(event.target.value)
    }
    return (
        <main>
            <h2>Controlled Input</h2>
            <div>
                <label htmlFor='fullName'>Full name:</label>
                <input 
                value={fullName}
                onChange={handleChange}
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                />
            </div>
        </main>
    )
}

export default ControlledInput;


//Notes

// Use value when:
//You want the input to be driven by React state (recommended).
//You’re doing things like validation, conditional rendering, or dynamic field updates.
//You're using form libraries like Formik, React Hook Form, etc.

// name is a label or key for the field e.g. fullName
// value is the content typed by the user e.g. Jane Doe