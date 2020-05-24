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
      $('.parkName').text(place.name);
      $('.openHours').text('Open');
      $('.rating').text(place.rating + ' out of 5 stars');
      $('.ratingTotal').text(place.user_ratings_total + ' Reviews');
      $('.parkAddress').text(place.vicinity);

      if (place.name === 'William Land Regional Park') {
        $('.features').text(
          'Adventure Play Area, Amphitheater, Attractions (Fairytale Town, Funderland, Sacramento Zoo), Basketball Court, Golf Course, Jogging Path, Lakes, Picnic Areas, Restrooms, Rock Gardens, Off-street Parking, Softball Field, Soccer Fields, Village Green, Wading Pool'
        );
        var parkMapImg = $('.parkImg');
        parkMapImg.html(
          $(
            `<img src="https://www.cityofsacramento.org/-/media/Corporate/Images/ParksandRec/Parks/William-landjpg/landPark_revised9-3-2014.jpg?h=500&w=642&la=en"/>`
          )
        );
      }
      if (place.name === 'Southside Park') {
        $('.features').text('');
        var parkMapImg = $('.parkImg');
        parkMapImg.html(
          $(
            `<img src="https://www.cityofsacramento.org/-/media/Corporate/Images/ParksandRec/Parks/Southside-Park/southsidepark.png?h=421&w=550&la=en"/>`
          )
        );
      }
      if (place.name === 'Tahoe Park') {
        $('.features').text('');
        var parkMapImg = $('.parkImg');
        parkMapImg.html(
          $(
            `<img src="https://www.cityofsacramento.org/-/media/Corporate/Images/ParksandRec/Parks/Tahoe-Park/tahoe_pkrevised2a.gif?la=en"/>`
          )
        );
      }
      if (place.name === 'McKinley Park') {
        $('.features').text('');
        var parkMapImg = $('.parkImg');
        parkMapImg.html(
          $(
            `<img src="http://www.cityofsacramento.org/-/media/Corporate/Images/ParksandRec/Parks/McKinley-Park/mckinley_map.gif?h=423&w=550&la=en"/>`
          )
        );
      }
      if (place.name === 'East Portal Park') {
        $('.features').text('');
        var parkMapImg = $('.parkImg');
        parkMapImg.html(
          $(
            `<img src="https://www.cityofsacramento.org/-/media/Corporate/Images/ParksandRec/Parks/East-Portal-Park/eportal_map.jpg?h=363&w=550&la=en"/>`
          )
        );
      }
      if (place.name === 'Discovery Park') {
        $('.features').text('');
        var parkMapImg = $('.parkImg');
        parkMapImg.html(
          $(
            `<img src="https://pdf2jpg.net/files/92cda48864e417897737e591bb2360db82a727f9/Discovery_Park_Map-page-001.jpg"/>`
          )
        );
      }
      if (place.name === 'Woodlake Park') {
        $('.features').text('');
        var parkMapImg = $('.parkImg');
        parkMapImg.html(
          $(
            `<img src="https://lh3.googleusercontent.com/proxy/NSoEHqFyIfnll2h4cMj5Yr9jZjp-6kGvjHJuJUb5UR2NGCXCExn6rHUCX34Axhx8HNbbOauVlX7H_ZOPB3PhfSS8z-9kLi0b_FSWSsxs4JcS7uk7MYDikrTXpdWkqw90iGZIVqYDZWuQwxyRLfpA5r0HcXw"/>`
          )
        );
      }
      if (place.name === 'Parkway Oak Park') {
        $('.features').text('');
        var parkMapImg = $('.parkImg');
        parkMapImg.html(
          $(
            `<img src="https://www.cityofsacramento.org/-/media/Corporate/Images/ParksandRec/Parks/Parkway-Oaks/parkwayoaks_plan.jpg?la=en"/>`
          )
        );
      }
      if (place.name === 'Gardenland Park') {
        $('.features').text('');
        var parkMapImg = $('.parkImg');
        parkMapImg.html(
          $(
            `<img src="https://www.cityofsacramento.org/-/media/Corporate/Images/ParksandRec/Parks/Gardenland-Park/09-parkmpgardenland.jpg?la=en"/>`
          )
        );
      }
      if (place.name === 'Mae Fong Park') {
        $('.features').text('');
        var parkMapImg = $('.parkImg');
        parkMapImg.html(
          $(
            `<img src="https://www.cityofsacramento.org/-/media/Corporate/Images/ParksandRec/Parks/Mae-Park/mae-fong-plan.jpg?la=en"/>`
          )
        );
      }
      if (place.name === 'Belle Cooledge Park') {
        $('.features').text('');
        var parkMapImg = $('.parkImg');
        parkMapImg.html(
          $(
            `<img src="https://www.cityofsacramento.org/-/media/Corporate/Images/ParksandRec/Parks/Cooledge-Park-South/cooledge-amenity-guide.jpg?la=en"/>`
          )
        );
      }
      if (place.name === 'Lawrence Park') {
        $('.features').text('');
        var parkMapImg = $('.parkImg');
        parkMapImg.html(
          $(
            `<img src="https://www.cityofsacramento.org/-/media/Corporate/Images/ParksandRec/Parks/Lawrence-Park/lawrence-map.gif?la=en"/>`
          )
        );
      }
      if (place.name === 'McClatchy Park') {
        $('.features').text('');
        var parkMapImg = $('.parkImg');
        parkMapImg.html(
          $(
            `<img src="https://www.cityofsacramento.org/-/media/Corporate/Images/ParksandRec/Parks/McClatchy-Park/mcclatchy-map.jpg?la=en"/>`
          )
        );
      }
      if (place.name === 'John C. Fremont Park') {
        $('.features').text('');
        var parkMapImg = $('.parkImg');
        parkMapImg.html(
          $(
            `<img src="https://www.cityofsacramento.org/-/media/Corporate/Images/ParksandRec/Parks/Fremont-Park/fremont_photo1.jpg?la=en"/>`
          )
        );
      }
      if (place.name === 'Land Park Playground') {
        $('.features').text(
          'Adventure Play Area, Amphitheater, Attractions (Fairytale Town, Funderland, Sacramento Zoo), Basketball Court, Golf Course, Jogging Path, Lakes, Picnic Areas, Restrooms, Rock Gardens, Off-street Parking, Softball Field, Soccer Fields, Village Green, Wading Pool'
        );
        var parkMapImg = $('.parkImg');
        parkMapImg.html(
          $(
            `<img src="https://www.cityofsacramento.org/-/media/Corporate/Images/ParksandRec/Parks/William-landjpg/landPark_revised9-3-2014.jpg?h=500&w=642&la=en"/>`
          )
        );
      }
      // if (place.name === 'Jonas Larkspur Park') {
      //   $('.features').text('');
      //   var parkMapImg = $('.parkImg');
      //   parkMapImg.html(
      //     $(
      //       `<img src="https://www.cityofsacramento.org/-/media/Corporate/Images/ParksandRec/Parks/Fremont-Park/fremont_photo1.jpg?la=en"/>`
      //     )
      //   );
      // }
    });
  }
});
