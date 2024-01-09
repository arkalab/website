import React, { useState } from 'react';

const MyForm = () => {
  const [message, setMessage] = useState('');

  const submitForm = async () => {
    try {
      const form = document.getElementById('myForm');
      const formData = new FormData(form);

      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
      });

      const data = await response.text();
      // Handle the response as needed
      if (JSON.parse(data).result === 'success') {
        // Clear form fields
        form.reset();

        // Display success message
        setMessage('Email cadastrado!');
      } else {
        // Display error message
        setMessage('Erro ao enviar as informações. Por favor tente novamente.');
      }
    } catch (error) {
      console.error('Error:', error);

      // Display error message
      setMessage('Erro');
    }
  };

  return (
    <>
      <form
        method="POST"
        action="https://script.google.com/macros/s/AKfycbz7pqab6UkFp3rsCCxMsWewopQMJ-QCexFejQCM_XPHL_g-PD8XxaFmjA18JnsI97vH-g/exec"
        id="myForm"
        className="flex max-w-[38ch] mt-4"
      >
        <input
          name="Email"
          type="email"
          placeholder="E-mail"
          className="flex w-full h-12 border-2 border-cyan-500 bg-4 p-2 outline-none rounded-r-none"
          required
        />
        <button
          type="button"
          className="flex h-12 bg-cyan-500 text-white my-auto place-content-center px-6 items-center"
          onClick={submitForm}
        >
          Enviar
        </button>
      </form>

      {message && (
        <div id="messageContainer" style={{ color: message.includes('Error') ? 'red' : 'green' }}>
          <p>{message}</p>
        </div>
      )}
    </>
  );
};

export default MyForm;
