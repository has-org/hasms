"use client";
import Iconify from "@/components/iconify";
import TrendingCard from "@/components/trending-card";
import useResponsive from "@/hooks/useResponsive";
import {
  Box,
  Grid,
  Stack,
  Button,
  Card,
  Container,
  Typography,
  Chip,
} from "@mui/material";
import CardContent from "@mui/material/CardContent/CardContent";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const items = [
  {
    title: "Nova Yamaha R5J - Da li vrijedi kupiti?",
    image: "/images/yamahablog1.png",
    created_at: "12.12.2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: [{ name: "MOTORI" }],
  },
  {
    title: "Yamaha ponovila revoluciju u svetu nautike",
    image: "/images/yamahablog2.png",
    created_at: "12.12.2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: [{ name: "MOTORI" }],
  },
  {
    title: "Sve što treba da znate o MotoGP-u",
    image: "/images/yamahablog3.png",
    created_at: "12.12.2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const HomeBlog = ({ deviceType }: any) => {
  const isDesktop = useResponsive("up", "lg");
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
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
        pt: 2,
      }}
    >
      <Typography textAlign={"center"} variant="h2">
        Najnovije sa bloga
      </Typography>
      <Container maxWidth="xl" sx={{ pt: 2 }}>
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
          containerClass="gd-carousel"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={deviceType}
          arrows={false}
          renderButtonGroupOutside={true}
        >
          {items.map((item, index) => (
            <Card
              key={index}
              sx={{ mx: 5, minHeight: "500px", maxWidth: "400px" }}
            >
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

                    <Image
                      src={item.image}
                      width={0}
                      height={0}
                      sizes="100vw, 30vw"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                      alt="Motoshop 7"
                    />
                </Box>
              </CardMedia>
              <CardContent sx={{ display: "flex" }}>
                <Stack>
                  <Typography variant="body2">{item.created_at}</Typography>
                  <Typography variant="h4">{item.title}</Typography>
                  <Typography variant="body2">{item.description}</Typography>

                  <Stack direction="row">
                    {item?.tags?.map((tag: any, index: number) => (
                      <Chip key={index} label={tag.name} color="info"/>
                    ))}
                
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
};

export default HomeBlog;
