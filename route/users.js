// backend/routes/users.js
import  Router  from 'express';
const router = Router();
import registerUser from '../controller/registerUser.js';
import getRegisteredUsers from '../controller/registeredUser.js';

router.post('/register', registerUser);
router.get('/registered', getRegisteredUsers);

export default router;
