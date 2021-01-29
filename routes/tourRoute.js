const express = require('express');
const tourController = require("../controller/tourController");
const tourRouter = express.Router();

tourRouter.route('/top-5-cheap')
    .get(tourController.aliasFilter, tourController.getTours);

tourRouter.route('/')
    .get(tourController.getTours)
    .post(tourController.addTour);

tourRouter.route('/:id')
    .patch(tourController.updateTour)
    .get(tourController.getTour)
    .delete(tourController.deleteTour);

module.exports = tourRouter;

