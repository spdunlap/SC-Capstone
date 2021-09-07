import html from "html-literal";
import living4038 from "../../assets/images/IMG_10182.jpg";
import kitchen4034 from "../../assets/images/IMG_2041.jpeg";

const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

export default st => html`

  <section id="properties">

  <div class="wrapper">

    <article class="main">
     <img class="prop-img" src="${living4038}" />
    </article>

    <aside class="aside aside-1">
      <body style="height:100%">
        <div id="map"></div>
      </body>
    </aside>
    <article class="description">
    <h2 class="unitTitle" style="justify-content: center">4038 Russell Blvd. St. louis, MO 63110</h2>
      <br>
      <p class="unitDescription">
      Renovated Large two bedroom, one bath Shaw neighborhood rental available now!
      </p>
      <br><br>
      <p class="unitDescription">
      Located just north of Tower Grove Park and East of the Missouri Botanical Gardens, this 1300+ square foot, 2-bedroom, second floor unit, features a large living room with office nook, tiled Shower, kitchen, and dining area. This quiet apartment is just steps from Fiddlehead Fern Café and Sasha's on Shaw!
      </p>
      <br>
      <br>
      <ul class="unitUL">
        <li>- Renovated bathroom with tile floor and shower</li>
        <li>- Renovated kitchen with large fridge and gas range</li>
        <li>- New flooring and carpet</li>
        <li>- Refinished staircase</li>
        <li>- Washer dryer hookups basement</li>
        <li>- Owner pays water, sewer and trash</li>
        <li>- Tenant pay electric and gas</li>
        <li>- Gas furnace and Central Air</li>
      </ul>
      <br>
        <p class="unitDescription">
        **Tenant screening required. First months rent plus security deposit equal to one month's rent due at lease signing.
        </p>
        <br>
        <br>
        <p class="unitDescription">
         Click to request more information --- <input type="button" name="Request Info" value="Request More Info!" class="propButton">
        </p>
    </article>

    <!-- <aside class="aside aside-2">Aside 2</aside> -->
  </div>

  <!-- <div class="wrapper2">
    <article class="main">
      <img class="prop-img" src="${kitchen4034}" />
    </article>

    <aside class="aside aside-1">
      <body style="height:100%">
        <div id="map"></div>
      </body>
    </aside>
    <!-- <aside class="aside aside-2">Aside 2</aside> -->
  </div>
    <h3 id="weather">
      Current temperature in ${st.weather.city} is
      ${kelvinToFahrenheit(st.weather.temp)}F, feels like
      ${kelvinToFahrenheit(st.weather.feelsLike)}F. Humidity is at
      ${st.weather.humidity}%, and the weather is ... ${st.weather.description}
    </h3>
  </section>
`;
