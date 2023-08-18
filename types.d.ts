interface Character {
    name: string;
    dateOfBirth: string;
}

interface RootLayoutChildredInterface {
    children: React.ReactNode;
}

interface DangerBtnPropTypes {
    clickHandler: () => void,
    children: string | string[];
}

interface AuthState {
    user: string;
}

interface FilterPayload {
    search: string;
}

type AllCharactersType = {
    characters: HarryPotterCharacter[];
};
type AllFilterdCharactersType = {
    filteredCharacters: HarryPotterCharacter[];
};

interface ThemeInterface {
    theme: string;
}
interface PagenationInterface {
    page: any,
    limit: number,
}

interface PaginationStateInterface {
    pagination: PagenationInterface
}
interface PaginationPayloadInterface {
    page: number | string,
}

interface ItemsPerPagePayloadInterface {
    limit: number,
}
interface CharacterProps {
    params: { id: string }
}

type HarryPotterCharacter = {
    id: number;
    name: string;
    species: string;
    gender: string;
    house: string;
    dateOfBirth: string;
    yearOfBirth: number;
    ancestry: string;
    eyeColour: string;
    hairColour: string;
    wand: {
        wood: string;
        core: string;
        length: number;
    };
    patronus: string;
    hogwartsStudent: boolean;
    hogwartsStaff: boolean;
    actor: string;
    alive: boolean;
    image: string;
};
