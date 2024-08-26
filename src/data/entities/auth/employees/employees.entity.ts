// src/domain/entity/ClientEntity.ts
import { Entity, PrimaryGeneratedColumn , Column } from 'typeorm';

@Entity('Empleado')
export class EmployeesEntity {
  
  @PrimaryGeneratedColumn({name: 'Cedula_Empleado'})
  id?: number;

  @Column({ name: 'Nombres'})
  name?: string;

  @Column({ name: 'Apellidos'})
  lastName?: string;

  @Column({ name: 'Direccion'})
  address?: string;
  
  @Column({ name: 'Telefono'})
  phone?: number;

  @Column({ unique: true, name: 'Email' })
  email?: string;

  @Column({ name: 'Contraseña'})
  password?: string;

  @Column({ name: 'Imagen'})
  img?: string;

  @Column({ name: 'Rol'})
  role?: string;

  @Column({ name: 'Id_Centro'})
  idCenter?: number;

  @Column({ name: 'Estado'})
  state?: number;
}