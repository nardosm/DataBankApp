
import React, { Component } from 'react';
import { View, ScrollView, Text, StatusBar, Platform, Dimensions,AppRegistry, Image, StyleSheet, WebView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import SliderEntry from './src/components/SliderEntry';
import { ENTRIES1 } from './src/static/entries';
import styles from './src/styles/index.style';
import LineChart from './src/linechart';
import DoghnutChart from './src/doughnut';
import BarChart from './src/barchart';
import PolarArea from './src/polararea';
import Icon from 'react-native-vector-icons/Ionicons';


const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.4;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

const SLIDER_1_FIRST_ITEM = 2;
const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 2;


export default class RenderChart extends Component {


    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
            slider1Ref: null
        };
    }

    _renderItem ({item, index}) {
        return (
            <View
              style={{flex: 1,
              backgroundColor:'#ffffff',
              justifyContent: 'center',
              alignItems: 'center',
              width: 200,
              height: 120}}
            >
            <Icon name={item.illustration} size={50} color="#FB5260" /> 
            <Text style={sty.overlayText}>{item.title}</Text>
          
            </View>
        );
    }


    _renderLineChart(){
    
          return(
            <View style={{flex:3}}>
            <Text style={sty.chartTitle}><Icon name="ios-stats" size={20} color="#FB5260" />  POPULATION GROWTH BY YEAR</Text>
              <LineChart  data= {[11,24,15,56,54,35,32,23,13,25,16,15,20,2,7,15]}/>
            </View>
          ) 
    }

     
    


 render() {

    return (

    <View style={sty.container}>
       <ScrollView >
              <LinearGradient colors={['#fe5f5f', '#fe5f5f']} style={styles.linearGradient}>
            
                  <View style={sty.toolbar}>
                    <Text style={sty.toolbarButton}><Icon name="ios-arrow-back-outline" size={35} color="#ffffff" /></Text>
                    <Text style={sty.country}>{this.props.countryName}</Text>
                    <Text style={sty.toolbarButton}></Text>
                </View>

                  <Text style={sty.subtext}>
                  </Text>

                  <Text style={sty.subtextNumber}>
                      1.324B
                  </Text>
             

                  <View style={{height:80}}>

                  </View>
               
              </LinearGradient>

           

            <View style={{flex:1, marginTop: 70}}>
         
              {this._renderLineChart()}
             {/*
              {this._renderDoughnutChart()}

              {this._renderBarChart()}
           
              {this._renderPolarArea()}
            */}
            </View>
            </ScrollView>
</View>

    );
  }
}

const sty = StyleSheet.create({


  toolbar:{

        marginTop:20,
        flexDirection:'row'    //Step 1
    },
    toolbarButton:{
      marginTop:5,
        width: 50,            //Step 2
        color:'#fff',
        textAlign:'center'
    },
    toolbarTitle:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        flex:1                //Step 3
    },






  linearGradient: {
    zIndex:0,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,

  },
  columnedItems:{
     flexDirection:'row',
     justifyContent: 'space-between',

  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',

  },
  country: {
    fontSize: 30,
    textAlign: 'center',
    color:'#ffffff',
    fontFamily:'Montserrat-Regular',
    flex:1 

  },

  chartTitle: {
    marginTop:26,
    marginBottom:0,
    marginLeft:10,
    fontSize: 15,
    color:'#696969',
    fontFamily:'Montserrat-SemiBold',
    letterSpacing: 2,
    textAlign: 'center',


  },

  overlayText: {
    fontSize: 15,
    textAlign: 'center',
    color:'#FB5260',
    fontFamily:'Montserrat-Bold',
    letterSpacing: 2,


  },
  subtext: {
    marginTop:10,
    fontSize: 14,
    textAlign: 'center',
    color:'#ffffff',
    fontFamily:'Montserrat-Light',
    letterSpacing: 2,
  },
  subtextNumber: {
    marginTop:-10,
    fontSize: 15,
    textAlign: 'center',
    color:'#ffffff',
    fontFamily:'Montserrat-Bold',
    letterSpacing: 2,
  },
  subtextSmallText: {
    marginTop:25,
    marginBottom:10,
    fontSize: 12,
    textAlign: 'center',
    color:'#ffffff',
    fontFamily:'Montserrat-Light',
    letterSpacing: 2,

  },

});
 

AppRegistry.registerComponent('DataBankApp', () => DataBankApp);

