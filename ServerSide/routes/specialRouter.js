/**
 * E / 18 / 173
 * Author - Kasthuripitiya K.A.I.M.
 * Date - 01/08/2022
 */

import express from "express";
import {
  getAllStudents,
  getUser,
  getAllDetails,
  getAllStaff,
} from "../controller/specialController.js";
import { isAdmin, isSupervisor } from "../Middleware/auth.js";

const router = express.Router();

router.get("/", isAdmin, getAllStudents);
router.get("/admin/dashboard", isAdmin, getAllDetails);
router.get("/staff", isSupervisor, getAllStaff);
router.get("/profile/:id", isAdmin, getUser);
export default router;