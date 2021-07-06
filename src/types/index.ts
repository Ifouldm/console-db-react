import PropType from 'prop-types';

export const Console = PropType.shape({
    name: PropType.string.isRequired,
    logoUrl: PropType.string,
    description: PropType.string,
    photoUrl: PropType.string,
    id: PropType.string.isRequired,
}).isRequired;

export interface Game {
    gameName: String;
    description: String;
    manufacturer: String;
    developer: String;
    year: Number;
    genre: Array<string>;
    score: Number;
    players: Number;
    gameId: String;
}
