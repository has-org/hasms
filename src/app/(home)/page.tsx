import { Cooperator as CooperatorType } from '@/types/Cooperator';
import { getCatalogues, getCooperators, getPosts } from '@/services/apiService';
import HomeTrending from '@/components/sections/home/home-trending';
import HomeBlog from '@/components/sections/home/home-blog';
import UAParser from 'ua-parser-js';
import HomeCooperators from '@/components/sections/home/home-cooperators/HomeCooperators';
import { Button, Container, Stack, Typography, Box, Card, Grid2 as Grid } from '@mui/material';
import CardContent from '@mui/material/CardContent/CardContent';
import CardMedia from '@mui/material/CardMedia/CardMedia';
import Image from 'next/image';
import Link from 'next/link';
import { ICatalogue } from '@/types/Catalogue';


export async function generateMetadata({ params, searchParams }: { params: any; searchParams: any }) {
	return {
		title: 'Pocetna',
		description: 'My description',
	};
}

const discount = {
	name: 'kacige 20%',
	title: '20% Popusta Na Nove Modele Kaciga',
	image: `/discount1.png`,
	description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
};

const items = [
	{
		title: 'Motori',
		image: `/motori-card.png`,
		url: '',
		text: '-Pregledajte našu ponudu novih i korištenih motocikala i skutera Japanskog brenda Yamaha.  Veliki izbor modela za razne namjene, od skuter modela za izbjegavanje gradskih gužvi pa sve do modela za zabavu.',
		id: '1',
	},
	{
		title: 'Kacige',
		image: `/kacige-card.png`,
		url: '',
		text: '-Široka ponuda kaciga poznatih brendova IXS,HJC i LS2 kao i rezevnih dijelova dostupni su na našem WEBSHOPU. ',
		id: '2',
	},
	{
		title: 'ATV',
		image: `/atv-card.png`,
		url: '',
		text: '-Pored Yamahinih motocikala i skutera u ponudi imamo i ATV vozila za sportske i radne namjene. Više informacija i ponudu ATV vozila pogledajte u nastavku.',
		id: '3',
	},
	{
		title: 'Marina',
		image: `/marina-card.png`,
		url: '',
		text: '-Yamaha je daleko poznata i u svijetu vodenog programa. Yamahini vanbrodski motori i gumeni čamci kao i prateća oprema dostupni su u Moto Shop #7. P',
		id: '4',
	},
];

