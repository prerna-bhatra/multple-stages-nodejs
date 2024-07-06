"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGO_URI = exports.JWT_SECRET = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const envFile = `.env.${process.env.NODE_ENV || 'development'}`;
console.log({ envFile });
dotenv_1.default.config({ path: path_1.default.resolve(process.cwd(), envFile) });
exports.PORT = process.env.PORT || 3000;
exports.JWT_SECRET = process.env.JWT_SECRET || 'default_secret';
exports.MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/defaultdatabase';
