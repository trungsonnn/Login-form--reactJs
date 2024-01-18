import './App.css'

// function component
function App():JSX.Element {
  return (
    <div className="background">
      <div className="login-form">
        <p className="title">Login form</p>
        <div className="wrap-button">
          <button className="login-button">Login</button>
          <button className="signup-button">Signup</button>
        </div>
        <input className="input" placeholder="Email Address" />
        <input className="input" placeholder="Password" />
        <p className="forgot-password">Forgot password?</p>
        <button className="submit-button">Login</button>
        <p className="not-a-member">Not a member? <span className="signup-text">Signup Now</span></p>
      </div>
    </div>
  )
  
}

export default App
