import React, { Component } from 'react'; 
import { WebView,AppRegistry } from 'react-native'; 

export default class PolarArea extends Component { 

  constructor(props){
    super(props);
    this.state=({
      data: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
    })
  }

  render() { 

   let htmlTest = `
             


<html>

<body>
  <div id="chart">
  <canvas id="myChart" width="400" height="270"></canvas>
</div>
  <script src='http://code.jquery.com/jquery-2.2.4.min.js'></script>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.2.2/Chart.min.js'></script>

    <script>
      
      var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'polarArea',
  data: {
    labels: ["M", "T", "W", "T", "F"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#95a5a6",
        "#9b59b6",
        "#f1c40f",

      ],
      data: [12, 19, 3, 17, 28]
    }]
  }
});
     
    </script>

</body>
</html>


  `
 console.log(htmlTest);
    return ( 
      <WebView 
      source={{html: htmlTest}} 
      style={{marginTop: 10, height:300, backgroundColor:'transparent'}} /> ); 
  } 
}



