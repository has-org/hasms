import { Container, Stack, Typography } from "@mui/material";

export default async function AboutUsPage() {
  return (
    <Container maxWidth="xl">
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          py: 2,
        }}
      >
        <Typography variant="h2">DOBRODOŠLI U YAMAHU</Typography>
      </Stack>

      <Stack spacing={2}>
        <Typography variant="body2">
          Otkako je naš osnivač Genichi Kawakami osnovao Yamaha Motor 1955.
          godine, naša misija je bila da SVIM našim kupcima pružimo nešto što
          Japanci zovu KANDO.
        </Typography>

        <Typography variant="body2">
          KANDO je osjećaj dubokog zadovoljstva i uzbuđenja koje steknete kada
          naiđete na nešto izuzetne vrijednosti, kvalitete i performansi. To je
          uzbudljiva emocija koja vam dodaje začin u život!
        </Typography>

        <Typography variant="body2">
          Želimo da imate ovaj osjećaj, ne samo kod naših proizvoda, već od
          prvog trenutka kada prođete kroz naša vrata.
        </Typography>

        <Typography variant="body2">
          Dobrodošli u &quot;Moto Shop 7&quot; - vašu destinaciju za strast
          prema motorima još od 2010.
        </Typography>

        <Typography variant="body2">
          Nalazimo se na dve lokacije u Banjoj Luci i ponosno smo ovlašteni
          Yamaha distributer i serviser.
        </Typography>

        <Typography variant="body2">
          1) Jesenjinova 14 – Potpuno novi objekat izgrađen po svim Yamaha
          standardima. Prizemlje ovog novog objekta ima funkciju ovlaštenog
          servisa sa Yamaha licencom. Na drugom nivou nalazi se maloprodajni i
          veleprodajni salon.
        </Typography>

        <Typography variant="body2">
          2) Njegoševa 34a – Na ovoj adresi se i dalje nalazi naša prvobitna
          poslovnica koja radi još od 2010. godine.
        </Typography>

        <Typography variant="body2">
          Naša strast prema motociklima odražava se u našem odabiru vrhunske
          opreme i dijelova.
        </Typography>

        <Typography variant="body2">
          Pridružite se &quot;Moto Shop 7&quot; zajednici i ostvarite svoje moto
          snove!
        </Typography>
      </Stack>
    </Container>
  );
}
