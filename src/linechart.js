import React, { Component } from 'react'; 
import { WebView,AppRegistry } from 'react-native'; 

export default class LineChart extends Component { 

  constructor(props){
    super(props);
    this.state=({
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,24,15,56,54,35,32,23,13,25,16,15,20,2,7,15]
    })
  }

  render() { 

   let htmlTest = `
             
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Line Chart Test</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/1.0.2/Chart.min.js"></script>
  <script language="JavaScript">
  function displayLineChart() {
    





    var data = {
        labels: [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2015,2016],
        datasets: [
            {
                label: "World Population",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "#FE5F5F",
                pointColor: "#FE5F5F",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data:  [${this.props.data}]
            },
            
        ]
    };
    var ctx = document.getElementById("lineChart").getContext("2d");
    var options = {
      scaleShowLabels: false,
      datasetStrokeWidth:3,
      pointDot:false,
      datasetFill:false, 
      scaleGridLineWidth:0.5,
      scaleFontFamily:'Montserrat-Light',
      tooltipFillColor:'#DA5050',
      tooltipFontFamily:'Montserrat-Regular',
      scaleGridLineColor:'#fedfdf',
      scaleLineColor:'transparent',
      scaleSteps:2,
      scaleFontColor:'transparent'


     };
    var lineChart = new Chart(ctx).Line(data, options);
  }




  </script>
</head>
<body onload="displayLineChart();">
  <div class="box">
    <canvas id="lineChart" height="250" width="430"></canvas>
  </div>
</body>
</html>
  `
 console.log(htmlTest);
    return ( 
      <WebView 
      source={{html: htmlTest}} 
      style={{marginTop: 10, height:300}} /> ); 
  } 
}



