import React, {  useState } from 'react'
// import { NavLink } from 'react-router-dom'
import "./example.css";

const Example = () => {

// const url = "https://jsonplaceholder.typicode.com/posts?_limit=10"
// useEffect(() => {
//   fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
//  .then(response => response.json())
//  .then(json => {
//   console.log("json" , json)
//  })
//  .catch(e => {
//   console.log("e" , e)
// })
// }, []);

//1//
// const [project, setProject] = useState("");
// const [customerID, setcustomerID] = useState("");
// const [a, setA] = useState("");
// const [b, setB] = useState("");
// const [c, setC] = useState("");
// const [d, setD] = useState("");

const [selectedValue, setSelectedValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isDropdownValid, setIsDropdownValid] = useState(true);
  const [isInputValid, setIsInputValid] = useState(true);


// const handleInputChange = (e) => {
//   setSelectedValue(e.target.value);
//   setIsValid(e.target.value !== '');
// };

const [formData, setFormData] = useState({
  // project: "",
  customerID: "",
  a: "",
  b: "",
  c: "",
  d: "",
});

// const Submit = (e) => {
//     e.preventDefault();
//     console.log('project:', project);
//     console.log('customerID', customerID);
//     console.log('a', a);
//     console.log('b', b);
//     console.log('c', c);
//     console.log('d', d);
//   };

  //2//
  // const [showFields, setShowFields] = useState(false); // Initially hide fields

  // const handleShowFields = () => {
  //   setShowFields(true); // Set state to show all four fields
  // };


  //POST METHOD
  // const [title, setTitle] = useState('');
  //  const [body, setBody] = useState('');
  const [posts, setPosts] = useState([]);

  const addPosts = async (formData) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
       method: 'POST',
       body: JSON.stringify({
          // project: project,
          // customerID: customerID,
          // a: a,
          // b: b,
          // c: c,
          // d: d,
          formData: formData,
          userId: Math.random().toString(36).slice(2),
       }),
       headers: {
          'Content-type': 'application/json; charset=UTF-8',
       },
    });
    let data = await response.json();
    setPosts((posts) => [data, ...posts]);
    // setTitle('');
    // setBody('');

    // setProject('');
    // setcustomerID('');
    // setA('');
    // setB('');
    // setC('');
    // setD('');
    setFormData('');
    // console.log(data);
 };


 const [errors, setErrors] = useState({});

 const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('project:', project);
    // console.log('customerID', customerID);
    // console.log('a', a);
    // console.log('b', b);
    // console.log('c', c);
    // console.log('d', d);
    console.log(formData)
    // addPosts(title, body);
    // addPosts(project, customerID, a, b, c, d);
    addPosts(formData);
    
    const trimmedValue = inputValue.trim(); // Trim whitespace
    setIsDropdownValid(selectedValue !== '');
    setIsInputValid(trimmedValue !== '');
    if (isDropdownValid && isInputValid) {
      console.log('Form submitted with values:', selectedValue, trimmedValue);
    }

   


    // const validationerrors ={}
    // if (!formData.project) {
    //   validationerrors.project = "Project is required"
    // }
    //  if (!formData.customerID) {
    //   validationerrors.customerID = "Customer ID is required"
    // } else if(!/\S+@\S\.\S+/.test(formData.customerID.length < 10)) {
    //   validationerrors.customerID = "Invalid customer ID"
    // } else if (formData.customerID) {
    //   validationerrors.customerID = ""
    // }

    // setErrors(validationerrors)

    // if (Object.keys(validationerrors).length === 0) {
    //   alert("Data entered successfully")
    // }
 };


 const handleDropdownChange = (event) => {
  setSelectedValue(event.target.value);
  setIsDropdownValid(event.target.value !== ''); // Validate on change
};

const handleInputChange = (event) => {
  setInputValue(event.target.value);
  setIsInputValid(event.target.value.trim() !== ''); // Validate on change (with trim)
};


  return (
    <div className='body'>
{/* <body> */}
  {/* <div class="container"> */}
  <form onSubmit={handleSubmit}>
    <div className="heading">
    <h2 className='m-3'>ATMOS </h2>
    <h3>Create A Ticket</h3>
    </div>


    <div>
      <select 
      style={{ margin:0, width: 340, height: 45 , backgroundColor: 'rgba(0, 0, 0, 0.2)', color: 'rgba(255, 255, 255)' , fontSize:"20px", borderRadius:"5px"}}
      className='dropdown' 
      name="project" 
      id="project" 
      autoComplete='off'
      value={selectedValue}
      onChange={handleDropdownChange}
      // onChange={(e) => handleChange(e.target.value)}
      >
         {!isDropdownValid && <p style={{ color: 'red' }}>Please select an option.</p>}
        <option value="">Select a project</option>
        <option value="project1">Project 1</option>
        <option value="project2">Project 2</option>
        <option value="project3">Project 3</option>
      </select>
      {!isInputValid && <p style={{ color: 'red' }}>Please enter a value.</p>}
 </div>
      {/* <label for="customerID">Enter Customer ID</label> */}
      
      <div className="input">
      <input 
      style={{ margin:0, width: 340, height: 45 , backgroundColor: 'rgba(0, 0, 0, 0.2)', color: 'rgba(255, 255, 255)' , fontSize:"20px", borderRadius:"5px"}}
      
      type="text" 
      name="customerID" 
      id="customerID"   
      placeholder='Enter Customer ID' 
      autoComplete='off'
      onChange={handleInputChange}/>
        {/* {errors.customerID && <span>{errors.customerID}</span> } */}
      {!isInputValid && <p style={{ color: 'red' }}>Please enter a value.</p>}
      

      </div>
<br />
      {/* <div >
 {showFields && (
    <>
      <div className='d-flex'><label htmlFor="" onChange={handleChange} className='p-2' name="a">A</label><input style={{ margin:0, width: 340, height: 45 , backgroundColor: 'rgba(0, 0, 0, 0.2)', color: 'rgba(255, 255, 255)' , fontSize:"20px", borderRadius:"5px"}} type="text" /></div>
      <div className='d-flex'><label htmlFor="" onChange={handleChange} className='p-2' name="b">B</label><input style={{ margin:0, width: 340, height: 45 , backgroundColor: 'rgba(0, 0, 0, 0.2)', color: 'rgba(255, 255, 255)' , fontSize:"20px", borderRadius:"5px"}} type="text" /> </div>
      <div className='d-flex'><label htmlFor="" onChange={handleChange} className='p-2' name="c">C</label><input style={{ margin:0, width: 340, height: 45 , backgroundColor: 'rgba(0, 0, 0, 0.2)', color: 'rgba(255, 255, 255)' , fontSize:"20px", borderRadius:"5px"}} type="text" /> </div>
      <div className='d-flex'><label htmlFor="" onChange={handleChange} className='p-2' name="d">D</label><input style={{ margin:0, width: 340, height: 45 , backgroundColor: 'rgba(0, 0, 0, 0.2)', color: 'rgba(255, 255, 255)' , fontSize:"20px", borderRadius:"5px"}} type="text" /> </div>
    </>
  )}
</div> */}
      {/* <button className='btn btn-success' type="submit" onClick={handleShowFields} required>Submit</button>  */}
      <button className='btn btn-success' type='submit'>Submit</button>
    
    
    </form>
  {/* </div> */}
{/* </body>  */}
    </div>
  )
}

export default Example
