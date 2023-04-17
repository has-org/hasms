'use client'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Catalogue } from '../Catalogue';
import { Catalogue as CatalogueType } from '@/types/Catalogue';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    border: '0.5px solid #e2e8f0',
    borderRadius: '8px',
    color: theme.palette.text.secondary,
}));

function FormRow({ secondaryCatalogues }: { secondaryCatalogues: CatalogueType[] }) {
    return (
        <>
            {secondaryCatalogues.map((catalogue: CatalogueType, index: number) => {
                return (
                    <Grid item xs={12} sm={12} md={6} lg={6} key={index} >
                        <Item elevation={0}>
                            <Catalogue catalogue={catalogue} />
                        </Item>
                    </Grid>
                )
            })}
        </>
    );
}

const GridCatalogueSection = ({ catalogues, title, additionalRow }: { catalogues: CatalogueType[], title: string, additionalRow?: boolean }) => {
    if (!catalogues) return <>Missing catalogues</>
    const primaryCatalogue = catalogues.find((catalogue: CatalogueType) => catalogue.primary);
    const secondaryCatalogues = catalogues.filter((catalogue: CatalogueType) => !catalogue.primary).slice(catalogues.length - 5)
    const secondaryCatalogues1 = catalogues.filter((catalogue: CatalogueType) => !catalogue.primary).slice(catalogues.length - 4)
    const testCatalog = secondaryCatalogues.slice(0, 2)
    const testCatalog1 = secondaryCatalogues.slice(2, 4)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h4" component="h2" className="text-left text-3xl font-bold text-gray-800 mt-10 mb-5">
                {title}
            </Typography>
            <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                    <Item elevation={0}>
                        <Catalogue catalogue={primaryCatalogue} />
                    </Item>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Grid container style={{ gap: '2em', }}>
                        <Grid container spacing={2}>
                            <FormRow secondaryCatalogues={testCatalog} />
                        </Grid>
                        <Grid container spacing={2}>
                            <FormRow secondaryCatalogues={testCatalog1} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
export default GridCatalogueSection;