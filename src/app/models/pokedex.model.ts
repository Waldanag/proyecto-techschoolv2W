export interface Pokemon {
    name: string;
    abilities: PokemonAbilities[];
    image: string;
    id: number;
    weight: number;
    type: string;
    height: number;
}

export interface PokemonAbility {
    name: string;
    url: string;
}

export interface PokemonAbilities {
    ability: PokemonAbility;
    is_hidden: boolean;
    slot: number;
}
