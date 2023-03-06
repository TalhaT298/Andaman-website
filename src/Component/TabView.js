import React, { Component, lazy } from 'react';
import { Tab, Tabs } from '@mui/material';

// import {Text} from "@nextui-org/react";
// import Flights from '../ServiceMenu/Flights';

import Ship from '../ServiceMenu/Ship';
import Hotel from '../ServiceMenu/Hotel';
import Cab from '../ServiceMenu/Cab';
import Bus from '../ServiceMenu/Bus';
import Ferry from '../ServiceMenu/Ferry.js';
import Activity from '../ServiceMenu/Activity';
import Dinning from '../ServiceMenu/Dinning';
import Trekking from '../ServiceMenu/Trekking.js';
import Pg from '../ServiceMenu/Pg.js';
import Travelpackage from '../ServiceMenu/Travelpackage';
import Shop from '../ServiceMenu/Shop.js';
import { Container } from '@nextui-org/react';
import Lottie from 'react-lottie';
import * as FlightData from '../Icons/flight.json';
import * as HotelData from '../Icons/hotel.json';
import * as ShipData from '../Icons/ship.json';
import * as BusData from '../Icons/Bus.json';
import * as CabData from '../Icons/Cab.json';
import * as FerryData from '../Icons/ferry.json';
import * as DivingData from '../Icons/diving.json';
import * as GuestData from '../Icons/guest.json';
import * as TravelData from '../Icons/travel.json';
import * as DinningData from '../Icons/dinning.json';
import * as TrekkingData from '../Icons/trekking.json';
import * as ShopData from '../Icons/shop.json';
import { fire } from '../fire';

const Flights = lazy(() => import('../ServiceMenu/Flights'));

let card = [];
let flightcard = [];
let cabcard = [];
let pgcard = [];
export default class TabView extends Component {
  state = { value: 0, weight: '', tabcolor: '' };

  componentDidMount() {
    var ref = fire.database().ref('cards').orderByValue();
    ref.on('value', getData, errData);
    function getData(data) {
      var carddata = data.val();
      //console.log(carddata);
      for (let c in carddata) {
        card.push({
          id: c,
          hotelimg: carddata[c].hotelimg,
          hotelname: carddata[c].hotelname,
          hotelsummary: carddata[c].hotelsummary,
          rating: carddata[c].rating,
          schedule: carddata[c].schedule,
          city: carddata[c].city,
          state: carddata[c].state,
          zip: carddata[c].zip,
        });
      }
      console.log(card);
    }
    function errData(err) {
      console.log('error' + err);
    }

    var flightref = fire.database().ref('flights').orderByValue();
    flightref.on('value', getFlightData, errflightData);
    function getFlightData(data) {
      var carddata = data.val();
      console.log(carddata);
      for (let c in carddata) {
        flightcard.push({
          id: c,
          from: carddata[c].from,
          to: carddata[c].to,
          schedule: carddata[c].schedule,
          offer: carddata[c].offer,
          price: carddata[c].price,
        });
      }
      console.log(flightcard);
    }
    function errflightData(err) {
      console.log('error' + err);
    }

    var cabref = fire.database().ref('cabs').orderByValue();
    cabref.on('value', getCabData, errcCabData);
    function getCabData(data) {
      var carddata = data.val();
      console.log(carddata);
      for (let c in carddata) {
        cabcard.push({
          id: c,
          Pick: carddata[c].Pick,
          drop: carddata[c].drop,
          schedule: carddata[c].schedule,
          contact: carddata[c].contact,
          price: carddata[c].price,
          starttime: carddata[c].starttime,
          endtime: carddata[c].endtime,
          vehicleno: carddata[c].vehicleno,
        });
      }
      console.log(cabcard);
    }
    function errcCabData(err) {
      console.log('error' + err);
    }

    var pgref = fire.database().ref('pgs').orderByValue();
    pgref.on('value', getpgData, errcpgData);
    function getpgData(data) {
      var carddata = data.val();
      console.log(carddata);
      for (let c in carddata) {
        pgcard.push({
          id: c,
          pgname: carddata[c].pgname,
          pgadd: carddata[c].pgadd,
          pgprice: carddata[c].pgprice,
          contact: carddata[c].contact,
          rating: carddata[c].rating,
          hotelimg: carddata[c].hotelimg,
        });
      }
      console.log(pgcard);
    }
    function errcpgData(err) {
      console.log('error' + err);
    }
  }

