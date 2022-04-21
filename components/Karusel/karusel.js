import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
    {
        imgPath:'https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/stylish/static/media/product-detail-1.5e606947.jpg'
    },
    {
        imgPath:'https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/stylish/static/media/product-detail-2.68a9a9e4.jpg'
    },
    {
        imgPath:'https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/stylish/static/media/product-detail-3.c39a591f.jpg'
    },
    {
        imgPath:'https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/stylish/static/media/product-detail-4.928229d4.jpg'
    },
];

function NextJsCarousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
      <>
        <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
          <Paper
              square
              elevation={0}
              sx={{
                display: 'flex',
                alignItems: 'center',
                pl: 2,
                bgcolor: 'background.default',
              }}
          >
            <Typography>{images[activeStep].label}</Typography>
          </Paper>
          <AutoPlaySwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
          >
            {images.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                      <Box
                          component="img"
                          sx={{
                            height: 400,
                            display: 'block',
                            maxWidth: 400,
                            overflow: 'hidden',
                            width: '100%',
                              borderRadius:'10px'
                          }}
                          src={step.imgPath}
                          alt={step.label}
                      />
                  ) : null}
                </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === 'rtl' ? (
                      <KeyboardArrowLeft />
                  ) : (
                      <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                  {theme.direction === 'rtl' ? (
                      <KeyboardArrowRight />
                  ) : (
                      <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
          />
        </Box>
      </>
  );
}
export default NextJsCarousel;
