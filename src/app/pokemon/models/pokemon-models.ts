export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonBasic[];
}

export interface pokemonBasic {
    name: string;
    url:string;
}

export interface pokemonDetail {
    id: number;
    name: string;
    height: number;
    weight: number;
    base_experience: number;
    sprites:{
        other:{
            'official-artwork': {
            front_default: string;
      }  
        }
    };
    types: {
        slot: number;
        type: {
            name: string;
            url: string;
        }
    }[];
}

export interface pokemon {
    id: number;
    name:string;
    image: string;
    height: number;
    weight: number;
    experience: number;
    types: string[];
    stats: {
        name: string;
        value: number;
    }
}