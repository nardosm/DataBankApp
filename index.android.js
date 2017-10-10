
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


export default class DataBankApp extends Component {


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
      


      switch(this.state.slider1ActiveSlide){
        case 2:
          return(
            <View style={{flex:3}}>
            <Text style={sty.chartTitle}><Icon name="ios-stats" size={20} color="#FB5260" />  POPULATION GROWTH BY YEAR</Text>
              <LineChart  data= {[11,24,15,56,54,35,32,23,13,25,16,15,20,2,7,15]}/>
            </View>
          )
          break;

        case 1:
          return(
            <View style={{flex:3}}>
            <Text style={sty.chartTitle}><Icon name="ios-stats" size={20} color="#FB5260" />  Population Growth by Year</Text>
              <LineChart  data= {[11,24,15,56,54,35,32,23,13,25,16,15,20,2,7,15]}/>
            </View>
          )
          break;

        case 3:
          return(
            <View style={{flex:3}}>
              <Text style={sty.chartTitle}><Icon name="ios-stats" size={20} color="#FB5260" />  Population Growth by Year</Text>
               <LineChart  data= {[11,24,15,56,54,35,32,23,13,25,16,15,20,2,7,15]}/>
            </View>
          )
          break;

        case 5:
          return(
            <View style={{flex:3}}>
              <Text style={sty.chartTitle}><Icon name="ios-stats" size={20} color="#FB5260" />  Population Growth by Year</Text>
               <LineChart  data= {[11,24,15,56,54,35,32,23,13,25,16,15,20,2,7,15]}/>
            </View>
          )
          break;

      }
    }

    _renderDoughnutChart(){
      switch(this.state.slider1ActiveSlide ){
         
        case 0:
           return(
              <View style={{flex:3}}>
              <Text style={sty.chartTitle}><Icon name="ios-stats" size={20} color="#FB5260" />  Population Growth by Year</Text>
                <DoghnutChart />
             </View>
          )
          break;


        case 2:
           return(
              <View style={{flex:3}}>
              <Text style={sty.chartTitle}><Icon name="ios-stats" size={20} color="#FB5260" />  Population Growth by Year</Text>
                <DoghnutChart />
             </View>
          )
          break;

          case 4:
           return(
              <View style={{flex:3}}>
              <Text style={sty.chartTitle}><Icon name="ios-stats" size={20} color="#FB5260" />  Population Growth by Year</Text>
                <DoghnutChart />
             </View>
          )
          break;

          case 6:
           return(
              <View style={{flex:3}}>
              <Text style={sty.chartTitle}><Icon name="ios-stats" size={20} color="#FB5260" />  Population Growth by Year</Text>
                <DoghnutChart />
             </View>
          )
          break;
      }
    }

    _renderBarChart(){
      switch(this.state.slider1ActiveSlide){
          
        
        case 0:
          return(
            <View style={{flex:3}}>
            <Text style={sty.chartTitle}><Icon name="ios-stats" size={20} color="#FB5260" />  Population Growth by Year</Text>
              <BarChart />
            </View>
          )
          break;

        case 1:
          return(
            <View style={{flex:3}}>
            <Text style={sty.chartTitle}><Icon name="ios-stats" size={20} color="#FB5260" />  Population Growth by Year</Text>
              <BarChart />
            </View>
          )
          break;

        case 3:
          return(
            <View style={{flex:3}}>
            <Text style={sty.chartTitle}><Icon name="ios-stats" size={20} color="#FB5260" />  Population Growth by Year</Text>
              <BarChart />
            </View>
          )
          break;

        case 5:
          return(
            <View style={{flex:3}}>
            <Text style={sty.chartTitle}><Icon name="ios-stats" size={20} color="#FB5260" />  Population Growth by Year</Text>
              <BarChart />
            </View>
          )
          break;
      }
    }


    _renderPolarArea(){
      switch(this.state.slider1ActiveSlide){
         
        case 0:
          return(
              <View style={{flex:3}}>
              <Text style={sty.chartTitle}><Icon name="ios-stats" size={20} color="#FB5260" />  Population Growth by Year</Text>
               <PolarArea />
              </View>
          )
          break;


         case 2:
          return(
              <View style={{flex:3}}>
              <Text style={sty.chartTitle}><Icon name="ios-stats" size={20} color="#FB5260" />  Population Growth by Year</Text>
               <PolarArea />
              </View>
          )
          break;
          
          case 4:
          return(
              <View style={{flex:3}}>
              <Text style={sty.chartTitle}><Icon name="ios-stats" size={20} color="#FB5260" />  Population Growth by Year</Text>
               <PolarArea />
              </View>
          )
          break;

          case 6:
          return(
              <View style={{flex:3}}>
              <Text style={sty.chartTitle}><Icon name="ios-stats" size={20} color="#FB5260" />  Population Growth by Year</Text>
               <PolarArea />
              </View>
          )
          break;
      }
    }

     
    


    get example1 () {
        const { slider1ActiveSlide, slider1Ref } = this.state;

        return (
            <View>
                <Carousel
                  ref={(c) => { if (!this.state.slider1Ref) { this.setState({ slider1Ref: c }); } }}
                  data={ENTRIES1}
                  renderItem={this._renderItem}
                  sliderWidth={sliderWidth}
                  itemWidth={200}
                  hasParallaxImages={true}
                  firstItem={SLIDER_1_FIRST_ITEM}
                  inactiveSlideScale={0.5}
                  inactiveSlideOpacity={1}
                  enableMomentum={false}
                  scrollEndDragDebounceValue={Platform.OS === 'ios' ? 0 : 100}
                  onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                />
                
            </View>
        );
    }


 

 render() {

    return (

    <View style={sty.container}>
       <ScrollView >
              <LinearGradient colors={['#fe5f5f', '#fe5f5f']} style={styles.linearGradient}>
            
                  <View style={sty.toolbar}>
                    <Text style={sty.toolbarButton}><Icon name="ios-arrow-back-outline" size={35} color="#ffffff" /></Text>
                    <Text style={sty.country}>Ireland</Text>
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

              <View style={{ position:'absolute',zIndex:1, top:120}}>

            
               

           
                <ScrollView
                  style={styles.scrollview}
                  indicatorStyle={'white'}
                  scrollEventThrottle={200}
                  directionalLockEnabled={true}
                >

                    {this.example1}

                  
                </ScrollView>
               
          </View>

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

