"use client";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";

export type ICatalogue = {
  id: string;
  name: string;
  image: string;
  type: string;
};

const CatalogueList = ({ catalogues }: { catalogues: ICatalogue[] }) => {
  return (
    <Grid container>
      {catalogues &&
        catalogues.map((catalogue: ICatalogue, index: number) => {
          return (
            <Grid xs={12} sm={12} md={12} lg={12} key={index}>
              <Typography>{catalogue.name}</Typography>
              <Image src={catalogue.image} width={350} height={350} alt="a" />
            </Grid>
          );
        })}
    </Grid>
  );
};

export default CatalogueList;
