const locations = [
  "Portland, Oregon",
  "Los Angelas, California",
  "Dallas, Texas",
  "London, United Kingdom",
  "Tokyo, Japan",
  "Seoul, South Korea",
  "Jakarta, Indonesia",
  "Purwokerto, Indonesia",
  "Bangkok, Thailand",
  "Singapore",
  "Frankfurt, Germany",
  "Sydney, Australia",
  "Johor Baru, Malaysia",
  "Shanghai, China",
  "Mumbai, India",
  "Paris, France",
];

const listUL = document.getElementById("location-list");
console.log(listUL);

locations.forEach((res) => {
  const locationListLi = document.createElement("li");

  const locationName = document.createElement("h3");
  locationName.innerText = res;

  const signal = document.createElement("img");
  signal.src = "./imgs/svg/signal.svg";

  locationListLi.appendChild(locationName);
  locationListLi.appendChild(signal);

  listUL.appendChild(locationListLi);
});
