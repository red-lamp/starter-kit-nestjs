/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class HelloLoggerMiddleware implements NestMiddleware {

    use(req: Request, res: Response, next: () => void) {
        console.log('Request...');
        next();
    }
}
