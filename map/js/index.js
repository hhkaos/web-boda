var map = L.map("mapDiv").setView([37.247846, -1.869034], 17);

//L.esri.basemapLayer("Imagery").addTo(map);

var markers = L.esri.featureLayer({
  url: 'http://services.arcgis.com/Q6ZFRRvMTlsTTFuP/arcgis/rest/services/Boda_points/FeatureServer/0'
}).addTo(map);
/*var MyBingMapsKey = 'Ap2XquXVzw7hLotGj1q_Fz8cKui5p3ECQ9zyjp9sRK4ckrZYoPc-9w13KBXex0dP';
//L.tileLayer.bing(MyBingMapsKey).addTo(map)
var roads = L.gridLayer.googleMutant({
    type: 'satellite' // valid values are 'roadmap', 'satellite', 'terrain' and 'hybrid'
}).addTo(map);*/
var layer = L.esri.Vector.basemap('Streets').addTo(map);


markers.bindPopup(function (layer) {
    return L.Util.template('<p>Test</p>', layer.feature.properties);
  });
