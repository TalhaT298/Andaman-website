import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid ,Container} from "@nextui-org/react";
import PropTypes from 'prop-types';
import "react-multi-carousel/lib/styles.css";

export default class CabPage extends React.Component {
  

  render() {

    return (
     
        <Container fluid>
                {this.props.cabdata.map(c => {
                  return (
                    <Grid.Container gap={2} justify="flex-start">
                    <Grid fluid>
                    <Card sx={{ display: 'flex' }} id={c.id}>
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                          <CardMedia
                            component="img"
                            image={""}
                            alt="Live from space album cover"
                            className="img-responsive card-img-top"
                            style={{ width: "auto", height: 179 }}
                          />
                        <CardContent sx={{ flex: '1 0 auto' }}>
                          <Typography component="div" variant="h5">
                            {c.Pick}
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary" component="div">
                            {c.drop}             
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary" component="div">
                            {c.price}             
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary" component="div">
                            {c.schedule}             
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary" component="div">
                            {c.starttime}             
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary" component="div">
                            {c.endtime}             
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary" component="div">
                            {c.vehicleno}             
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary" component="div">
                            {c.contact}             
                          </Typography>
                        </CardContent>
                        
                      </Box>
                    </Card>
                    </Grid>
                    </Grid.Container>
                  );
                })}
         </Container>  
       
    );
  }
}
CabPage.propTypes = {
  loading: PropTypes.bool,
};

