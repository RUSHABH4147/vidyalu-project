import React ,{useRef}from "react";
import  {useForm} from 'react-hook-form'
import axios from 'axios'
import './sign.css'

function Signup() {
    const {handleSubmit,register}=useForm()
    const cpassword  = useRef()
    const onSubmit =  (data) => {
        // console.log(data.password)};
        if(cpassword.current.value===data.password){
            // alert(JSON.stringify(data))
             axios.post('http://localhost:4000/vidyalu/signup',data).then(()=>{
               alert("account created....")
             })

        }else{
            alert("password do not match")
        }
    }

    
        
  return (
    <div>
      <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-5">
            <div class="login-box">
              <h3 className="text-center">Sign Up and Start</h3>
              <h5 className="text-center">I want to enroll as a</h5>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-group text-center choose-type">
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                      class="form-check-input"
                    />
                    <label for="inlineRadio1" class="form-check-label">
                      Student
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                      class="form-check-input"
                    />
                    <label for="inlineRadio2" class="form-check-label">
                      Counselor
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio3"
                      value="option3"
                      class="form-check-input"
                    />
                    <label for="inlineRadio3" class="form-check-label">
                      Teacher
                    </label>
                  </div>
                </div>
                <div class="form-group">
                  <input type="text" {...register("Name")} placeholder="Name" class="form-control" />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    {...register("Email")}
                    placeholder="Email address"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <input
                  ref={cpassword}
                    type="password"
                    placeholder="Password"
                    class="form-control"
                  />
                </div>
                <div class="form-group text-center">
                  <p class="text-muted">
                    <small>
                      {" "}
                      Passwords should contain three of the four character
                      types: Uppercase letters: A-Z. Lowercase letters: a-z.
                      Numbers: 0-9.{" "}
                    </small>
                  </p>
                </div>
                <div class="form-group">
                  <input
                  {...register("password", { pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/ })}
                    type="password"
                    placeholder="Re-enter password"
                    class="form-control"
                  />
                </div>
                <button
                type="submit"
                  routerlink="/login"
                  class="btn btn-primary btn-block"
                  tabindex="0"
                >
                  Sign up
                </button>
                <div class="or-line text-center">
                  <img src="assets/images/or.png" alt="" class="img-fluid" />
                </div>
                <div class="form-group login-social">
                  <button class="btn btn-facebook"  style={{backgroundColor:"#3c66c4" ,color:"#fff"}}>
                    <i class="fab fa-facebook-f" aria-hidden="true"></i>{" "}
                    Register with Facebook{" "}
                  </button>
                  <button class="btn btn-google bg-red" style={{backgroundColor:"#cf4332" ,color:"#fff"}}>
                    <i class="fab fa-google-plus-g" aria-hidden="true"></i>
                    {" "}
                    Register with Google+{" "}
                  </button>
                </div>
                <div class="form-group text-center">
                  <p>
                    By signing up, you agree to our{" "}
                    <a href="#" class="text-warning">
                      Terms of Use
                    </a>{" "}
                    and{" "}
                    <a href="#" class="text-warning">
                      Privacy Policy
                    </a>
                    .
                  </p>
                  <p class="dont-account">
                    Already have an account?{" "}
                    <a routerlink="/login" href="/html/vidyalu/login">
                      Log In
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
