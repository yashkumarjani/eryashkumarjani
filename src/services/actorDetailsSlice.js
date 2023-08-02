import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//createPojectsData
export const createPojectsData = createAsyncThunk(
    "createPojectsData",
    async (data, { rejectWithValue }) => {
      console.log("data", data);
      const response = await fetch(
        "https://64c9e957b2980cec85c2879a.mockapi.io/actorDetails",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
  
      try {
        const result = await response.json();
        return result;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

// featchProjectsData.
export const featchProjectsData = createAsyncThunk("featchProjectsData", async (args, { rejectWithValue }) => {
    const response = await fetch("https://64c9e957b2980cec85c2879a.mockapi.io/actorDetails");

    try {
        const result = await response.json();
        console.log("#getActorDetails", result);
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
});

// Slice created.
export const actorDetail = createSlice({
    name: "actorDetail",
    initialState: {
        projects: [],
        loading: false,
        error: null,
    },
    extraReducers: {
        [featchProjectsData.pending]: (state) => {
            state.loading = true;
        },
        [featchProjectsData.fulfilled]: (state, action) => {
            state.loading = false;
            state.projects = action.payload;
        },
        [featchProjectsData.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
});

export default actorDetail.reducer;
