import { Container, Stack, Typography } from "@mui/material";

export default async function DeliveryPage() {
  return (
    <Container maxWidth="xl">
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          py: 2,
        }}
      >
        <Typography variant="h2">Dostava</Typography>
      </Stack>
      <Stack spacing={2}>
        <Typography variant="body2">
          • Naručenu robu dostavimo preko kurirske službe (Pošte Srpske)
        </Typography>
        <Typography variant="body2">
          • Plaćanje u gotovini (KM) po preuzimanju.
        </Typography>
        <Typography variant="body2">
          • Ukoliko vaša narudžba bude potvrđena do 13:00 časova možete je očekivati u narednih 48 sati
        </Typography>
        <Typography variant="body2">
          • Sve cijene već uključuju (PDV)!
        </Typography>
        <Typography variant="body2">
          • Cijena dostave ovisi o adresi isporuke
        </Typography>
        <Typography variant="body2">
          • Besplatna dostava ukoliko narudžba iznosi preko 100,00 KM!
        </Typography>
      </Stack>
    </Container>
  );
}
