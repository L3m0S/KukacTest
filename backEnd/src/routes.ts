import { Router } from "express";

import { GeneratePalindromesController} from './controllers/GeneratePalindromesController';
import { CalculateMoneyChangeController } from "./controllers/CaculateMoneyChangeController";
import { SaveUsersCarController } from "./controllers/SaveUsersCarController";
import { FindCepController } from "./controllers/FindCepController";

const router = Router();

const generatePalindromesController = new GeneratePalindromesController();
const calculeMoneyChangeController = new CalculateMoneyChangeController();
const saveUsersCarController = new SaveUsersCarController();
const findCepController = new FindCepController();

//Generate Palindromes Route
router.get('/palindromes', generatePalindromesController.handle);

//Caculate Money Change Route
router.get('/money-change', calculeMoneyChangeController.handle);

//Save user car Router
router.post('/save-car', saveUsersCarController.handle);

//Find Cep Route
router.get('/cep', findCepController.handle)

export { router };