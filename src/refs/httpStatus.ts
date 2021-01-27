/* eslint-disable no-magic-numbers */
class HttpStatus {
    public static readonly success: number = 200;
    public static readonly created: number = 201;
    public static readonly badRequest: number = 400;
    public static readonly unauthorized: number = 401;
    public static readonly forbidden: number = 403;
    public static readonly notFound: number = 404;
    public static readonly payloadToLarge: number = 413;
    public static readonly internalError: number = 500;
    public static readonly notImplemented: number = 501;
}

export default HttpStatus;
