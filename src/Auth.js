import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './App.css';
import { supabase } from './service/db';

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [form, setForm] = useState({ email: '', password: '', name: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
  e.preventDefault();
  setError(null);

  if (isSignUp) {
    // Sign Up
      const { error } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
      });

      if (error) {
        setError(error.message);
      } else {
        alert('Sign up successful!');
        
      }
    } else {
      // Sign In (using the new API if applicable)
      const { data, error } = await supabase.auth.signInWithPassword({
        email: form.email,
        password: form.password,
      });

      if (error) {
        setError(error.message);
      } else {
        alert('Sign in successful!');
        navigate('/register');
      }
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">{isSignUp ? 'Hello!' : 'Hi There!'}</h2>
        <p className="auth-sub">{isSignUp ? 'Sign up to continue' : 'Sign in to continue'}</p>
        
        {error && <p className="error-message">{error}</p>}

        <form className="auth-form" onSubmit={handleSubmit}>
          {isSignUp && (
            <input
              className="auth-input"
              name="name"
              placeholder="Full name"
              value={form.name}
              onChange={handleChange}
              required
            />
          )}
          <input
            className="auth-input"
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            className="auth-input"
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button className="auth-button" type="submit">
            {isSignUp ? 'Sign up' : 'Sign in'}
          </button>
        </form>

        <div className="auth-toggle">
          {isSignUp ? (
            <button
              className="auth-toggle-btn"
              onClick={() => setIsSignUp(false)}
              aria-label="Switch to sign in"
            >
              Already have an account?
            </button>
          ) : (
            <button
              className="auth-toggle-btn"
              onClick={() => setIsSignUp(true)}
              aria-label="Switch to sign up"
            >
              Don't have an account?
            </button>
          )}
        </div>
      </div>
    </div>
  );
}