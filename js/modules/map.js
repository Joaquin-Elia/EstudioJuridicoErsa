'use strict'

export const map = () => {
    import('https://unpkg.com/leaflet/dist/leaflet.js')
    .then(() => {
        let mymap = L.map('map').setView([-36.77789132696739, -59.862326519033175], 17.3);
        L.tileLayer(`https://tile.jawg.io/1c14f89a-fdc3-4437-a3e2-35f597aa82fa/{z}/{x}/{y}{r}.png?access-token=Karr7F1v5NI41O6fHRQzGCQ2mIJtHRK5RqzvbAdLCcHlo4nGgdeWO4dZaq1kOuNf`, {}).addTo(mymap);
        mymap.attributionControl.addAttribution("<a href=\"https://www.jawg.io\" target=\"_blank\">&copy; Jawg</a> - <a href=\"https://www.openstreetmap.org\" target=\"_blank\">&copy; OpenStreetMap</a>&nbsp;contributors")
        let LeafIcon = L.Icon.extend({
            options: {
                iconSize: [28, 40],
                iconAnchor: [28, 40],
                popupAnchor: [-13, -32]
            }
        });
        
        // new icon object
        let redIcon = new LeafIcon({
            iconUrl: 'https://www.google.com/maps/vt/icon/name=assets/icons/spotlight/spotlight_pin_v4_outline-2-medium.png,assets/icons/spotlight/spotlight_pin_v4-2-medium.png,assets/icons/spotlight/spotlight_pin_v4_dot-2-medium.png&highlight=c5221f,ea4335,b31412?scale=1.25',
        });
        
        let marker = L.marker([-36.77789132696739, -59.862326519033175], {icon: redIcon}).addTo(mymap)
        marker.bindPopup("<p>Estudio Juridico Erreguerena y Sabalúa</p>").openPopup();
    })
    .catch((error) => {
        console.error(`Error loading Leaflet: ${error}`);
    });
}