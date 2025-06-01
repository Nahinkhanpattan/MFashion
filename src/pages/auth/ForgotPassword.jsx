import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    try {
      // Here you would make an API call to initiate password reset
      // For demo purposes, we'll just show a success message
      setStatus({
        type: 'success',
        message: 'If an account exists with this email, you will receive password reset instructions.'
      });
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'An error occurred. Please try again later.'
      });
    }
  };

  return (
    <div className="w-full max-w-md space-y-8">
      <div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Reset your password
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Enter your email address and we'll send you instructions to reset your password.
        </p>
      </div>

      {status.message && (
        <div
          className={`${
            status.type === 'error' ? 'bg-red-100 border-red-400 text-red-700' : 'bg-green-100 border-green-400 text-green-700'
          } px-4 py-3 rounded relative border`}
          role="alert"
        >
          <span className="block sm:inline">{status.message}</span>
        </div>
      )}

      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#e53637] sm:text-sm sm:leading-6 px-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md bg-[#e53637] px-3 py-2 text-sm font-semibold text-white hover:bg-[#e53637]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e53637]"
          >
            Send Reset Instructions
          </button>
        </div>

        <div className="text-center">
          <a href="/login" className="font-medium text-[#e53637] hover:text-[#e53637]">
            Back to login
          </a>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword; 