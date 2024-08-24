export default function PageThree() {


  return (
    <center>
      <h1>Send me a message</h1>
      <p>Feel free to get in touch with me with anything related to CODINGSPACE or you can just say hi. I will get back to you as soon as I can.</p>
      <form>
        <input type="text" name="name" defaultValue={'Name'} />
        <input type="email" name="emailAddress" defaultValue={'Email Address'} />
        <input type="text" name="subject" defaultValue={'Subject'} />
        <textarea name="message" rows={5} cols={50} defaultValue={'Message'} />
        <input type="submit" value="Submit" />
      </form>
    </center>
  );
}


// All fields are required and must be validated.
// The email field must be validated to ensure it is a valid email address format.
// The form should display a success message to the user after the form is submitted.
// The form should also display an error message if there are any issues with the form submission, such as an invalid email address or missing fields.
// The form should be responsive and should adjust to different screen sizes.
// The form should use the Contact Form API to send a form submission response to the email inbox.
// Show the hover state of all the elements.
// The component should be responsive and display correctly on different screen sizes.
// Make this landing page look as close to the design as possible.