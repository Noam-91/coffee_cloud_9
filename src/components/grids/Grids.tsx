import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from "./Typography";


const ImageBackdrop = styled('div')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: '#000',
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
}));
const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('md')]: {
        width: '100% !important',
        height: 100,
    },
    '&:hover': {
        zIndex: 1,
    },
    '&:hover .imageBackdrop': {
        opacity: 0.15,
    },
    '&:hover .imageMarked': {
        opacity: 0,
    },
    '&:hover .imageTitle': {
        border: '2px solid currentColor',
    },
    '& .imageTitle': {
        position: 'relative',
        padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
    },
    '& .imageMarked': {
        height: 3,
        width: 18,
        background: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));

const images = [
    {
        url: 'https://cdn.dribbble.com/users/2375421/screenshots/6855430/ten11_-_coffee_bag_design_2_final_4x.jpg?compress=1&resize=400x300&vertical=top',
        title: 'Coffee Bean',
        width: '40%',
    },
    {
        url: 'https://cdn.shopify.com/s/files/1/0026/5122/6223/products/MARU_COFFEE_KINTO_TRAVELER_TOGO_500ML_BOTTLE_250x.jpg?v=1658257614',
        title: 'Bottle',
        width: '20%',
    },
    {
        url: 'https://cdn.shopify.com/s/files/1/2217/5179/products/medium_4e4ed817-b34e-46a9-89d3-19b6b53585b9_grande.jpg?v=1628603202',
        title: 'Coffee Dripper',
        width: '40%',
    },
    {
        url: 'https://www.cnet.com/a/img/resize/a64ea34706ab2b7b3e9683641f37e83b3e86f9da/hub/2017/12/22/8e64f0e3-1483-4dae-b657-afccec931ae3/bonavita-connoisseur-coffee-maker-4.jpg?auto=webp&fit=crop&height=900&width=1200',
        title: 'Coffee Maker',
        width: '38%',
    },
    {
        url: 'https://i.pinimg.com/736x/37/cb/ad/37cbad4ef5ae3ffdb199d42df14d6eea.jpg',
        title: 'K cups',
        width: '38%',
    },
    {
        url: 'https://cdn.shopify.com/s/files/1/0262/2200/2236/files/Bottle_Spoon-01_48c0eb19-0b5b-4552-a42b-fd6a1a0e5014_1216x.png?v=1622231621',
        title: 'Drink',
        width: '24%',
    },
    {
        url: 'https://i.pinimg.com/564x/df/39/e7/df39e77c4c4ccec0669e4f2cf2af97c2.jpg',
        title: 'Grinder',
        width: '40%',
    },
    {
        url: 'https://i.pinimg.com/236x/24/d1/e1/24d1e15c140c6513bb9125f805fbd496.jpg',
        title: 'Kettle',
        width: '20%',
    },
    {
        url: 'https://i.pinimg.com/564x/ac/3e/5d/ac3e5d9570025e4c3cd6305dc28ca739.jpg',
        title: 'Others',
        width: '40%',
    },
];

const Grids=()=>{
    return (
        <Container component="section" sx={{ mt: 8, mb: 4 }}>
            <Typography variant="h4" marked="center" align="center" component="h2" color={"#868282FF"}>
                For all tastes and all desires
            </Typography>
            <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
                {images.map((image) => (
                    <ImageIconButton
                        key={image.title}
                        style={{
                            width: image.width,
                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center 40%',
                                backgroundImage: `url(${image.url})`,
                            }}
                        />
                        <ImageBackdrop className="imageBackdrop" />
                        <Box
                            sx={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'common.white',
                            }}
                        >
                            <Typography
                                component="h3"
                                variant="h6"
                                color="inherit"
                                className="imageTitle"
                            >
                                {image.title}
                                <div className="imageMarked" />
                            </Typography>
                        </Box>
                    </ImageIconButton>
                ))}
            </Box>
        </Container>
    );
}
export default Grids;