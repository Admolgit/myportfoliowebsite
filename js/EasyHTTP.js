class EasyHTTP {
  //Make an HTTP GET Request
  get(url) {
    fetch(url)
    .then (res => res.json())
    .then(data => console.log(data))
    .then(err => console.log(err));
  }