"use client";

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
  Link,
} from "@mui/material";
import CardContent from "@mui/material/CardContent/CardContent";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const items = [
  {
    title: "Nova Yamaha R5J - Da li vrijedi kupiti?",
    image: "/images/yamahablog1.png",
    created_at: "12.12.2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: [{ name: "MOTORI" }, { name: "BRZINA" }, { name: "RACER" }],
    url: "/blog/1",
  },
  {
    title: "Yamaha ponovila revoluciju u svetu nautike",
    image: "/images/yamahablog2.png",
    created_at: "12.12.2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: [{ name: "MOTORI" }],
    url: "/blog/2",
  },
  {
    title: "Sve što treba da znate o MotoGP-u",
    image: "/images/yamahablog3.png",
    created_at: "12.12.2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url: "/blog/3",
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

  const router = useRouter();

  return (
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
      {items?.map((item, index) => (
        <Card key={index} sx={{ mx: 5, minHeight: "500px", maxWidth: "400px" }}>
          <CardMedia>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "auto",
              }}
            >
              <Image
                src={item.image}
                width={768}
                height={260}
                style={{ width: "1024px", height: "auto" }}
                sizes="100vw, 30vw"
                alt="Motoshop 7"
              />
            </Box>
          </CardMedia>
          <CardContent sx={{ display: "flex" }}>
            <Stack spacing={0.5}>
              <Typography variant="body2">{item.created_at}</Typography>
              <Typography variant="h4">{item.title}</Typography>
              <Typography variant="body2">{item.description}</Typography>

              <Stack direction="row" pt={3} alignItems="center" spacing={2}>
                {item?.tags?.slice(0, 2)?.map((tag: any, index: number) => (
                  <Chip key={index} label={tag.name} color="info" />
                ))}
                <Box sx={{ position: "absolute", right: "2rem" }}>
                  <Typography
                    color="primary.main"
                    sx={{ textDecorationColor: "primary.main" }}
                  >
                    <Link onClick={() => router.push(`${item.url}`)}>
                      Procitaj tekst
                    </Link>
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Carousel>
  );
};

export default HomeBlog;
