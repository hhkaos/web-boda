var map = L.map("mapDiv").setView([37.247846, -1.869034], 16);

L.esri.basemapLayer("Imagery").addTo(map);

L.esri.featureLayer({
  url: 'http://services.arcgis.com/Q6ZFRRvMTlsTTFuP/arcgis/rest/services/Boda_points/FeatureServer/0'
}).addTo(map);