function initMap() {

  // var apiJcdecaux = "https://api.jcdecaux.com/vls/v1/stations?contract=Paris&apiKey=d46ce58769d036b9f1c9711e12e17cefbf253246";
  var myLatLng = {lat: 48.855033, lng: 2.335322};
  // var markers = [];
  // var reponse;

  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    scrollwheel: false,
    zoom: 12
  });

  setMarkers(map);

  function setMarkers(map) {
    var markers = ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Paris&apiKey=d46ce58769d036b9f1c9711e12e17cefbf253246", function (reponse) {
      var markers = JSON.parse(reponse);
      for (var i = 0; i < markers.length; i++) {
        var marker = markers[i];
          var marker = new google.maps.Marker({
            position: {lat: markers[i].position.lat, lng: markers[i].position.lng},
            map: map
          });
      };
    })
  }



}
