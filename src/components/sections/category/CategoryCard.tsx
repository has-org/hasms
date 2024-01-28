"use client";
import { Box, Button, Typography, Stack, Card } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CategoryCard = ({ category }: { category: any }) => {
  const router = useRouter();

  return (
    <Card sx={{ padding: 2, }}>
      <Stack spacing={2}>
        <Typography textAlign={"center"} variant="h3">
          {category.name}
        </Typography>

        <Stack direction="row" display={"flex"} justifyContent={"center"} >
          <Image src={category.image} width={500} height={500} alt="asd" style={{borderRadius: '12px'}}/>
        </Stack>
        <Button
          variant="outlined"
          onClick={() => router.push(`shop/category/${category.id}`)}
        >
          Pogledaj
        </Button>
      </Stack>
    </Card>
  );
};

export default CategoryCard;
