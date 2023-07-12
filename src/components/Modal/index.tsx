'use client'
import { motion } from 'framer-motion';
import Backdrop from '@/components/Backdrop';
import Box from '@/components/MUI/Box';
import { Button, Typography } from '@mui/material';

const dropIn = {
    hidden: {
        y: '-100vh',
        opacity: 0,
    },
    visible: {
        y: '0',
        opacity: 1,
        transition: {
            duration: 0.1,
            type: 'spring',
            damping: 70,
            stiffness: 300,
        }
    },
    exit: { y: '100vh', opacity: 0 },
}

const Modal = ({ handleClose, text, modalOpen }: { handleClose: () => void | {}, text: string, modalOpen: any }) => {
    return (
        <Backdrop onClick={handleClose}>
            <Box
                className="modal "
                sx={{
                    width: 'clamp(50%, 700px, 90%)',
                    height: 'min(50%, 300px)',
                    margin: 'auto',
                    padding: '0 2rem',
                    borderRadius: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: 'white',
                }}
                onClick={e => e.stopPropagation()}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <Typography>
                    {text}
                </Typography>
                <Button onClick={handleClose}>Close</Button>
            </Box>
        </Backdrop>
    );
};

export default Modal;