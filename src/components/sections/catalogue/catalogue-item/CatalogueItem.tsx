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
  DialogContent,
  DialogActions,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useEffect, useState } from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import ProductViewer2D from "../../../productViewer2D";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { RHFTextField } from "@/components/hook-form";
import FormProvider from "@/components/hook-form/FormProvider";
import { object, string } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import Link from "next/link";

export type ICatalogue = {
  id: string;
  name: string;
  images: ReactImageGalleryItem[];
  type: string;
  manufacturer: string;
  model: string;
  color: string;
  price: number;
  manufactured: number;
  description: string;
  specification_url: string;
  kilowatt_power: string;
  year_manufactured: string;
  cubic_centimeters: string;
};

const images360 = [
  "https://picsum.photos/id/1018/1000/600/",
  "https://picsum.photos/id/1019/1000/600/",
  // ... add more image paths for each angle
];

const orderInquirySchema = object({
  first_name: string().min(1, "First name is required").max(100),
  last_name: string().min(1, "Last name is required").max(100),
  country: string().min(1, "Country is required").max(100),
  address: string().min(1, "Address is required").max(100),
  city: string().min(1, "City is required").max(100),
  phone_number: string().min(1, "Phone number is required").max(100),
  email: string().min(1, "Email is required").max(100),
  
});

