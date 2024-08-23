import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import { HOST } from '../App';

const Signup = () => {
  const [data, setdata] = useState({
    name:"",    
    email : "",
    password : ""
  });

  const history = useNavigate();

  const changeHandler = (e) =>{    
    setdata({...data,[e.target.name]:e.target.value})
    console.log(data)
  }

  const handleSignup = async(e) =>{
    e.preventDefault();
    let responseData;
    await fetch(`${HOST}/createUser`,{
      method: "POST",
      headers:{
        Accept : 'application/json',
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify(data),
    }).then((resp)=> resp.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token)
      console.log(responseData)
      history("/")      
    }
    else{
      alert(responseData.error)
    }
  }
  return (
    <>
    <Navbar/>
    <div>
      <section className="vh-150">
  <div className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
      <div className="col-md-8 col-lg-7 col-xl-6 sm:h-[30vh] h-[100vh]">
      

<dotlottie-player src="https://lottie.host/b440b3ac-52cb-4f7e-acbc-00ed31ed48b8/LzhbhgZwEY.json" background="transparent" speed="0.3" loop autoplay></dotlottie-player>
          
      </div>
      <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form onSubmit={handleSignup}>

        <div data-mdb-input-init className="form-outline mb-4">
            <input onChange={changeHandler} type="name" name='name' id="name" className="form-control form-control-md" />
            <label  className="form-label" for="form1Example13">Full Name</label>
          </div>
          
          <div data-mdb-input-init className="form-outline mb-4">
            <input type="email" name='email' id="form1Example13" onChange={changeHandler} className="form-control form-control-md" />
            <label className="form-label" for="form1Example13">Email address</label>
          </div>

          
          <div data-mdb-input-init className="form-outline mb-4">
            <input onChange={changeHandler} type="password" name='password' id="form1Example23" className="form-control form-control-md" />
            <label className="form-label" for="form1Example23">Password</label>
          </div>

          <div data-mdb-input-init className="form-outline mb-4">
            <input type="password" id="form1Example23" className="form-control form-control-md" />
            <label className="form-label" for="form1Example23">Repeat Password</label>
          </div>
          <button type="submit" data-mdb-button-init data-mdb-ripple-init className="px-4 bg-black py-1 text-white font-light font-myFont">Register </button>
        </form>
      </div>
    </div>
  </div>
</section>
    </div>
    </>
  )
}

export default Signup
