import { Request, Response } from "express";
import { RegisterAssetsDto, AuthAssetsRepository, CustomError  } from "../../../domain";
import { AssetsEntity } from "../../../data";
export class AuthAssetsController {
    
    constructor(
        private readonly authAssetsRepository: AuthAssetsRepository
    ){}

    private handleError = ( error: unknown, res: Response ) => {
    
         if ( error instanceof CustomError ) {
           return res.status(error.statusCode).json({ error: error.message });
         }
    
         return res.status(500).json({ error: 'Error del servidor ' });
       }

    registerAssets = async (req: Request, res: Response) => {
       const [error, registerAssetsDto] = RegisterAssetsDto.create(req.body);
       if ( error ) return res.status(400).json({ error });
       
       try {
        const assets: AssetsEntity = await this.authAssetsRepository.register(registerAssetsDto!)
        res.json(assets)
       } catch (error) {
        this.handleError(error, res);
       }
    }

    // loginEstablishment = async (req: Request, res: Response) => {
    //     const {email, password} = req.body;
    //     if (!email ||!password) {
    //         return res.status(400).json({ error: 'Email and password are required'})
    //     }

    //     try {
    //         const { token, message } = await this.authEstablishmentRepository.login(email, password)
    //         res.json({ token, message })
    //     } catch (error) {
    //         this.handleError(error, res)
    //     }
    // }
}