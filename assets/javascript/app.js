$(document).ready(function () {
  var map;

  var infowindow;

  function initMap() {
    var sacramento = new google.maps.LatLng(38.5618473, -121.5129521);

    infowindow = new google.maps.InfoWindow();

    map = new google.maps.Map(document.getElementById('map'), {
      center: sacramento,
      zoom: 11,
    });

    var request = {
      location: sacramento,
      radius: '10000',
      name: ['park'],
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback); //im being charged for this so please do not for loop
  }

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
        console.log(results[i]);
        //results.splice(19, 1); //[19] was an object with a type of "general_contractor", so i removed it from the array
      }
    }
  }

  initMap();

  function createMarker(place) {
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location,
    });
    google.maps.event.addListener(marker, 'click', function () {
      infowindow.setContent(place.name);
      infowindow.open(map, this);

      var modalTitle = $('.modal-title').text(place.name);
      $('body').append(modalTitle);

      var modal;
    });
  }
});
