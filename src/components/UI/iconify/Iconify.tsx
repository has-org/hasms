'use client'
import { forwardRef } from 'react';
// icons
import { Icon, IconifyIcon } from '@iconify/react';
// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

// eslint-disable-next-line react/display-name
const Iconify = forwardRef(({ icon, width = 20, height, sx, ...other }: { icon: string | IconifyIcon, width?: string | number, height?: string | number, sx?: any, color?: string }, ref) => (
    <Box ref={ref} component={Icon} icon={icon} sx={{ width, height: height ? height : width, ...sx }} {...other} />
));


export default Iconify;