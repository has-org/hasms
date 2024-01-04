"use client";
import { Box, Button, Typography, Stack, Card } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CategoryCard = ({ category }: { category: any }) => {
  const router = useRouter();

  return (
    <Card>
      <Stack>
        <Typography>{category.name}</Typography>
        <Button
          variant="outlined"
          onClick={() => router.push(`shop/category/${category.id}`)}
        >
          Pogledaj
        </Button>
        <Image src={category.image} width={50} height={50} alt="asd" />
      </Stack>
    </Card>
  );
};

export default CategoryCard;
