const jsonWebToken = require('jsonwebtoken');
const router = require('express').Router();
const express = require('express');
const app = express();

app.set('key', process.env.SECRET_KEY);

function isAdminUser(req, res, next) {     
    const token = req.headers.authorization.split(' ')[1];

    const tokenVerify = jsonWebToken.verify(token, process.env.SECRET_KEY);

    if (tokenVerify.usuarioId.isAdmin != 'admin') {
        return res.status(403).send('Access denied, you dont have permission.');
    }
    next(); 
}

function tokenAuth (req, res, next) {
    const token = req.headers['access-token'];
 
    if (token) {
      jwt.verify(token, app.get('key'), (err, decoded) => {      
        if (err) {
          return res.json({ mensaje: 'Token inválida' });    
        } else {
          req.decoded = decoded;    
          next();
        }
      });
    } else {
      res.send({ 
          mensaje: 'Token no proveída.' 
      });
    }
 };


module.exports = {
    isAdminUser,
    tokenAuth
}