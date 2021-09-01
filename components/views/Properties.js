import html from "html-literal";
import living4038 from "../../assets/images/IMG_1018.jpg";
import kitchen4034 from "../../assets/images/IMG_2041.jpeg";

const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

export default st => html`

  <section id="properties">

  <div class="wrapper">
    <article class="main">
    <img class="cover-img" src="${living4038}" />
  </article>
    <aside class="aside aside-1">
      <body style="height:100%">
      <div id="map" style="height:100%"></div>
      <script>
        let map;

          function initMap() {
            const localContextMapView = new google.maps.localContext.LocalContextMapView({
              element: document.getElementById("map"),
              placeTypePreferences: [
                { type: "restaurant" },
                { type: "tourist_attraction" },
              ],
              maxPlaceCount: 12,
            });
            map = localContextMapView.map;
            map.setOptions({
              center: { lat: 51.507307, lng: -0.08114 },
              zoom: 14,
            });
          }
      </script>
      <script async
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDXb21vKZd32zbUZfuetuEgMy3syM6GTbM&libraries=localContext&v=beta&callback=initMap">
      </script>


      </body>
    </aside>
    <!-- <aside class="aside aside-2">Aside 2</aside> -->
  </div>

  <div class="wrapper2">
    <article class="main">
    <img class="cover-img" src="${kitchen4034}" />
    </article>
    <aside class="aside aside-1">Aside 1</aside>
    <!-- <aside class="aside aside-2">Aside 2</aside> -->
  </div>


    <h3 id="weather">
      Temperature in ${st.weather.city} is
      ${kelvinToFahrenheit(st.weather.temp)}F, feels like
      ${kelvinToFahrenheit(st.weather.feelsLike)}F. Humidity is at
      ${st.weather.humidity}%, and the weather is ... ${st.weather.description}
    </h3>
  </section>
`;
