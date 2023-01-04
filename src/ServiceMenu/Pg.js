// import React from 'react';
// import { Container } from '@nextui-org/react';
// import PropTypes from 'prop-types';
// import 'react-multi-carousel/lib/styles.css';
// import LeftCard from '../Component/LeftCard';
// export default class pgPage extends React.Component {
//   render() {
//     return (
//       <Container fluid>
//         Paying Guest
//         {/* {this.props.flightdata.map(c => {
//                   return (
//                     <Grid.Container gap={2} justify="flex-start">
//                     <Grid fluid>
//                     <Card sx={{ display: 'flex' }} id={c.id}>
//                       <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//                           <CardMedia
//                             component="img"
//                             image={""}
//                             alt="Live from space album cover"
//                             className="img-responsive card-img-top"
//                             style={{ width: "auto", height: 179 }}
//                           />
//                         <CardContent sx={{ flex: '1 0 auto' }}>
//                           <Typography component="div" variant="h5">
//                             {c.from}
//                           </Typography>
//                           <Typography variant="subtitle1" color="text.secondary" component="div">
//                             {c.to}
//                           </Typography>
//                           <Typography variant="subtitle1" color="text.secondary" component="div">
//                             {c.price}
//                           </Typography>
//                           <Typography variant="subtitle1" color="text.secondary" component="div">
//                             {c.offer}
//                           </Typography>
//                         </CardContent>

//                       </Box>
//                     </Card>
//                     </Grid>
//                     </Grid.Container>
//                   );
//                 })} */}
//         <LeftCard
//           pgimg={
//             'https://rook.gumlet.io/uploads/center/cover_photo/5db97ac09540da66f2221f82/Zolo_Rockwave_PG_in_Financial_District.jpg?format=webp&h=620&compress=true'
//           }
//           data={this.props.pgdata}
//         />
//       </Container>
//     );
//   }
// }
// pgPage.propTypes = {
//   loading: PropTypes.bool,
// };

import React from 'react';
import { useState } from 'react';
import Lists from './Pg/Cards/Lists.js';
// import Featured from './Pg/Featured.js';
// import Filter from './Pg/Filter/Filter.js';
import Header from './Pg/Header.js';
import { list, list2 } from '../Data/Pg-Section/cards-list';

const Pg = () => {
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

export default Pg;
