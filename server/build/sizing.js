"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sharp_1 = __importDefault(require("sharp"));
var resizeImg_1 = require("./resizeImg");
// import ext from './resizeImg';
// import inputFile from './resizeImg';
// import outputFile from './resizeImg';
// import width from './resizeImg';
// import height from './resizeImg';
function imageProcessing() {
    return __awaiter(this, void 0, void 0, function () {
        var sharpInstance, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sharpInstance = (0, sharp_1.default)(resizeImg_1.inputFile).resize(resizeImg_1.width, resizeImg_1.height, {
                        fit: sharp_1.default.fit.cover,
                        withoutEnlargement: true,
                    });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 11, , 12]);
                    if (!(resizeImg_1.ext === 'jpg')) return [3 /*break*/, 3];
                    return [4 /*yield*/, sharpInstance.jpeg().sharpen().toFile(resizeImg_1.outputFile)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 10];
                case 3:
                    if (!(resizeImg_1.ext === 'jpeg')) return [3 /*break*/, 5];
                    return [4 /*yield*/, sharpInstance.jpeg().sharpen().toFile(resizeImg_1.outputFile)];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 10];
                case 5:
                    if (!(resizeImg_1.ext === 'png')) return [3 /*break*/, 7];
                    return [4 /*yield*/, sharpInstance.png().sharpen().toFile(resizeImg_1.outputFile)];
                case 6:
                    _a.sent();
                    return [3 /*break*/, 10];
                case 7:
                    if (!(resizeImg_1.ext === 'webp')) return [3 /*break*/, 9];
                    return [4 /*yield*/, sharpInstance.webp().sharpen().toFile(resizeImg_1.outputFile)];
                case 8:
                    _a.sent();
                    return [3 /*break*/, 10];
                case 9:
                    console.error("Error: ".concat(resizeImg_1.ext, " is an unsupported file format"));
                    return [2 /*return*/, false];
                case 10:
                    // Log the image details after resizing
                    console.log("Image Resized!\nWidth: ".concat(resizeImg_1.width, "px\nHeight: ").concat(resizeImg_1.height, "px\nFormat: ").concat(resizeImg_1.ext));
                    return [2 /*return*/, true];
                case 11:
                    error_1 = _a.sent();
                    console.error('Error resizing image:', error_1);
                    return [2 /*return*/, false];
                case 12: return [2 /*return*/];
            }
        });
    });
}
exports.default = imageProcessing;