  render() {
    const handleTabs = (e, val) => {
      console.warn(val);
      this.setState({ value: val, weight: 'bolder', tabcolor: '#100E09' });
    };

    function TabPanel(props) {
      const { children, value, index } = props;
      return <div>{value === index && <h1>{children}</h1>}</div>;
    }

    const size = 40;

    //Icons
    const FlightIcon = {
      loop: true,
      autoplay: true,
      animationData: FlightData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    const HotelIcon = {
      loop: true,
      autoplay: true,
      animationData: HotelData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    const ShipIcon = {
      loop: true,
      autoplay: true,
      animationData: ShipData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    const BusIcon = {
      loop: true,
      autoplay: true,
      animationData: BusData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    const CabIcon = {
      loop: true,
      autoplay: true,
      animationData: CabData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    const FerryIcon = {
      loop: true,
      autoplay: true,
      animationData: FerryData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    const DivingIcon = {
      loop: true,
      autoplay: true,
      animationData: DivingData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    const GuestIcon = {
      loop: true,
      autoplay: true,
      animationData: GuestData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    const TravelIcon = {
      loop: true,
      autoplay: true,
      animationData: TravelData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    const DinningIcon = {
      loop: true,
      autoplay: true,
      animationData: DinningData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    const TrekkingIcon = {
      loop: true,
      autoplay: true,
      animationData: TrekkingData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    const ShopIcon = {
      loop: true,
      autoplay: true,
      animationData: ShopData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    return (
      <Container fluid>
        <Tabs
          value={this.state.value || 0}
          onChange={handleTabs}
          variant='scrollable'
          textColor='#757574'
          indicatorColor='#757574'
          centered={true}
          scrollButtons='auto'
          TabIndicatorProps={{
            style: {
              backgroundColor: '#757574',
            },
          }}
        >
          <Tab
            label='Flights'
            icon={<Lottie options={FlightIcon} height={size} width={size} />}
            style={{
              color: this.state.value === 0 ? this.state.tabcolor : '#757574',
              fontWeight:
                this.state.value === 0 ? this.state.weight : 'lighter',
              fontSize: '11px',
            }}
          />
          <Tab
            label='Hotels'
            icon={<Lottie options={HotelIcon} height={size} width={size} />}
            style={{
              color: this.state.value === 1 ? this.state.tabcolor : '#757574',
              fontWeight:
                this.state.value === 1 ? this.state.weight : 'lighter',
              fontSize: '11px',
            }}
          />
          <Tab
            label='Ship'
            icon={<Lottie options={ShipIcon} height={size} width={size} />}
            style={{
              color: this.state.value === 2 ? this.state.tabcolor : '#757574',
              fontWeight:
                this.state.value === 2 ? this.state.weight : 'lighter',
              fontSize: '11px',
            }}
          />
          <Tab
            label='Bus'
            icon={<Lottie options={BusIcon} height={size} width={size} />}
            style={{
              color: this.state.value === 3 ? this.state.tabcolor : '#757574',
              fontWeight:
                this.state.value === 3 ? this.state.weight : 'lighter',
              fontSize: '11px',
            }}
          />
          <Tab
            label='Cabs'
            icon={<Lottie options={CabIcon} height={size} width={size} />}
            style={{
              color: this.state.value === 4 ? this.state.tabcolor : '#757574',
              fontWeight:
                this.state.value === 4 ? this.state.weight : 'lighter',
              fontSize: '11px',
            }}
          />
          <Tab
            label='Ferry'
            icon={<Lottie options={FerryIcon} height={size} width={size} />}
            style={{
              color: this.state.value === 5 ? this.state.tabcolor : '#757574',
              fontWeight:
                this.state.value === 5 ? this.state.weight : 'lighter',
              fontSize: '11px',
            }}
          />
          <Tab
            label='Water Sports'
            icon={<Lottie options={DivingIcon} height={size} width={size} />}
            style={{
              color: this.state.value === 6 ? this.state.tabcolor : '#757574',
              fontWeight:
                this.state.value === 6 ? this.state.weight : 'lighter',
              fontSize: '11px',
            }}
          />
          <Tab
            label='Paying Guest'
            icon={<Lottie options={GuestIcon} height={size} width={size} />}
            style={{
              color: this.state.value === 7 ? this.state.tabcolor : '#757574',
              fontWeight:
                this.state.value === 7 ? this.state.weight : 'lighter',
              fontSize: '11px',
            }}
          />
          <Tab
            label='Package'
            icon={<Lottie options={TravelIcon} height={size} width={size} />}
            style={{
              color: this.state.value === 8 ? this.state.tabcolor : '#757574',
              fontWeight:
                this.state.value === 8 ? this.state.weight : 'lighter',
              fontSize: '11px',
            }}
          />
          <Tab
            label='Dinning'
            icon={<Lottie options={DinningIcon} height={size} width={size} />}
            style={{
              color: this.state.value === 9 ? this.state.tabcolor : '#757574',
              fontWeight:
                this.state.value === 9 ? this.state.weight : 'lighter',
              fontSize: '11px',
            }}
          />
          <Tab
            label='Trekking'
            icon={<Lottie options={TrekkingIcon} height={size} width={size} />}
            style={{
              color: this.state.value === 10 ? this.state.tabcolor : '#757574',
              fontWeight:
                this.state.value === 10 ? this.state.weight : 'lighter',
              fontSize: '11px',
            }}
          />
          <Tab
            label='Shop'
            icon={<Lottie options={ShopIcon} height={size} width={size} />}
            style={{
              color: this.state.value === 11 ? this.state.tabcolor : '#757574',
              fontWeight:
                this.state.value === 11 ? this.state.weight : 'lighter',
              fontSize: '11px',
            }}
          />
        </Tabs>

        <TabPanel value={this.state.value || 0} index={0}>
          {/* <Flights flightdata={flightcard} /> */}
          <Flights />
        </TabPanel>
        <TabPanel value={this.state.value} index={1}>
          {/* <Hotel carddata={card} /> */}
          <Hotel />
        </TabPanel>
        <TabPanel value={this.state.value} index={2}>
          <Ship />
        </TabPanel>
        <TabPanel value={this.state.value} index={3}>
          <Bus />
        </TabPanel>
        <TabPanel value={this.state.value} index={4}>
          <Cab cabdata={cabcard} />
          <Cab />
        </TabPanel>
        <TabPanel value={this.state.value} index={5}>
          <Ferry maploc={card} />
          <Ferry />
        </TabPanel>
        <TabPanel value={this.state.value} index={6}>
          <Activity />
        </TabPanel>
        <TabPanel value={this.state.value} index={7}>
          {/* <Pg pgdata={pgcard} /> */}
          <Pg />
        </TabPanel>
        <TabPanel value={this.state.value} index={8}>
          <Travelpackage />
        </TabPanel>
        <TabPanel value={this.state.value} index={9}>
          <Dinning />
        </TabPanel>
        <TabPanel value={this.state.value} index={10}>
          <Trekking />
        </TabPanel>
        <TabPanel value={this.state.value} index={11}>
          <Shop />
        </TabPanel>
      </Container>
    );
  }
}
