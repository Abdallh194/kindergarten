import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const GetAllChild = createAsyncThunk(
  "child/GetAllChild",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let res = await fetch("/api/Childs");
      let data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const StoreSlice = createSlice({
  name: "child",
  initialState: {
    userName: "Abdallh",
    password: "1234",
    logError: false,
    oldMember: false,
    logSuccess: false,
    isLoading: false,
    LoadError: false,
    AllChild: [],
    UserInfo: [],
  },
  reducers: {
    LogInAction: (state, action) => {
      if (
        state.userName == action.payload.user &&
        state.password == action.payload.Pass
      ) {
        state.oldMember = true;
        state.logError = false;
        state.logSuccess = true;
      } else {
        state.logError = true;
        state.oldMember = false;
        state.logSuccess = false;
      }
    },
    HandleLogType: (state) => {
      state.logSuccess = false;
    },
    SignUpAtion: (state, action) => {
      while (state.UserInfo.length > 0) {
        state.UserInfo.pop();
      }
      state.UserInfo.push(action.payload);
    },
    RegisterAction: (state, action) => {
      if (
        state.userName == action.payload.user &&
        state.password.includes(action.payload.Pass) == false
      ) {
        state.userName.push(action.payload.user);
        state.password.push(action.payload.Pass);
        state.oldMember = false;
        state.logError = false;
      } else if (
        state.userName.includes(action.payload.user) ||
        state.password.includes(action.payload.Pass)
      ) {
        state.oldMember = true;
        state.logError = false;
      } else {
        state.logError = true;
        state.oldMember = false;
      }
    },
  },
  extraReducers: {
    [GetAllChild.pending]: (state) => {
      state.isLoading = true;
    },
    [GetAllChild.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.AllChild = action.payload;
    },
    [GetAllChild.rejected]: (state, action) => {
      state.isLoading = false;
      state.AllChild = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { LogInAction, HandleLogType, SignUpAtion } = StoreSlice.actions;

export default StoreSlice.reducer;
