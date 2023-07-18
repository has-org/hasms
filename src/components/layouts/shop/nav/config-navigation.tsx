// routes
// config
// components
import Iconify from '@/components/iconify';

// ----------------------------------------------------------------------

const navConfig = [
  {
    title: 'Home',
    icon: <Iconify icon="eva:home-fill" />,
    path: '/',
  },
  {
    title: 'Components',
    icon: <Iconify icon="ic:round-grain" />,
    path: '',
  },
  {
    title: 'Pages',
    path: '/pages',
    icon: <Iconify icon="eva:file-fill" />,
    children: [
      // {
      //   subheader: 'Other',
      //   items: [
      //     { title: 'About us', path: PATH_PAGE.about },
      //     { title: 'Contact us', path: PATH_PAGE.contact },
      //     { title: 'FAQs', path: PATH_PAGE.faqs },
      //     { title: 'Pricing', path: PATH_PAGE.pricing },
      //     { title: 'Payment', path: PATH_PAGE.payment },
      //     { title: 'Maintenance', path: PATH_PAGE.maintenance },
      //     { title: 'Coming Soon', path: PATH_PAGE.comingSoon },
      //   ],
      // },
     
    ],
  },
];

export default navConfig;
