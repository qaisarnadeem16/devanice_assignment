import express, { Request, Response } from "express";
import {
  companyCreateController,
  companyGetController,
  deleteCompanyController,
  getCompanyByIdController,
  toggleArchiveController,
  toggleStatusController,
  updateCompanyController,
} from "../controllers/company";

const router = express.Router();

//registerUser
router.post("/createCompany", companyCreateController);
router.get("/getCompanies", companyGetController);
router.post("/company/:id", updateCompanyController);
router.put("/updateArchive/:id", toggleArchiveController);
router.put("/updateStatus/:id", toggleStatusController);
router.get("/company/:id", getCompanyByIdController);

// Delete company
router.delete("/company/:id", deleteCompanyController);

export default router;
