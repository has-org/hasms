import {
  Box,
  Button,
  Typography,
  Stack,
  IconButton,
  styled,
  Divider,
  ListItem,
  List,
} from "@mui/material";
import { CartContext } from "@/context/CartContext/CartContext";
import { useContext, useEffect, useMemo } from "react";
import { ReactTable } from "../../react-table/ReactTable";
import Iconify from "../../iconify";
import Link from "next/link";
import Scrollbar from "@/components/scrollbar/Scrollbar";
import Image from "next/image";
import { CloseIcon } from "@/theme/overrides/CustomIcons";

const CartTypography = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  fontWeight: "600",
}));

export const CartSidebar = ({ onClose }: { onClose: any }) => {
  const { items, totalAmount } = useContext(CartContext);

  return (
    <Box
      sx={{
        padding: 1,
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant={"h6"}>Korpa</Typography>
        <IconButton color="secondary" size="small" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Stack>
      <Stack>
        <List>
          <Divider color="black" />
          {items?.map((item: any) => {
            return (
              <Box
                key={`${item.product_code}-${item.color?.name}-${item.size?.name}`}
              >
                <ListItem sx={{ p: 0, m: 0 }}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    {item.product_image ? (
                      <Image
                        src={item.product_image}
                        width={48}
                        height={48}
                        alt="asd"
                        style={{ borderRadius: "8px" }}
                      />
                    ) : (
                      <Image
                        src={"/images/no-image.jpg"}
                        width={48}
                        height={48}
                        alt="asd"
                        style={{ borderRadius: "8px" }}
                      />
                    )}
                    <Stack>
                      <Typography variant="body2" fontSize={12}>
                        {item.product_manufacturer}
                      </Typography>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <CartTypography variant="body2">
                          {item.product_name}
                        </CartTypography>
                        <CartTypography variant="body2">
                          {item.color?.name}
                        </CartTypography>
                        <CartTypography variant="body2">
                          {item.size?.name}
                        </CartTypography>
                      </Stack>

                      <Typography variant="body2">
                        {item.product_price * item.quantity} KM
                      </Typography>
                    </Stack>
                  </Stack>
                </ListItem>
                <Divider color="black" />
              </Box>
            );
          })}
        </List>
      </Stack>

      <Stack direction="row" justifyContent={"space-between"}>
        <Typography>Ukupno:</Typography>
        <Typography pr={1} color="primary.main" sx={{ fontSize: "18px" }}>
          {totalAmount} KM
        </Typography>
      </Stack>

      <Box
        sx={{
          display: "flex",
          gap: 3,
          width: '100%',
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        <Link href="/cart" style={{ textDecoration: "none", width: '100%' }}>
          <Button variant="outlined" color="secondary" fullWidth>
            <Typography>Placanje</Typography>
          </Button>
        </Link>
        <Link href="/checkout" style={{ textDecoration: "none", width: '100%' }}>
          <Button variant="outlinedTransparent" color="secondary" fullWidth>
            <Typography>Pregled</Typography>
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
