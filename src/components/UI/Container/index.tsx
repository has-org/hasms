'use client'
import Box from '@/components/MUI/Box';
import { Grid } from '@mui/material';

const Container = ({ children, firstSection }: { children: React.ReactNode, firstSection?: React.ReactNode }) => {
    return (
        <Box
            sx={{
                paddingX: '10em',
                display: 'flex',
                '@media (max-width:600px)': {
                    paddingX: '0.7em'
                },
                '@media (max-width:1024px)': {
                    paddingX: '1em'
                },
            }}

        >
            <Grid container spacing={2} sx={{}}>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    {firstSection}
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={8}>
                    {children}
                </Grid>
            </Grid>
        </Box>
    );
};

export default Container;