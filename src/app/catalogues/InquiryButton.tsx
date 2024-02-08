"use client";
import { InquiryModal } from "@/components/modals/InquiryModal";
import { Button } from "@mui/material";
import { useState } from "react";
const InquiryButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
    <Button variant="contained" size="large" onClick={() => setOpen(true)}>
      Zatraži ponudu
    </Button>

    <InquiryModal open={open} handleClose={() => setOpen(false)} />
    </>
  );
};

export default InquiryButton;