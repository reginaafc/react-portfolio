import React, { useState } from 'react';


function Contactform() {
  const [formState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };


  return (
    <section className="flex justify-center m-12 p-12 bg-gray-100 shadow-xl rounded-lg">
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
   
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
    
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
  
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button className="rounded-lg bg-red-700 h-12 w-32 text-white" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contactform;
