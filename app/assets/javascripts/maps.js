function initMap() {
  var latlng = {lat: 17.385044, lng: 78.486671};
  // var coords = {};
  // var test = $(coords).on('positionReady', function(e, pos) { console.log(pos); });

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15
  });

  var marker = new google.maps.Marker({
    map: map
  })

  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showLocation, errorHandler, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    });
  }

  //called everytime position is changed
  function showLocation(position) {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    map.setCenter(pos);
    marker.setPosition(pos);
    // $(coords).trigger('positionReady', pos);
  };

  function errorHandler(err) {
    if(err.code == 1) {
      alert("Error: Access is denied!");
    }
    else if( err.code == 2) {
      alert("Error: Position is unavailable!");
    }
  };
}
