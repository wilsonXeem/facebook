import React from 'react'

function SignUpForm() {
    return (
      <>
        <input className='input' type="text" placeholder="Mobile number or email" />
        <input className='input' type="text" placeholder="Password" />
        <input className='button' type="submit" value="Log in" />
        <p style={{fontSize:"small"}}>Forgot password?</p>
        <article className='hr'>
          <hr />
        <p style={{margin:"14px"}}>or</p> <hr />
        </article>
        <button>Create new account</button>
      </>
    );
}

export default SignUpForm
