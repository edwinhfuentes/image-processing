"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = __importDefault(require("multer"));
var fileStorage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../../server/assets');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
// uploads image to server to localhost:3000/uploads
var upload = (0, multer_1.default)({ storage: fileStorage });
exports.default = upload;
