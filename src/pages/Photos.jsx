import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from '../features/photo/photoSlice';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Products = () => {
    const dispatch = useDispatch();
    const { photos, isLoading, errors } = useSelector((state) => state.photo);
    console.log('DATA :::::: photos', photos);

    useEffect(() => {
        dispatch(fetchPhotos());
    }, []);

    return isLoading ? (
        <Box sx={{ width: '100%' }}>
            <LinearProgress />
        </Box>
    ) : (
        <Box sx={{ width: 500, height: 800, overflowY: 'scroll' }}>
            <ImageList variant='masonry' cols={3} gap={8}>
                {photos.map((item) => (
                    <ImageListItem key={item.id}>
                        <img
                            src={`${item.src.large}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.src.large}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.alt}
                            loading='lazy'
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
};

export default Products;
