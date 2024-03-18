import React, { useState } from 'react';
import "./testdropdown.css";
import Modal from "react-modal";
import { Link } from 'react-router-dom';
Modal.setAppElement('#root');


function Testdropdown() {
  // const [selectedValue, setSelectedValue] = useState('');
  // const [inputValue, setInputValue] = useState('');
  // const [isDropdownValid, setIsDropdownValid] = useState(true);
  // const [isInputValid, setIsInputValid] = useState(true);
  const [formData1, setformData1] = useState({
    project: '',
    customerID: ''
  });
  const [errors, setErrors] = useState({
    project: '',
    customerID: ''
  });

  //submitform
  const [formData2, setformData2] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: ''
  });
  const [errors1, setErrors1] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: ''
  });

  //boolean
var [isCheckcustId] = useState(false);
var ischeck =false ;
 //4 input fields
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);

  // popup 
  const [visible, setVisible] = useState(false);
  const [mvisible, msetVisible] = useState(false);

  //for post 
  // const [formData, setFormData] = useState({
  //   project: "",
  //   customerID: ""
  //   // a: "",
  //   // b: "",
  //   // c: "",
  //   // d: "",
  // });

  //for post1
  // const [project , setproject] = useState("");
  // const [customerID , setcustomerID] = useState("");


  //POST method
  const [posts, setPosts] = useState([]);
//   const addPosts = async (project, customerID) => {
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//        method: 'POST',
//        body: JSON.stringify({
//           project: project,
//           customerID: customerID,
//           // a: a,
//           // b: b,
//           // c: c,
//           // d: d,
//           // formData: formData,
//           userId: Math.random().toString(36).slice(2),
//        }),
//        headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//        },
//     });
//     let data = await response.json();
//     setPosts((posts) => [data, ...posts]);
//     setproject('');
//     setcustomerID('');
//     // setA('');
//     // setB('');
//     // setC('');
//     // setD('');
//     // setFormData('');
//     console.log(data);
//  };


//addposts
const addPosts = async (formData1) => {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
     method: 'POST',
     body: JSON.stringify({
      formData1 : formData1,
        userId: Math.random().toString(36).slice(2),
     }),
     headers: {
        'Content-type': 'application/json; charset=UTF-8',
     },
  });
  let data = await response.json();

  setformData1(formData1);
  // setInputValue(inputValue);
  console.log(data);
  console.log(response.status);


  if(response.status === 201)
  {
    // console.log(isCheckcustId);
    // console.log(mvisible);
    // setVisible(true)

    // ischeck =true;
    // isCheckcustId = true;
    msetVisible(true);
    console.log(mvisible);

    setShowAdditionalFields(true);  
  }


  // validation check
// if (response.status === 200) {
//   console.log('Form submitted successfully:', data);
//   formData1(formData1);
// } else {
//   console.error('Server error:');
//   setErrors({ server: 'An error occurred on the server' });
// }

  
}





