import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../../styles/register.css"

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        'http://localhost:3001/register',
        {
          username: username,
          email: email,
          password: password,
          role: 'user',
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      navigate('/');
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4-desktop">
              <form onSubmit={handleRegister} className="box">
                <p className="has-text-centered">{msg}</p>
                <div className="field mt-5">
                  <label className="label">Name</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      placeholder="Name"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      type="password"
                      className="input"
                      placeholder="******"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Role</label>
                  <div className="control">
                    <div className="select">
                      <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field mt-5">
                  <button className="button is-success is-fullwidth" type="submit">
                    Register
                  </button>
                </div>
                <div className="field mt-5">
                  <p className="has-text-centered">
                    Already have an account? <a href="/">Login</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
