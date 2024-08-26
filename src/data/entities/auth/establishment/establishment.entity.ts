// src/domain/entity/ClientEntity.ts
import { Entity, PrimaryGeneratedColumn , Column } from 'typeorm';

@Entity('centrodeportivo')
export class EstablishmentEntity {
  @PrimaryGeneratedColumn({ name: 'Id_Centro'})
  id?: number;

  @Column({ name: 'Nombre'})
  name?: string;

  @Column({ unique: true, name: 'Email' })
  email?: string;
  
  @Column({ name: 'Telefono'})
  phone?: number;

  @Column({ name: 'Direccion'})
  address?: string;
}