const CatalogueItem = ({ catalogue }: { catalogue: ICatalogue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState<ReactImageGalleryItem[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);

  const methods = useForm<any>({
    resolver: zodResolver(orderInquirySchema),
    defaultValues: catalogue,
  });
  const { reset, handleSubmit } = methods;

  const onSubmit: SubmitHandler<any> = async (
    values: any,
    e?: React.BaseSyntheticEvent
  ) => {
    console.log(values);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setImages(
      catalogue.images?.map((image) => {
        const imageUrl = `https://api.villa-seaview.online/images/?url=https://s3.villa-seaview.online/images/${image}&w=1024&q=100`;
        const thumbnailUrl = `https://api.villa-seaview.online/images/?url=https://s3.villa-seaview.online/images/${image}&w=400&q=100`;
        return { original: imageUrl, thumbnail: imageUrl };
      })
    );
  }, [catalogue?.images]);

  if (!catalogue) return <>{"no catalogue"}</>;

  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          <Grid
            xs={12}
            md={6}
            lg={6}
            xl={4}
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
          </Grid>
          <Grid xs={12} md={6} lg={6} xl={4}>
            <Stack>
              <Typography variant="h2">{catalogue?.name}</Typography>
              <Typography variant="h4" color="primary.light">
                {catalogue?.model}
              </Typography>
              <Stack direction="row" spacing={5}>
                <Stack
                  direction={"row"}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Iconify icon="mdi:cc" width={65} color="primary.main" />
                  <Stack
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h5" sx={{ whiteSpace: "nowrap" }}>
                      Zapremina
                    </Typography>
                    <Typography variant="h6" color="primary.main">
                      {catalogue?.cubic_centimeters}
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
                        {catalogue?.year_manufactured}
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
                <Typography variant="body2">
                  {catalogue.manufacturer}
                </Typography>
              </Stack>
              <Divider />
              <Stack
                direction="row"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography variant="body2">Model</Typography>
                <Typography variant="body2">{catalogue.model}</Typography>
              </Stack>
              <Divider />
              <Stack
                direction="row"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography variant="body2">Boja</Typography>
                <Typography variant="body2">{catalogue.color}</Typography>
              </Stack>
              <Divider />

              <Stack direction={"row"} alignItems="center">
                <Typography variant="body2">Detaljnije</Typography>
                {isOpen ? (
                  <Iconify icon="formkit:arrowup" />
                ) : (
                  <Iconify icon="formkit:arrowdown" />
                )}
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={12} md={6} lg={6} xl={4} order={{ md: 3, lg: 3, xl: 0 }}>
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
                    {catalogue.price} KM
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
                  href={`https://s3.villa-seaview.online${catalogue.specification_url}`}
                  style={{ textDecoration: "none", width: "100%" }}
                  target="_blank"
                >
                  <Button variant="outlined" fullWidth>
                    Specifikacije
                  </Button>
                </Link>
                <Link
                  href={`https://s3.villa-seaview.online${catalogue.additional_equipment}`}
                  style={{ textDecoration: "none", width: "100%" }}
                  target="_blank"
                >
                  <Button variant="outlined" fullWidth>
                    Dodatna oprema
                  </Button>
                </Link>
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
            <Typography>
              Engine Powerhouse: The TRACER 9 is equipped with a potent 890cc
              CP3 engine, delivering a perfect balance of power and efficiency.
              Experience smooth acceleration, impressive torque, and a
              responsive throttle for an exhilarating ride every time. Advanced
              Electronics: This bike boasts an advanced electronics suite,
              featuring Yamaha's YCC-T (Yamaha Chip-Controlled Throttle), D-MODE
              for customizable riding modes, and a quick shifter for seamless
              gear changes. The cutting-edge technology ensures a connected and
              intuitive riding experience. Sport-Touring Versatility: Whether
              you're navigating urban landscapes or embarking on a cross-country
              adventure, the TRACER 9 offers unmatched versatility. The
              adjustable windscreen, comfortable seating, and versatile riding
              position make it the perfect companion for both short commutes and
              long journeys. Chassis Excellence: The lightweight aluminum frame
              and fully adjustable suspension ensure optimal handling and
              stability. With a compact and agile design, the TRACER 9
              effortlessly maneuvers through twists and turns, providing a
              thrilling and confident ride. Stunning Design: Yamaha's attention
              to detail is evident in the TRACER 9's sleek and aerodynamic
              design. From its aggressive front end to the bold, sporty lines,
              this motorcycle not only performs exceptionally but also turns
              heads wherever it goes. Connectivity and Convenience: Stay
              connected on the go with the TRACER 9's connectivity features,
              allowing seamless integration with your smartphone. Access
              navigation, music, and other essential apps through the
              user-friendly interface, enhancing your overall riding experience.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        maxWidth="xl"
        sx={{ borderRadius: "24px" }}
      >
        <DialogTitle>
          <Stack direction="row" justifyContent="center" alignItems="center">
            <Typography variant="h3">Zatrazi ponudu</Typography>
            <Button
              onClick={() => setDialogOpen(false)}
              sx={{ position: "absolute", right: "40px" }}
            >
              <Iconify icon="mdi:close" color="white" width={"30px"} />
            </Button>
          </Stack>
        </DialogTitle>
        <Divider />
        <DialogContent
          sx={{
            minWidth: "1200px",
            p: 5,
            backgroundColor: (theme) => theme.palette.primary.darker,
          }}
        >
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <Stack direction={"row"} spacing={3}>
                <Stack sx={{ width: "100%" }}>
                  <InputLabel htmlFor="first_name" required>
                    Ime
                  </InputLabel>
                  <RHFTextField
                    id="first_name"
                    name="first_name"
                    type="text"
                    margin="dense"
                    variant="filled"
                    placeholder="Ime"
                    autoFocus
                    fullWidth
                    required
                  />
                </Stack>
                <Stack sx={{ width: "100%" }}>
                  <InputLabel htmlFor="last_name" required>
                    Prezime
                  </InputLabel>
                  <RHFTextField
                    id="last_name"
                    name="last_name"
                    autoFocus
                    fullWidth
                    type="text"
                    margin="dense"
                    placeholder="Prezime"
                    variant="filled"
                  />
                </Stack>
              </Stack>
              <InputLabel htmlFor="country" required>
                Država
              </InputLabel>
              <RHFTextField
                id="country"
                name="država"
                autoFocus
                fullWidth
                type="text"
                margin="dense"
                placeholder="Država"
                variant="filled"
              />

              <InputLabel htmlFor="address" required>
                Adresa
              </InputLabel>
              <RHFTextField
                id="address"
                name="address"
                autoFocus
                fullWidth
                type="text"
                margin="dense"
                placeholder="Adresa"
                variant="filled"
              />

              <InputLabel htmlFor="city" required>
                Grad
              </InputLabel>
              <RHFTextField
                id="city"
                name="city"
                autoFocus
                type="text"
                margin="dense"
                placeholder="Grad"
                variant="filled"
              />

              <InputLabel htmlFor="phone_number" required>
                Broj telefona
              </InputLabel>
              <RHFTextField
                id="phone_number"
                name="phone_number"
                autoFocus
                fullWidth
                type="text"
                margin="dense"
                placeholder="Broj telefona"
                variant="filled"
              />

              <InputLabel htmlFor="email" required>
                Email
              </InputLabel>
              <RHFTextField
                id="email"
                name="email"
                autoFocus
                fullWidth
                type="text"
                margin="dense"
                placeholder="Email adresa"
                variant="filled"
              />
            </Stack>
            <Button variant="contained" fullWidth size="large" sx={{ mt: 5 }}>
              Zatraži ponudu
            </Button>
          </FormProvider>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CatalogueItem;
