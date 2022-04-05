import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  cards: [
    {
        note_title: 'Redux',
        description: 'These are Redux notes.',
        price: 2.99,
        discount_percent: 0
    },
    {
        note_title: 'Express',
        description: 'These are Express notes.',
        price: 2.99,
        discount_percent: 25
    },
    ],
}

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  // extraReducers: {
  //   [getCards.fulfilled]: (state, action) => {
  //     state.cards = action.payload;
  //   }
    
  // },
})

// export const getCards = createAsyncThunk(
//   '/cards/getCards',
  
//   async () => {
// 		try {
// 			const response = await fetch('http://localhost:3000/store/main');
//       const formattedResponse = await response.json();
// 			return formattedResponse.data.notesForSale;
// 		} catch (e) {
// 			console.log(e);
// 		}
// 	}
// )

// Action creators are generated for each case reducer function
// export const { syncCards } = cardSlice.actions

export default cardSlice.reducer

// const response = await fetch(url, {
//   method,
//   body: bodyString,
//   headers: {
//     'Content-Type': 'application/json',
//     ...headers,
//   },