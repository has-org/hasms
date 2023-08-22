"use client";
import Box from "@/components/MUI/Box";
import { Cooperator } from "@/types/Cooperator";
import Image from "next/image";
import { useMemo, useRef, useState, useEffect, Ref } from "react";

export default function CooperatorsAnimation({
  cooperators,
}: {
  cooperators: Cooperator[];
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);

  useEffect(() => {
    const containerElement = containerRef.current;
    if (containerElement) {
      setContainerWidth(containerElement.offsetWidth);
      setItemWidth(
        (containerElement.firstChild as HTMLElement)?.offsetWidth || 0
      );
    }
  }, []);

  // const itemsCount = Math.ceil(containerWidth / itemWidth) + 1;
  // const duplicatedItems = Array(cooperators).fill(cooperators).flat();
  return (
    <Box
      sx={{
        display: "flex",
        overflow: "hidden",
      }}
    >
      {cooperators.map((cooperator, index) => {
        return (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginRight: "12px",
            }}
            initial={{ x: "-100%" }}
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 10,
              ease: "linear",
              times: [0, 0.45, 0.55, 1],
              repeat: Infinity,
            }}
          >
            {/* <Link href={`/`}> */}
            <Image
              className="logo-img"
              alt="Cooperator Logo"
              src={
                cooperator?.image
                  ? `${process.env.NEXT_PUBLIC_API_IMG_HOST}${cooperator.image}`
                  : "https://placehold.co/600x400"
              }
              width={500}
              height={300}
              style={{ objectFit: "contain" }}
            />
            {/* </Link> */}
          </Box>
        );
      })}
    </Box>
  );
}
