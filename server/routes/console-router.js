const express = require('express');

const ConsoleCtrl = require('../controllers/console-controller');

const router = express.Router();

router.post('/console', ConsoleCtrl.createConsole);
router.put('/console/:id', ConsoleCtrl.updateConsole);
router.delete('/console/:id', ConsoleCtrl.deleteConsole);
router.get('/console/:id', ConsoleCtrl.getConsoleById);
router.get('/console', ConsoleCtrl.getConsoles);

module.exports = router;
