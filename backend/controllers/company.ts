import { Request, Response, response } from "express";
import Company from "../models/companyModel";

interface controllerTypes {
  (req: Request, res: Response): void;
}

//Register
export const companyCreateController: controllerTypes = async (req, res) => {
  try {
    const formData = req.body;
    console.log(formData);
    // Create a new company instance
    const company = new Company(formData);

    // Save the company data to the database
    await company.save();

    res.status(201).json({
      success: true,
      message: "Company data saved successfully",
      // company,
    });
  } catch (error) {
    console.error("Error saving company data:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while saving company data",
      error,
    });
  }
};

// Get data
export const companyGetController: (
  req: Request,
  res: Response
) => void = async (req, res) => {
  try {
    // Fetch all company data from the database
    const companies = await Company.find();

    res.status(200).json({
      success: true,
      message: "Company data retrieved successfully",
      companies,
    });
  } catch (error) {
    console.error("Error fetching company data:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching company data",
      error,
    });
  }
};

export const getCompanyByIdController: controllerTypes = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findById(id);

    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Company data retrieved successfully",
      company,
    });
  } catch (error) {
    console.error("Error fetching company data:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching company data",
      error,
    });
  }
};

export const updateCompanyController: controllerTypes = async (req, res) => {
  try {
    const { id } = req.params;
    const formData = req.body;

    const company = await Company.findByIdAndUpdate(id, formData, {
      new: true,
    });

    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Company updated successfully",
      company,
    });
  } catch (error) {
    console.error("Error updating company:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while updating company data",
      error,
    });
  }
};

export const deleteCompanyController: controllerTypes = async (req, res) => {
  try {
    const { id } = req.params;

    const company = await Company.findByIdAndDelete(id);

    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Company deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting company:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while deleting company data",
      error,
    });
  }
};

export const toggleArchiveController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const company = await Company.findById(id);
    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company not found",
      });
    }

    company.archive = !company.archive;
    await company.save();

    res.status(200).json({
      success: true,
      message: `Company ${
        company.archive ? "archived" : "unarchived"
      } successfully`,
      company,
    });
  } catch (error) {
    console.error("Error updating archive status:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while updating archive status",
      error,
    });
  }
};

export const toggleStatusController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    // Find the company by id
    const company = await Company.findById(id);

    // If the company is not found, return a 404 status
    if (!company) {
      return res
        .status(404)
        .json({ success: false, message: "Company not found" });
    }

    // Update the company's status
    company.status = status;

    // Save the updated company
    await company.save();

    // Respond with a success message
    res.status(200).json({
      success: true,
      message: "Company status updated successfully",
      company,
    });
  } catch (error) {
    // If an error occurs, return a 500 status with the error message
    console.error("Error updating company status:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while updating company status",
      error,
    });
  }
};