export default async function HomePage() {
	const cooperators: CooperatorType[] = await getCooperators();
	const posts = await getPosts();

	return (
		<>
			<section>
				<Box
					sx={{
						width: '100%',
						height: '608px',
						position: 'relative',
						zIndex: '0',
					}}
				>
					<Image
						priority
						src={`/welcomepozadina.png`}
						fill
						alt='Motoshop 7'
						quality={85}
						style={{ zIndex: -1, objectFit: 'cover' }}
						sizes='100vw'
					/>
					<Image src={`/welcome_gradient_bg.png`} fill alt='Motoshop 7' style={{ zIndex: -1 }} />
					<Container maxWidth='lg'>
						<Stack spacing={1} sx={{ height: '608px', justifyContent: 'center' }}>
							<Box
								sx={{
									width: {
										xs: '367px',
										md: '610px',
									},
								}}
							>
								<Typography variant='h4' fontWeight={400} sx={{ zIndex: '2', lineHeight: 1.1 }}>
									Provjereno najbolja
								</Typography>
								<Typography
									fontWeight={700}
									lineHeight={1.1}
									sx={{
										fontSize: {
											xs: '56px',
											md: '80px',
										},
									}}
								>
									{'MOTO OPREMA &'}
									<Typography
										component='span'
										color='primary.main'
										ml={1}
										fontWeight={700}
										lineHeight={1.1}
										sx={{
											fontSize: {
												xs: '56px',
												md: '80px',
											},
										}}
									>
										{'DIJELOVI'}
									</Typography>
								</Typography>
							</Box>

							<Box
								pt={1}
								sx={{
									display: 'flex',
									flexDirection: {
										xs: 'column',
										md: 'row',
									},
									gap: 3,
								}}
							>
								<Link href={'/catalogues'} style={{ textDecoration: 'none' }}>
									<Button
										variant='outlined'
										color='secondary'
										size='large'
										sx={{
											width: {
												xs: '100%',
												md: '143px',
											},
										}}
									>
										<Typography variant='h6'>Ponuda</Typography>
									</Button>
								</Link>
								<Link href={'/shop'} style={{ textDecoration: 'none' }}>
									<Button
										variant='outlinedTransparent'
										color='secondary'
										size='large'
										sx={{
											width: {
												xs: '100%',
												md: '143px',
											},
										}}
									>
										<Typography variant='h6'>Shop</Typography>
									</Button>
								</Link>
							</Box>
						</Stack>
					</Container>
				</Box>
			</section>
			<section>
				<Grid container direction='row'>
					{items.map((item) => (
						<Grid md={3} xs={12} key={`${item.title}-${item.id}`}>
							<Card
								sx={{
									borderRadius: 0,
									position: 'relative',
									boxShadow: 0,
									'&:hover': {
										boxShadow: '0px 33px 15px rgba(0, 0, 0, 0.2)',
										backgroundColor: 'rgba(0, 0, 0, 0.1)',
									},
									'&:hover .imageHover': {
										backgroundColor: 'rgba(0, 0, 0, 0.1)',
										transition: 'background-color 0.3s ease',
									},
									'&:hover .showContent': {
										opacity: 1,
									},
									'&:hover .titleHover': {
										top: '-236px',
										left: '45px',
									},
								}}
							>
								<Image
									className='imageHover'
									src={item.image}
									fill
									alt='Motoshop 7'
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									style={{ objectFit: 'cover' }}
								/>
								<Image
									className='imageHover'
									src={`/bottom-card.png`}
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									fill
									alt='Motoshop 7'
									style={{ objectFit: 'cover' }}
								/>
								<CardContent
									sx={{
										display: 'flex',
										alignItems: 'flex-end',
										justifyContent: 'flex-start',
										height: '520px',
										width: '341px',
									}}
								>
									<Stack width='100%'>
										<Stack sx={{ alignItems: 'flex-start' }}>
											<Typography
												className='titleHover'
												textAlign={'center'}
												zIndex={2}
												fontSize={'27px'}
												marginLeft='40px'
												sx={{
													position: 'relative',
													transition: 'top 0.3s ease',
													top: 0,
												}}
											>
												{item.title}
											</Typography>
										</Stack>
										<Stack
											alignItems='center'
											className='showContent'
											sx={{
												position: 'absolute',
												bottom: 0,
												left: 0,
												right: 0,
												padding: '0px',
												opacity: 0,
												transition: 'opacity 0.8s ease',
											}}
										>
											<Typography marginBottom='35px' height='113px' width='245px' fontSize='14px'>
												{item.text}
											</Typography>

											<Button
												variant='outlinedTransparent'
												color='secondary'
												size='large'
												sx={{
													width: '254px',
													height: '47px',
													marginBottom: '43px',
												}}
											>
												PREGLEDAJ
											</Button>
										</Stack>
									</Stack>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</section>

			<section>
				<Box
					sx={{
						position: 'relative',
						pt: 2,
						marginTop: '80px',
					}}
				>
					<Stack direction='row' justifyContent='center'>
						<Typography textAlign={'center'} height='39px' width='370px' fontSize='40px'>
							Najnovije sa bloga
						</Typography>
					</Stack>
					<Container maxWidth='lg' sx={{ pt: 2 }}>
						{posts && <HomeBlog posts={posts} />}
					</Container>
				</Box>
			</section>

			<section>
				<Box
					sx={{
						position: 'relative',
						pt: 2,
					}}
				>
					<Container maxWidth='lg' sx={{ pt: 2 }}>
						<Grid container>
							<Grid xs={12} md={6} display='flex'>
								<Image
									src={discount.image}
									width={0}
									height={0}
									sizes='100vw'
									style={{
										width: '100%',
										height: '100%',
										objectFit: 'contain',
									}}
									alt='Motoshop 7'
								/>
							</Grid>
							<Grid
								xs={12}
								md={6}
								display='flex'
								alignItems='center'
								sx={{ backgroundColor: 'background.paper', px: 3 }}
							>
								<Stack>
									<Typography variant='h2'>{discount.title}</Typography>

									<Typography variant='body1' fontWeight={300}>
										{discount.description}
									</Typography>

									<Button variant='contained' color='info'>
										PONUDA
									</Button>
								</Stack>
							</Grid>
						</Grid>
					</Container>
				</Box>
			</section>

			<section>
				<Stack display='flex' justifyContent={'center'} mt={2}>
					<Typography textAlign={'center'} variant='h2'>
						Cjenovnici
					</Typography>
					<Button>
						<Link href={'/priceCatalogue'} style={{ textDecoration: 'none', width: '100%' }}>
							<Typography variant='h6' color={'white'}>
								Pogledajte kompletnu ponudu cijena
							</Typography>
						</Link>
					</Button>
				</Stack>
			</section>

			<section>
				<Box
					sx={{
						position: 'relative',
						overflow: 'hidden',
					}}
				>
					<Container maxWidth='lg'>{cooperators && <HomeCooperators cooperators={cooperators} />} </Container>
				</Box>
			</section>
		</>
	);
}
