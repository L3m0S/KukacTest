import { Router } from "express";

import { GeneratePalindromesController} from './controllers/GeneratePalindromesController';
import { CalculateMoneyChangeController } from "./controllers/CaculateMoneyChangeController";
import { SaveUsersCarController } from "./controllers/SaveUsersCarController";

const router = Router();

const generatePalindromesController = new GeneratePalindromesController();
const calculeMoneyChangeController = new CalculateMoneyChangeController();
const saveUsersCarController = new SaveUsersCarController();

//Generate Palindromes Route
router.get('/palindromes', generatePalindromesController.handle);

//Caculate Money Change Route
router.get('/money-change', calculeMoneyChangeController.handle);

//Save user car Router
router.post('/save-car', saveUsersCarController.handle);

export { router };