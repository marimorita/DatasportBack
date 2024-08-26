import { Request, Response } from "express";
import { RegisterProductsDto, AuthProductsRepository, CustomError  } from "../../../domain";
import { ProductsEntity } from "../../../data";
export class AuthProductsController {
    
    constructor(
        private readonly authProductsRepository: AuthProductsRepository
    ){}

    private handleError = ( error: unknown, res: Response ) => {
    
         if ( error instanceof CustomError ) {
           return res.status(error.statusCode).json({ error: error.message });
         }
    
         return res.status(500).json({ error: 'Error del servidor ' });
       }

    registerProducts = async (req: Request, res: Response) => {
       const [error, registerProductsDto] = RegisterProductsDto.create(req.body);
       if ( error ) return res.status(400).json({ error });
       
       try {
        const products: ProductsEntity = await this.authProductsRepository.register(registerProductsDto!)
        res.json(products)
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