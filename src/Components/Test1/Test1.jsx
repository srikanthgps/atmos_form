import React, { useState } from 'react'





const Test1 = () => {
    // const [formData1, setformData1] = useState({
    //     Project: '',
    //     customerID: ''
    //   });
    //   const [errors, setErrors] = useState({
    //     Project: '',
    //     customerID: ''
    //   });
    
    //   const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setformData1({
    //       ...formData1,
    //       [name]: value
    //     });
    //   };
    
    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     let errors = {};
    //     if (formData1.Project === '') {
    //       errors.Project = 'Please select an option';
    //     }
    //     if (formData1.customerID.trim() === '') {
    //       errors.customerID = 'Please enter a value';
    //     }
    //     setErrors(errors);
    
    //     if (Object.keys(errors).length === 0) {
    //       // Form submission logic can go here
    //       console.log('Form submitted successfully:', formData1);
    //     }
    //   };

    const [formData1, setFormData1] = useState({
      input1: ''
    });
    const [formData2, setFormData2] = useState({
      input2: ''
    });
    const [errors1, setErrors1] = useState({});
    const [errors2, setErrors2] = useState({});
    const [serverError, setServerError] = useState('');
  
    const handleChange1 = (e) => {
      const { name, value } = e.target;
      setFormData1({
        ...formData1,
        [name]: value
      });
    };
  
    const handleChange2 = (e) => {
      const { name, value } = e.target;
      setFormData2({
        ...formData2,
        [name]: value
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      let errors1 = {};
      if (formData1.input1.trim() === '') {
        errors1.input1 = 'Please enter a value';
      }
      setErrors1(errors1);
  
      let errors2 = {};
      if (formData2.input2.trim() === '') {
        errors2.input2 = 'Please enter a value';
      }
      setErrors2(errors2);
  
      if (Object.keys(errors1).length === 0 && Object.keys(errors2).length === 0) {
        try {
          // Make an asynchronous request to the server to submit form data
          const response = await fetch('api/submitForm', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              formData1,
              formData2
            })
          });
          if (!response.ok) {
            // Handle server errors
            throw new Error('Server error occurred');
          }
          // Form submitted successfully
          console.log('Form submitted successfully');
        } catch (error) {
          // Handle server errors
          console.error('Error submitting form:', error.message);
          setServerError('Server error occurred, please try again later.');
        }
      }
    };
    
  return (
  //   <div>
  //   <h2>Validation Form</h2>
  //   <form onSubmit={handleSubmit}>
  //     <div>
  //       <label htmlFor="dropdown">Select an option:</label>
  //       <select
  //         id="dropdown"
  //         name="Project"
  //         value={formData1.Project}
  //         onChange={handleChange}
  //       >
  //         <option value="">-- Please select --</option>
  //         <option value="Project1">Project 1</option>
  //         <option value="Project2">Project 2</option>
  //         <option value="Project3">Project 3</option>
  //       </select>
  //       {errors.Project && <p>{errors.Project}</p>}
  //     </div>
  //     <div>
  //       <label htmlFor="input">Enter a value:</label>
  //       <input
  //         type="text"
  //         id="input"
  //         name="customerID"
  //         value={formData1.customerID}
  //         onChange={handleChange}
  //       />
  //       {errors.customerID && <p>{errors.customerID}</p>}
  //     </div>
  //     <button type="submit">Submit</button>
  //   </form>
  // </div>


  <div>
  <h2>Validation Form</h2>
  {serverError && <p>{serverError}</p>}
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="input1">Input 1:</label>
      <input
        type="text"
        id="input1"
        name="input1"
        value={formData1.input1}
        onChange={handleChange1}
      />
      {errors1.input1 && <p>{errors1.input1}</p>}
    </div>
    <div>
      <label htmlFor="input2">Input 2:</label>
      <input
        type="text"
        id="input2"
        name="input2"
        value={formData2.input2}
        onChange={handleChange2}
      />
      {errors2.input2 && <p>{errors2.input2}</p>}
    </div>
    <button type="submit">Submit</button>
  </form>
</div>
);
}

export default Test1