import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { alpha } from "@mui/material/styles";

const TrendingCard = ({
  label,
  image,
  url,
  width,
  height,
}: {
  label: string;
  image: string;
  url: string;
  width?: string;
  height?: string;
}) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          border: "2px solid white",
          borderRadius: "8px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: height,
            width: width,
          }}
        >
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              textAlign: "center",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: (theme: any) =>
                alpha(theme.palette.common.fluo, 0.72),
              "&:hover": {
                backgroundColor: (theme: any) =>
                  alpha(theme.palette.common.fluo, 0.87),
              },
            }}
          >
            <Typography variant="h6">{label}</Typography>
          </Button>
          <Image
            src={image}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "8px",
              objectFit: "fill",
            }} // optional
            alt="Motoshop 7"
          />
        </Box>
      </Box>
    </>
  );
};

export default TrendingCard;
