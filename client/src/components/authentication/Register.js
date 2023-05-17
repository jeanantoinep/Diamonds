import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [msg, setMsg] = useState('');
    const history = useNavigate();
    
    const Register = async (e) => {
        e.preventDefault();
        try {
          await axios.post('http://localhost:3001/register', {
            name: name,
            email: email,
            password: password,
            role:role,
            
          }, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
          history.push("/");
        } catch (error) {
          if (error.response) {
            setMsg(error.response.data.msg);
          }
        }
      }
      
    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={Register} className="box">
                                <p className="has-text-centered">{msg}</p>
                                <div className="field mt-5">
                                    <label className="label">Name</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Name"
                                            value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Email</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                 
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                <label className="label">Role</label>
                                    <select className="input" value={role} onChange={(e) => setRole(e.target.value)}>
                                        <option value="admin">Admin</option>
                                        <option value="user">User</option>
                                    </select>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth" onClick={Register} href='/Dashboard' >Register</button>

                                </div>
                                <div className="field mt-5">
                                    <p className="has-text-centered">Already have an account? <a href="/">Login</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register;