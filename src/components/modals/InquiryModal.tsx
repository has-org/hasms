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

const orderInquirySchema = object({
  first_name: string().min(1, "First name is required").max(100),
  last_name: string().min(1, "Last name is required").max(100),
  country: string().min(1, "Country is required").max(100),
  address: string().min(1, "Address is required").max(100),
  city: string().min(1, "City is required").max(100),
  phone_number: string().min(1, "Phone number is required").max(100),
  email: string().min(1, "Email is required").max(100),
  question: string().min(1, "Question is required").max(1000),
});

export const InquiryModal = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: VoidFunction;
}) => {
  const methods = useForm<any>({
    resolver: zodResolver(orderInquirySchema),
    defaultValues: {},
  });
  const { reset, handleSubmit } = methods;

  const onSubmit: SubmitHandler<any> = async (
    values: any,
    e?: React.BaseSyntheticEvent
  ) => {
    console.log(values);
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
            <InputLabel htmlFor="question" required>
              Pitanje
            </InputLabel>
            <RHFTextField
              id="question"
              name="question"
              autoFocus
              fullWidth
              multiline
              type="text"
              margin="dense"
              placeholder="Pitanje"
              variant="filled"
            />
          </Stack>
          <Button variant="contained" fullWidth size="large" sx={{ mt: 5 }}>
            Zatraži ponudu
          </Button>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};
