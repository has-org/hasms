'use client'
import { motion } from "framer-motion";

import MuiBox, { BoxProps } from "@mui/material/Box";
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const BoxComponent = forwardRef((props: BoxProps, ref) => (
  <MuiBox {...props} ref={ref} />
));

const Box = motion(BoxComponent);

export default Box;