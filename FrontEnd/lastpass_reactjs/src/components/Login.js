// import React, { Component } from 'react';

// class Login extends Component {

//     state = {
//         credentials: {
//             username: '',
//             password: ''
//         }
//     }

//     login = event => {
//         // console.log("Lgoin here");
//         console.log(this.state.credentials);
//         fetch('http://127.0.0.1:8000/api/login/', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(this.state.credentials)
//         }).then(data => data.json())
//             .then(
//                 data => console.log(data)
//             ).catch(error => console.log(error))
//     }

//     inputChanged = event => {
//         const cred = this.state.credentials;
//         cred[event.target.name] = event.target.value;
//         this.setState({ credentials: cred });
//     }

//     render() {
//         return (
//             <div className="App">
//                 <h1>Login user form</h1>
//                 <label>
//                     username(this is actually an email):
//                     <input type="text" name="username"
//                         value={this.state.credentials.username}
//                         onChange={this.inputChanged} />
//                     <br />
//                     password:
//                     <input type="password" name="password"
//                         value={this.state.credentials.password}
//                         onChange={this.inputChanged} />
//                 </label>
//                 <br />
//                 <button onClick={this.login}>Login</button>
//             </div>
//         );
//     }

// }

// export default Login;
