import html from "html-literal";

export default st => html`
  <section id="maintenance">

  <div class="wrapperForm">
    <form id="fs-frm" name="maintenance-form" accept-charset="utf-8" action="https://formspree.io/f/moqyyjwb" method="post">


  <fieldset id="fs-frm-inputs">
    <label for="full-name">Full Name</label>
    <input type="text" name="name" id="full-name" placeholder="First and Last" required="">
    <label for="unit-address">Unit Address</label>
    <input type="text" name="unit" id="unit-address" placeholder="123 Main Street" required="">
    <label for="email-address">Email Address</label>
    <input type="email" name="_replyto" id="email-address" placeholder="email@domain.com" required="">
    <label for="telephone">Telephone Number (Optional)</label>
    <input type="telephone" name="telephone" id="telephone" placeholder="(555) 555-5555">
    <label for="request">Maintenance Request</label>
    <textarea rows="6" name="request" id="request" placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus." required=""></textarea>
    <input type="hidden" name="_subject" id="email-subject" value="request Form Submission">
  </fieldset>
  <input type="submit" value="File Maintenance Request">
  </form>
  </div>
  </section>
`;
