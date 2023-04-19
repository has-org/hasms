'use client'
import Stack from '@mui/material/Stack';
import List from '@mui/material/List/List';
import { Box, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';

export default function FilterSection() {

    return (
        <Box>
            <Typography variant="h3" component="h4" sx={{ mb: 2, borderBottom: "2px solid red", width: '75%' }}>
                BRENDOVI
            </Typography>
            <Typography variant="h3" component="h4" sx={{ mb: 2, borderBottom: "2px solid red", width: '75%' }}>
                VELIČINE
            </Typography>
            <Typography variant="h3" component="h4" sx={{ mb: 2, borderBottom: "2px solid red", width: '75%' }}>
                TAGOVI
            </Typography>
            <Typography variant="h3" component="h4" sx={{ mb: 2, borderBottom: "2px solid red", width: '75%' }}>
                BOJE
            </Typography>

        </Box>
    );
}