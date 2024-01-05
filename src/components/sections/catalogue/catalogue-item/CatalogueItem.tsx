"use client";
import "./image-gallery.css";
import Iconify from "@/components/iconify/Iconify";
import {
  Card,
  Typography,
  Stack,
  Container,
  Divider,
  Box,
  Button,
} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import ProductViewer2D from "../../../productViewer2D";

export type ICatalogue = {
  id: string;
  name: string;
  images: ReactImageGalleryItem[];
  type: string;
  shortcode: string;
  manufacturer: string;
  model: string;
  serial_number: string;
  color: string;
  price: number;
  topSpeed: number;
  manufactured: number;
  description: string;
  specifications: string;
};

const images360 = [
  "https://picsum.photos/id/1018/1000/600/",
  "https://picsum.photos/id/1019/1000/600/",
  // ... add more image paths for each angle
];

const CatalogueItem = ({ catalogue }: { catalogue: ICatalogue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState<ReactImageGalleryItem[]>([]);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setImages(
      catalogue.images?.map((image) => {
        const imageUrl = `https://api.villa-seaview.online/images/?url=https://s3.villa-seaview.online${image}&w=1024&q=100`;
        const thumbnailUrl = `https://api.villa-seaview.online/images/?url=https://s3.villa-seaview.online${image}&w=400&q=100`;
        return { original: imageUrl, thumbnail: imageUrl };
      })
    );
  }, [catalogue.images]);

  if (!catalogue) return <>{"no catalogue"}</>;

  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          <Grid
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <ProductViewer2D images={images360} /> */}

            <ImageGallery
              items={images}
              autoPlay={false}
              showPlayButton={false}
              showFullscreenButton={false}
              showNav={false}
              additionalClass="image-gallery-overwrite"
            />
            {/* <Image src={catalogue.image} width={300} height={300} alt="ad" /> */}
          </Grid>
          <Grid xs={12} md={4}>
            <Stack>
              <Typography variant="h3" textAlign={"center"}>
                {catalogue?.name}
              </Typography>
              {/* <Typography variant="h5" textAlign={'center'} color="primary.light">{catalogue.shortcode}</Typography> */}
              <Typography
                variant="h5"
                textAlign={"center"}
                color="primary.light"
              >
                {catalogue?.model}
              </Typography>
              <Stack direction="row" spacing={5}>
                <Stack direction={"row"}>
                  <Iconify
                    icon="fluent:top-speed-20-filled"
                    width={65}
                    color="primary.main"
                  />
                  <Stack>
                    <Typography variant="h6" sx={{ whiteSpace: "nowrap" }}>
                      Top Speed
                    </Typography>
                    <Typography variant="h6" color="primary.main">
                      110 km/h
                    </Typography>
                  </Stack>
                </Stack>
                <Stack>
                  <Stack direction={"row"}>
                    <Iconify
                      icon="material-symbols:date-range"
                      width={65}
                      color="primary.main"
                    />
                    <Stack>
                      <Typography variant="h6">Manufactured</Typography>
                      <Typography variant="h6" color="primary.main">
                        2020
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
              <Typography variant="h6">Specifikacije</Typography>
              <Grid container>
                <Grid xs={12} md={6}>
                  <Divider />
                  <Typography variant="body2">Proizvodjac</Typography>
                  <Divider />
                  <Typography variant="body2">Model</Typography>
                  <Divider />
                  <Typography variant="body2">Serijski broj</Typography>
                  <Divider />
                  <Typography variant="body2">Boja</Typography>
                  <Divider />

                  <Stack direction={"row"} alignItems="center">
                    <Typography variant="body2">Detaljnije</Typography>
                    {isOpen ? (
                      <Iconify icon="formkit:arrowup" />
                    ) : (
                      <Iconify icon="formkit:arrowdown" />
                    )}
                  </Stack>
                </Grid>
                <Grid xs={12} md={6}>
                  <Divider />
                  <Typography variant="body2">
                    {catalogue.manufacturer}
                  </Typography>
                  <Divider />
                  <Typography variant="body2">{catalogue.model}</Typography>
                  <Divider />
                  <Typography variant="body2">
                    {catalogue.serial_number}
                  </Typography>
                  <Divider />
                  <Typography variant="body2">{catalogue.color}</Typography>
                  <Divider />
                </Grid>
              </Grid>
            </Stack>
          </Grid>
          <Grid
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Stack spacing={2}>
              <Box
                sx={{
                  borderRadius: "24px",
                  border: "1px white",
                }}
              >
                <Stack>
                  <Typography sx={{ position: "relative", top: 0, left: 0 }}>
                    Vec od
                  </Typography>
                  <Typography color="primary.main" variant="h3">
                    {catalogue.price} KM
                  </Typography>
                </Stack>
              </Box>

              <Stack>
                <Stack direction="row">
                  <Iconify icon="mdi:checkbox-outline" color={"primary.main"} />
                  <Typography>Kupovina na rate</Typography>
                </Stack>
                <Stack direction="row">
                  <Iconify icon="mdi:checkbox-outline" color={"primary.main"} />
                  <Typography>Garancija 5 godina</Typography>
                </Stack>
              </Stack>

              <Stack spacing={1}>
                <Button variant="contained">Zatrazi ponudu</Button>
                <Button variant="outlined">Naruci odmah</Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CatalogueItem;
