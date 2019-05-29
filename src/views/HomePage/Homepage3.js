import React, { Component } from 'react';


 class HomePage extends Component {
  render() {
    return (
    //   <div className="index">
    //         <div className="header">
    //           <a href="#default" className="logo">SendIT</a>
    //           <div className="header-right">
    //             <button onclick="document.getElementById('id01')">LOGIN</button>
                {/* <button onclick="document.getElementById('id01').style.display='block'" style="width:auto;">LOGIN</button> */}
            //     <button onclick="document.getElementById('id02')">SIGNUP</button>
            //     {/* <button onclick="document.getElementById('id02').style.display='block'" style="width:auto;">SIGNUP</button> */}
            //   </div> 
            // </div>

            <div>
                <br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/>
                <h1>Hey I'am SendIT<sup>&#174;</sup></h1>.
                <p><em>SendIT</em> - the fastest web-app for parcel delivery's</p>
            </div>

            <section>
              <div id="id01" className="modal">
              {/* <div id="id01" className="modal" style="display: none;"> */}


                  <form className="modal-content animate" id="signIn">

                      <div className="imgcontainer">
                          <span onclick="document.getElementById('id01')" className="close" title="Close Modal">×</span>
                          {/* <span onclick="document.getElementById('id01').style.display='none'" className="close" title="Close Modal">×</span> */}

                          <img src="static/images/img_avatar2.png" alt="Avatar" className="avatar" />
                      </div>

                      <div className="container">
                      {/* <!-- <fieldset> --> </fieldset> */}
                          <legend className="text-center">Login</legend>
                          <div id="success" className="alert alert-success hide"></div>
                          <div id="warning" className="alert alert-warning hide"></div>
                              
                              {/* <!-- username -->                   */}
                          <div className="form-group">
                              <label for="username"><b>Username</b></label>
                              <input type="text" id="username" placeholder="Enter Username" name="username" required="" />
                          </div>

                              {/* <!-- Password--> */}
                          <div className="form-group">
                              <label for="psw"><b>Password</b></label>
                              <input type="password" id="password" placeholder="Enter Password" name="psw" required="" />
                          </div>

                              {/* <!-- Button --> */}
                          <div className="form-group">
                              <button type="submit" onclick="signIn()" id="DoSubmission">Login</button>
                              <span className="ml">Don't have an account?sign up <a id="login_instead" href="./index.html">here</a></span>
                          </div>

                          {/* <!-- CheckBox --> */}
                          <label>
                              <input type="checkbox" checked="checked" name="remember" /> Remember me ?
                          </label>
                      {/* <!-- </fieldset> --> */}
                      </div>

                      <div className="container">
                      {/* <div className="container" style="background-color:#f1f1f1"> */}

                          {/* <!-- <button type="button" onclick="document.getElementById('id01').style.display='none'" className="cancelbtn">Cancel</button> --> */}
                          <span className="psw">Forgot <a href="#">password?</a></span>
                      </div>
                      {/* <!-- <script src="./js/signin.js"></script> --> */}
                      <script src="./static/dist/signin.min.js"></script>


                  </form>
              </div>
              
              <div id="id02" className="modal">
                  <span onclick="document.getElementById('id02')" className="close" title="Close Modal">×</span>
              {/* <div id="id02" className="modal" style="display: none;">
                  <span onclick="document.getElementById('id02').style.display='none'" className="close" title="Close Modal">×</span> */}
                   
                  {/* <!-- <form className="modal-content myForm" action="index.html"> --> */}
                  <form className="modal-content"  id="signUp">
                  
                      <div className="container">
                          <legend className="text-center">Register</legend>
                          {/* <!-- <h1>Register</h1> --> */}
                          <p>Please fill in this form to create an account.</p>
                          <hr />

                          {/* <!-- FullName --> */}

                          {/* <!-- <label for="fname"><b>First Name</b></label> */}
                          <input type="text" placeholder="Enter First Name" name="name" required="" />

                          <label for="lname"><b>Last Name</b></label>
                          <input type="text" placeholder="Enter Last Name" name="name" required="" /> -->

                          <div id="success1" className="alert alert-success hide"></div>
                          <div id="warning1" className="alert alert-warning hide"></div>

                          {/* <!-- Username --> */}
                          <label for="username"><b>Username</b></label>
                          <input type="text" id="username1" placeholder="Enter Username" name="username" required="" />

                          {/* <!-- E-mail --> */}
                          <label for="email"><b>Email</b></label>
                          <input type="text" id="email" placeholder="Enter Email" name="email" required="" />
                          
                          {/* <!-- Password--> */}
                          <label for="psw"><b>Password</b></label>
                          <input type="password" id="password1" placeholder="Enter Password" name="psw" required="" />
                          {/* <!-- ConfirmPassword--> */}
                          <label for="psw-confirm"><b>Confirm Password</b></label>
                          <input type="password" id="password_confirm" placeholder="Confirm Password" name="psw-confirm" required="" />
                          
                          {/* <!-- Check-Box --> */}
                          <label>
                              <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px" /> Remember
                              me
                          </label>
                          <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms &amp; Privacy</a>.</p>
                          
                          {/* <!-- Button --> */}
                          <div className="clearfix">
                              <button type="button" onclick="document.getElementById('id02').style.display='none'" className="cancelbtn">Cancel</button>
                              <button type="submit" className="signupbtn">Sign Up</button>
                              <span className="ml">Already have an account?login <a href="./index.html" id="login_instead">here</a></span>
                          </div>

                          {/* <!-- <div> -->
                          <!-- <div className="form-group"> --> */}
                              {/* <!-- Button --> */}
                              {/* <!-- <button type="submit" className="button bg-dark">Register</button> */}
                              {/* <span className="ml">Already have an account?login <a href="./signin.html">here</a></span> */}
                          {/* </div> --> */}

                          {/* <!-- <script src="./js/signup.js"></script> --> */}
                          <script src="./static/dist/signup.min.js"></script>

                      </div> 
                  </form>
              </div>
              
          </section>
      </div>
    );
  }
}

 export default HomePage;