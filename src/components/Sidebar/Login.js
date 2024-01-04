import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import SideBar from './SideBar';
const LoginForm = () => {
  return (
    <>
    <div className='body'>
    { <SideBar/>}
    <form className="form_container login
    ">
      <div className="logo_container"></div>
      <div className="title_container">
        <p className="title">Login to your Account</p>
        <span className="subtitle">Start your freelance carrer on the best platform for you.</span>
      </div>
      <br />
      <div className="input_container">
        <label className="input_label" htmlFor="email_field">Email</label>
        <input placeholder="Email" title="Input title" name="input-name" type="text" className="input_field" id="email_field" required/>
      </div>
      <div className="input_container">
        <label className="input_label" htmlFor="password_field">Password</label>
        <input placeholder="Password" title="Input title" name="input-name" type="password" className="input_field" id="password_field" required />
      </div>
      <button title="Sign In" type="submit" className="sign-in_btn">
        <span>Log In</span>
      </button>
      <div className="separator">
        <hr className="line" />
        <span>Or</span>
        <hr className="line" />
      </div>
      <button title="Log In" type="submit" className="sign-in_ggl">
      <Link to ='/signup'></Link>      
        <Link to='/login'>Sign up</Link>
      </button>
      <button title="Sign Up" type="submit" className="sign-in_apl">
      </button>
    </form>
    </div>
    </>
  );
}
export default LoginForm;
// //New 
// import React from 'react';
// import './Login.css';
// import { Link } from 'react-router-dom';
// import SideBar from './SideBar';

// const LoginForm = () => {
//   return (
//     <>
//       <div className='body'>
//         {<SideBar />}
//         <form className="form_container login">
//           <div className="logo_container"></div>
//           <div className="title_container">
//             <p className="title">Login to your Account</p>
//             <span className="subtitle">Start your freelance carrer on the best platform for you.</span>
//           </div>
//           <br />
//           <div className="input_container">
//             <label className="input_label" htmlFor="email_field">Email</label>
//             <input placeholder="Email" title="Input title" name="input-name" type="text" className="input_field" id="email_field" required />
//           </div>
//           <div className="input_container">
//             <label className="input_label" htmlFor="password_field">Password</label>
//             <input placeholder="Password" title="Input title" name="input-name" type="password" className="input_field" id="password_field" required />
//           </div>
//           <button title="Sign In" type="submit" className="sign-in_btn">
//             <span>Log In</span>
//           </button>

//           <div className="separator">
//             <hr className="line" />
//             <span>Or</span>
//             <hr className="line" />
//           </div>
//           <button title="Log In" type="submit" className="sign-in_ggl">
//             <Link to='/signup'>Sign in with Google</Link>
//           </button>
//           <button title="Sign Up" type="submit" className="sign-in_apl">
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }
// export default LoginForm;
// NEWWW 1
// import React from 'react';
// import './Login.css';
// import { Link } from 'react-router-dom';

// const LoginForm = () => {
//   return (
//     <>
//       <div className='body'>
//         {/* Include your Sidebar component here if needed */}
//         <form className="form_container login">
//           <div className="logo_container"></div>
//           <div className="title_container">
//             <p className="title">Login to your Account</p>
//             <span className="subtitle">Start your freelance career on the best platform for you.</span>
//           </div>
//           <br />
//           <div className="input_container">
//             <label className="input_label" htmlFor="email_field">Email</label>
//             <input placeholder="Email" title="Input title" name="input-name" type="text" className="input_field" id="email_field" required />
//           </div>
//           <div className="input_container">
//             <label className="input_label" htmlFor="password_field">Password</label>
//             <input placeholder="Password" title="Input title" name="input-name" type="password" className="input_field" id="password_field" required />
//           </div>
//           <button title="Sign In" type="submit" className="sign-in_btn">
//             <span>Log In</span>
//           </button>

//           <div className="separator">
//             <hr className="line" />
//             <span>Or</span>
//             <hr className="line" />
//           </div>
//           <button title="Log In" type="submit" className="sign-in_ggl">
//             {/* Link to the signup page */}
//             <Link to='/signup'>Sign up</Link>
//           </button>
//           <button title="Sign Up" type="submit" className="sign-in_apl">
//             {/* Your existing code for Sign Up button */}
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default LoginForm;
