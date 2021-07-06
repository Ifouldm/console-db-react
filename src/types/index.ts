export interface ConsoleModel {
    name: string;
    logoUrl?: string;
    description?: string;
    photoUrl?: string;
    id?: string;
}

export interface GameModel {
    gameName: string;
    description: string;
    console: string;
    manufacturer: string;
    developer: string;
    year: Number;
    genre: Array<string>;
    score: Number;
    players: Number;
    gameId: string;
}
