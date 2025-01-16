const express = require('express');
const { calculatePoints, uuid } = require('./utils');

const router = express.Router();
const receipts = new Map();

router.post('/process', (req, res) => {
    const receipt = req.body;

    if (!receipt.retailer || !receipt.purchaseDate || !receipt.purchaseTime || !receipt.items || !receipt.total) {
        return res.status(400).json({ error: "invalid receipt" });
    }

    const id = uuid.v4();
    const points = calculatePoints(receipt);
    receipts.set(id, points);

    res.status(200).json({ id });
});

router.get('/:id/points', (req, res) => {
    const id = req.params.id;

    if (!receipts.has(id)) {
        return res.status(404).json({ error: "Receipt not found" });
    }

    res.status(200).json({ points: receipts.get(id) });
});

module.exports = router;
