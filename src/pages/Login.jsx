import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { HOST } from '../App';

const Login = () => {

  const [data, setdata] = useState({
    email : "",
    password : ""
  });

  const history = useNavigate();

  const changeHandler = (e) =>{
    
    setdata({...data,[e.target.name]:e.target.value})
  }

  const handleLogin = async(e) =>{
    e.preventDefault();
    let responseData;
    await fetch(`${HOST}/login`,{
      method: "POST",
      headers:{
        Accept : 'application/json',
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify(data),
    }).then((resp)=> resp.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.authtoken)
      console.log(responseData)
      history("/")      
    }
    else{
      alert(responseData.error)
    }
  }
  return (
    <div>
      <Navbar/>
      <section className="vh-100">
  <div className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
      <div className="col-md-8 col-lg-7 col-xl-6">
      <dotlottie-player className="h-5/6" src="https://lottie.host/ed30fb6f-ace1-4d83-a2e7-43c82d7e127b/yjhWFJcSNd.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
          
      </div>
      <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form onSubmit={handleLogin}>
          
          <div data-mdb-input-init className="form-outline mb-4">
            <input name='email' onChange={changeHandler} value={data.email} type="email" id="form1Example13" className="form-control form-control-md" />
            <label className="form-label" for="form1Example13">Email address</label>
          </div>

          
          <div data-mdb-input-init className="form-outline mb-4">
            <input name='password' onChange={changeHandler} value={data.password} type="password" id="form1Example23" className="form-control form-control-md" />
            <label className="form-label" for="form1Example23">Password</label>
          </div>

          <div className="d-flex justify-content-around align-items-center mb-4">
            
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="form1Example3"  />
              <label className="form-check-label" for="form1Example3"> Remember me </label>
            </div>
            <a href="#!">Forgot password?</a>
          </div>

          
          <button type="submit" data-mdb-button-init data-mdb-ripple-init className="bg-black text-white rounded-none px-2 py-1">Sign in</button>
                       

        </form>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Login
