
import React, { Component } from 'react'; 
import { WebView,AppRegistry } from 'react-native'; 

export default class DoghnutChart extends Component { 


  render() { 

   let htmlTest = `
             

<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css"
  integrity="sha512-M2wvCLH6DSRazYeZRIm1JnYyh22purTM+FDB5CsyxtQJYeKq83arPe5wgbNmcFXGqiSH2XR8dT/fJISVA1r/zQ=="
  crossorigin=""/>
  <script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"
  integrity="sha512-lInM/apFSqyy1o6s89K4iQUKg6ppXEgsVxT35HbzUupEVRh2Eu9Wdl4tHj7dZO0s1uvplcYGmt3498TtHq+log=="
  crossorigin=""></script>
  <script src="http://d3js.org/d3.v3.min.js"></script>

  </head>
  <body>

<style type="text/css">
#mapid {
  width: 80%;
  height: 500px;
    margin-left: auto;
    margin-right: auto;
}
</style>
    <div id="mapid"></div>
  </body>
  <script type="text/javascript">


  mapBounds = L.latLngBounds(-33, 77);
  var selectedCountry;
  var map = new L.Map('mapid',
    {
      center: [-33, 95],
      maxZoom : 7,
      minZoom: 2,
      zoom: 3,
      attributionControl: false,
      noWrap : true
    }).addLayer(
      new L.TileLayer("https://{s}.tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey=8f24cebb48b04166bbecd9ce32d8acb9")
    );

    d3.json("https://raw.githubusercontent.com/nardosm/DataBankApp/master/convertedCoords.json", function (json){
        function style(feature) {
          return {
            fillColor: "white",
            fill : true,
            weight: 0.0,
            opacity: 0.0,
          };
        }
        var geo = L.geoJson(json, {
          onEachFeature : onEachFeature,
          style : style
        }).addTo(map);

        geo.eachLayer(function (layer){
          //Replace google with whereever you want to redirect, this works just like html
          layer.bindPopup("<b>"+layer.feature.properties.NAME +"</b>"+"\n"+"<a href=\"https://www.google.com\">"+"More Info!"+"<a/>");
        })

        function onEachFeature(feature, layer){
          function onCountryClick(e){
            //Whatever you wanna do
            //if()
            selectedCountry = e.target.feature.properties.NAME;
            console.log(selectedCountry);
          };
          layer.on({
            click : onCountryClick
          });
        };

      });



  </script>
</html>



  `
 console.log(htmlTest);
    return ( 
      <WebView 
      source={{html: htmlTest}} 
      style={{marginTop: 10, height:220}} /> ); 
  } 
}



AppRegistry.registerComponent('DataBankApp', () => DoghnutChart);


