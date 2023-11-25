"use client";
import Iconify from "@/components/iconify";
import TrendingCard from "@/components/trending-card";
import useResponsive from "@/hooks/useResponsive";
import { Box, Grid, Stack, Button, Card, Container } from "@mui/material";
import CardContent from "@mui/material/CardContent/CardContent";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  ButtonGroupProps,
  ArrowProps,
  DotProps,
} from "react-multi-carousel/lib/types";

const items = [
  {
    title: "Moto Shop",
    image: "/images/kaciga.png",
  },
  {
    title: "ATV",
    image: "/images/atv.png",
  },
  {
    title: "Marina",
    image: "/images/boat.png",
  },
  {
    title: "Motori",
    image: "/images/bike_1.png",
  },
];

const CustomLeftArrow = ({ onClick }: {onClick: any}) => (
  <i onClick={() => onClick()} className="custom-left-arrow" />
);
const CustomRightArrow = ({ onClick }: {onClick: any}) => {
  return <i className="custom-right-arrow" onClick={() => onClick()} />;
};

const CustomButtonGroup = ({ next, previous, goToSlide, carouselState }: {next: any, previous: any, goToSlide: any, carouselState: any}) => {
  const { totalItems, currentSlide } = carouselState;
  return (
    <div className="custom-button-group">
      <div>Current slide is {currentSlide}</div>
      <button onClick={() => previous()}>Previous slide</button>
      <button onClick={() => next()}>Next slide</button>
      <button
        onClick={() => goToSlide(Math.floor(Math.random() * totalItems + 1))}
      >
        Go to a random slide
      </button>
    </div>
  );
};

const CustomButtonGroupAsArrows = ({ next, previous }: {next: any, previous: any}) => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h4>These buttons can be positioned anywhere you want on the screen</h4>
      <button onClick={previous}>Prev</button>
      <button onClick={next}>Next</button>
    </div>
  );
};


const HomeTrending = ({ deviceType }: any) => {
  const isDesktop = useResponsive("up", "lg");
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Container maxWidth="xl">
      <Carousel
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-20-px"
      >
        {items.map((item, index) => (
          <Card
            key={index}
            sx={{ mx: 5, minHeight: "500px", maxWidth: "400px" }}
          >
            <CardContent sx={{ display: "flex", justifyContent: "center" }}>
              <Stack>
                <Typography variant="h3" textAlign={"center"}>
                  {item.title}
                </Typography>
                <Button variant="contained" color="info">
                  PREGLEDAJ
                </Button>
              </Stack>
            </CardContent>
            <CardMedia>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    width: "250px",
                    height: "300px",
                    position: "relative",
                  }}
                >
                  <Image
                    src={item.image}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    alt="Motoshop 7"
                  />
                </Box>
              </Box>
            </CardMedia>
          </Card>
        ))}
      </Carousel>
    </Container>
  );
};

export default HomeTrending;
