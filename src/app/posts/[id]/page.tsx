import { getPost } from "@/services/apiService";
import { Box, Button, Container, Grid2 as Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params
  const post = await getPost({ id: id });
  return (
    <Container maxWidth="lg">
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
        <Grid size={{ md: 6 }}>
          {post.images && (
            <Image src={post?.images[0]} fill alt="blog image"></Image>
          )}
        </Grid>

        <Grid size={{ md: 6 }}>
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
