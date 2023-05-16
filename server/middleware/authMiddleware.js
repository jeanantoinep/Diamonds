const express = require('express');
import jwt from "jsonwebtoken";
import User from "../models/User";

const MyInterface ={
    user: {
        email: string,
        username: string,
        userId: string,
    },
}
module.exports = MyInterface;

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (token) {
            const decodedToken = jwt.verify(token, "RANDOM-TOKEN");
            eq.user = decodedToken.user;

            next();
        }
    } catch (error) {
        res.status(401).json({
            error: new Error("Invalid request!"),
        });
    }
};

module.exports = auth;