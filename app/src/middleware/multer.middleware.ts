import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import multer from 'multer';

@Injectable()
export class MulterMiddleware implements NestMiddleware {
    private upload: multer.Multer;

    constructor() {
        this.upload = multer({
            storage: multer.diskStorage({
                //TODO: upload directory to be confirmed
                destination: './uploads/resume',
                filename: (req, file, callback) => {
                    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                    const ext = file.originalname.split('.').pop();
                    const filename = `${file.fieldname}-${uniqueSuffix}.${ext}`;
                    callback(null, filename);
                },
            }),
            fileFilter: (req, file, callback) => {
                if (!file.originalname.match(/\.(jpg|jpeg|png|gif|pdf)$/)) {
                    //TODO: Error message to be confirmed
                    return callback(null, false);
                }

                callback(null, true);
            },
            limits: {
                //Resume should not exceed 2MB
                fileSize: 1024 * 1024 * 2,
            },
        });
    }

    use(req: Request, res: Response, next: NextFunction) {
        this.upload.single('file')(req, res, (err: any) => {
            if (err) {
                return res.status(400).json({ message: err.message });
            }
            next();
        });
    }
}