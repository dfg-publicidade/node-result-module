"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-magic-numbers */
class HttpStatus {
}
HttpStatus.success = 200;
HttpStatus.created = 201;
HttpStatus.badRequest = 400;
HttpStatus.unauthorized = 401;
HttpStatus.forbidden = 403;
HttpStatus.notFound = 404;
HttpStatus.payloadToLarge = 413;
HttpStatus.internalError = 500;
HttpStatus.notImplemented = 501;
exports.default = HttpStatus;
