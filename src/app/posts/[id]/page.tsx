import { getPost } from "@/services/apiService";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

export default async function PostPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const post = await getPost(id);
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "500px",
        }}
      >
        <Image src={post.main_image} fill alt="blog cover" style={{}} />
      </Box>

      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 2,
        }}
      >
        <Typography variant="h1">{post.title}</Typography>
        <Typography variant="body2">{post.text}</Typography>
      </Stack>
      <Grid container>
        <Grid md={6}>
          {post.images && (
            <Image src={post?.images[0]} fill alt="blog image"></Image>
          )}
        </Grid>

        <Grid md={6}>
          <Stack>
            <Typography variant="h3">Preuzmi:</Typography>
            {post?.post_extra_field?.map((item: any) => {
              if (item.field_type === "button") {
                return (
                  <Link
                    href={`${process.env.API_S3_HOST}${item.field_url}`}
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      textDecorationColor: "white",
                      color: "white",
                    }}
                    key={`${item.id}`}
                  >
                    <Button key={`${item.id}`}>{item.field_value}</Button>
                  </Link>
                );
              }
            })}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
