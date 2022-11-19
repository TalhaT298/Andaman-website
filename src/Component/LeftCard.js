import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default class LeftCard extends Component {
  render() {
    return (
        <div>
          {this.props.data.map(c => {
                    return(
                      <Card sx={{ display: 'flex' }}>  
                      <CardMedia
                        component="img"
                        image={this.props.flightimg || this.props.cabimg}
                        alt="Live from space album cover"
                        className="img-responsive card-img-top"
                        style={{ width: "auto", height: 179 }}
                      />
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography component="div" variant="h5">
                        {c.Pick || "Departure "+c.from}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        {c.drop || "Arrival "+c.to}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        {"Fare: "+c.price}
                      </Typography>
                      {c.offer?<><Typography variant="subtitle1" color="text.secondary" component="div">
                        {"Offer Valid Till: "+c.offer}
                      </Typography></>:<>{" "}</>}
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        {"Date: "+c.schedule}

                      {c.contact?<><Typography variant="subtitle1" color="text.secondary" component="div">
                        {"Contact: "+c.contact}
                      </Typography></>:<>{" "}</>}

                      {c.starttime?<><Typography variant="subtitle1" color="text.secondary" component="div">
                        {"Pick Up time: "+c.starttime}
                      </Typography></>:<>{" "}</>}

                      {c.endtime?<><Typography variant="subtitle1" color="text.secondary" component="div">
                        {"Drop Time: "+c.endtime}
                      </Typography></>:<>{" "}</>}

                      {c.vehicleno?<><Typography variant="subtitle1" color="text.secondary" component="div">
                        {"Vehicle No: "+c.vehicleno}
                      </Typography></>:<>{" "}</>}


                     
                      </Typography>
                    </CardContent>
                </Card>  
                    )   
                })} 
        </div>
    )
  }
}






