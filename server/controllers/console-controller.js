const Console = require('../models/console-model');

const createConsole = (req, res) => {
    const { body } = req;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a console',
        });
    }

    const console = new Console(body);

    if (!console) {
        return res.status(400).json({ success: false, error: 'err' });
    }

    console
        .save()
        .then(() => res.status(201).json({
            success: true,
            id: console._id,
            message: 'Console created!',
        }))
        .catch((error) => res.status(400).json({
            error,
            message: 'Console not created!',
        }));
    return null;
};

const updateConsole = async (req, res) => {
    const { body } = req;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        });
    }

    Console.findOne({ _id: req.params.id }, (err, console) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Console not found!',
            });
        }
        console.name = body.name;
        console.description = body.description;
        console
            .save()
            .then(() => res.status(200).json({
                success: true,
                id: console._id,
                message: 'Console updated!',
            }))
            .catch((error) => res.status(404).json({
                error,
                message: 'Console not updated!',
            }));
        return null;
    });
    return null;
};

const deleteConsole = async (req, res) => {
    await Console.findOneAndDelete({ _id: req.params.id }, (err, console) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }

        if (!console) {
            return res
                .status(404)
                .json({ success: false, error: 'Console not found' });
        }

        return res.status(200).json({ success: true, data: console });
    }).catch((err) => console.log(err));
};

const getConsoleById = async (req, res) => {
    await Console.findOne({ _id: req.params.id }, (err, console) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }

        if (!console) {
            return res
                .status(404)
                .json({ success: false, error: 'Console not found' });
        }
        return res.status(200).json({ success: true, data: console });
    }).catch((err) => console.log(err));
};

const getConsoles = async (req, res) => {
    await Console.find({}, (err, consoles) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }
        if (!consoles.length) {
            return res
                .status(404)
                .json({ success: false, error: 'Console not found' });
        }
        return res.status(200).json({ success: true, data: consoles });
    }).catch((err) => console.log(err));
};

module.exports = {
    createConsole,
    updateConsole,
    deleteConsole,
    getConsoles,
    getConsoleById,
};
