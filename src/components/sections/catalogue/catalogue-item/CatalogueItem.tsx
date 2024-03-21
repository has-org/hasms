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
  useMediaQuery,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
          return { original: imageUrl, thumbnail: thumbnailUrl, originalHeight: 450, originalWidth: 1024, thumbnailHeight: 80 };
        }
      )
    );
    setSelectedColor(catalogue.catalogue_variants[0]?.color);
  }, [catalogue]);

  if (!catalogue) return <>{"no catalogue"}</>;
  if (!catalogue.catalogue_details) return <>{"no catalogue details"}</>;
  if (!catalogue.catalogue_variants) return <>{"no catalogue variants"}</>;

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
      items: 3,
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

  const isXsScreen = useMediaQuery('(max-width:464px)');

  return (
    <>
      <Container maxWidth="lg" sx={{ marginTop: "48px" }}>
        <Grid container spacing={5}>
          <Grid xs={12} md={5} sx={{ marginTop: "-100px" }}>
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
          <Grid xs={12} md={7} marginBottom="72px">
            <Grid container direction="row" justifyContent="space-between" marginBottom="49px">
              <Grid >
                <Stack>
                  <Typography fontWeight="400" color="primary.light">
                    Yamaha
                  </Typography>
                  <Typography variant="h3" sx={{ lineHeight: 1.1 }}>{model}</Typography>
                </Stack>
              </Grid>
              <Stack
                direction="row"
                sx={{ backgroundColor: "#262626", borderRadius: "20px", height: "75px", width: "387px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
                alignItems="center"
                justifyContent="space-between">
                <Grid>
                  <Stack sx={{ color: "rgba(172, 172, 172, 0.86)" }}>
                    <Typography fontSize="14px">
                      Vec od
                    </Typography>
                    <Typography color="primary.main" variant="h6">
                      {price.toLocaleString()} KM
                    </Typography>
                  </Stack>
                </Grid>
                <Grid>
                  <Button variant="outlined"
                    color="secondary"
                    size="large"
                    sx={{
                      width: "158px",
                      height: "43px"
                    }}
                    onClick={() => setDialogOpen(true)}>
                    <Typography fontSize="14px" fontWeight="bold">Zatrazi ponudu</Typography>
                  </Button>
                </Grid>
              </Stack>
            </Grid>

            <Stack sx={{ flexDirection: { xs: 'column', md: 'row' }, marginBottom: "48px" }}>
              <Stack direction="row" alignItems="center" sx={{ paddingBottom: { xs: "24px", md: "0px" }, }}>
                <Iconify icon="lets-icons:date-today-light" width="32px" height="32px" color="primary.main" />
                <Stack sx={{
                  marginLeft: "12px", marginRight: { xs: '0px', md: "41px" }, flexDirection: { xs: 'row', md: "column" }, justifyContent: {
                    xs: "space-between",
                    md: "flex-start"
                  },
                  flexGrow: 1
                }}>
                  <Typography sx={{ color: "rgba(172, 172, 172, 0.86)", }}>Godina proizvodnje</Typography>
                  <Typography fontWeight={500}>{year_manufactured}</Typography>
                </Stack>
              </Stack>

              {isXsScreen ? (
                <Divider orientation="horizontal" flexItem color="D9D9D9" />
              ) : (
                <Divider orientation="vertical" variant="middle" flexItem color="D9D9D9" />
              )}

              <Stack direction="row" alignItems="center" sx={{ marginLeft: { xs: '0px', md: "41px" }, marginRight: { xs: '0px', md: "79px" }, paddingBottom: { xs: "24px", md: "0px" }, paddingTop: { xs: "24px", md: "0px" }, }}>
                <Iconify icon="ph:engine-light" width="32px" color="#d4531c" />
                <Stack sx={{
                  marginLeft: "12px", flexDirection: { xs: 'row', md: "column" }, justifyContent: {
                    xs: "space-between",
                    md: "flex-start"
                  },
                  flexGrow: 1
                }}>
                  <Typography sx={{ whiteSpace: "nowrap", color: "rgba(172, 172, 172, 0.86)" }}>
                    Zapremina
                  </Typography>
                  <Typography fontWeight={500}>{cubic_centimeters} cc</Typography>
                </Stack>
              </Stack>

              {isXsScreen ? (
                <Divider orientation="horizontal" flexItem color="D9D9D9" />
              ) : (
                <Divider orientation="vertical" variant="middle" flexItem color="D9D9D9" />
              )}

              <Stack direction="row" alignItems="center" sx={{
                marginLeft: { xs: '0px', md: "34px" },
                paddingTop: { xs: "24px", md: "0px" },
              }}>
                <Iconify icon="ri:checkbox-circle-line" color={"#38a11b"} width="32px" />
                <Stack sx={{
                  marginLeft: "12px", flexDirection: { xs: 'row', md: "column" }, justifyContent: {
                    xs: "space-between",
                    md: "flex-start"
                  },
                  flexGrow: 1
                }}>
                  <Typography sx={{ color: "rgba(172, 172, 172, 0.86)" }}>
                    Garancija
                  </Typography>
                  <Typography fontWeight={500}>3 godine</Typography>
                </Stack>
              </Stack>
            </Stack>

            <Stack spacing={2.5}>
              <Stack
                sx={{
                  backgroundColor: "#262626",
                  height: { xs: "161px", md: "75px", },
                  width: { xs: "100%", md: "670px", },
                  borderRadius: "16px",
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: { xs: "flex-start", md: "center" }
                }}
                justifyContent="space-around"
              >
                <Typography fontSize="18px" sx={{ paddingLeft: { xs: "20px", md: "16px" }, fontWeight: { xs: "400", md: "600" } }}>Preuzmite</Typography>
                <Stack sx={{
                  flexDirection: { xs: 'column', md: 'row' },
                  width: "100%",
                  alignItems: { xs: "center", md: "center" },
                  justifyContent: { xs: "center", md: "flex-end" },
                  spacing: { xs: 1.5, md: "0" }
                }}
                >
                  <Button
                    variant="outlinedTransparent"
                    color="secondary"
                    sx={{ width: { xs: "90%", md: "auto" }, padding: "10px 30px", borderRadius: "10px", marginRight: { xs: "0px", md: "17px" }, marginBottom: { xs: "12px", md: "0px" } }}
                  >
                    <Typography fontSize="12px">Katalog</Typography>
                  </Button>
                  <Button
                    variant="outlinedTransparent"
                    color="secondary"
                    sx={{ padding: "10px 20px", width: { xs: "90%", md: "auto" }, borderRadius: "10px", marginRight: { xs: "0px", md: "16px" } }}
                  >
                    <Typography fontSize="12px">Dodatna oprema</Typography>
                  </Button>
                </Stack>
              </Stack>


              <Stack sx={{
                backgroundColor: "#262626",
                height: "61px",
                width: { xs: "100%", md: "670px" },
                borderRadius: "16px",
                justifyContent: "center"
              }}>
                <Accordion>
                  <AccordionSummary
                    aria-controls="panel1-content"
                    id="panel1-header"
                    expandIcon={<ExpandMoreIcon />}
                  >
                    <Typography fontWeight={600} fontSize="18px">Specifikacije</Typography>
                  </AccordionSummary>
                  <AccordionDetails>

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
                  </AccordionDetails>
                </Accordion>
              </Stack>

              <Stack sx={{
                backgroundColor: "#262626",
                height: "61px",
                width: { xs: "100%", md: "670px" },
                borderRadius: "16px",
                justifyContent: "center",
              }}>
                <Accordion>
                  <AccordionSummary
                    aria-controls="panel1-content"
                    id="panel1-header"
                    expandIcon={<ExpandMoreIcon />}
                  >
                    <Typography fontWeight={600} fontSize="18px">Opis</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="h4" textAlign={"center"}>
                      {description_title}
                    </Typography>
                    <Typography variant="body1" textAlign={"justify"}>
                      {description}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Stack>
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
              arrows={false}
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
        </Grid >
      </Container >
      <InquiryModal
        open={dialogOpen}
        handleClose={() => setDialogOpen(false)}
        catalogue={{ ...catalogue, color: selectedColor, model: model }}
      />
    </>
  );
};

export default CatalogueItem;
