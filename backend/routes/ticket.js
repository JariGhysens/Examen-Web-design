// routes/ticket.js
const express = require('express');
const router = express.Router();

const TicketController = require('../controllers/TicketController');

/* GET tickets listing. */

router.get('/:id', TicketController.getById);
router.post('/', TicketController.createTicket);

module.exports = router;
