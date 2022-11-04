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


export default class TabView extends Component {
    state={val:0}
  render() {
    const handleTabs=(e,val)=>{
        console.warn(val)
        this.setState({value:val})
    }

    function TabPanel(props){
        const {children,value,index}=props;
        return(<div>
            {value===index && (<h1>{children}</h1>)}
        </div>);
    }
    return (
      <Container fluid>
   
          <Tabs value={this.state.value} 
          onChange={handleTabs}  
          variant="scrollable"
          scrollButtons="auto"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#D97D54",
              color:"#D97D54"
            }
          }}
          
          >
                  <Tab label="Flights" style={{color:"black"}} />
                  <Tab label="Hotels"/>
                  <Tab label="Ship"/>
                  <Tab label="Bus"/>
                  <Tab label="Cabs"/>
                  <Tab label="Activity"/>
                  <Tab label="Paying Guest"/>
                  <Tab label="Travel Package"/>
                  <Tab label="Dinning"/>
                  <Tab label="Trekking"/>

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
        </Container>
    )
  }
}
