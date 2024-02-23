"use client";

import useResponsive from "@/hooks/useResponsive";
import { IPost } from "@/types/IPost";
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

const HomeBlog = ({
  deviceType,
  posts,
}: {
  deviceType?: any;
  posts: IPost[];
}) => {
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
      {posts?.map((item, index) => (
        <Card key={index} sx={{ mx: 5, minHeight: "500px", maxWidth: "400px" }}>
          <CardMedia>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "250px",
              }}
            >
              <Image
                src={item.thumbnail}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="Motoshop 7"
              />
            </Box>
          </CardMedia>
          <CardContent sx={{ display: "flex" }}>
            <Stack spacing={0.5}>
              <Typography variant="body2">{item.created_at}</Typography>
              <Typography variant="h4">{item.short_title}</Typography>
              <Typography variant="body2">{item.short_description}</Typography>

              <Stack direction="row" pt={3} alignItems="center" spacing={2}>
                {item?.tags?.slice(0, 2)?.map((tag: any, index: number) => (
                  <Chip key={index} label={tag.name} color="info" />
                ))}
                <Box sx={{ display: "flex", flex: 1, justifyContent: "end" }}>
                  <Typography
                    color="primary.main"
                    sx={{ textDecorationColor: "primary.main" }}
                  >
                    <Link onClick={() => router.push(`/posts/${item.id}`)}>
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
