//Author: David Brown

// Initialize Map
function initMap() {
    const options = {
        center: {lat: 26.05528810, lng: -80.15584090},
        zoom: 15
    }
    // New Map
    map = new google.maps.Map(document.getElementById("map"), options);

    /*
    // Create a Map Marker
    const marker = new google.maps.Marker({
        position: {lat: 26.05528810, lng: -80.15584090},
        map:map,
        icon:"../img/location.png"
    });

    // InfoWindow
    const detailWindow = new google.maps.InfoWindow({
        content: `<img src="./img/duskythumb.png">
                  <h5>Store # 001</h5>
                  <br>
                  <p>Dusky Sport Center</p>`,        
    });

    marker.addListener("mouseover", () => {
        detailWindow.open(map, marker);
    });    
    */

    // Create Function to Add New Markers
    function addMarker(property) {
        // Create a Map Marker
        const marker = new google.maps.Marker({
            position: property.location,
            map:map,
            //icon:property.imageIcon
        });

        // Check for custom icon
        if(property.imageIcon){
            // Set image icon
            marker.setIcon(property.imageIcon)
        }

    }

    addMarker({location:{lat: 26.05528810, lng: -80.15584090}, imageIcon:"../img/location.png"});
    addMarker({location:{lat: 26.06529, lng: -80.16530}, imageIcon:"../img/location.png"});
    addMarker({location:{lat: 26.05919, lng: -80.15549}, imageIcon:"../img/location.png"});
}






