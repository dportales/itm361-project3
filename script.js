function initMap(){
	//midway airport 41.787030, -87.752002
	var pin = {lat: 41.787030, lng: -87.752002};
	var map = new google.maps.Map(document.getElementById('map'),{
		center: pin,
		zoom: 15,
	//style: aubergine
		styles: [
  {"elementType": "geometry","stylers": [{"color": "#1d2c4d"}]},
  {"elementType": "labels.text.fill","stylers": [{"color": "#8ec3b9"}]},
  {"elementType": "labels.text.stroke","stylers": [{"color": "#1a3646"}]},
  {"featureType": "administrative.country","elementType": "geometry.stroke","stylers": [{"color": "#4b6878"}]},
  {"featureType": "administrative.land_parcel","elementType": "labels.text.fill","stylers": [{"color": "#64779e"}]},
  {"featureType": "administrative.province","elementType": "geometry.stroke","stylers": [{"color": "#4b6878"}]},
  {"featureType": "landscape.man_made","elementType": "geometry.stroke","stylers": [{"color": "#334e87"}]},
  {"featureType": "landscape.natural","elementType": "geometry","stylers": [{"color": "#023e58"}]},
  {"featureType": "poi","elementType": "geometry","stylers": [{"color": "#283d6a"}]},
  {"featureType": "poi","elementType": "labels.text.fill","stylers": [{"color": "#6f9ba5"}]},
  {"featureType": "poi","elementType": "labels.text.stroke","stylers": [{"color": "#1d2c4d"}]},
  {"featureType": "poi.park","elementType": "geometry.fill","stylers": [{"color": "#023e58"}]},
  {"featureType": "poi.park","elementType": "labels.text.fill","stylers": [{"color": "#3C7680"}]},
  {"featureType": "road","elementType": "geometry","stylers": [{"color": "#304a7d"}]},
  {"featureType": "road","elementType": "labels.text.fill","stylers": [{"color": "#98a5be"}]},
  {"featureType": "road","elementType": "labels.text.stroke","stylers": [{"color": "#1d2c4d"}]},
  {"featureType": "road.highway","elementType": "geometry","stylers": [{"color": "#2c6675"}]},
  {"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#255763"}]},
  {"featureType": "road.highway","elementType": "labels.text.fill","stylers": [{"color": "#b0d5ce"}]},
  {"featureType": "road.highway","elementType": "labels.text.stroke","stylers": [{"color": "#023e58"}]},
  {"featureType": "transit","elementType": "labels.text.fill","stylers": [{"color": "#98a5be"}]},
  {"featureType": "transit","elementType": "labels.text.stroke","stylers": [{"color": "#1d2c4d"}]},
  {"featureType": "transit.line","elementType": "geometry.fill","stylers": [{"color": "#283d6a"}]},
  {"featureType": "transit.station","elementType": "geometry","stylers": [{"color": "#3a4762"}]},
  {"featureType": "water","elementType": "geometry","stylers": [{"color": "#0e1626"}]},
  {"featureType": "water","elementType": "labels.text.fill","stylers": [{"color": "#4e6d70"}]}
]});

	var marker = new google.maps.Marker({
		position: pin,
		map: map,
		title: 'Midway Airport'
	});
		marker.addListener('click', function() {
		infowindow.open(map, marker);
    });

	var contentString = '<div id="content">'+
    '<div id="siteInfo">'+
    '</div>'+
    '<h1 id="firstHead" class="firstHead">Midway Airport</h1>'+
    '<div id="bodyContent">'+
    '<p>Midway Airport is the airport I usually run/bike around due to it being very '+
	'symmetrical and easy to calculate the distance. There is also a small '+
	'park and a 7-eleven nearby to buy some snacks.'+
	'Midway is also connected to the CTA orange line making it easy '+
	'to travel to and within the city.</p>'+
	'</div>'+
	'</div>';
	
    var infowindow = new google.maps.InfoWindow({
		content: contentString
    });
}