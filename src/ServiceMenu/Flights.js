import { Grid ,Container} from "@nextui-org/react";
import {motion} from "framer-motion"
import  Card  from '../Component/Card';


export default function flights() {
  
  return (
    <Container fluid>
  
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

    </Container>
   
  );
}
