import { Router } from "express";

import { GeneratePalindromesController} from './controllers/GeneratePalindromesController';
import { CalculeMoneyChangeController } from "./controllers/CaculateMoneyChangeController";

const router = Router();

const generatePalindromesController = new GeneratePalindromesController();
const calculeMoneyChangeController = new CalculeMoneyChangeController();

//Generate Palindromes Route
router.get('/palindromes', generatePalindromesController.handle);

//Caculate Money Change Route
router.get('/money-change', calculeMoneyChangeController.handle);

export { router };