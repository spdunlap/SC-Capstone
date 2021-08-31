import html from "html-literal";
export default st => html`

  <div class="wrapperProspect">
    <article class="mainProspect">
      <form id="fs-frm" name="prospect-form" accept-charset="utf-8" action="" method="post">


        <fieldset id="fs-frm-inputs">
          <label for="firstName">First Name</label>
          <input type="text" name="firstName" id="firstName" placeholder="First Name" required="">
          <label for="lastName">Last Name</label>
          <input type="text" name="lastName" id="lastName" placeholder="Last Name" required="">
          <label for="email">Email Address</label>
          <input type="email" name="email" id="email" placeholder="email@domain.com" required="">
          <label for="property">Property Address</label>
          <input type="property" name="property" id="property" placeholder="123 Main Street" required="">
          <label for="notes">Notes</label>
          <textarea rows="6" name="notes" id="notes" placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus." required=""></textarea>
        </fieldset>
      <input type="submit" name="submit" value="Submit Interest">
      </form>
    </article>
  </div>

  <div class="wrapperProspect">
  <article class="mainProspect">
  <table id="prospects">
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Property</th>
      <th>Notes</th>
    </tr>
    ${st.prospects
      .map(prospect => {
        return `<tr><td>${prospect.firstName}</td><td>${prospect.lastName}</td><td>${
          prospect.email}</td><td>${prospect.property}</td><td>${prospect.notes
        }</td></tr>`;
      })
      .join("")}
  </table>
  </article>

  </div>

`;
