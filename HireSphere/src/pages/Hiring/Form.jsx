import React, {useState} from 'react';
import '/Users/aaryasoni/Desktop/HireSphere/HireSphere/src/styles/Form.css';

const Form = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        location: '',
        position: '',
        resume: null,
        comments: ''
      });
      

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleFileChange = (event) => {
        setFormData((prevData) => ({
            ...prevData,
            resume: event.target.files[0]
        }));
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault(); 
    //     console.log("Submitted Form: ", {formData});
    //     alert(`Thank you ${formData.firstName} ${formData.lastName}! Your application has been received!`);
    // };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        // Build the payload using your state
        const payload = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            location: formData.location,
            position: formData.position,
            comments: formData.comments,
            
        };
    
        try {
            const response = await fetch("https://api.apispreadsheets.com/data/6Vl17mibujZ9KT7t/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ data: payload })
            });
    
            if (response.status === 201) {
                // ✅ SUCCESS
                alert(`Thank you ${formData.firstName} ${formData.lastName}! Your application has been received!`);
                console.log("Data submitted successfully!");
            } else {
                // ❌ ERROR
                alert("Submission failed. Please try again.");
                console.error("Error status:", response.status);
            }
        } catch (error) {
            console.error("Network or server error:", error);
            alert("Something went wrong. Please try again later.");
        }
    };
    
    

  return (

    <div className="form-wrapper">
        <div className="form-container">
            <h1>Candidate Information</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    {/* === Personal Details === */}
                    <div className="form-group">
                        <label>First Name</label>
                        <input type = "text" name="firstName" value = {formData.firstName} onChange={handleChange} placeholder = "First Name" />
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type = "text" name="lastName" value = {formData.lastName} onChange={handleChange} placeholder = "Last Name" />
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Email</label>
                        <input type = "email" name="email" value = {formData.email} onChange={handleChange} placeholder = "Email" />
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type = "tel" name="phone" value = {formData.phone} onChange={handleChange} placeholder = "Phone Number" />
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Location</label>
                        <input type = "text" name="location" value = {formData.location} onChange={handleChange} placeholder = "Location" />
                    </div>
                    <br />
                     {/* === Job Information === */}
                    <div className="form-group">
                        <label>Position</label>
                        <input type = "text" name="position" value = {formData.position} onChange={handleChange} placeholder = "Position" />
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Resume</label>
                        <input type = "file" name="resume" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
                    </div>
                    <br />
                    {/* === Additional Info === */}
                    <div className="form-group">
                        <label>Comments</label>
                        <textarea name="comments" value={formData.comments} onChange={handleChange} />
                    </div>
        
                </div>
                <br />
                {/* === Submit === */}
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>

    
  )
}

export default Form;