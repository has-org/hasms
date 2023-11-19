"use client";
import Iconify from "@/components/iconify";
import TrendingCard from "@/components/trending-card";
import useResponsive from "@/hooks/useResponsive";
import { Box, Grid, Stack, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";

const HomeTrending = () => {
  const isDesktop = useResponsive("up", "lg");

  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        width={"100%"}
        paddingX="128px"
        paddingY="48px"
        spacing={5}
      >
        <TrendingCard
          label="Motori"
          image="/images/feature-1332-6585.jpg"
          url="/catalogues/motori"
        />

        <Stack spacing={1}>
          <TrendingCard
            label="Motori"
            image="/images/cq5dam.web_.2000.2000.jpg"
            url="/catalogues/motori"
          />
          <TrendingCard
            label="Motori"
            image="/images/motopassion-sajam-2022-4.jpg"
            url="/catalogues/motori"
          />
          <TrendingCard
            label="Motori"
            image="/images/motoshop7blog.webp"
            url="/catalogues/motori"
          />
        </Stack>
      </Stack>
    </>
  );
};

export default HomeTrending;
