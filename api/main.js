const baseURL = "https://api.sampleapis.com/coffee/hot";
const req = new XMLHttpRequest();
req.addEventListener("load", afterLoad);
req.open("GET", baseURL);
req.send();
function afterLoad(event) {
  const xhr = event.target;
  const data = JSON.parse(xhr.response)
  console.log(data)
  console.log(xhr.statusText)
  console.log(event)
  console.log(event.target)
}
