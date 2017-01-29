function initMap() {
  var latlng = {lat: 17.385044, lng: 78.486671};

  // var coords = {};
  // $(coords).on('positionReady', function(e, pos) { return pos;});

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
    var location = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    map.setCenter(location);
    marker.setPosition(location);
    $.post('/location', {location}, function(result) {
    });

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
