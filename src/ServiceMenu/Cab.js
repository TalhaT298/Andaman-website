// import React from 'react';
// import { Container } from '@nextui-org/react';
// import PropTypes from 'prop-types';
// import 'react-multi-carousel/lib/styles.css';
// import LeftCard from '../Component/LeftCard';

// export default class CabPage extends React.Component {
//   render() {
//     return (
//       <div>
//         Cabs
//         <Container fluid>
//           {/* {this.props.cabdata.map(c => {
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
//                             {c.Pick}
//                           </Typography>
//                           <Typography variant="subtitle1" color="text.secondary" component="div">
//                             {c.drop}
//                           </Typography>
//                           <Typography variant="subtitle1" color="text.secondary" component="div">
//                             {c.price}
//                           </Typography>
//                           <Typography variant="subtitle1" color="text.secondary" component="div">
//                             {c.schedule}
//                           </Typography>
//                           <Typography variant="subtitle1" color="text.secondary" component="div">
//                             {c.starttime}
//                           </Typography>
//                           <Typography variant="subtitle1" color="text.secondary" component="div">
//                             {c.endtime}
//                           </Typography>
//                           <Typography variant="subtitle1" color="text.secondary" component="div">
//                             {c.vehicleno}
//                           </Typography>
//                           <Typography variant="subtitle1" color="text.secondary" component="div">
//                             {c.contact}
//                           </Typography>
//                         </CardContent>

//                       </Box>
//                     </Card>
//                     </Grid>
//                     </Grid.Container>
//                   );
//                 })} */}
//           <LeftCard
//             cabimg={
//               'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK73-oOQC9syK05uahONMm8yuGOIETdJBB7Z5JwK04fmNLLRqM_lsjmXfHaAwq-btK_Ns&usqp=CAU'
//             }
//             data={this.props.cabdata}
//           />
//         </Container>
//       </div>
//     );
//   }
// }
// CabPage.propTypes = {
//   loading: PropTypes.bool,
// };

import React from 'react';

import CabSearch from './Cab/CabSearch';

import cab from '../Data/Cab-Section/cab';
import CabCover from './Cab/CabCover';

const Cabs = () => {
  const cabData = cab.map((airplane, index) => {
    return <CabCover key={index} {...airplane} />;
  });
  return (
    <div className='pt-10 h-full w-auto cursor-pointer'>
      <div className='flex'>
        <div className='flex mx-auto mt-10 mb-10'>
          <span className='text-3xl font-Nunito_Sans font-semibold text-white'>
            🤫 Reliable Cab Service 😉 🚀
          </span>
        </div>
      </div>
      <CabSearch />
      <span className='text-2xl font-normal mb-3 mx-2'>Featured Cabs</span>
      <div className='pt-2'>{cabData}</div>
    </div>
  );
};

export default Cabs;
