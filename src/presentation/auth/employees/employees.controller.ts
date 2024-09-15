import { Request, Response } from "express";
import { RegisterEmployeesDto, LoginEmployeesDto, AuthEmployeesRepository, CustomError, UpdateAddressEmployeesDto, UpdateEmailEmployeesDto, UpdateLastNameEmployeesDto, UpdateNameEmployeesDto, UpdatePhoneEmployeesDto, UpdateStateEmployeesDto } from "../../../domain";
import jwt from 'jsonwebtoken';
import { envs } from "../../../config";
import crypto from 'crypto';

function generateVerificationCode(): string {
    
    const letters = Array(4)
        .fill(null)
        .map(() => String.fromCharCode(65 + Math.floor(Math.random() * 26)))
        .join('');

    
    const numbers = Array(4)
        .fill(null)
        .map(() => Math.floor(Math.random() * 10))
        .join('');

    
    return `${letters}${numbers}`;
}
console.log(generateVerificationCode());

export class AuthEmployeesController {

    constructor(
        private readonly authEmployeesRepository: AuthEmployeesRepository
    ) { }

    private handleError = (error: unknown, res: Response) => {

        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message });
        }

        return res.status(500).json({ error: 'Error del servidor' });
    }

    registerEmployees = async (req: Request, res: Response) => {
        const [error, registerEmployeesDto] = RegisterEmployeesDto.create(req.body);
        if (error) return res.status(400).json({ error });

        try {
            await this.authEmployeesRepository.register(registerEmployeesDto!)
            res.status(201).json({ message: 'Registro exitoso!' });
        } catch (error) {
            this.handleError(error, res);
        }
    }

    loginEmployees = async (req: Request, res: Response) => {
        const [error, loginEmployeesDto] = LoginEmployeesDto.create(req.body);
        if (error) return res.status(400).json({ error });

        const routeCode = generateVerificationCode();   

        try {
            const { token, role, message } = await this.authEmployeesRepository.login(loginEmployeesDto!)
            res.json({ token, role, routeCode, message })
        } catch (error) {
            this.handleError(error, res)
        }
    }

    getAllEmployees = async (req: Request, res: Response) => {
        try {
            const employee = await this.authEmployeesRepository.getAllEmployees();
            res.json(employee);
        } catch (error) {
            console.log(error);
            this.handleError(error, res);
        }
    }

    getEmployeeById = async (req: Request, res: Response) => {
        const { id } = req.params;

        // Convertir el ID de string a number
        const employeeId = parseInt(id, 10);

        if (isNaN(employeeId)) {
            return res.status(400).json({ error: 'Formato de id invalido' });
        }

        try {
            const employee = await this.authEmployeesRepository.getEmployeeById(employeeId);
            if (!employee) {
                return res.status(404).json({ error: 'Este empleado no existe' });
            }
            res.json(employee);
        } catch (error) {
            this.handleError(error, res);
        }
    }

    getEmployeeByToken = async (req: Request, res: Response) => {
        const token = req.params.token;

        if (!token) {
            return res.status(400).json({ error: 'Token requerido' });
        }

        try {
            const decoded = jwt.verify(token, envs.JWT_SECRET as string) as { user: { email: string, role: string } };

            const employee = await this.authEmployeesRepository.getEmployeeByEmail(decoded.user.email);

            if (!employee) {
                return res.status(404).json({ error: 'Empleado no encontrado' });
            }

            res.status(200).json(employee);
        } catch (error) {
            console.log(error);

            this.handleError(error, res);
        }
    }

    UpdateNameEmployeesDto = async (req: Request, res: Response) => {
        const [error, updateNameEmployeesDto] = UpdateNameEmployeesDto.create(req.body);
        if (error) return res.status(400).json({ error });

        try {
            await this.authEmployeesRepository.UpdateNameEmployeesDto(updateNameEmployeesDto!)
            res.status(201).json({ message: 'Actualizacion exitosa!' });
        } catch (error) {
            this.handleError(error, res);
        }
    }


    UpdateLastNameEmployeesDto = async (req: Request, res: Response) => {
        const [error, updateLastNameEmployeesDto] = UpdateLastNameEmployeesDto.create(req.body);
        if (error) return res.status(400).json({ error });

        try {
            await this.authEmployeesRepository.UpdateLastNameEmployeesDto(updateLastNameEmployeesDto!)
            res.status(201).json({ message: 'Actualizacion exitosa!' });
        } catch (error) {
            this.handleError(error, res);
        }
    }

    UpdateEmailEmployeesDto = async (req: Request, res: Response) => {
        const [error, updateEmailEmployeesDto] = UpdateEmailEmployeesDto.create(req.body);
        if (error) return res.status(400).json({ error });

        try {
            await this.authEmployeesRepository.UpdateEmailEmployeesDto(updateEmailEmployeesDto!)
            res.status(201).json({ message: 'Actualizacion exitosa!' });
        } catch (error) {
            this.handleError(error, res);
        }
    }

    UpdatePhoneEmployeesDto = async (req: Request, res: Response) => {
        const [error, updatePhoneEmployeesDto] = UpdatePhoneEmployeesDto.create(req.body);
        if (error) return res.status(400).json({ error });

        try {
            await this.authEmployeesRepository.UpdatePhoneEmployeesDto(updatePhoneEmployeesDto!)
            res.status(201).json({ message: 'Actualizacion exitosa!' });
        } catch (error) {
            this.handleError(error, res);
        }
    }


    UpdateAddressEmployeesDto = async (req: Request, res: Response) => {
        const [error, updateAddressEmployeesDto] = UpdateAddressEmployeesDto.create(req.body);
        if (error) return res.status(400).json({ error });

        try {
            await this.authEmployeesRepository.UpdateAddressEmployeesDto(updateAddressEmployeesDto!)
            res.status(201).json({ message: 'Actualizacion exitosa!' });
        } catch (error) {
            this.handleError(error, res);
        }
    }

    UpdateStateEmployeesDto = async (req: Request, res: Response) => {
        const [error, updateStateEmployeesDto] = UpdateStateEmployeesDto.create(req.body);
        if (error) return res.status(400).json({ error });

        try {
            await this.authEmployeesRepository.UpdateStateEmployeesDto(updateStateEmployeesDto!)
            res.status(201).json({ message: 'Actualizacion exitosa!' });
        } catch (error) {
            this.handleError(error, res);
        }
    }

    updateEmployeeImg = async (req: Request, res: Response) => {
        console.log('Received request to update employee img');
        const id = parseInt(req.params.id, 10); // ID del cliente desde los parámetros de la URL
        const { img } = req.body; // Estado actualizado desde el cuerpo de la solicitud

        try {
            const employee = await this.authEmployeesRepository.updateEmployeeImg(id, img);
            if (!employee) {
                return res.status(404).json({ error: 'Empleado no encontrado' });
            }
            res.status(200).json(employee);
        } catch (error) {
            this.handleError(error, res);
        }
    };
}