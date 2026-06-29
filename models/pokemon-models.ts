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
  id: number;
  name: string;
  base_experience: number;

  abilities: {
    ability: {
      name: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];

  sprites: {
    back_default: string | null;
    front_default: string | null;
  };
}