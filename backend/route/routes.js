import express from 'express';
import { getUsers , addUser} from '../controller/user-controller.js';
const route = express.Router();

route.get('/', getUsers);
route.post('add',addUser);

export default route;