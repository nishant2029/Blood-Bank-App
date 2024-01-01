const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getDonarsListController,
  getHospitalsListController,
  getOrganisationsListController,
  deleteDonarController,
} = require("../controllers/AdminController");
const adminMiddleware = require("../middlewares/adminMiddleware");

//router object
const router = express.Router();

//Routes

// get|| donar-list
router.get(
  "/donar-list",
  authMiddleware,
  adminMiddleware,
  getDonarsListController
);
// get|| hospitals-list
router.get(
  "/hospital-list",
  authMiddleware,
  adminMiddleware,
  getHospitalsListController
);
// get|| hospitals-list
router.get(
  "/org-list",
  authMiddleware,
  adminMiddleware,
  getOrganisationsListController
);

// DELETE DONAR || delete
router.delete(
  "/delete-donar/:id",
  authMiddleware,
  adminMiddleware,
  deleteDonarController
);
// DELETE hospital || delete
router.delete(
  "/delete-hospital/:id",
  authMiddleware,
  adminMiddleware,
  deleteDonarController
);
// DELETE organisation || delete
router.delete(
  "/delete-organisation/:id",
  authMiddleware,
  adminMiddleware,
  deleteDonarController
);

//exports
module.exports = router;
