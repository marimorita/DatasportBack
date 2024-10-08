import { Request, Response } from "express";
import { RegisterAssetsDto, UpdateStockAssetsDto, UpdateNameAssetsDto, UpdateDescriptionAssetsDto, UpdateImgAssetsDto, AuthAssetsRepository, CustomError } from "../../../domain";
import { AssetsEntity } from "../../../data";
export class AuthAssetsController {

    constructor(
        private readonly authAssetsRepository: AuthAssetsRepository
    ) { }

    private handleError = (error: unknown, res: Response) => {

        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message });
        }

        return res.status(500).json({ error: 'Error del servidor ' });
    }

    registerAssets = async (req: Request, res: Response) => {
        const [error, registerAssetsDto] = RegisterAssetsDto.create(req.body);
        if (error) return res.status(400).json({ error });

        try {
            const assets: AssetsEntity = await this.authAssetsRepository.register(registerAssetsDto!)
            res.json(assets)
        } catch (error) {
            console.error("Error registering client:", error);
            this.handleError(error, res);
        }
    }

    getAssetsById = async (req: Request, res: Response) => {
        const { id } = req.params;

        // Convertir el ID de string a number
        const assetsId = parseInt(id, 10);

        if (isNaN(assetsId)) {
            return res.status(400).json({ error: 'Formato de id invalido' });
        }

        try {
            const assets = await this.authAssetsRepository.getAssetsById(assetsId);
            if (!assets) {
                return res.status(404).json({ error: 'Este bien no existe' });
            }
            res.json(assets);
        } catch (error) {
            this.handleError(error, res);
        }
    }

    getAllAssets = async (req: Request, res: Response) => {
        try {
            const assets = await this.authAssetsRepository.getAllAssets();
            res.json(assets);
        } catch (error) {
            console.log(error);
            this.handleError(error, res);
        }
    }

    updateAssetsStock = async (req: Request, res: Response) => {
        const [error, updateStockAssetsDto] = UpdateStockAssetsDto.create(req.body);
        if (error) return res.status(400).json({ error });

        try {
            await this.authAssetsRepository.updateAssetsStock(updateStockAssetsDto!)
            res.status(201).json({ message: 'Actualizacion exitosa!' });
        } catch (error) {
            this.handleError(error, res);
        }
    }

    updateAssetsName = async (req: Request, res: Response) => {
        const [error, updateNameAssetsDto] = UpdateNameAssetsDto.create(req.body);
        if (error) return res.status(400).json({ error });

        try {
            await this.authAssetsRepository.updateAssetsName(updateNameAssetsDto!)
            res.status(201).json({ message: 'Actualizacion exitosa!' });
        } catch (error) {
            this.handleError(error, res);
        }
    }

    updateAssetsDescription = async (req: Request, res: Response) => {
        const [error, updateDescriptionAssetsDto] = UpdateDescriptionAssetsDto.create(req.body);
        if (error) return res.status(400).json({ error });

        try {
            await this.authAssetsRepository.updateAssetsDescription(updateDescriptionAssetsDto!)
            res.status(201).json({ message: 'Actualizacion exitosa!' });
        } catch (error) {
            this.handleError(error, res);
        }
    }

    updateAssetsImg = async (req: Request, res: Response) => {
        const [error, updateImgAssetsDto] = UpdateImgAssetsDto.create(req.body);
        if (error) return res.status(400).json({ error });

        try {
            await this.authAssetsRepository.updateAssetsImg(updateImgAssetsDto!)
            res.status(201).json({ message: 'Actualizacion exitosa!' });
        } catch (error) {
            this.handleError(error, res);
        }
    }
}