import Box from '@/components/MUI/Box';
import { motion } from 'framer-motion';

const Backdrop = ({ children, onClick }: { children: React.ReactNode, onClick: () => {} | void }) => {
    return (
        // <motion.div
        //     className="backdrop absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center"
        //     onClick={onClick}
        //     initial={{ opacity: 0 }}
        //     animate={{ opacity: 1 }}
        //     exit={{ opacity: 0 }}
        // >
        //     {children}
        // </motion.div>
        <Box
            onClick={onClick}
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: '#000000e1',
                zIndex: 50,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </Box>
    );
};

export default Backdrop;