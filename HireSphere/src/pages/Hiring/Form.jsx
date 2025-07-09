import React, {useState} from 'react'

const Form = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleNameChange = (event) => {
        setFirstName(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log("Submitted First Name: ", firstName +" "+ lastName);
        alert(`Hello, ${firstName} ${lastName}!`);
    };

  return (

    <div>
        <h1>Candidate Information</h1>

        <form onSubmit={handleSubmit}>
            <div>
                <label> Full Name </label>
                <input type = "text" value = {firstName} onChange={handleNameChange} placeholder = "Enter your First Name" />
                <input type = "text" value = {lastName} onChange={handleLastNameChange}  placeholder = "Enter your Last Name" />
            </div>

            <br />

            <button type="submit">Submit</button>
        </form>
    </div>

    
  )
}

export default Form;