import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    characters: []
};


const charactersSlice = createSlice({
    name: "characters",
    initialState,
    reducers: {
        FILTER_CHARACTERS: (state, action: PayloadAction<FilterPayload>) => {
            const search = action.payload.search;
            state.characters = state.characters.filter(
                (character: HarryPotterCharacter) =>
                    character.name.toLowerCase().includes(search.toLowerCase()) ||
                    character.actor.toLowerCase().includes(search.toLowerCase())

            );
        },
        SET_CHARACTERES: (state,action)=>{
            state.characters = actions.payload
        }

    }
});


export const {FILTER_CHARACTERS} = charactersSlice.actions;
export const selectCharacters = (state:{characters:HarryPotterCharacter})=>state.characters
export default charactersSlice.reducer;