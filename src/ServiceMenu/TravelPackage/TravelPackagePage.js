// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// // import { withStyles } from '@material-ui/core/styles';
// import { red } from '@material-ui/core/colors';
// import Stepper from '@material-ui/core/Stepper';
// import Step from '@material-ui/core/Step';
// import StepLabel from '@material-ui/core/StepLabel';
// import StepContent from '@material-ui/core/StepContent';
// import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';
// import Data from '../../Data/CardData';

// // import Modal from '@material-ui/core/Modal';
// // import Backdrop from '@material-ui/core/Backdrop';
// // import Fade from '@material-ui/core/Fade';
// import Box from '@mui/material/Box';
// // import Card from '@mui/material/Card';
// // import CardContent from '@mui/material/CardContent';
// // import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import Collapse from '@material-ui/core/Collapse';
// import Policy from '../Policy';

// const TravelPackagePage = (props) => {
//   const boxDefault = {
//     padding: 1,
//   };

//   const useStyles = makeStyles((theme) => ({
//     expand: {
//       transform: 'rotate(0deg)',
//       marginLeft: 'auto',
//       transition: theme.transitions.create('transform', {
//         duration: theme.transitions.duration.shortest,
//       }),
//     },
//     expandOpen: {
//       transform: 'rotate(180deg)',
//     },
//     avatar: {
//       backgroundColor: red[500],
//     },
//     root: {
//       width: '100%',
//       flexGrow: 1,
//     },
//     button: {
//       marginTop: theme.spacing(1),
//       marginRight: theme.spacing(1),
//     },
//     actionsContainer: {
//       marginBottom: theme.spacing(2),
//     },
//     resetContainer: {
//       padding: theme.spacing(3),
//     },
//     modal: {
//       position: 'absolute',
//       top: '10%',
//       left: '10%',
//       overflow: 'scroll',
//       height: '100%',
//       display: 'block',
//     },
//     paper: {
//       backgroundColor: theme.palette.background.paper,
//       border: '2px solid #000',
//       boxShadow: theme.shadows[5],
//       padding: theme.spacing(2, 4, 3),
//     },
//     secondaryTail: {
//       backgroundColor: theme.palette.secondary.main,
//     },
//   }));

//   //STEPPER CODE

//   function getSteps(n) {
//     const arr = [];
//     for (let i = 1; i <= n; i++) {
//       arr[i] = 'DAY ' + i;
//     }
//     return arr;
//   }

//   function getStepContent(step, setActiveSteps) {
//     //console.log(setActiveSteps);

//     //console.log(Data[step - 1].name);
//     switch (setActiveSteps + 1) {
//       case 1:
//         return Data[step - 1].fullDescription1;
//       case 2:
//         return Data[step - 1].fullDescription2;
//       case 3:
//         return Data[step - 1].fullDescription3;
//       case 4:
//         return Data[step - 1].fullDescription4;
//       case 5:
//         return Data[step - 1].fullDescription5;
//       case 6:
//         return Data[step - 1].fullDescription6;
//       case 7:
//         return Data[step - 1].fullDescription7;
//       case 8:
//         return Data[step - 1].fullDescription8;

//       case 9:
//         return Data[step - 1].fullDescription9;

//       case 10:
//         return Data[step - 1].fullDescription10;

//       default:
//         return '';
//     }
//   }

//   function getStepContentImage(step, setActiveSteps) {
//     //console.log(setActiveSteps);

//     //console.log(Data[step - 1].name);
//     switch (setActiveSteps + 1) {
//       case 1:
//         return Data[step - 1].imageLink1;
//       case 2:
//         return Data[step - 1].imageLink2;
//       case 3:
//         return Data[step - 1].imageLink3;
//       case 4:
//         return Data[step - 1].imageLink4;
//       case 5:
//         return Data[step - 1].imageLink5;
//       case 6:
//         return Data[step - 1].imageLink6;
//       case 7:
//         return Data[step - 1].imageLink7;
//       case 8:
//         return Data[step - 1].imageLink8;
//       case 9:
//         return Data[step - 1].imageLink9;
//       case 10:
//         return Data[step - 1].imageLink10;

//       default:
//         return '';
//     }
//   }

//   const classes = useStyles();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const steps = getSteps(props.num);
//   const [open, setOpen] = React.useState(false);

//   // const handleOpen = () => {
//   //   setOpen(true);
//   // };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   console.log(activeStep);
//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

//   const [expanded, setExpanded] = React.useState(false);

