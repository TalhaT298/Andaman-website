import React, { Component } from 'react'
import { Tab,Tabs } from '@mui/material'
// import {Text} from "@nextui-org/react";
import Flight from "../ServiceMenu/Flights";
import Ship from "../ServiceMenu/Ship";
import Hotel from "../ServiceMenu/hotel";
import Cab from "../ServiceMenu/cab";
import Bus from "../ServiceMenu/bus";
import Activity from '../ServiceMenu/activity';
import Dinning from "../ServiceMenu/dinning";
import Trekking from "../ServiceMenu/trekking.js"
import Pg from "../ServiceMenu/Pg.js"
import TravelPackage from "../ServiceMenu/Service.js"
import { Container } from "@nextui-org/react";
import Lottie from 'react-lottie';
import * as FlightData from '../Icons/flight.json';
import * as HotelData from '../Icons/hotel.json';
import * as ShipData from '../Icons/ship.json';
import * as BusData from '../Icons/Bus.json';
import * as CabData from '../Icons/Cab.json';
import * as DivingData from '../Icons/diving.json';
import * as GuestData from '../Icons/guest.json';
import * as TravelData from '../Icons/travel.json';
import * as DinningData from '../Icons/dinning.json';
import * as TrekkingData from '../Icons/trekking.json';
import * as ShopData from '../Icons/shop.json';


export default class TabView extends Component {
    state={value:0,weight:"",tabcolor:""}
  render() {
    const handleTabs=(e,val)=>{
        console.warn(val)
        this.setState({value:val,weight:"bolder",tabcolor:"#100E09"})
    }

    function TabPanel(props){
        const {children,value,index}=props;
        return(<div>
            {value===index && (<h1>{children}</h1>)}
        </div>);
    }


    const size=75;

  //Icons
    const FlightIcon = {
      loop: true,
      autoplay: true, 
      animationData: FlightData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    
    const HotelIcon = {
      loop: true,
      autoplay: true, 
      animationData: HotelData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    const ShipIcon = {
      loop: true,
      autoplay: true, 
      animationData: ShipData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    const BusIcon = {
      loop: true,
      autoplay: true, 
      animationData: BusData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    const CabIcon = {
      loop: true,
      autoplay: true, 
      animationData: CabData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    const DivingIcon = {
      loop: true,
      autoplay: true, 
      animationData: DivingData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    
    const GuestIcon = {
      loop: true,
      autoplay: true, 
      animationData: GuestData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    
    const TravelIcon = {
      loop: true,
      autoplay: true, 
      animationData: TravelData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    const DinningIcon = {
      loop: true,
      autoplay: true, 
      animationData: DinningData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    
    const TrekkingIcon = {
      loop: true,
      autoplay: true, 
      animationData: TrekkingData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    
    const ShopIcon = {
      loop: true,
      autoplay: true, 
      animationData: ShopData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    
   
    return (
     
      <Container fluid>
   
          <Tabs value={this.state.val} 
          onChange={handleTabs}  
          variant="scrollable"
          textColor='#757574'
          indicatorColor='#757574'
          centered={true} 
          scrollButtons="auto"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#757574",
            }
          }}
          
          >
                  <Tab label="Flights"  icon={<Lottie options={FlightIcon} height={size} width={size} />} style={{color:this.state.value===0?this.state.tabcolor:"#757574",fontWeight:this.state.value===0?this.state.weight:"lighter",fontSize:'11px'}}/>
                  <Tab label="Hotels" icon={<Lottie options={HotelIcon} height={size} width={size} />} style={{color:this.state.value===1?this.state.tabcolor:"#757574",fontWeight:this.state.value===1?this.state.weight:"lighter",fontSize:'11px'}} />
                  <Tab label="Ship" icon={<Lottie options={ShipIcon} height={size} width={size} />} style={{color:this.state.value===2?this.state.tabcolor:"#757574",fontWeight:this.state.value===2?this.state.weight:"lighter",fontSize:'11px'}} />
                  <Tab label="Bus" icon={<Lottie options={BusIcon} height={size} width={size} />} style={{color:this.state.value===3?this.state.tabcolor:"#757574",fontWeight:this.state.value===3?this.state.weight:"lighter",fontSize:'11px'}} />
                  <Tab label="Cabs" icon={<Lottie options={CabIcon} height={size} width={size} />} style={{color:this.state.value===4?this.state.tabcolor:"#757574",fontWeight:this.state.value===4?this.state.weight:"lighter",fontSize:'11px'}} />
                  <Tab label="Water Sports" icon={<Lottie options={DivingIcon} height={size} width={size} />} style={{color:this.state.value===5?this.state.tabcolor:"#757574",fontWeight:this.state.value===5?this.state.weight:"lighter",fontSize:'11px'}} />
                  <Tab label="Paying Guest" icon={<Lottie options={GuestIcon} height={size} width={size} />} style={{color:this.state.value===6?this.state.tabcolor:"#757574",fontWeight:this.state.value===6?this.state.weight:"lighter",fontSize:'11px'}} />
                  <Tab label="Travel Package" icon={<Lottie options={TravelIcon} height={size} width={size} />} style={{color:this.state.value===7?this.state.tabcolor:"#757574",fontWeight:this.state.value===7?this.state.weight:"lighter",fontSize:'11px'}} />
                  <Tab label="Dinning" icon={<Lottie options={DinningIcon} height={size} width={size} />} style={{color:this.state.value===8?this.state.tabcolor:"#757574",fontWeight:this.state.value===8?this.state.weight:"lighter",fontSize:'11px'}} />
                  <Tab label="Trekking" icon={<Lottie options={TrekkingIcon} height={size} width={size} />} style={{color:this.state.value===9?this.state.tabcolor:"#757574",fontWeight:this.state.value===9?this.state.weight:"lighter",fontSize:'11px'}} />
                  <Tab label="Shop" icon={<Lottie options={ShopIcon} height={size} width={size} />} style={{color:this.state.value===10?this.state.tabcolor:"#757574",fontWeight:this.state.value===10?this.state.weight:"lighter",fontSize:'11px'}} />

              </Tabs>
         
          
              <TabPanel value={this.state.value||0} index={0}><Flight /></TabPanel>
              <TabPanel value={this.state.value} index={1}><Hotel  /></TabPanel>
              <TabPanel value={this.state.value} index={2}><Ship /></TabPanel>
              <TabPanel value={this.state.value} index={3}><Bus /></TabPanel>
              <TabPanel value={this.state.value} index={4}><Cab/></TabPanel>
              <TabPanel value={this.state.value} index={5}><Activity /></TabPanel>
              <TabPanel value={this.state.value} index={6}><Pg/></TabPanel>
              <TabPanel value={this.state.value} index={7}><TravelPackage /></TabPanel>
              <TabPanel value={this.state.value} index={8}><Dinning /></TabPanel>
              <TabPanel value={this.state.value} index={9}><Trekking /></TabPanel>   
              <TabPanel value={this.state.value} index={10}>Shop</TabPanel>        
        </Container>
    )
  }
}
