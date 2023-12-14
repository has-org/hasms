"use client";
import Iconify from "@/components/iconify";
import TrendingCard from "@/components/trending-card";
import useResponsive from "@/hooks/useResponsive";
import { Cooperator } from "@/types/Cooperator";
import { Box, Card, Container } from "@mui/material";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HomeCooperators = ({
  deviceType,
  cooperators,
}: {
  deviceType?: any;
  cooperators: Cooperator[];
}) => {
  const isDesktop = useResponsive("up", "lg");
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
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
  const router = useRouter();

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        pt: 2,
      }}
    >
      <Container maxWidth="xl" sx={{ pt: 2 }}>
        {cooperators && (
          <Carousel
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            swipeable={false}
            autoPlaySpeed={1654}
            keyBoardControl={false}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="gd-carousel"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={deviceType}
            arrows={false}
            renderButtonGroupOutside={false}
          >
            {cooperators.map((item, index) => (
              <Card
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: 5,
                  backgroundColor: "common.white",
                }}
              >
                <CardMedia
                  sx={{}}
                  onClick={() => {
                    router.push(item.url);
                  }}
                >
                  <Image
                    src={item.image}
                    alt=""
                    width={200}
                    height={150}
                    style={{ objectFit: "contain" }}
                  />
                </CardMedia>
              </Card>
            ))}
          </Carousel>
        )}
      </Container>
    </Box>
  );
};

export default HomeCooperators;
