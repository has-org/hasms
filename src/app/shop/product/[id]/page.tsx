import {
	getProduct,
	getProductVariantColors,
	getProductVariantImages,
	getProductVariantSizes,
} from '@/services/apiService';
import { IColor } from '@/types/IColor';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IProduct } from '@/types/IProduct';
import {
	Box,
	Button,
	Stack,
	Typography,
	Container,
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Divider,
	Grid,
} from '@mui/material';
import Image from 'next/image';
import Counter from './Counter';
import SizeSelector from '../SizeSelector';
import { IImage } from '@/types/IImage';
import { ISize } from '@/types/ISize';

export default async function Product({ params: { id } }: any) {
	const product: IProduct = await getProduct({ id: id });
	const productImages: IImage[] = await getProductVariantImages({ id: product.variants[0].id });
	const productSizes: ISize[] = await getProductVariantSizes({ id: product.variants[0].id });
	const productColors: IColor[] = await getProductVariantColors({ id: product.variants[0].id });
	const defaultImage = productImages[0] ? `${productImages[0].name}.${productImages[0].extension}` : '/no-image.jpg';

	if (!product) {
		return <div>Product not found</div>;
	}

	return (
		<Container maxWidth='lg'>
			<Grid container sx={{ marginTop: '20px' }}>
				<Grid md={5.5} xs={12}>
					<Stack>
						<Image src={defaultImage} alt='product image' width={470} height={352} style={{ borderRadius: '16px' }} />
					</Stack>
				</Grid>
				<Grid md={6.5} xs={12}>
					<Stack spacing={2} sx={{ marginTop: { xs: '10px', md: '0px' } }}>
						<Box>
							<Typography fontSize='16px' color='#ACACAC'>
								{product.manufacturer}
							</Typography>
							<Typography fontSize='20px' fontWeight='bold' className='product-name'>
								{product.name}
							</Typography>
						</Box>
						<Box>
							<Typography className='product-price-value' fontSize='28px' fontWeight='bold' color='#00D0FD'>
								100 KM
							</Typography>
						</Box>
						<Stack spacing={3}>
							<Stack direction='row' spacing={1} alignItems='center'>
								<Typography className='product-colors-title' color='#ACACAC' fontSize='14px'>
									Izaberi boju:
								</Typography>
								{productColors.map((color: IColor, index: number) => {
									return (
										<Typography component='span' key={index} style={{ color: 'white', fontWeight: '500' }}>
											{color.name}
										</Typography>
									);
								})}
							</Stack>

							<Stack direction='row'>
								{productImages?.map((miniPic) => {
									const defaultImage = miniPic ? `${miniPic.name}.${miniPic.extension}` : '/no-image.jpg';
									return (
										<Image
											key={miniPic.name}
											src={defaultImage}
											alt='product image'
											width={54}
											height={50}
											style={{ borderRadius: '16px' }}
										/>
									);
								})}
							</Stack>

							<SizeSelector sizes={productSizes} />

							<Counter />
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
											<Typography variant='body2'>Model</Typography>
											<Typography variant='body2'>{product.model}</Typography>
										</Stack>
										<Divider />

										<Stack direction='row' sx={{ display: 'flex', justifyContent: 'space-between' }}>
											<Typography variant='body2'>Serijski br.</Typography>
											<Typography variant='body2'>Serijski br.Serijski br.</Typography>
										</Stack>
										<Divider />
										<Stack direction='row' sx={{ display: 'flex', justifyContent: 'space-between' }}>
											<Typography variant='body2'>Boja</Typography>
											{productColors.map((color: IColor, index: number) => {
												return (
													<Typography key={index} className='variant-color'>
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
		</Container>
	);
}
