"use client"
import { AllFilterdCharactersType, FilterPayload, HarryPotterCharacter } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    characters: [],
    filteredCharacters:[],
};


const charactersSlice = createSlice({
    name: "characters",
    initialState,
    reducers: {
        FILTER_CHARACTERS: (state, action: PayloadAction<FilterPayload>) => {
            const search = action.payload.search;
            state.filteredCharacters = state.characters.filter(
                (character: HarryPotterCharacter) =>
                    character.name.toLowerCase().includes(search.toLowerCase()) ||
                    character.actor.toLowerCase().includes(search.toLowerCase()) ||
                    character.house.toLowerCase().includes(search.toLowerCase())

            );
        },
        SET_CHARACTERS: (state, action) => {
            state.characters = action.payload;
            state.filteredCharacters = action.payload;
        },
        RESET_FILTERED:(state)=>{
            state.filteredCharacters=state.characters;
        }

    }
});


export const { SET_CHARACTERS,  FILTER_CHARACTERS,   RESET_FILTERED } = charactersSlice.actions;
export const selectFilterdCharacters = (state: { characters: AllFilterdCharactersType }) => state.characters.filteredCharacters
export default charactersSlice.reducer;