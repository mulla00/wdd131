// const temperature = 31;
// const speed = 8;

// function calculateWindChill(temp, speed) {
//   return (
//     13.12 +
//     0.6215 * temp -
//     11.37 * Math.pow(speed, 0.16) +
//     0.3965 * temp * Math.pow(speed, 0.16)
//   ).toFixed(1);
// }

// function displayWindChill() {
//   const windChillElement = document.getElementById("wind-chill");
//   if (temperature <= 31 && windSpeed > 7.8) {
//     windChillElement.innerText = `${calculateWindChill(
//       temperature,
//       windSpeed
//     )} °C`;
//   } else {
//     windChillElement.innerText = "N/A";
//   }
// }

// window.onload = function () {
//   displayWindChill();
// };

// Function to calculate wind chill
function calculateWindChill(temp, windSpeed) {
  if (temp <= 31 && windSpeed > 7.8) {
    return (
      13.12 +
      0.6215 * temp -
      11.37 * Math.pow(windSpeed, 0.16) +
      0.3965 * temp * Math.pow(windSpeed, 0.16)
    ).toFixed(2);
  } else {
    return "N/A";
  }
}

const temperature = 31;
const windSpeed = 8

document.addEventListener("DOMContentLoaded", () => {
     const windChill = calculateWindChill(temperature, windSpeed);
     document.getElementById(
       "windChillOutput"
     ).textContent = `Wind Chill: ${windChill} °C`;
});
