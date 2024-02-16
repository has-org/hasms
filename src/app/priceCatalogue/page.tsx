import Iconify from "@/components/iconify/Iconify";
import { InquiryModal } from "@/components/modals/InquiryModal";
import { getCatalogues } from "@/services/apiService";
import { ICatalogue } from "@/types/Catalogue";
import {
  Card,
  CardMedia,
  Typography,
  Container,
  Button,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Link from "next/link";



export default async function CataloguesPage({}: any) {
  return (
    <>
      <Container maxWidth="xl">
        <Stack sx={{ minHeight: "500px" }}>
          <Typography variant="h1" component="h3" textAlign="center">
            Cjenovnik
          </Typography>

          <Typography variant="h2" component="h4">
            Preuzmi:
          </Typography>
          <List sx={{ width: "220px" }}>
            <ListItem>
              <ListItemText>
                <Link
                  href="https://s3.villa-seaview.online/specifications/cjenovnik%20motori%202024.pdf"
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Typography variant="body2" sx={{ fontSize: "18px" }}>
                    1. Motori i skuteri
                  </Typography>
                </Link>
              </ListItemText>
              <ListItemIcon>
                <Iconify icon="teenyicons:pdf-outline" />
              </ListItemIcon>
            </ListItem>
          </List>
        </Stack>
      </Container>
    </>
  );
}
