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
                        image={this.props.flightimg || this.props.cabimg || this.props.pgimg}
                        alt="Live from space album cover"
                        className="img-responsive card-img-top"
                        style={{ width: "auto", height: 179 }}
                      />
                    <CardContent sx={{ flex: '1 0 auto' }}>
                     {c.Pick?<>
                      <Typography component="div" variant="h5">
                        {c.Pick || "Departure "+c.pick}
                      </Typography>
                     </>:<></>}
                      
                     {c.drop?<>
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        {c.drop || "Arrival "+c.drop}
                      </Typography>
                      </>:<></>}

                      {c.from?<>
                      <Typography component="div" variant="h5">
                        {c.from || "Departure "+c.from}
                      </Typography>
                     </>:<></>}
                      
                     {c.to?<>
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        {c.to || "Arrival "+c.to}
                      </Typography>
                      </>:<></>}
            

                      {c.price?<>
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        {"Fare: "+c.price}
                      </Typography></>:<></>}


                      {c.offer?<><Typography variant="subtitle1" color="text.secondary" component="div">
                        {"Offer Valid Till: "+c.offer}
                      </Typography></>:<>{" "}</>}
                      
                      {c.schedule?<><Typography variant="subtitle1" color="text.secondary" component="div">
                        {"Date: "+c.schedule}
                        </Typography>
                      </>:<></>} 

                      {c.starttime?<><Typography variant="subtitle1" color="text.secondary" component="div">
                        {"Pick Up time: "+c.starttime}
                      </Typography></>:<>{" "}</>}

                      {c.endtime?<><Typography variant="subtitle1" color="text.secondary" component="div">
                        {"Drop Time: "+c.endtime}
                      </Typography></>:<>{" "}</>}

                      {c.vehicleno?<><Typography variant="subtitle1" color="text.secondary" component="div">
                        {"Vehicle No: "+c.vehicleno}
                      </Typography></>:<>{" "}</>}

                      {c.pgname?<><Typography variant="subtitle1" color="text.secondary" component="div">
                        {"PG Name: "+c.pgname}
                      </Typography></>:<>{" "}</>}

                      {c.pgadd?<><Typography variant="subtitle1" color="text.secondary" component="div">
                        {"PG Address: "+c.pgadd}
                      </Typography></>:<>{" "}</>}

                      {c.pgprice?<><Typography variant="subtitle1" color="text.secondary" component="div">
                        {"PG Name: "+c.pgprice}
                      </Typography></>:<>{" "}</>}

                      {c.contact?<><Typography variant="subtitle1" color="text.secondary" component="div">
                        {"Contact: "+c.contact}
                      </Typography></>:<>{" "}</>}



                     
                      
                    </CardContent>
                </Card>  
                    )   
                })} 
        </div>
    )
  }
}






