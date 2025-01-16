const uuid = require('uuid');

const calculatePoints = (receipt) => {
    let points = 0;

    points += receipt.retailer.replace(/[^a-zA-Z0-9]/g, "").length;

    if (parseFloat(receipt.total) % 1 === 0) points += 50;

    if ((parseFloat(receipt.total) * 100) % 25 === 0) points += 25;

    points += Math.floor(receipt.items.length / 2) * 5;

    receipt.items.forEach((item) => {
        const descriptionLength = item.shortDescription.trim().length;
        if (descriptionLength % 3 === 0) {
            points += Math.ceil(parseFloat(item.price) * 0.2);
        }
    });

    const day = parseInt(receipt.purchaseDate.split("-")[2], 10);
    if (day % 2 !== 0) points += 6;

    const [hour, minute] = receipt.purchaseTime.split(":").map(Number);
    if (hour === 14 || (hour === 15 && minute < 60)) points += 10;

    return points;
};

module.exports = { calculatePoints, uuid };
