import L from 'leaflet';


let IconMarket =  L.Icon.extend({
    options: {
        shadowUrl: '/images/marker-shadow.png',
        iconSize:     [38, 95],
        shadowSize:   [50, 64],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
    }
});

let blackIcon = new IconMarket({iconUrl: '/images/Image1.png'});

let iconPerson =  new L.Icon({
    iconUrl: '/images/marker-icon.png',
    shadowUrl: '/images/marker-shadow.png',
    iconSize:     [38, 75], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [15, 55], // point of the icon which will correspond to marker's location
    shadowAnchor: [10, 45],  // the same for the shadow
    popupAnchor:  [5, -55] // point from which the popup should open relative to the iconAnchor
});

export { blackIcon };

export { iconPerson };