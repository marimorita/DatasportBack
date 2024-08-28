import { Request, Response } from "express";
import { RegisterIndividualAssetsDto, AuthIndividualAssetsRepository, CustomError  } from "../../../domain";
import { IndividualAssetsEntity } from "../../../data";
export class AuthIndividualAssetsController {
    
    constructor(
        private readonly authIndividualAssetsRepository: AuthIndividualAssetsRepository
    ){}

    private handleError = ( error: unknown, res: Response ) => {
    
         if ( error instanceof CustomError ) {
           return res.status(error.statusCode).json({ error: error.message });
         }
    
         return res.status(500).json({ error: 'Error del servidor ' });
       }

    registerIndividualAssets = async (req: Request, res: Response) => {
       const [error, registerIndividualAssetsDto] = RegisterIndividualAssetsDto.create(req.body);
       if ( error ) return res.status(400).json({ error });
       
       try {
        const assets: IndividualAssetsEntity = await this.authIndividualAssetsRepository.register(registerIndividualAssetsDto!)
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