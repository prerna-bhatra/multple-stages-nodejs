"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
// import authRoutes from './routes/authRoutes';
const config_1 = require("./config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// app.use('/api/auth', authRoutes);
mongoose_1.default.connect(config_1.MONGO_URI, {})
    .then(() => {
    app.listen(config_1.PORT, () => {
        console.log(`Server running on port ${config_1.PORT}`);
    });
})
    .catch(err => {
    console.error('Database connection error:', err);
});
