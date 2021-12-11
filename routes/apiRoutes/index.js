const router = require('express').Router();

const travellersRoutes = require("./travellerRoutes");
const locationRoutes = require("./locationRoutes");
const tripRoutes = require("./tripRoutes")

router.use("/travellers", travellersRoutes);
router.use("/location", locationRoutes);
router.use("/trips", tripRoutes);

module.exports = router;

