'use client'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import { Blog as BlogType } from '@/types/Blog';
import { BlogCard } from '../BlogCard';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



const GridBlogSection = ({ blogs, title, itemsToRender = 4 }: { blogs: BlogType[], title: string, itemsToRender?: number }) => {
    if (blogs && blogs.length > 0) return <>Missing blogs</>


    return (
        <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
            <Typography variant="h3" component="h2" sx={{
                marginTop: '20px',
            }} >
                {title}
                <Divider />

            </Typography>
            <Grid container >
                {blogs?.slice(0, itemsToRender).map((blog, index) => {
                    return <Grid item xs={12} sm={12} md={3} lg={3} key={index}>
                        <Item elevation={0} >
                            <BlogCard blog={blog} />
                        </Item>
                    </Grid>
                })}

            </Grid>
        </Box>
    );
}
export default GridBlogSection;