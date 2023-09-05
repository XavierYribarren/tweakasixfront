import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {
//   texture_files: [],
  texture_assign: {
    Front : null,
    Body : null,
    Back : null,
    Side : null,
   Neck : null,
   Pickguard : null
  },
};

export const textureSlice = createSlice({
  name: "texture_data",
  initialState,

  reducers: {
    textureAdd: (state, action) => {


   const tempArr = {}
const selectedPart = action.payload.forEach((part ) => (tempArr[part.name] = part.file) )


        return {
            ...state, 
         texture_assign:{...state.texture_assign, ...tempArr}
        }


    },
    textureDelete: (state, action) => {


      const tempArr = {}
      const selectedPart = action.payload.forEach((part ) => (tempArr[part.name] = null) )

    return {
      ...state, 
   texture_assign:{...state.texture_assign, ...tempArr}
  }


    },
    textureAssign: (state, action) => {
   
    },


    textureClear: (state, action) => {
    
      const cleared = Object.fromEntries(Object.entries(state.texture_assign).map(([key, value]) => {
        if (value === action.payload) {
          return [key, null];
        }
        return [key, value];
      }));
      
  
      return {
        ...state,
        texture_assign: cleared
      };
    },
    textureNone : (state) => {

    const tempArr = {}
      return initialState
    }
  },
});
export const { textureAdd, textureDelete, textureAssign, textureClear, textureNone } =
  textureSlice.actions;

export default textureSlice.reducer;
