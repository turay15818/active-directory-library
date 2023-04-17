import React, { useState } from 'react';
import axios from 'axios';
import orangeSierraLeone from "./assets/orangeSierraLeone.png";
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/login', {
      email: email,
      password: password
    })
      .then(response => {
        if (response.status === 200) {
          window.location.href = '/dashboard';
        } else {
          setErrorMessage('Authentication failed.');
        }
      })
      .catch(error => {
        console.error(error);
        setErrorMessage('An error occurred while authenticating.');
      });
  }

  return (
    <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src={orangeSierraLeone}
            alt="Orange Sierra Leone"
          />
          <h6 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            {errorMessage}
          </h6>
          <hr />
          <h6 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Test Active Directory UI
          </h6>

        </div>
        <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="px-4 text-2xl relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Email address"
              />
            </div>
            <br />
            <div>
              <label htmlFor="password" className="sr-only ">
                Password
              </label>
              <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="px-4 text-2xl relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 lg:text-lg lg:leading-18"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">

              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Note that your login Password is your Windows login
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                </span>
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

  );
}

export default Login;
