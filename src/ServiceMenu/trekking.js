import { Grid ,Container} from "@nextui-org/react";
import {motion} from "framer-motion"
import TrekkingData from "../Data/TrekkingData";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const cardObject = TrekkingData.map(function(data) {
  return (
    <Grid.Container gap={2} justify="flex-start">
    <Grid fluid>
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardMedia
            component="img"
            image={data.imageLink}
            alt="Live from space album cover"
            className="img-responsive card-img-top"
            style={{ width: "auto", height: 179 }}
          />
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {data.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {data.duration}
          </Typography>
        </CardContent>
        
      </Box>
    </Card>
    </Grid>
    </Grid.Container>

  );
});

export default function treeking() {
  
  return (
    <Container fluid>
  
     <motion.div initial={{x:'100vw'}} animate={{x:0}}  transition={{type:'spring',delay:0.7}}>
   
      {cardObject} 
    </motion.div>

    </Container>
   
  );
}
