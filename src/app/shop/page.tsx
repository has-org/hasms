import { Button, Card, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image, { StaticImageData } from "next/image";

async function getCategories() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/categories`, {
      method: "GET",
      cache: "no-store",
    });
    if (res.status !== 200) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (e) {
    return null;
  }
}

export type ICategory = {
  id: number;
  name: string;
  image: string;
};

export default async function Shop() {
  const categories = await getCategories();
  if (!categories) return <div>Categories not found</div>;

  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {categories.map((category: ICategory, index: number) => {
            return (
              <Grid xs={12} md={4} key={index}>
                <Card sx={{ padding: 2 }}>
                  <Stack spacing={2}>
                    <Typography textAlign={"center"} variant="h3">
                      {category.name}
                    </Typography>

                    <Stack
                      direction="row"
                      display={"flex"}
                      justifyContent={"center"}
                    >
                      <Image
                        src={category?.image}
                        width={500}
                        height={500}
                        alt="asd"
                        style={{ borderRadius: "12px" }}
                      />
                    </Stack>
                    <Button
                      variant="outlined"

                    >
                      Pogledaj
                    </Button>
                  </Stack>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>{" "}
    </>
  );
}
