const Game = require('../models/game-model');

const createGame = (req, res) => {
    const { body } = req;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a game',
        });
    }

    const game = new Game(body);

    if (!game) {
        return res.status(400).json({ success: false, error: 'err' });
    }

    game
        .save()
        .then(() => res.status(201).json({
            success: true,
            id: game._id,
            message: 'Game created!',
        }))
        .catch((error) => res.status(400).json({
            error,
            message: 'Game not created!',
        }));
    return null;
};

const updateGame = async (req, res) => {
    const { body } = req;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        });
    }

    Game.findOne({ _id: req.params.id }, (err, game) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Game not found!',
            });
        }
        // eslint-disable-next-line no-param-reassign
        game.name = body.name;
        // eslint-disable-next-line no-param-reassign
        game.description = body.description;
        game
            .save()
            .then(() => res.status(200).json({
                success: true,
                id: game._id,
                message: 'Game updated!',
            }))
            .catch((error) => res.status(404).json({
                error,
                message: 'Game not updated!',
            }));
        return null;
    });
    return null;
};

const deleteGame = async (req, res) => {
    await Game.findOneAndDelete({ _id: req.params.id }, (err, game) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }

        if (!game) {
            return res
                .status(404)
                .json({ success: false, error: 'Game not found' });
        }

        return res.status(200).json({ success: true, data: game });
    }).catch((err) => console.error(err));
};

const getGameById = async (req, res) => {
    await Game.findOne({ _id: req.params.id }, (err, game) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }

        if (!game) {
            return res
                .status(404)
                .json({ success: false, error: 'Game not found' });
        }
        return res.status(200).json({ success: true, data: game });
    }).catch((err) => console.error(err));
};

const getGames = async (req, res) => {
    await Game.find({}, (err, consoles) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }
        // if (!consoles.length) {
        //     return res
        //         .status(404)
        //         .json({ success: false, error: 'Game not found' });
        // }
        return res.status(200).json({ success: true, data: consoles });
    }).catch((err) => console.error(err));
};

module.exports = {
    createGame,
    updateGame,
    deleteGame,
    getGames,
    getGameById,
};
