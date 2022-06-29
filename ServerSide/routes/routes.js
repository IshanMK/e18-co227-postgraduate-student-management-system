/**
 * CO227 - PG Student Management System
 * Author: Jeewantha Ariyawansha
 * 
 * This file contains the all the routes of application
 */

import express from "express";
import {gotologin, gotosignup} from '../services/services.js';
import { login, signUp } from "../controller/controller.js";

// Get Router from express
const route = express.Router();

/**
 * @description Root Route
 * @method GET
 */
route.get('/', gotologin);

/**
 * @description Route to the signup page
 * @method GET
 */
route.get('/sign_up', gotosignup);

/**
 * @description Route to register an user
 * @method POST
 */
route.post('/user/signup', signUp);

/**
 * @description Route to login  an user
 * @method POST
 */
 route.post('/user/login', login);

export default route;