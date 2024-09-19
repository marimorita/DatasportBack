import { Request, Response } from "express";
import { RegisterProductsDto, AuthProductsRepository, CustomError, UpdateNameProductsDto, UpdateDescriptionProductsDto, UpdateStateProductsDto, UpdateStockProductsDto, UpdateImgProductsDto, UpdatePriceProductsDto } from "../../../domain";
import { ProductsEntity } from "../../../data";
export class AuthProductsController {

    constructor(
        private readonly authProductsRepository: AuthProductsRepository
    ) { }

    private handleError = (error: unknown, res: Response) => {

        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message });
        }

        return res.status(500).json({ error: 'Error del servidor ' });
    }

    registerProducts = async (req: Request, res: Response) => {
        const [error, registerProductsDto] = RegisterProductsDto.create(req.body);
        if (error) return res.status(400).json({ error });

        try {
            const products: ProductsEntity = await this.authProductsRepository.register(registerProductsDto!)
            res.json(products)
        } catch (error) {
            console.log(error);
            this.handleError(error, res);
        }
    }

    getAllProducts = async (req: Request, res: Response) => {
        try {
            const products = await this.authProductsRepository.getAllProducts();
            res.json(products);
        } catch (error) {
            console.log(error);
            this.handleError(error, res);
        }
    }

    getProductsById = async (req: Request, res: Response) => {
        const { id } = req.params;

        // Convertir el ID de string a number
        const productsId = parseInt(id, 10);

        if (isNaN(productsId)) {
            return res.status(400).json({ error: 'Formato de id invalido' });
        }

        try {
            const products = await this.authProductsRepository.getProductsById(productsId);
            if (!products) {
                return res.status(404).json({ error: 'Este producto no existe' });
            }
            res.json(products);
        } catch (error) {
            this.handleError(error, res);
        }
    }

    UpdateNameProductsDto = async (req: Request, res: Response) => {
        const [error, updateNameProductsDto] = UpdateNameProductsDto.create(req.body);
        if (error) return res.status(400).json({ error });

        try {
            await this.authProductsRepository.UpdateNameProductsDto(updateNameProductsDto!)
            res.status(201).json({ message: 'Actualizacion exitosa!' });
        } catch (error) {
            this.handleError(error, res);
        }
    }

    UpdateDescriptionProductsDto = async (req: Request, res: Response) => {
        const [error, updateDescriptionProductsDto] = UpdateDescriptionProductsDto.create(req.body);
        if (error) return res.status(400).json({ error });

        try {
            await this.authProductsRepository.UpdateDescriptionProductsDto(updateDescriptionProductsDto!)
            res.status(201).json({ message: 'Actualizacion exitosa!' });
        } catch (error) {
            this.handleError(error, res);
        }
    }

    UpdateStateProductsDto = async (req: Request, res: Response) => {
        const [error, updateStateProductsDto] = UpdateStateProductsDto.create(req.body);
        if (error) return res.status(400).json({ error });

        try {
            await this.authProductsRepository.UpdateStateProductsDto(updateStateProductsDto!)
            res.status(201).json({ message: 'Actualizacion exitosa!' });
        } catch (error) {
            this.handleError(error, res);
        }
    }

    UpdateStockProductsDto = async (req: Request, res: Response) => {
        const [error, updateStockProductsDto] = UpdateStockProductsDto.create(req.body);
        if (error) return res.status(400).json({ error });

        try {
            await this.authProductsRepository.UpdateStockProductsDto(updateStockProductsDto!)
            res.status(201).json({ message: 'Actualizacion exitosa!' });
        } catch (error) {
            this.handleError(error, res);
        }
    }

    UpdateImgProductsDto = async (req: Request, res: Response) => {
        const [error, updateImgProductsDto] = UpdateImgProductsDto.create(req.body);
        if (error) return res.status(400).json({ error });

        try {
            await this.authProductsRepository.UpdateImgProductsDto(updateImgProductsDto!)
            res.status(201).json({ message: 'Actualizacion exitosa!' });
        } catch (error) {
            this.handleError(error, res);
        }
    }

    UpdatePriceProductsDto = async (req: Request, res: Response) => {
        const [error, updatePriceProductsDto] = UpdatePriceProductsDto.create(req.body);
        if (error) return res.status(400).json({ error });

        try {
            await this.authProductsRepository.UpdatePriceProductsDto(updatePriceProductsDto!)
            res.status(201).json({ message: 'Actualizacion exitosa!' });
        } catch (error) {
            this.handleError(error, res);
        }
    }
}