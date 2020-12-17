"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultStatus = void 0;
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const resultStatus_1 = __importDefault(require("./enums/resultStatus"));
exports.ResultStatus = resultStatus_1.default;
/* Module */
class Result {
    constructor(status, content) {
        this.time = moment_timezone_1.default.tz(new Date(), process.env.TZ).format('DD/MM/YYYY HH:mm:ss');
        this.status = status;
        this.content = content;
    }
}
exports.default = Result;
