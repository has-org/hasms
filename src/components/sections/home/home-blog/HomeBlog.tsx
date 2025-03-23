"use client";

import useResponsive from "@/hooks/useResponsive";
import { IPost } from "@/types/IPost";
import { Box, Stack, Card, Typography, Chip, Link } from "@mui/material";
import { grey } from "@mui/material/colors";
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

  const color = grey[700];

  if(!posts) return <div>No posts</div>
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
        <Card key={index} sx={{ width: "360px", height: "468px" }}>
          <CardMedia>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "246px",
              }}
            >
              <Image src={item.thumbnail} fill alt="Motoshop 7" />
            </Box>
          </CardMedia>
          <CardContent sx={{ display: "flex" }}>
            <Box sx={{ width: "330px" }}>
              <Stack spacing={0.5}>
                <Typography variant="body2">{item.created_at}</Typography>
                <Typography>{item.short_title}</Typography>
                <Box
                  sx={{
                    display: "inlineBlock",
                    width: "100%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxHeight: "60px",
                  }}
                >
                  <Typography variant="body2">
                    {item.short_description}
                  </Typography>
                </Box>
                <Stack direction="row" pt={3} alignItems="center" spacing={2}>
                  {item.tags &&
                    item.tags
                      .slice(0, 2)
                      .map((tag: any, index: number) => (
                        <Chip
                          key={index}
                          label={tag.name}
                          style={{
                            backgroundColor: color,
                            borderRadius: "5px",
                          }}
                        />
                      ))}
                </Stack>
              </Stack>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Carousel>
  );
};

export default HomeBlog;
