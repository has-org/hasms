"use client";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Stack,
  Typography,
  Divider,
  Button,
  InputLabel,
} from "@mui/material";
import { RHFTextField } from "@/components/hook-form";
import FormProvider from "@/components/hook-form/FormProvider";
import { object, string } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Iconify from "../iconify/Iconify";
import { useSnackbar } from "notistack";
import axios from "@/utils/axios";
import { ICatalogue } from "@/types/Catalogue";

const orderInquirySchema = object({
  first_name: string().min(1, "First name is required").max(100),
  last_name: string().min(1, "Last name is required").max(100),
  country: string().min(1, "Country is required").max(100),
  address: string().min(1, "Address is required").max(100),
  city: string().min(1, "City is required").max(100),
  phone_number: string().min(1, "Phone number is required").max(100),
  email: string().min(1, "Email is required").max(100),
  message: string().min(1, "Message is required").max(1000),
});

export const InquiryModal = ({
  open,
  handleClose,
  catalogue,
}: {
  open: boolean;
  handleClose: VoidFunction;
  catalogue?: ICatalogue;
}) => {
  const { enqueueSnackbar } = useSnackbar();

  const methods = useForm<any>({
    resolver: zodResolver(orderInquirySchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      country: "",
      address: "",
      city: "",
      phone_number: "",
      email: "",
      message: "",
    },
  });
  const { reset, handleSubmit } = methods;

  const onSubmit: SubmitHandler<any> = async (
    values: any,
    e?: React.BaseSyntheticEvent
  ) => {
    if (catalogue) {
      const preparedObject = {
        ...values,
        code: catalogue.code,
        color: catalogue.color,
        model: catalogue.model,
      };
      const result = await axios.post("/sendInquiryProduct/", preparedObject);
      if (result.status === 200) {
        reset();
        handleClose();
        return enqueueSnackbar("Upit poslan uspješno", { variant: "success" });
      }
      return enqueueSnackbar("Upit nije poslan", { variant: "error" });
    }

    const result = await axios.post("/sendInquiry/", values);
    if (result.status === 200) {
      reset();
      handleClose();
      return enqueueSnackbar("Upit poslan uspješno", { variant: "success" });
    }
    return enqueueSnackbar("Upit nije poslan", { variant: "error" });
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="xl"
      sx={{ borderRadius: "24px" }}
    >
      <DialogTitle>
        <Stack direction="row" justifyContent="center" alignItems="center">
          <Typography variant="h3">Zatrazi ponudu</Typography>
          <Button
            onClick={() => handleClose()}
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
          scrollbarWidth: "0.2em",
          "&::-webkit-scrollbar": {
            width: "0.2em",
          },
          "&::-webkit-scrollbar-track": {
            background: "#f1f1f1",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#555",
          },
        }}
      >
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={1}>
            <Stack direction={"row"} spacing={3}>
              <Stack sx={{ width: "100%" }}>
                <InputLabel htmlFor="first_name" required>
                  Ime
                </InputLabel>
                <RHFTextField
                  id="first_name"
                  name="first_name"
                  type="text"
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
              name="country"
              autoFocus
              fullWidth
              type="text"
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
              placeholder="Email adresa"
              variant="filled"
            />
            <InputLabel htmlFor="message" required>
              Pitanje
            </InputLabel>
            <RHFTextField
              id="message"
              name="message"
              autoFocus
              fullWidth
              multiline
              type="text"
              placeholder="Pitanje"
              variant="filled"
            />
          </Stack>
          <Button
            variant="contained"
            fullWidth
            size="large"
            sx={{ mt: 2 }}
            type="submit"
          >
            Zatraži ponudu
          </Button>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};
