import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPhotos = createAsyncThunk('photo/fetchPhotos', async () => {
    const { data } = await axios.get(
        'https://api.pexels.com/v1/search?query=natures'
    );
    return data.photos;
});

const initialState = {
    photos: [],
    isLoading: false,
    errors: null,
};

const photoSlice = createSlice({
    name: 'photo',
    initialState,
    reducers: {
        setPhotos: (state, action) => {
            state.photos = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPhotos.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchPhotos.fulfilled, (state, action) => {
            state.photos = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchPhotos.rejected, (state, action) => {
            state.errors = action.error;
            state.isLoading = false;
        });
    },
});

export default photoSlice.reducer;
export const { setPhotos } = photoSlice.actions;
