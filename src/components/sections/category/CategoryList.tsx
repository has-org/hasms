"use client";
import CategoryCard from "./CategoryCard";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Container from "@mui/material/Container";

export type ICategory = {
  id: number;
  name: string;
};

const CategoryList = ({ categories }: { categories: ICategory[] }) => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        {categories.map((category: ICategory, index: number) => {
          return (
            <Grid xs={12} md={4} key={index}>
              <CategoryCard category={category} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default CategoryList;
