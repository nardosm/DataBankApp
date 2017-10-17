import React, { Component } from 'react'; 
import { WebView,AppRegistry } from 'react-native'; 

export default class DoghnutChart extends Component { 


  render() { 

   let htmlTest = `
             

<html >

<body>
  <div class="container">

  <div>
    <canvas id="myChart" ></canvas>
  </div>
</div>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.2.2/Chart.min.js'></script>

    <script type="text/javascript">
      
          var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'doughnut',
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
      style={{marginTop: 40, height:220, backgroundColor:'transparent'}} /> ); 
  } 
}



