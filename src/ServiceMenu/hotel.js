import React, { Component } from "react";
import { Button } from "primereact/button";
import { fire } from "../fire";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid ,Container} from "@nextui-org/react";
import "react-multi-carousel/lib/styles.css";
let card = [];

export class CardCarousel extends React.Component {


  componentDidMount() {
    var ref = fire
      .database()
      .ref("cards")
      .orderByValue();
    ref.on("value", getData, errData);
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
          zip: carddata[c].zip
        });
      }
      console.log(card);
    }
    function errData(err) {
      console.log("error" + err);
    }
  }

  render() {

    return (
      <div className="carousel-demo">
        <div className="content-section implementation">
        
          {card? (
            <div>
            
                {card.map(c => {
                  return (
                    <Grid.Container gap={2} justify="flex-start">
                    <Grid fluid>
                    <Card sx={{ display: 'flex' }}>
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                          <CardMedia
                            component="img"
                            image={c.hotelimg}
                            alt="Live from space album cover"
                            className="img-responsive card-img-top"
                            style={{ width: "auto", height: 179 }}
                          />
                        <CardContent sx={{ flex: '1 0 auto' }}>
                          <Typography component="div" variant="h5">
                            {c.hotelname}
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary" component="div">
                            {c.hotelsummary}
                            
                          </Typography>
                        </CardContent>
                        
                      </Box>
                    </Card>
                    </Grid>
                    </Grid.Container>
                  );
                })}
            

            </div>
          ) : (
            <div>{"nothing"}</div>
          )}
        </div>
      </div>
    );
  }
}

export default CardCarousel;
