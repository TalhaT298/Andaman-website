
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container } from "@mui/material";


export default function trekking() {
  
  return (
    <Container fluid ><Card sx={{ display: 'flex' }}>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          component="img"
          image="https://i.pinimg.com/736x/2b/b3/d4/2bb3d46f16ee6abf842845949003857f.jpg"
          alt="Live from space album cover"
          className="img-responsive card-img-top"
          style={{ width: "auto", height: 179 }}
        />
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h5">
        Mount Manipur
        </Typography>
        
      </CardContent>
      
    </Box>
  </Card>
  <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardMedia
            component="img"
            image="https://i.pinimg.com/736x/2b/b3/d4/2bb3d46f16ee6abf842845949003857f.jpg"
            alt="Live from space album cover"
            className="img-responsive card-img-top"
            style={{ width: "auto", height: 179 }}
          />
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          Chidiya-Tapu
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          
          </Typography>
        </CardContent>
        
      </Box>
    </Card>
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardMedia
            component="img"
            image="https://i.pinimg.com/736x/2b/b3/d4/2bb3d46f16ee6abf842845949003857f.jpg"
            alt="Live from space album cover"
            className="img-responsive card-img-top"
            style={{ width: "auto", height: 179 }}
          />
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          Elephant Beach
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          
          </Typography>
        </CardContent>
        
      </Box>
    </Card>
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardMedia
            component="img"
            image="https://i.pinimg.com/736x/2b/b3/d4/2bb3d46f16ee6abf842845949003857f.jpg"
            alt="Live from space album cover"
            className="img-responsive card-img-top"
            style={{ width: "auto", height: 179 }}
          />
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          Limestone Caves
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          
          </Typography>
        </CardContent>
        
      </Box>
    </Card>
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardMedia
            component="img"
            image="https://i.pinimg.com/736x/2b/b3/d4/2bb3d46f16ee6abf842845949003857f.jpg"
            alt="Live from space album cover"
            className="img-responsive card-img-top"
            style={{ width: "auto", height: 179 }}
          />
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          Alfred Caves
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          
          </Typography>
        </CardContent>
        
      </Box>
    </Card>
    </Container>
    
  );
}
