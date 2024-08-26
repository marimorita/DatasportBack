import { Request, Response } from "express";
import { RegisterEstablishmentDto, AuthEstablishmentRepository, CustomError  } from "../../../domain";
import { EstablishmentEntity } from "../../../data";
export class AuthEstablishmentController {
    
    constructor(
        private readonly authEstablishmentRepository: AuthEstablishmentRepository
    ){}

    private handleError = ( error: unknown, res: Response ) => {
    
         if ( error instanceof CustomError ) {
           return res.status(error.statusCode).json({ error: error.message });
         }
    
         return res.status(500).json({ error: 'Internal Server Error' });
       }

    registerEstablishment = async (req: Request, res: Response) => {
       const [error, registerEstablishmentDto] = RegisterEstablishmentDto.create(req.body);
       if ( error ) return res.status(400).json({ error });
       
       try {
        const establishment: EstablishmentEntity = await this.authEstablishmentRepository.register(registerEstablishmentDto!)
        res.json(establishment)
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