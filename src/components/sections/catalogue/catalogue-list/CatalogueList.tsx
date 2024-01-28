"use client";
import { Card, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import Link from "next/link";

export type ICatalogue = {
  main_image: string;
  id: string;
  name: string;
  image: string;
  type: string;
};

const CatalogueList = ({ catalogues }: { catalogues: ICatalogue[] }) => {
  return (
    <Grid container spacing={5}>
      {catalogues &&
        catalogues.map((catalogue: ICatalogue, index: number) => {
          return (
            <Grid
              xs={12}
              sm={6}
              md={3}
              lg={4}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card
                sx={{
                  padding: "12px",
                }}
              >
                <Typography textAlign="center" variant="h6">{catalogue.name}</Typography>
                <CardMedia sx={{mt:2}}>
                  <Link href={`/catalogues/${catalogue.id}`}>
                    <Image
                      src={catalogue.main_image}
                      width={1024}
                      height={300}
                      style={{ width: "1024px", height: "auto", borderRadius: "12px"}}
                      alt="a"
                    />
                  </Link>
                </CardMedia>
              </Card>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default CatalogueList;
