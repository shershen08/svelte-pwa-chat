<script>

const getLocation = () => {

    //https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API 

  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(position)

    //convert to city - https://askgeo.com/#web-api
  }

  function error() {
    // 'Unable to retrieve your location';
  }

  if(!navigator.geolocation) {
    //'Geolocation is not supported by your browser';
  } else {
    // 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
  }

}
</script>

<button on:click={getLocation}>Show my location</button><br/>