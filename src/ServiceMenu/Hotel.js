// import React from 'react';
// // import Box from '@mui/material/Box';
// // import Card from '@mui/material/Card';
// // import CardContent from '@mui/material/CardContent';
// // import CardMedia from '@mui/material/CardMedia';
// // import Typography from '@mui/material/Typography';
// // import {Grid} from '@nextui-org/react'
// import { Container } from '@nextui-org/react';
// import PropTypes from 'prop-types';
// import 'react-multi-carousel/lib/styles.css';
// export class HotelPage extends React.Component {
//   render() {
//     return (
//       <Container fluid>
//         Hotel
//         {/* {this.props.carddata.map((c) => {
//           return (
//             <Grid.Container gap={2} justify='flex-start'>
//               <Grid fluid>
//                 <Card sx={{ display: 'flex' }} id={c.id}>
//                   <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//                     <CardMedia
//                       component='img'
//                       image={c.hotelimg}
//                       alt='Live from space album cover'
//                       className='img-responsive card-img-top'
//                       style={{ width: 'auto', height: 179 }}
//                     />
//                     <CardContent sx={{ flex: '1 0 auto' }}>
//                       <Typography component='div' variant='h5'>
//                         {c.hotelname}
//                       </Typography>
//                       <Typography
//                         variant='subtitle1'
//                         color='text.secondary'
//                         component='div'
//                       >
//                         {c.hotelsummary}
//                       </Typography>
//                     </CardContent>
//                   </Box>
//                 </Card>
//               </Grid>
//             </Grid.Container>
//           );
//         })} */}
//       </Container>
//     );
//   }
// }
// HotelPage.propTypes = {
//   loading: PropTypes.bool,
// };
// export default HotelPage;

import React from 'react';
import { useState } from 'react';
import Lists from './Hotel/Cards/Lists.js';
// import Featured from './Hotel/Featured.js';
// import Filter from './Hotel/Filter/Filter.js';
import Header from './Hotel/Header.js';
import { list, list2 } from '../Data/Hotel-Section/cards-list';

const Hotel = () => {
  const [selectedFilter, setSelectedFilter] = useState(0);
  return (
    <div className='h-full w-auto font-Nunito_Sans text-md scroll-smooth'>
      <Header />
      {/* <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      /> */}
        {selectedFilter === 0 ? <Lists list={list} /> : <Lists list={list2} />}
    </div>
  );
};

export default Hotel;
