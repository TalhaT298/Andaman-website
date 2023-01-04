import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [openInclusives, setOpenInclusives] = useState(false);
  const [openExclusives, setOpenExclusives] = useState(false);
  const [openCancellation, setOpenCancellation] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className='mx-auto my-10'>
      <AppBar position='static' color='default' style={{ width: 'auto' }}>
        <Box
          style={{ width: 'auto' }}
          display='flex'
          justifyContent='center'
          alignitems='center'
        >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor='secondary'
            textColor='secondary'
            aria-label='full width tabs example'
          >
            <Tab
              justifycontent='center'
              alignitems='center'
              label='Inclusives'
              {...a11yProps(0)}
              onClick={() => {
                setOpenInclusives(!openInclusives);
              }}
            />
            <Tab
              justifycontent='center'
              alignitems='center'
              label='Exclusives'
              {...a11yProps(1)}
              onClick={() => {
                setOpenExclusives(!openExclusives);
              }}
            />
            <Tab
              justifycontent='center'
              alignitems='center'
              label='Cancellation'
              {...a11yProps(2)}
              onClick={() => {
                setOpenCancellation(!openCancellation);
              }}
            />
          </Tabs>
        </Box>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <h7>• Accommodation as per the class chosen</h7>
          <br />
          <h7>• Breakfast for 5 occasions during the stay</h7>
          <br />
          <h7>• Meet and Greet services</h7>
          <br />
          <h7>
            • Exclusive Air – conditioned Car for sight seeing and &nbsp; &nbsp;
            &nbsp; &nbsp; arrival and departure transfers
          </h7>
          <br />
          <h7>
            • Entry tickets / Entry permits / Boat tickets / Ferry &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp;&nbsp; tickets wherever required
          </h7>
          <br />
          <h7>• Parking Charges</h7>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <h8>• Charges for early check-in & late check-out</h8>
          <br />
          <h8>• Tips and porter charges</h8>
          <br />
          <h8>• Lunch and Dinner</h8>
          <br />
          <h8>• Any items or services not specified in the cost</h8>
          <br />
          <h8>• Any Travel Insurance Premium</h8>
          <br />
          <h8>
            • Any additional expenses incurred due to any technical &nbsp;
            &nbsp; fault
          </h8>
          <br />
          <h8>
            • Expenses of personal nature such as drinks& late &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; check-out
          </h8>
          <br />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <h3>Amendments / Cancellations</h3>
          <h7>• Before 31 days of arrival – 95% will be refunded</h7>
          <br />
          <h7>• Between 16 – 30 days of arrival – 50% will be refunded</h7>
          <br />
          <h7>• Between 8 – 15 days – 25% will be refunded</h7>
          <br />
          <h7>• Less than 7 days of arrival – No refund</h7>
          <br />
          <h7>
            • No refund for the bookings made for 15 December to &nbsp; &nbsp;
            &nbsp; 15 January
          </h7>
          <br />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
