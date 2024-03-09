import { Container, Stack, Typography } from "@mui/material";

export default async function PaymentMethodsPage() {
  return (
    <Container maxWidth="lg">
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          py: 2,
        }}
      >
        <Typography variant="h2">Načini plaćanja</Typography>
      </Stack>
      <Stack spacing={2}>
        <Typography variant="body2">
          • gotovinom (KM) prilikom dostave,
        </Typography>
        <Typography variant="body2">
          • uplatom na žiro račun
        </Typography>
        <Typography variant="body2">
          Kupoprodajni ugovor (narudžba) je u elektronskom obliku pohranjen na serveru ponuđača te je kupcu dostupan u svakom trenutku na njegovom korisničkom profilu (Moj Profil).
        </Typography>
      </Stack>
    </Container>
  );
}
