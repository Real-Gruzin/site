addEventListener("load", (event) => {
  fetchData();
});

async function fetchData(params) {
  const userIP = await fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => console.error("Sorry error.", error));

  const userInfo = await fetch(
    `http://ip-api.com/json/${userIP.ip}?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query`
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => console.error(error));

  const contentElement = document.getElementById("content");
  contentElement.innerHTML = `Your IP: ${userInfo.query}`;
}
