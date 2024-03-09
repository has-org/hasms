"use client";
import "./image-gallery.css";
import Iconify from "@/components/iconify/Iconify";
import {
  Card,
  CardContent,
  Typography,
  Stack,
  Container,
  Divider,
  Box,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useEffect, useState } from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "react-multi-carousel/lib/styles.css";

import ProductViewer2D from "../../../productViewer2D";

import Link from "next/link";
import { ICatalogue } from "@/types/Catalogue";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import { InquiryModal } from "@/components/modals/InquiryModal";

const images360 = [
  "https://picsum.photos/id/1018/1000/600/",
  "https://picsum.photos/id/1019/1000/600/",
  // ... add more image paths for each angle
];

const CatalogueItem = ({
  catalogue,
  deviceType,
}: {
  catalogue: ICatalogue;
  deviceType?: any;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState<ReactImageGalleryItem[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string>("");

  useEffect(() => {
    setImages(
      catalogue.catalogue_variants[0]?.catalogue_variant_images[0]?.images?.map(
        (image) => {
          const imageUrl = `https://api.villa-seaview.online/images/?url=https://s3.villa-seaview.online/images/${image}&w=1024&q=100`;
          const thumbnailUrl = `https://api.villa-seaview.online/images/?url=https://s3.villa-seaview.online/images/${image}&w=1024&q=100`;
          return { original: imageUrl, thumbnail: thumbnailUrl, originalHeight: 450, originalWidth: 1024,thumbnailHeight: 80};
        }
      )
    );
    setSelectedColor(catalogue.catalogue_variants[0]?.color);
  }, [catalogue]);

  if (!catalogue) return <>{"no catalogue"}</>;

  const { code, state } = catalogue;

  const {
    model,
    manufacturer,
    year_manufactured,
    kilowatt_power,
    horse_power,
    distance_traveled,
    specification_url,
    additional_equipment_url,
    cubic_centimeters,
    description_title,
    description,
  } = catalogue?.catalogue_details[0];

  const { color, price } = catalogue.catalogue_variants[0];

  const colors = catalogue.catalogue_variants.map((variant) => variant.color);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1800 },
      items: 3,
    },
    laptop: {
      breakpoint: { max: 1800, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid xs={12} md={6} lg={6} xl={5} sx={{}}>
            {/* <ProductViewer2D images={images360} /> */}

            <ImageGallery
              items={images}
              autoPlay={false}
              showPlayButton={false}
              showFullscreenButton={false}
              showNav={true}
              additionalClass="image-gallery-overwrite"
            />
          </Grid>
          <Grid xs={12} md={6} lg={6} xl={7}>
            <Stack>
              <Typography variant="h2">{catalogue?.name}</Typography>
              <Typography variant="h4" color="primary.light">
                {model}
              </Typography>
              <Stack direction="row" spacing={5}>
                <Stack
                  direction={"row"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Iconify icon="mdi:cc" width={65} color="primary.main" />
                  <Stack
                    sx={{
                      display: "flex",
                    }}
                  >
                    <Typography variant="h5" sx={{ whiteSpace: "nowrap" }}>
                      Zapremina
                    </Typography>
                    <Typography variant="h6" color="primary.main">
                      {cubic_centimeters}
                    </Typography>
                  </Stack>
                </Stack>
                <Stack>
                  <Stack
                    direction={"row"}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Iconify
                      icon="material-symbols:date-range"
                      width={60}
                      color="primary.main"
                    />
                    <Stack
                      sx={{
                        display: "flex",
                      }}
                    >
                      <Typography variant="h5">Godina proizvodnje</Typography>
                      <Typography variant="h6" color="primary.main">
                        {year_manufactured}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
              <Typography variant="h4">Specifikacije</Typography>

              <Divider />
              <Stack
                direction="row"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography variant="body2">Proizvodjac</Typography>
                <Typography variant="body2">{manufacturer}</Typography>
              </Stack>
              <Divider />
              <Stack
                direction="row"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography variant="body2">Šifra</Typography>
                <Typography variant="body2">{code}</Typography>
              </Stack>
              <Divider />
              <Stack
                direction="row"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography variant="body2">Model</Typography>
                <Typography variant="body2">{model}</Typography>
              </Stack>
              <Divider />
              <Stack
                direction="row"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography variant="body2">Izaberi boju</Typography>
              </Stack>
              <Divider />
              <Stack
                direction="row"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography variant="body2">Boja</Typography>
                <Typography variant="body2">{color}</Typography>
              </Stack>
              <Divider />
              <Stack
                direction="row"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography variant="body2">Kw</Typography>
                <Typography variant="body2">{kilowatt_power}</Typography>
              </Stack>
              <Divider />
              <Stack
                direction="row"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography variant="body2">Hp</Typography>
                <Typography variant="body2">{horse_power}</Typography>
              </Stack>
              <Divider />
              <Stack
                direction="row"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography variant="body2">Predjenih kilometara</Typography>
                <Typography variant="body2">{distance_traveled}</Typography>
              </Stack>
              <Divider />
              <Stack
                direction="row"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography variant="body2">Stanje</Typography>
                <Typography variant="body2">{state}</Typography>
              </Stack>
              <Divider />

              <Stack direction={"row"} alignItems="center">
                <Button
                  sx={{ color: "white", p: 0 }}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Typography variant="body2">Detaljnije</Typography>
                  {isOpen ? (
                    <Iconify icon="formkit:arrowup" />
                  ) : (
                    <Iconify icon="formkit:arrowdown" />
                  )}
                </Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={12} md={6} lg={6} xl={3}>
            <Stack spacing={2}>
              <Box
                sx={{
                  borderRadius: "24px",
                  border: "1px white",
                }}
              >
                <Stack
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ position: "relative", top: 0, left: 0 }}
                  >
                    Vec od
                  </Typography>
                  <Typography color="primary.main" variant="h3">
                    {price.toLocaleString()} KM
                  </Typography>
                </Stack>
              </Box>

              <Stack>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Iconify icon="mdi:checkbox-outline" color={"primary.main"} />
                  <Typography variant="body2" fontSize={"1.2em"}>
                    Garancija 3 godine
                  </Typography>
                </Stack>
              </Stack>

              <Stack spacing={1}>
                <Button variant="contained" onClick={() => setDialogOpen(true)}>
                  Zatrazi ponudu
                </Button>
                <Link
                  href={`https://s3.villa-seaview.online${specification_url}`}
                  style={{ textDecoration: "none", width: "100%" }}
                  target="_blank"
                >
                  <Button variant="outlined" fullWidth>
                    Specifikacije
                  </Button>
                </Link>
                {additional_equipment_url && (
                  <Link
                    href={`${additional_equipment_url}`}
                    style={{ textDecoration: "none", width: "100%" }}
                    target="_blank"
                  >
                    <Button variant="outlined" fullWidth>
                      Dodatna oprema
                    </Button>
                  </Link>
                )}
              </Stack>
            </Stack>
          </Grid>
          <Grid
            xs={12}
            md={6}
            lg={6}
            xl={12}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Stack sx={{ p: { xs: 1, xl: 20 } }}>
              <Typography variant="h4" textAlign={"center"}>
                {description_title}
              </Typography>
              <Divider />
              <Typography variant="body1" textAlign={"justify"}>
                {description}
              </Typography>
            </Stack>
          </Grid>
          <Grid xs={12}>
            <Carousel
              showDots={true}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              swipeable={true}
              autoPlaySpeed={5000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="gd-carousel"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              deviceType={deviceType}
              arrows={true}
            >
              {catalogue?.catalogue_characteristics?.map(
                (characteristic, index) => (
                  <Card
                    key={`${characteristic.title}-${index}`}
                    sx={{ mb: 5, mx: 1, height: "564px" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        width: "100%",
                        height: "288px",
                      }}
                    >
                      <Image
                        src={characteristic.image}
                        width={500}
                        height={288}
                        sizes="100vw, 25vw"
                        style={{
                          width: "500px",
                          height: "auto",
                          objectFit: "cover",
                        }}
                        alt="Motoshop 7"
                      />
                    </Box>
                    <CardContent
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <Stack gap={2}>
                        <Typography variant="h6">
                          {characteristic.title}
                        </Typography>
                        <Typography variant="body2" textAlign={"justify"}>
                          {characteristic.text}
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                )
              )}
            </Carousel>
          </Grid>
        </Grid>
      </Container>
      <InquiryModal
        open={dialogOpen}
        handleClose={() => setDialogOpen(false)}
        catalogue={{ ...catalogue, color: selectedColor, model: model }}
      />
    </>
  );
};

export default CatalogueItem;
