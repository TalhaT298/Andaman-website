import { Grid } from "@nextui-org/react";

import  Card  from '../Component/Card';


export default function cab() {
  
  return (
    <Grid.Container gap={2} justify="flex-start">
      <Grid xs={7} sm={3}>
        <Card />
      </Grid>
      <Grid xs={7} sm={3}>
        <Card />
      </Grid>
      <Grid xs={7} sm={3}>
        <Card />
      </Grid>
      <Grid xs={7} sm={3}>
        <Card />
      </Grid>
      <Grid xs={7} sm={3}>
        <Card />
      </Grid>
    </Grid.Container>
  );
}
