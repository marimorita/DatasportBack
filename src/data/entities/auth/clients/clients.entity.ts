// src/domain/entity/ClientEntity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Usuario')
export class ClientsEntity {

  @PrimaryGeneratedColumn({ name: 'Id_Usuario' })
  id?: number;

  @Column({ name: 'Nombres' })
  name?: string;

  @Column({ name: 'Apellidos' })
  lastName?: string;

  @Column({ unique: true, name: 'Email' })
  email?: string;

  @Column({ name: 'Direccion' })
  address?: string;

  @Column({ name: 'Telefono' })
  phone?: number;

  @Column({ name: 'Id_Centro' })
  idCenter?: number;

  @Column({ name: 'Estado' })
  state?: string;

  @Column({ name: 'Imagen' })
  img?: string;

  // @Column({ name: 'Asistencia'})
  // assistance?: string;

}