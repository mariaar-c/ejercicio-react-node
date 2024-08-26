const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../Models/users');




const JWT_SECRET = 'tu_clave_secreta';

const register = async (req, res) => {
    const { username, password } = req.body;


    const existingUser = await User.findOne({ username });
    if (existingUser) {
        return res.status(400).json({ message: 'Usuario ya registrado' });
    }


    const hashedPassword = await bcrypt.hash(password, 10);


    const user = new User({ username, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'Usuario registrado exitosamente' });
};

const login = async (req, res) => {
    const { username, password } = req.body;


    const user = await User.findOne({ username });
    if (!user) {
        return res.status(400).json({ message: 'Credenciales inválidas' });
    }


    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({ message: 'Credenciales inválidas' });
    }


    const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
};

module.exports = { register, login };
