import { configureStore } from '@reduxjs/toolkit';
import photoReducer from '../../features/photo/photoSlice';

const store = configureStore({
    reducer: {
        photo: photoReducer,
    },
});

export default store;
