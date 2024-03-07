import { Container, Stack, Typography } from "@mui/material";

export default async function ComplaintsPage() {
  return (
    <Container maxWidth="xl">
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          py: 2,
        }}
      >
        <Typography variant="h2">Reklamacije</Typography>
      </Stack>

      <Stack spacing={2}>
        <Typography variant="body2">
          Moto Shop 7 vam želi osigurati da je povrat ili zamjena artikla jednostavan
          i pružiti vam najbolju uslugu.
        </Typography>

        <Typography variant="body2">
          Rok za reklamaciju proizvoda je 7 dana od prijema narudžbe.
        </Typography>

        <Typography variant="body2">
          Proizvod treba da bude vraćen u originalnom stanju
          i pakovanju sa pripadajućim etiketama
        </Typography>

        <Typography variant="body2">
          Potrebno je da na E-Mail yamaha@motoshop7.ba
          pošaljete broj narudžbe i razlog reklamacije/zamjene
        </Typography>

        <Typography variant="body2">
          Ukoliko se radi o reklamaciji troškove dostave snosimo mi,
          a ukoliko se radi o zamjeni troškove snosite vi.
        </Typography>

        <Typography variant="body2">
          Proces reklamacije može da traje do 7 dana
        </Typography>
      </Stack>
    </Container>
  );
}
