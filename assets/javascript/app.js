$(document).ready(function () {
  var map;

  var infowindow;

  function initMap() {
    var sacramento = new google.maps.LatLng(38.5618473, -121.5129521);

    infowindow = new google.maps.InfoWindow();

    map = new google.maps.Map(document.getElementById('map'), {
      center: sacramento,
      zoom: 11.5,
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
      $('.card-title').text(place.name);
      $('.openHours').text('Open: Sunrise to Sunset');
      $('.rating').text(place.rating + ' out of 5 stars');
      $('.ratingTotal').text(place.user_ratings_total + ' Reviews');
      $('.parkAddress').text(place.vicinity);

      if (place.rating < 2) {
        $('.star-container').html(
          $(`<img src="./assets/images/1star.png" width="25%" height="25%"/>`)
        );
      }
      if (place.rating > 2 && place.rating < 3) {
        $('.star-container').html(
          $(`<img src="./assets/images/2stars.png" width="25%" height="25%"/>`)
        );
      }
      if (place.rating > 3 && place.rating < 4) {
        $('.star-container').html(
          $(`<img src="./assets/images/3stars.png" width="25%" height="25%"/>`)
        );
      }
      if (place.rating > 4 && place.rating < 5) {
        $('.star-container').html(
          $(`<img src="./assets/images/4stars.png" width="30%" height="30%"/>`)
        );
      }
      if (place.rating >= 5) {
        $('.star-container').html(
          $(`<img src="./assets/images/5stars.png" width="30%" height="30%"/>`)
        );
      }

      if (place.name === 'William Land Regional Park') {
        $('.text-left').addClass('hide');
        $('.covid-text').addClass('hide');
        $('.main-covid-header').addClass('hide');
        $('.feature-header').removeClass('hide');
        $('.features').text(
          'Adventure Play Area, Amphitheater, Attractions (Fairytale Town, Funderland, Sacramento Zoo), Basketball Court, Golf Course, Jogging Path, Lakes, Picnic Areas, Restrooms, Rock Gardens, Off-street Parking, Softball Field, Soccer Fields, Village Green, Wading Pool'
        );
      }
      if (place.name === 'Southside Park') {
        $('.text-left').addClass('hide');
        $('.covid-text').addClass('hide');
        $('.main-covid-header').addClass('hide');
        $('.feature-header').removeClass('hide');
        $('.features').text(
          'Amphitheater, Lake with Fishing Piers, Tennis Courts, Basketball Court, Picnic Areas, Play Area, Southside Clubhouse, Swimming and Wading Pool, Jogging Trail'
        );
      }
      if (place.name === 'Tahoe Park') {
        $('.text-left').addClass('hide');
        $('.covid-text').addClass('hide');
        $('.main-covid-header').addClass('hide');
        $('.feature-header').removeClass('hide');
        $('.features').text(
          'Bantam Soccer Field, Basketball Court, Horseshoes, Picnic Areas, Restrooms, Play Areas, Softball Field, Swimming and Wading Pool, Volleyball'
        );
      }
      if (place.name === 'McKinley Park') {
        $('.text-left').addClass('hide');
        $('.covid-text').addClass('hide');
        $('.main-covid-header').addClass('hide');
        $('.feature-header').removeClass('hide');
        $('.features').text(
          'Basketball Court, Community Center, Garden and Arts Center, Group Picnic Area, Horseshoes, Jogging Trail, Play Areas, Climbing Wall, Restrooms, Soccer Field, Softball Field, Swimming and Wading Pool, Tennis Courts, Volleyball Court'
        );
      }
      if (place.name === 'East Portal Park') {
        $('.text-left').addClass('hide');
        $('.covid-text').addClass('hide');
        $('.main-covid-header').addClass('hide');
        $('.feature-header').removeClass('hide');
        $('.features').text(
          'Bocce Courts, East Portal Clubhouse, Picnic Areas, Play Areas (Adventure Play Area, Tot Lot Play Area), Softball Field'
        );
      }
      if (place.name === 'Discovery Park') {
        $('.text-left').addClass('hide');
        $('.covid-text').addClass('hide');
        $('.main-covid-header').addClass('hide');
        $('.feature-header').removeClass('hide');
        $('.features').text('Picnic Areas, Archery Range, Bicycle Trail');
      }
      if (place.name === 'Woodlake Park') {
        $('.text-left').addClass('hide');
        $('.covid-text').addClass('hide');
        $('.main-covid-header').addClass('hide');
        $('.feature-header').removeClass('hide');
        $('.features').text(
          'Adventure Play Area, Benches, Amphitheater, Peace Officer Memorial, Softball Field, Tennis Court, Tot Lot Play Area, Woodlake Clubhouse'
        );
      }
      if (place.name === 'Parkway Oak Park') {
        $('.text-left').addClass('hide');
        $('.covid-text').addClass('hide');
        $('.main-covid-header').addClass('hide');
        $('.feature-header').removeClass('hide');
        $('.features').text(
          'Adventure Play Area, Tot Lot Play Area, Walking Path, Picnic Areas, Shade Structure, Soccer Field'
        );
      }
      if (place.name === 'Gardenland Park') {
        $('.text-left').addClass('hide');
        $('.covid-text').addClass('hide');
        $('.main-covid-header').addClass('hide');
        $('.feature-header').removeClass('hide');
        $('.features').text(
          'Water Spray Feature, Plaza with Picnic Tables, Bicycle Trail'
        );
        $('.notice').text(
          'Until further notice, the spray feature at this park is closed due to the inability to distance 6 feet while using this feature.'
        );
        $('.covid-notice').removeClass('hide');
      }
      if (place.name === 'Mae Fong Park') {
        $('.text-left').addClass('hide');
        $('.covid-text').addClass('hide');
        $('.main-covid-header').addClass('hide');
        $('.feature-header').removeClass('hide');
        $('.features').text(
          'Jogging Trail, Outdoor Fitness Court, Outdoor Ping Pong Table, Disk Golf Course'
        );
      }
      if (place.name === 'Belle Cooledge Park') {
        $('.text-left').addClass('hide');
        $('.covid-text').addClass('hide');
        $('.main-covid-header').addClass('hide');
        $('.feature-header').removeClass('hide');
        $('.features').text(
          'Picnic Areas, Amphitheater, Jump Tent, Adventure Play Area, Tot Lot Play Area'
        );
      }
      if (place.name === 'Lawrence Park') {
        $('.text-left').addClass('hide');
        $('.covid-text').addClass('hide');
        $('.main-covid-header').addClass('hide');
        $('.feature-header').removeClass('hide');
        $('.features').text(
          'Basketball Court, Gazebo, Play Area, Softball Field, Picnic Areas, Restrooms'
        );
      }
      if (place.name === 'McClatchy Park') {
        $('.text-left').addClass('hide');
        $('.covid-text').addClass('hide');
        $('.main-covid-header').addClass('hide');
        $('.feature-header').removeClass('hide');
        $('.features').text(
          'Basketball Courts, Baseball Fields, Butterfly Garden with Interpretive Signs, Disk Golf Course, Drinking Fountain, Jogging Path with Fitness Equipment, Play Areas, Picnic Areas, Skate Park, Tennis Courts, Water Spray Area'
        );
        $('.notice').text(
          'Until further notice, the spray feature at this park is closed due to the inability to distance 6 feet while using this feature.'
        );
        $('.covid-notice').removeClass('hide');
      }
      if (place.name === 'John C. Fremont Park') {
        $('.text-left').addClass('hide');
        $('.covid-text').addClass('hide');
        $('.main-covid-header').addClass('hide');
        $('.feature-header').removeClass('hide');
        $('.features').text(
          'Adventure Playground, Drinking Fountain, Restrooms, Seating and Picnic Areas, Benches, Walkways, Wi-Fi'
        );
      }
      if (place.name === 'Land Park Playground') {
        $('.text-left').addClass('hide');
        $('.covid-text').addClass('hide');
        $('.main-covid-header').addClass('hide');
        $('.feature-header').removeClass('hide');
        $('.features').text(
          'Adventure Play Area, Amphitheater, Attractions (Fairytale Town, Funderland, Sacramento Zoo), Basketball Court, Golf Course, Jogging Path, Lakes, Picnic Areas, Restrooms, Rock Gardens, Off-street Parking, Softball Field, Soccer Fields, Village Green, Wading Pool'
        );
      }
      if (place.name === 'Fourth Avenue Park') {
        $('.text-left').addClass('hide');
        $('.covid-text').addClass('hide');
        $('.main-covid-header').addClass('hide');
        $('.feature-header').removeClass('hide');
        $('.features').text('Picnic Area, Playground');
      }
      if (place.name === 'Temple Avenue Park') {
        $('.text-left').addClass('hide');
        $('.covid-text').addClass('hide');
        $('.main-covid-header').addClass('hide');
        $('.feature-header').removeClass('hide');
        $('.features').text('Basketball Court, Play Area');
      }
      if (place.name === 'Franklin D. Roosevelt Park') {
        $('.text-left').addClass('hide');
        $('.covid-text').addClass('hide');
        $('.main-covid-header').addClass('hide');
        $('.feature-header').removeClass('hide');
        $('.features').text(
          'Picnic Areas, Softball Field, Restroom (Open 24/7)'
        );
      }
      if (place.name === 'Frank Seymour Park') {
        $('.text-left').addClass('hide');
        $('.covid-text').addClass('hide');
        $('.main-covid-header').addClass('hide');
        $('.feature-header').removeClass('hide');
        $('.features').text('Pathway lights, Walkways');
      }
      if (place.name === 'Bahnfleth Park') {
        $('.text-left').addClass('hide');
        $('.covid-text').addClass('hide');
        $('.main-covid-header').addClass('hide');
        $('.feature-header').removeClass('hide');
        $('.features').text('Picnic Areas, Soccer Field');
      }
      if (place.name === 'Robla Community Park') {
        $('.text-left').addClass('hide');
        $('.covid-text').addClass('hide');
        $('.main-covid-header').addClass('hide');
        $('.feature-header').removeClass('hide');
        $('.features').text(
          'Bantam Soccer Fields, Baseball Field, Basketball Courts, Benches with Interpretive Signage, Group Picnic Area, Pathway, Play Areas, Skate Park, Soccer Field'
        );
      }
    });
  }
});
