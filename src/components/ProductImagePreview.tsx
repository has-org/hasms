'use client'
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const ThumbnailPreview = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const ProductImagePreview = ({ image }: any) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <ThumbnailPreview>
                <Image
                    className="thumbnail-list-img"
                    src={`${process.env.NEXT_PUBLIC_API_IMG_HOST}${image.url}`}
                    width={400}
                    height={400}
                    alt={'blabla'}>
                </Image>
            </ThumbnailPreview>
        </Box>
    )
}