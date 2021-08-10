import html from "html-literal";

const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

export default st => html`
  <section id="properties">
    <h2>Properties</h2>
    <h3 id="weather">
      Temperature in ${st.weather.city} is
      ${kelvinToFahrenheit(st.weather.temp)}F, feels like
      ${kelvinToFahrenheit(st.weather.feelsLike)}F. Humidity is at
      ${st.weather.humidity}%, and the weather is ... ${st.weather.description}
    </h3>
  </section>
`;