// submit form
const submitForm = async (formData2) => {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
     method: 'POST',
     body: JSON.stringify({
      formData2: formData2,
      userId: Math.random().toString(36).slice(2),
     }),
     headers: {
        'Content-type': 'application/json; charset=UTF-8',
     },
  });
  let data = await response.json();
      // setPosts((posts) => [data, ...posts]);
      setformData2(formData2);
      // setFormData('');
      console.log(data);
      console.log(response.status);


      
      

      if(response.status === 201)
      {
        // console.log(isCheckcustId);
        console.log(visible);
        // ischeck =true;
        // isCheckcustId = true;
        // setVisible(true);
        // setShowAdditionalFields(true);
        setVisible(true);
        // setVisible(true);
      }

}


  const handleSubmit = (event) => {
    event.preventDefault();
// validation form1
let errors = {};
if (formData1.project === '') {
  errors.project = 'Please select an option';
}
if (formData1.customerID.trim() === '') {
  errors.customerID = 'Please enter a value';
}
setErrors(errors);



// validation form2
let errors1 = {};
if (formData2.input1 === '') {
  errors1.input1 = 'Please enter () value';
}
if (formData2.input2 === '') {
  errors1.input2 = 'Please enter () value';
}
if (formData2.input3 === '') {
  errors1.input3 = 'Please select an option';
}
if (formData2.input4 === '') {
  errors1.input4 = 'Please enter () value';
}
setErrors1(errors1);

if (Object.keys(errors).length === 0 && Object.keys(errors1).length === 0) {
  // Form submission logic can go here
  console.log('Form submitted successfully:', formData1);
  console.log('Form submitted successfully:', formData2);
}

    //state value display
    // console.log('submitted data :' , inputValue)
    //4 input fields
  //  setShowAdditionalFields(true);
  // console.log(isCheckcustId)
  // console.log(ischeck)
  
  // console.log("Formdata1:" , formData1 , formData2)
  console.log(mvisible)



  //first submit call
  if(mvisible == false){
      console.log("AAA");

   } else{
      console.log("BBB");
      submitForm(formData2);
      // setShowAdditionalFields(true);
      
      


 
//      console.log("submitForm");   
 
 }
//  if (mvisible == true) {
//   console.log("ccc")
        
//  submitForm(a,b,c,d);
//  setVisible(true);
//  } else{
//   console.log("DDD")
//  }
 




  // console.log(formData1)


  // if(formData1) {
  //   console.log("error")

  // } 
  // else {
  //   console.log("no error")
    
  // }
  
  

  
  

  
//   if(mvisible == true){
//      console.log("AAA");
//  submitForm(a,b,c,d);
//   } else{
//      console.log("BBB");
//      addPosts(formData1);

//     // console.log("submitForm");         --
// // submitForm(a,b,c,d);

// }



   if(isCheckcustId == false) {
    //  console.log("addPosts");

addPosts(formData1);
   }else {  
     console.log("submitformmm");
  //  submitForm("vb","vc","xv","vb");
   setShowAdditionalFields(true);
  //  submitForm(a,b,c,d);
   }


    // console.log(selectedValue, inputValue)
    // addPosts(selectedValue, inputValue);
  
    
    // const trimmedValue = inputValue.trim(); // Trim whitespace
    // setIsDropdownValid(selectedValue !== '');
    // setIsInputValid(trimmedValue !== '');
    // if (isDropdownValid && isInputValid) {
    //   console.log('Form submitted with values:', selectedValue, trimmedValue);
    // }
  };


  // const handleDropdownChange = (event) => {
  //   setSelectedValue(event.target.value);
  //   setIsDropdownValid(event.target.value !== '');
  // };



  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  //   setIsInputValid(event.target.value.trim() !== '');
  // };



  const handleChange = (event) => {
    const { name, value } = event.target;

    setformData1({
      ...formData1,
      [name]: value
    });
  };

    const handleChangeA = (event) => {
      const { name, value } = event.target;

  setformData2({
    ...formData2,
    [name]: value
  });
};


  // const handleChangeA = (event) => {
  //   setA(event.target.value)
  // };
  // const handleChangeB = (event) => {
  //   setB(event.target.value)
  // };
  // const handleChangeC = (event) => {
  //   setC(event.target.value)
  // };
  // const handleChangeD = (event) => {
  //   setD(event.target.value)
  // };



  return (
    <div className="body">
    <form onSubmit={handleSubmit}>
    <div className="heading">
    <h2 className='m-3'>ATMOS </h2>
    <h3>Create A Ticket</h3>
    </div>

    <h4>project</h4>
      <select 
      style={{ margin:0, width: 340, height: 45 , backgroundColor: 'rgba(0, 0, 0, 0.2)', color: 'rgba(255, 255, 255)' , fontSize:"20px", borderRadius:"5px"}}
      className='text1' 
      name="project" 
      id="project" 
      autoComplete='off'
      // placeholder='Select a project' 
      value={formData1.project} 
      onChange={handleChange}> 
        <option value="">Select a project</option>
        <option value="project1">project 1</option>
        <option value="project2">project 2</option>
        <option value="project3">project 3</option>
      </select>
      {errors.project && <p>{errors.project}</p>}
      {/* {!isDropdownValid && <p style={{ color: 'red' }}>Please select an option.</p>} */}
 <br /> <br />
      {/* customer  */}
      <h4>Customer ID</h4>
      <input
        style={{ margin:0, width: 340, height: 45 , backgroundColor: 'rgba(0, 0, 0, 0.2)', color: 'rgba(255, 255, 255)' , fontSize:"20px", borderRadius:"5px"}}
        type="text" 
        className='text1' 
        name="customerID" 
        id="customerID"   
        placeholder='Enter Customer ID' 
        autoComplete='off'
        value={formData1.customerID}
        onChange={handleChange}
      />
       {errors.customerID && <p>{errors.customerID}</p>}
      {/* {!isInputValid && <p style={{ color: 'red' }}>Please enter a value.</p>} */}
     



     {/* 4 input fields */}
    {/* Existing form fields (2 input fields initially) */}
   
    {showAdditionalFields && (
        <div className='mt-3'>
          {/* <input type="text" />
          <input type="text" /> */}
          <input type="text" 
          className='text1' 
          name="input1" 
          id="input1"   
          placeholder='Enter the data' 
          autoComplete='off'
          value={formData2.input1}
          onChange={handleChangeA} 
          style={{ marginTop:20, width: 340, height: 45 , backgroundColor: 'rgba(0, 0, 0, 0.2)', color: 'rgba(255, 255, 255)' , fontSize:"20px", borderRadius:"5px"}}
          />
       {errors1.input1 && <p>{errors1.input1}</p>}

          <input type="text" 
          className='text1' 
          name="input2" 
          id="input2"   
          placeholder='Enter the data' 
          autoComplete='off'
          value={formData2.input2}
          onChange={handleChangeA} 
          style={{ marginTop:20, width: 340, height: 45 , backgroundColor: 'rgba(0, 0, 0, 0.2)', color: 'rgba(255, 255, 255)' , fontSize:"20px", borderRadius:"5px"}}
          />
       {errors1.input2 && <p>{errors1.input2}</p>}

          <select 
          className='text1' 
          name="input3" 
          id="input3" 
          autoComplete='off'
          value={formData2.input3}
          onChange={handleChangeA} 
          style={{ marginTop:20, width: 340, height: 45 , backgroundColor: 'rgba(0, 0, 0, 0.2)', color: 'rgba(255, 255, 255)' , fontSize:"20px", borderRadius:"5px"}}
          >
            <option value="">Select</option>
            <option value="A">A</option>
            <option value="B">B</option>
          </select>
      {errors1.input3 && <p>{errors1.input3}</p>}

          <textarea 
          type="text"
          className='text4' 
          name="input4" 
          id="input4"   
          placeholder='Enter the data' 
          autoComplete='off'
          value={formData2.input4}
          onChange={handleChangeA}  
          style={{marginTop:20, width: 340, height: 45 , backgroundColor: 'rgba(0, 0, 0, 0.2)', color: 'rgba(255, 255, 255)' , fontSize:"20px", borderRadius:"5px", height:"100px"}}
          />
       {errors1.input4 && <p>{errors1.input4}</p>}

        </div>
      )}

      {/* <div> <input type="reset" value="Reset Form" /></div> */}


     {/* popup */}
     <div>
        <Modal
          isOpen={visible}
          onRequestClose={() => setVisible(false)}
          style={{
            overlay: {
              position: "fixed",
              zIndex: 1020,
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(255, 255, 255, 0.7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            content: {
              background: "white",
              width: "45rem",
              maxWidth: "calc(100vw - 2rem)",
              maxHeight: "calc(100vh - 2rem)",
              overflowY: "auto",
              position: "relative",
              border: "1px solid #ccc",
              borderRadius: "1rem",
            },
          }}
        >
          <h1>Thank You...!</h1>
          {/* <h5>
            Your Order has been submitted. <br /> <br />
            Thank you{" "}
          </h5> <br /> */}
          <button
            type="button"
            className="btn1 btn-success"
            onClick={() => setVisible(false)}
          >
            OK
          </button>
        </Modal>
        
      </div>

      <button to='/mainpage' onSubmit={submitForm} className='btn btn-success' type="submit"
      onClick={({}) => setVisible(false)}
      >
        Submit
      </button>

      <Link to='/mainpage' className='btn btn-success' type='button'>Main</Link>
    </form>
    </div>
  );
}

export default Testdropdown;