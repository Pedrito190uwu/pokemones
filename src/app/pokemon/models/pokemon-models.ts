export interface PokemonBasic {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonBasic[];
}

export interface Pokemon {
  name: string;
  url: string;
  abilities: {
    ability: {
      name: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  base_experience: number;
  sprites: {
    back_default: string | null;
    front_default: string | null;
  };
}