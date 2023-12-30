"use client";
import "./style.css";
import Iconify from "@/components/iconify";
import useResponsive from "@/hooks/useResponsive";
import { Box, Stack, Button, Card, Container } from "@mui/material";
import CardContent from "@mui/material/CardContent/CardContent";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const items = [
  {
    title: "Kacige",
    image: "/images/kaciga.png",
    url: "",
  },
  {
    title: "ATV",
    image: "/images/atv.png",
    url: "",
  },
  {
    title: "Marina",
    image: "/images/boat.png",
    url: "",
  },
  {
    title: "Motori",
    image: "/images/bike_1.png",
    url: "",
  },
];

const CustomButtonGroupAsArrows = ({
  next,
  previous,
}: {
  next?: any;
  previous?: any;
}) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "calc(5% + 1px)",
          pl: 1,
          transform: "translate(-50%)",
        }}
        component="span"
      >
        <Iconify
          icon="formkit:arrowleft"
          width={32}
          height={32}
          onClick={previous}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "50%",
          right: "calc(3% + 1px)",
          pr: 1,
          transform: "translate(-50%)",
        }}
        component="span"
      >
        <Iconify
          icon="formkit:arrowright"
          width={32}
          height={32}
          onClick={next}
        />
      </Box>
    </Box>
  );
};

const HomeOffer = ({ deviceType }: any) => {
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
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        pt: 2,
      }}
    >
      <Container maxWidth="xl" sx={{ pt: 2 }}>
        <Carousel
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={false}
          swipeable={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="gd-carousel"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={deviceType}
          arrows={false}
          customButtonGroup={<CustomButtonGroupAsArrows />}
          renderButtonGroupOutside={true}
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
                      width={768}
                      height={200}
                      sizes="100vw, 30vw"
                      alt="Motoshop 7"
                    />
                  </Box>
                </Box>
              </CardMedia>
            </Card>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
};

export default HomeOffer;
