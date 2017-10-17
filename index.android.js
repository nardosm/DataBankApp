
import React, { Component } from 'react'; 
import { WebView,AppRegistry, View, Text,StyleSheet } from 'react-native'; 
import Modal from 'react-native-modalbox';

export default class DoghnutChart extends Component { 

  constructor(props) {
        super(props)
        this.state = {
           selectedCountry: null,
        }
       
    }
    onMessage(data) {
      this.setState({
        selectedCountry:data
      },
      function () {
          this.refs.modal6.open()
          console.log(this.state.selectedCountry);
      })

    }



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
  width: 100%;
  height: 100%;
  
}
</style>
    <div id="mapid"></div>
  </body>

</html>

  `
 let jsCode = `
       
  mapBounds = L.latLngBounds(-33, 77);
  var selectedCountry;
  var map = new L.Map('mapid',
    {
      center: [8.7832,34.5085],
       zoomControl:false,
      maxZoom : 10,
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
         
        });

        function onEachFeature(feature, layer){
          function onCountryClick(e){
            selectedCountry = e.target.feature.properties.NAME;
            window.postMessage(selectedCountry);
           
            
          };
          layer.on({
            click : onCountryClick
          });
        };
      

      });
    `;

    //console.log(this.state.selectedCountry);
    return ( 
     <View style={{flex:1}}>
      <WebView 
        source={{html: htmlTest}} 
        injectedJavaScript={jsCode}
        javaScriptEnabledAndroid={true}
        style={{flex:1}} 
        onMessage={(event)=> this.onMessage(event.nativeEvent.data)}
      /> 
     <Modal style={[styles.modal, styles.modal4]} position={"bottom"} ref={"modal6"} swipeArea={20}>
          <Text>{this.state.selectedCountry}</Text>
</Modal>
      </View>

    ); 
  } 
}




const styles = StyleSheet.create({

  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  modal4: {
    height: 100
},


});


AppRegistry.registerComponent('DataBankApp', () => DoghnutChart);


