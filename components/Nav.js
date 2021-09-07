import html from "html-literal";

export default links => html`
  <nav class="nav-bar">
    <li id="bannerText">Dunlap Properties LLC</li>
    <ul class="hidden--mobile nav-links">
      ${links.map(
        link =>
          `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
      )}
    </ul>
    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
  </nav>

`;
