import { Router } from 'express';
import mongoose from 'mongoose';
var router = Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

export default router;
