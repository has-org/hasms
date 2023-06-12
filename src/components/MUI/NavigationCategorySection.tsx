'use client'

import Stack from '@mui/material/Stack';
import { useEffect, useRef, useState } from 'react';
import List from '@mui/material/List/List';
import { ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import FilterSection from './FilterSection';

export default function NavigationCategorySection() {



    return (
        <>
            <Stack direction="column" spacing={2} sx={{
                '@media (max-width:600px)': {
                    display: 'none'
                },
            }}>
                <List>
                    <ListItemButton>
                        <ListItemText primary={'asd'} />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText primary={'asd'} />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText primary={'asd'} />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText primary={'asd'} />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText primary={'asd'} />
                    </ListItemButton>
                </List>

                <FilterSection />
            </Stack>
        </>
    );
}