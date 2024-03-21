import './contact.css';

function Contact() {
  return (
    <div className="headcontainer">
    <div className="form-container">
        <h1 className='contact-formheader'>Contact Me!</h1>
      <form>
        <input type='text' className='input-field1' placeholder="Your Name" />
      </form>
      <form>
        <input type='text' className='input-field2' placeholder="Your Email" />
      </form>
      <form>
        <textarea className='input-field3' placeholder="You can contact me at CamdenPlaedu@gmail.com"></textarea>
      </form>
      <button className='submitbtn'>Submit!</button>
    </div>
    </div>
  );
}
document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('.submit-btn');
    submitButton.addEventListener('click', () => {
      alert('Form Submitted!');
    });
  });
  

export default Contact;
