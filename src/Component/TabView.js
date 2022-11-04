import React, { Component } from 'react'
import { Tab,Tabs } from '@mui/material'
// import {Text} from "@nextui-org/react";
import Flight from "../ServiceMenu/Flights";
import Ship from "../ServiceMenu/Ship";
import Hotel from "../ServiceMenu/hotel";
import Cab from "../ServiceMenu/cab";
import Bus from "../ServiceMenu/bus";
import Activity from '../ServiceMenu/activity';
import Trekking from "../ServiceMenu/trekking.js"
import { Container } from "@nextui-org/react";
import FlightIcon from '@mui/icons-material/Flight';
import HouseIcon from '@mui/icons-material/House';
import SailingIcon from '@mui/icons-material/Sailing';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import ScubaDivingIcon from '@mui/icons-material/ScubaDiving';
import BungalowIcon from '@mui/icons-material/Bungalow';
import BackpackIcon from '@mui/icons-material/Backpack';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import HikingIcon from '@mui/icons-material/Hiking';
import SetMealIcon from '@mui/icons-material/SetMeal';
export default class TabView extends Component {
    state={val:0,weight:"",tabcolor:""}
  render() {
    const handleTabs=(e,val)=>{
        console.warn(val)
        this.setState({val:val,weight:"bolder",tabcolor:"#100E09"})
    }

    function TabPanel(props){
        const {children,value,index}=props;
        return(<div>
            {value===index && (<h1>{children}</h1>)}
        </div>);
    }
   
    return (
     
      <Container fluid>
   
          <Tabs value={this.state.val} 
          onChange={handleTabs}  
          variant="scrollable"
          textColor='#757574'
          indicatorColor='#757574'
          centered={true} 
          scrollButtons="auto"
          visibleScrollbar='true'
          TabIndicatorProps={{
            style: {
              backgroundColor: "#757574",
            }
          }}
          
          >
                  <Tab label="Flights" fontSize='1px' icon={<FlightIcon fontSize='small'/>} style={{color:this.state.val===0?this.state.tabcolor:"#757574",fontWeight:this.state.val===0?this.state.weight:"lighter",fontSize:'11px'}} />
                  <Tab label="Hotels" icon={<HouseIcon fontSize='small'/>} style={{color:this.state.val===1?this.state.tabcolor:"#757574",fontWeight:this.state.val===1?this.state.weight:"lighter",fontSize:'11px'}} />
                  <Tab label="Ship" icon={<SailingIcon fontSize='small'/>} style={{color:this.state.val===2?this.state.tabcolor:"#757574",fontWeight:this.state.val===2?this.state.weight:"lighter",fontSize:'11px'}} />
                  <Tab label="Bus" icon={<DirectionsBusFilledIcon fontSize='small'/>} style={{color:this.state.val===3?this.state.tabcolor:"#757574",fontWeight:this.state.val===3?this.state.weight:"lighter",fontSize:'11px'}} />
                  <Tab label="Cabs" icon={<LocalTaxiIcon fontSize='small'/>} style={{color:this.state.val===4?this.state.tabcolor:"#757574",fontWeight:this.state.val===4?this.state.weight:"lighter",fontSize:'11px'}} />
                  <Tab label="Water Sports" icon={<ScubaDivingIcon fontSize='small'/>} style={{color:this.state.val===5?this.state.tabcolor:"#757574",fontWeight:this.state.val===5?this.state.weight:"lighter",fontSize:'11px'}} />
                  <Tab label="Paying Guest" icon={<BungalowIcon fontSize='small'/>} style={{color:this.state.val===6?this.state.tabcolor:"#757574",fontWeight:this.state.val===6?this.state.weight:"lighter",fontSize:'11px'}} />
                  <Tab label="Travel Package" icon={<BackpackIcon fontSize='small'/>} style={{color:this.state.val===7?this.state.tabcolor:"#757574",fontWeight:this.state.val===7?this.state.weight:"lighter",fontSize:'11px'}} />
                  <Tab label="Dining" icon={<DinnerDiningIcon fontSize='small'/>} style={{color:this.state.val===8?this.state.tabcolor:"#757574",fontWeight:this.state.val===8?this.state.weight:"lighter",fontSize:'11px'}} />
                  <Tab label="Trekking" icon={<HikingIcon fontSize='small'/>} style={{color:this.state.val===9?this.state.tabcolor:"#757574",fontWeight:this.state.val===9?this.state.weight:"lighter",fontSize:'11px'}} />
                  <Tab label="Sea Foods" icon={<SetMealIcon fontSize='small'/>} style={{color:this.state.val===9?this.state.tabcolor:"#757574",fontWeight:this.state.val===9?this.state.weight:"lighter",fontSize:'11px'}} />

              </Tabs>
         
          
              <TabPanel value={this.state.value||0} index={0}><Flight /></TabPanel>
              <TabPanel value={this.state.value} index={1}><Hotel /></TabPanel>
              <TabPanel value={this.state.value} index={2}><Ship /></TabPanel>
              <TabPanel value={this.state.value} index={3}><Bus /></TabPanel>
              <TabPanel value={this.state.value} index={4}><Cab/></TabPanel>
              <TabPanel value={this.state.value} index={5}><Activity /></TabPanel>
              <TabPanel value={this.state.value} index={6}>Paying Guest</TabPanel>
              <TabPanel value={this.state.value} index={7}>Travel Package</TabPanel>
              <TabPanel value={this.state.value} index={8}><Flight /></TabPanel>
              <TabPanel value={this.state.value} index={9}><Trekking /></TabPanel>   
              <TabPanel value={this.state.value} index={10}><Trekking /></TabPanel>        
        </Container>
    )
  }
}
