import Box from '@/components/MUI/Box';

const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box
            sx={{
                paddingX: '10em'
            }}
        >
            {children}
        </Box>
    );
};

export default Container;