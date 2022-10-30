import { Grid } from "@nextui-org/react";

import  Card  from '../Component/Card';
import {motion} from "framer-motion"

export default function Ship() {
  
  return (
    <motion.div initial={{x:'100vw'}} animate={{x:0}}  transition={{type:'spring',delay:0.7}}>
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
    </motion.div>
  );
}
