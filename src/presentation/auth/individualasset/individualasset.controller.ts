import { Request, Response } from "express";
import { RegisterIndividualAssetsDto, AuthIndividualAssetsRepository, CustomError, UpdateNameIndividualAssetsDto, UpdateDescriptionIndividualAssetsDto, UpdateImgIndividualAssetsDto } from "../../../domain";
import { IndividualAssetsEntity } from "../../../data";
export class AuthIndividualAssetsController {

  constructor(
    private readonly authIndividualAssetsRepository: AuthIndividualAssetsRepository
  ) { }

  private handleError = (error: unknown, res: Response) => {

    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    return res.status(500).json({ error: 'Error del servidor ' });
  }

  registerIndividualAssets = async (req: Request, res: Response) => {
    const [error, registerIndividualAssetsDto] = RegisterIndividualAssetsDto.create(req.body);
    if (error) return res.status(400).json({ error });

    try {
      const assets: IndividualAssetsEntity = await this.authIndividualAssetsRepository.register(registerIndividualAssetsDto!)
      res.json(assets)
    } catch (error) {
      this.handleError(error, res);
    }
  }

  getAllIndividualAssetsById = async (req: Request, res: Response) => {
    const { id } = req.params;

    // Convertir el ID de string a number
    const individualassetidAssets = parseInt(id, 10);

    if (isNaN(individualassetidAssets)) {
      return res.status(400).json({ error: 'Formato de id invalido' });
    }

    try {
      const individualasset = await this.authIndividualAssetsRepository.getAllIndividualAssetsById(individualassetidAssets);
      if (!individualasset) {
        return res.status(404).json({ error: 'Este bien individual no existe' });
      }
      res.json(individualasset);
    } catch (error) {
      this.handleError(error, res);
    }
  }

  updateIndividualAssetsName = async (req: Request, res: Response) => {
    const [error, updateNameIndividualAssetsDto] = UpdateNameIndividualAssetsDto.create(req.body);
    if (error) return res.status(400).json({ error });

    try {
      await this.authIndividualAssetsRepository.updateIndividualAssetsName(updateNameIndividualAssetsDto!)
      res.status(201).json({ message: 'Actualizacion exitosa!' });
    } catch (error) {
      this.handleError(error, res);
    }
  }

  updateIndividualAssetsDescription = async (req: Request, res: Response) => {
    const [error, updateDescriptionIndividualAssetsDto] = UpdateDescriptionIndividualAssetsDto.create(req.body);
    if (error) return res.status(400).json({ error });

    try {
      await this.authIndividualAssetsRepository.updateIndividualAssetsDescription(updateDescriptionIndividualAssetsDto!)
      res.status(201).json({ message: 'Actualizacion exitosa!' });
    } catch (error) {
      this.handleError(error, res);
    }
  }

  updateIndividualAssetsImg = async (req: Request, res: Response) => {
    const [error, updateImgIndividualAssetsDto] = UpdateImgIndividualAssetsDto.create(req.body);
    if (error) return res.status(400).json({ error });

    try {
      await this.authIndividualAssetsRepository.updateIndividualAssetsImg(updateImgIndividualAssetsDto!)
      res.status(201).json({ message: 'Actualizacion exitosa!' });
    } catch (error) {
      this.handleError(error, res);
    }
  }
}