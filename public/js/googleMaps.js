function initMap() {
	var ucsd_itlng = {
		lat: 32.878886,
		lng:  -117.235926
	};

	map = new google.maps.Map(document.getElementById('map'), {
			zoom: 14,
			center: ucsd_itlng
		});
        
    var marker = new google.maps.Marker({
	    position: ucsd_itlng,
		map: map,
		title: "UCSD"
	});
}