//   // const handleExpandClick = () => {
//   //   setExpanded(!expanded);
//   // };

//   return (
//     <div>
//       {/* <Button
//     variant='contained'
//     color='secondary'
//     onClick={handleOpen}
//     style={{ margin: 'auto' }}
//   >
//     Explore Package
//   </Button> */}

//       {/* <Modal
//   aria-labelledby='transition-modal-title'
//   aria-describedby='transition-modal-description'
//   className={classes.modal}
//   open={open}
//   onClose={handleClose}
//   closeAfterTransition
//   BackdropComponent={Backdrop}
//   BackdropProps={{
//     timeout: 500,
//   }}
// > */}
//       {open && (
//         <div>
//           <div className={classes.paper}>
//             <h2 id='modal-title'>{props.name}</h2>

//             <Typography variant='h5'>
//               <center>Trip Details:</center>
//             </Typography>

//             <Stepper activeStep={activeStep} orientation='vertical'>
//               {steps.map((label, i) => (
//                 <Step key={label}>
//                   <StepLabel>{label}</StepLabel>
//                   <StepContent>
//                     <Typography>{getStepContent(i)}</Typography>

//                     <Typography>
//                       {getStepContent(props.id, activeStep)}
//                     </Typography>

//                     <img
//                       alt='superapp'
//                       src={getStepContentImage(props.id, activeStep)}
//                       width='405px'
//                       height='305px'
//                     />

//                     <div className={classes.actionsContainer}>
//                       <div>
//                         <Button
//                           disabled={activeStep === 0}
//                           onClick={handleBack}
//                           color='primary'
//                           className={classes.button}
//                         >
//                           Back
//                         </Button>
//                         <Button
//                           variant='contained'
//                           color='primary'
//                           onClick={handleNext}
//                           className={classes.button}
//                         >
//                           {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//                         </Button>
//                       </div>
//                     </div>
//                   </StepContent>
//                 </Step>
//               ))}
//             </Stepper>
//             {activeStep === steps.length - 1 && (
//               <Paper square elevation={0} className={classes.resetContainer}>
//                 <Typography>Your Journey - Completes&apos;Here</Typography>
//                 <Button
//                   onClick={handleReset}
//                   className={classes.button}
//                   color='primary'
//                 >
//                   GetBack
//                 </Button>
//               </Paper>
//             )}

//             <Policy />
//             <Box
//               display='flex'
//               justifyContent='center'
//               alignitems='center'
//               sx={boxDefault}
//               style={{ width: 'auto' }}
//             >
//               <Button
//                 variant='contained'
//                 color='secondary'
//                 onClick={handleClose}
//                 justifycontent='center'
//                 alignitems='center'
//               >
//                 BACK
//               </Button>
//             </Box>
//           </div>
//         </div>
//       )}
//       {/* </Modal> */}
//       <Collapse in={expanded} timeout='auto' unmountOnExit>
//         <Typography variant='h5'>
//           <center>Trip Details:</center>
//         </Typography>

//         <Stepper activeStep={activeStep} orientation='vertical'>
//           {steps.map((label, i) => (
//             <Step key={label}>
//               <StepLabel>{label}</StepLabel>
//               <StepContent>
//                 <Typography>{getStepContent(i)}</Typography>

//                 <Typography>{getStepContent(props.id, activeStep)}</Typography>

//                 <img
//                   src={getStepContentImage(props.id, activeStep)}
//                   width='275px'
//                   height='225px'
//                   alt='using it for hiding error temporarily'
//                 />

//                 <div className={classes.actionsContainer}>
//                   <div>
//                     <Button
//                       disabled={activeStep === 0}
//                       onClick={handleBack}
//                       color='primary'
//                       className={classes.button}
//                     >
//                       Back
//                     </Button>
//                     <Button
//                       variant='contained'
//                       color='primary'
//                       onClick={handleNext}
//                       className={classes.button}
//                     >
//                       {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//                     </Button>
//                   </div>
//                 </div>
//               </StepContent>
//             </Step>
//           ))}
//         </Stepper>
//         {activeStep === steps.length - 1 && (
//           <Paper square elevation={0} className={classes.resetContainer}>
//             <Typography>Your Journey - Completes&apos;Here</Typography>
//             <Button
//               onClick={handleReset}
//               className={classes.button}
//               color='primary'
//             >
//               GetBack
//             </Button>
//           </Paper>
//         )}
//       </Collapse>
//     </div>
//   );
// };

// export default TravelPackagePage;
