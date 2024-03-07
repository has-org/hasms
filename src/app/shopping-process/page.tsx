import { Container, Stack, Typography } from "@mui/material";

export default async function ShoppingProccesPage() {
  return (
    <Container maxWidth="xl">
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          py: 2,
        }}
      >
        <Typography variant="h2">Postupak kupovine</Typography>
      </Stack>

      <Stack spacing={2}>
        <Typography variant="body2">
          Kupci na stranici „Moto Shop 7“ mogu na svom korisničkom računu provjeriti status narudžbe, istoriju kupovine a moguće je i mijenjanje ličnih podataka, podataka o dostavi, lozinke itd.
        </Typography>
      </Stack>
      <Stack spacing={2}>
        <Typography variant="h6">Postupak internet narudžbe</Typography>
        <Typography variant="body2">
          Kada na internet stranici pronađete traženi proizvod, izaberete njegovu količinu i pritisnete na dugme DODAJ U KORPU, proizvod će biti dodan u vašu virtualnu korpu. Ako proizvod ima više opcija, kao što su veličina, boja, itd., prije dodavanja u korpu morate i to izabrati.
        </Typography>
        <Typography variant="body2">
          1. KORPA
        </Typography>
        <Typography variant="body2">
          Pogled u korpu će vam otkriti njen sadržaj, moguće opcije izabranih proizvoda, njihovu količinu, i konačnu cijenu. Ako je sve nabrojano ispravno, onda nastavite na idući korak.
        </Typography>
        <Typography variant="body2">
          2. NARUČIVANJE
        </Typography>
        <Typography variant="body2">
          Nakon pregleda artikala iz korpe idući korak je popunjavanje podataka za dostavu. Od vas će se tražiti da upišete podatke kao što su Ime, Prezime, Adresa itd. U slučaju da se radi o Pravnom licu od vas će se tražiti podaci firme. Tačan naziv, sjedište, PDV I JIB broj kao i E-Mail adresa. Nakon toga da potvrdite svoje podatke i odaberete način preuzimanja. Idući korak je plaćanje. Fizičko lice plaća prilikom preuzimanja u trgovini ili pouzećem na adresi, dok ako se radi o Pravnom licu dostava je moguća nakon izvršene uplate putem računa.
        </Typography>
        <Typography variant="body2">
          3. POTVRDA O NARUDŽBI
        </Typography>
        <Typography variant="body2">
          Nakon što su svi koraci ispunjeni naš tim će vašu narudžbu procesuirati i poslati vam potvrdu o narudžbi.
        </Typography>
        <Typography variant="body2">
          Za dodatna pitanja i informacije dostupni smo na broj 066/173-700.
        </Typography>

      </Stack>
    </Container>
  );
}
