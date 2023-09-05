import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {
  colorSet :{
    id:0, 
        body: "#ffffff",
        tablefront: "#ffffff",
        tableback: "#ffffff",
        side: "#ffffff",
        binding: "#ffffff",
        neck: "#ffffff",
        fretboard: "#ffffff",
        fretbinding: "#ffffff",
        frets: "#ffffff",
        nut: "#ffffff",
        inlay: "#ffffff",
        pickup_cover: "#d0cbc4",
        pickup_ring: "#ffffff",
        single_plastic: "#ffffff",
        single_metal: "#d0cbc4",
        pickguard: "#ffffff",
        backplate: "#ffffff",
        knobs: "#ffffff",
        metal_pieces: "#d0cbc4",
        gloss : 50,
        scratch : 0,
        wood : 0,
        texture_path : "/HD_transparent_picture.png",
        model: '1'
      },
  
      dropped : 0,
}

export const guitarSlice = createSlice({
  name: "guitar_set",
  initialState,

  reducers: {
    addColor: (state, action) => {
      state.colorSet.body = action.payload.body
      state.colorSet.tablefront = action.payload.tablefront;
      state.colorSet.tableback = action.payload.tableback;
      state.colorSet.side = action.payload.side;
      state.colorSet.binding = action.payload.binding;
      state.colorSet.neck = action.payload.neck;
      state.colorSet.fretboard = action.payload.fretboard;
      state.colorSet.fretbinding = action.payload.fretbinding;
      state.colorSet.frets = action.payload.frets;
      state.colorSet.nut = action.payload.nut;
      state.colorSet.inlay = action.payload.inlay;
      state.colorSet.pickup_cover = action.payload.pickup_cover;
      state.colorSet.pickup_ring = action.payload.pickup_ring;
      state.colorSet.single_plastic = action.payload.single_plastic
      state.colorSet.single_metal = action.payload.single_metal
      state.colorSet.pickguard = action.payload.pickguard
      state.colorSet.backplate = action.payload.backplate
      state.colorSet.knobs = action.payload.knobs;
      state.colorSet.metal_pieces = action.payload.metal_pieces;
      state.colorSet.texture_path = action.payload.texture_path
      state.colorSet.gloss = action.payload.gloss
      state.colorSet.scratch = action.payload.scratch
      state.colorSet.wood = action.payload.wood
      state.colorSet.model = action.payload.model
      state.colorSet.id = action.payload.id
    },
    triggerDrop: (state, action) => {

        state.dropped += 1
      
      },
    resetDrop : (state, action) => {

      state.dropped = action.payload
    }

  },
  
});


export const { addColor,  setColor, triggerDrop, resetDrop} = guitarSlice.actions;
export default guitarSlice.reducer;
