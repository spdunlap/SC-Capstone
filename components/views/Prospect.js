import html from "html-literal";
export default st => html`
  <table id="prospects">
    <tr>
      <th>firstName</th>
      <th>lastName</th>
      <th>email</th>
      <th>property</th>
      <th>notes</th>
    </tr>
    ${st.prospects
      .map(prospect => {
        return `<tr><td>${prospect.firstName}</td><td>${prospect.lastName}</td><td>${
          prospect.email}</td><td>${prospect.property}</td><td>${prospect.notes
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
