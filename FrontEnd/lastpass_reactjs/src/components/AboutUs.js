import React from 'react'

function AboutUs() {
  return (
    <div className="container">
      <h3>About Us</h3>
      <div className="row">
        <h6>What is a password manager?</h6>
        <p>
          At home and work, you have more online accounts that you can possibly remember.
          And since 81% of breaches are caused by weak or reused passwords, it’s essential
          that each account have a unique password. So how are you supposed to remember these
          strong, unique passwords? You can’t. But a password manager can.
          A password manager is a tool that does the work of creating, remembering and
          filling in passwords. Simply log into an online account for the first time
          and LastPass will store your username and password so every time you go back your
          credentials will be filled in automatically.
        </p>
      </div>
      <div className="row">
        <h6>how to use a password manager</h6>
        <p>
          1. signed into your account
          2. Add your website details which could include URL & name
          and also user authentication details ie username and password
          3. You can choose whether to type your own password or generate a complex one
          4. Once the password is set it is encypted with SHA-256 hash
        </p>
      </div>
    </div>
  )
}

export default AboutUs
