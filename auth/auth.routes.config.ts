import { CommonRoutesConfig } from '../common/common.routes.config';
import AuthController from './controllers/auth.controller';
import AuthMiddleware from './middleware/auth.middleware';
import express from 'express';
import jwtMiddleware from './middleware/jwt.middleware';

export class AuthRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'AuthRoutes');
    }

    configureRoutes(): express.Application {
        this.app.post(`/auth`, [
            AuthMiddleware.validateBodyRequest,
            AuthMiddleware.verifyUserPassword,
            AuthController.createJWT,
        ]);
        this.app.post(`/auth/refresh-token`, [
            jwtMiddleware.validJWTNeeded,
            jwtMiddleware.verifyRefreshBodyField,
            jwtMiddleware.validRefreshNeeded,
            AuthController.createJWT,
        ]);
        return this.app;
    }
}
