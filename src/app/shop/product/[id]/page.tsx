import {
	getProduct,
	getProductVariantColors,
	getProductVariantImages,
	getProductVariantPrices,
	getProductVariantSizes,
} from '@/services/apiService';
import { IColor } from '@/types/IColor';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IProduct } from '@/types/IProduct';
import {
	Box,
	Stack,
	Typography,
	Container,
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Divider,
	Grid,
} from '@mui/material';

import { IImage } from '@/types/IImage';
import { ISize } from '@/types/ISize';
import ColorSelector from '@/components/common/ProductCard/ColorSelector';
import SizeSelector from '@/components/common/ProductCard/SizeSelector';
import { ProductProvider } from '@/context/ProductContext/ProductProvider';
import { SelectedImage } from '@/components/common/ProductCard/SelectedImage';
import ProductAddToCart from '@/components/common/ProductCard/ProductAddToCart';
import { IProductPrice } from '@/types/IProductPrice';

export default async function Product({ params: { id } }: any) {
	const product: IProduct = await getProduct({ id: id });

	if (!product) {
		return <div>Product not found</div>;
	}

	const { variants: [{ id: variant_id = 0 }] = [] } = product;

	const variantImages: IImage[] = await getProductVariantImages({ id: variant_id });
	const variantSizes: ISize[] = await getProductVariantSizes({ id: variant_id });
	const variantColors: IColor[] = await getProductVariantColors({ id: variant_id });
	const variantPrices: IProductPrice[] = await getProductVariantPrices({ id: variant_id });

	const defaultImage = variantImages.length > 0 ? variantImages[0] : null;

	return (
		<Container maxWidth='lg'>
			<ProductProvider>
				<Grid container sx={{ marginTop: '20px' }}>
					<Grid md={5} xs={12}>
						<SelectedImage defaultImage={defaultImage} />
					</Grid>
					<Grid md={7} xs={12} sx={{ paddingLeft: { md: 2 } }}>
						<Stack spacing={2} sx={{ marginTop: { xs: '10px', md: '0px' } }}>
							<Box>
								<Typography fontSize='16px' color='#ACACAC'>
									{product.manufacturer}
								</Typography>
								<Typography fontSize='20px' fontWeight='bold'>
									{product.name}
								</Typography>
							</Box>
							<Box>
								<Typography className='product-price-value' fontSize='28px' fontWeight='bold' color='#00D0FD'>
									{variantPrices[0].price} {variantPrices[0].currency}
								</Typography>
							</Box>
							<Stack spacing={3}>
								<ColorSelector images={variantImages} colors={variantColors} />
								<SizeSelector sizes={variantSizes} />
								<ProductAddToCart product={product}  prices={variantPrices}/>
							</Stack>
							<Stack
								sx={{
									backgroundColor: '#262626',
									borderRadius: '16px',
									justifyContent: 'center',
								}}
							>
								<Accordion>
									<AccordionSummary
										aria-controls='panel1-content'
										id='panel1-header'
										expandIcon={<ExpandMoreIcon />}
										sx={{ height: '61px' }}
									>
										<Typography fontWeight={600} fontSize='18px'>
											Specifikacije
										</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Stack spacing={0.5}>
											<Stack direction='row' justifyContent='space-between'>
												<Typography variant='body2'>Proizvođač</Typography>
												<Typography variant='body2'>{product.manufacturer}</Typography>
											</Stack>
											<Divider />
											<Stack direction='row' sx={{ display: 'flex', justifyContent: 'space-between' }}>
												<Typography variant='body2'>Serijski br.</Typography>
												<Typography variant='body2'>Serijski br.Serijski br.</Typography>
											</Stack>
											<Divider />
											<Stack direction='row' sx={{ display: 'flex', justifyContent: 'space-between' }}>
												<Typography variant='body2'>Boja</Typography>
												{variantColors.map((color: IColor, index: number) => {
													return (
														<Typography key={index}>
															{color.name}
														</Typography>
													);
												})}
											</Stack>
											<Divider />
											<Stack direction='row' sx={{ display: 'flex', justifyContent: 'space-between' }}>
												<Typography variant='body2'>Veličina</Typography>
												<Typography variant='body2'>VeličinaVeličina</Typography>
											</Stack>
											<Divider />
											<Stack direction='row' sx={{ display: 'flex', justifyContent: 'space-between' }}>
												<Typography variant='body2'>Dostupnost</Typography>
												<Typography variant='body2'>DostupnostDostupnost</Typography>
											</Stack>
											<Divider />
										</Stack>
									</AccordionDetails>
								</Accordion>
							</Stack>

							<Stack
								sx={{
									backgroundColor: '#262626',
									borderRadius: '16px',
									justifyContent: 'center',
								}}
							>
								<Accordion>
									<AccordionSummary
										aria-controls='panel1-content'
										id='panel1-header'
										expandIcon={<ExpandMoreIcon />}
										sx={{ height: '61px' }}
									>
										<Typography fontWeight={600} fontSize='18px'>
											Opis
										</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Typography variant='h4' textAlign={'center'}>
											sadasd
										</Typography>
										<Typography variant='body1' textAlign={'justify'}>
											asdasdas
										</Typography>
									</AccordionDetails>
								</Accordion>
							</Stack>
						</Stack>
					</Grid>
				</Grid>
			</ProductProvider>
		</Container>
	);
}
