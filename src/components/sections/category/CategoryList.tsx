'use client'
import CategoryCard from "./CategoryCard";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

export type ICategory = {
  id: number;
  name: string;
};

const CategoryList = ({ categories }: { categories: ICategory[] }) => {
  return (
    <>
      <Grid container>
        {categories.map((category: ICategory, index: number) => {
          return (
            <>
            <Grid xs={12} md={4}>
              <CategoryCard category={category} key={index} />
            </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
};

export default CategoryList;
