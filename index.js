document.title = "Dunlap Properties LLC";

// importing all as a Module object
// import * as components from "./components";
// importing all by name

import { Header, Nav, Main, Footer } from "/components";
import * as state from "/store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import "./env";
import { Loader } from "@googlemaps/js-api-loader";

const router = new Navigo(window.location.origin);

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
  `;
  router.updatePageLinks();
  addEventListeners(st);
}
render(state.home);

function addEventListeners(st) {
  // add event listeners to Nav items for navigation
  document.querySelectorAll("nav a").forEach(navLink =>
    navLink.addEventListener("click", event => {
      event.preventDefault();
      render(state[event.target.title]);
    })
  );

  // add menu toggle to bars icon in nav bar
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );

  if (st.view === "Prospect") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      const inputList = event.target.elements;

      const prospects = [];

      const requestData = {
        firstName: inputList.firstName.value,
        lastName: inputList.lastName.value,
        email: inputList.email.value,
        property: inputList.property.value,
        notes: inputList.notes.value
      };

      axios
        .post(`${process.env.API}/prospects`, requestData)
        .then(response => {
          state.Prospect.prospects.push(response.data);
          router.navigate("/properties");
        })
        .catch(error => {
          console.log("Failed to Submit", error);
        });
    });
  }

  if (st.view === "Properties") {
    let map;

    // function initMap() {
    //   const localContextMapView = new google.maps.localContext.LocalContextMapView({
    //     element: document.getElementById("map"),
    //     placeTypePreferences: [
    //       { type: "restaurant" },
    //       { type: "tourist_attraction" },
    //     ],
    //     maxPlaceCount: 12,
    //   });
    //   map = localContextMapView.map;
    //   map.setOptions({
    //     center: { lat: 51.507307, lng: -0.08114 },
    //     zoom: 14,
    //   });
    // }

    const loader = new Loader({
      apiKey: `${process.env.GOOGLE_API}`,
      version: "weekly",
      // ...additionalOptions,
    });
    loader.load().then(() => {
      map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 38.614, lng: -90.249 },
        zoom: 15,
      });
    });
  }



}

router.hooks({
  before: (done, params) => {
    // Because not all routes pass params we have to guard against it being undefined
    const page =
      params && params.hasOwnProperty("page")
        ? capitalize(params.page)
        : "Properties";

    switch (page) {
      case "Properties":
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.WEATHER_API_KEY}&q=st.%20louis`
          )
          .then(response => {
            state.Properties.weather = {};
            console.log(response, state.Properties.weather);
            state.Properties.weather.city = response.data.name;
            state.Properties.weather.temp = response.data.main.temp;
            state.Properties.weather.feelsLike = response.data.main.feels_like;
            state.Properties.weather.humidity = response.data.main.humidity;
            state.Properties.weather.description =
              response.data.weather[0]["description"];
            done();
          })
          .catch(err => console.log(err));
        break;

          case "Prospect":
            axios
              .get(`${process.env.API}/prospects`)
              .then(response => {
                state[page].prospects = response.data;
                done();
              })
              .catch(error => {
                console.log("Failed to get prospects", error);
                done();
              });
            break;

      default:
        done();
    }
  }
});

router
  .on({
    "/": () => render(state.Home),
    ":page": params => render(state[capitalize(params.page)])
  })
  .resolve();
