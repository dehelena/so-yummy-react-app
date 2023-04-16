import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { UserAPI } from "../../services/api/API";

// axios.defaults.baseURL = 'https://so-yumi.p.goit.global/api';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchShoppingList = createAsyncThunk(
  'shopping-list/all',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.accessToken;
    if (persistedToken === null) return thunkAPI.rejectWithValue();

    setAuthHeader(persistedToken);
    try {
      const { data } = await axios.get('/users/shopping-list');

      console.log(data);
      console.log(data.shoppingList);

      return data.shoppingList;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addProductToShoppingList = createAsyncThunk(
  'shopping-list/add',

  async (product, thunkAPI) => {
    try {
      console.log(product);
      const response = await axios.post('/users/shopping-list', product);

      console.log(response);
      console.log(response.data);

      return response.data;

    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeProductFromShoppingList = createAsyncThunk(
  'shopping-list/remove',
  async (product, thunkAPI) => {
    try {
      const response = await axios.patch('/users/shopping-list', product);

      console.log(response);
      console.log(response.data);

      return response.data;

    
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);