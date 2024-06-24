import React from 'react';

function Contact() {
  return (
    <div id='contact'>
<h1>CONTACT US</h1>
<form>
  <input type='text' placeholder='Full Name' required></input>
  <input type='email' placeholder='Your Email' required></input>
  <textarea placeholder='Write Here....' name='message'></textarea>
  <input type='submit' value='Send'></input>
</form>

    </div>
  );
};

export default Contact;