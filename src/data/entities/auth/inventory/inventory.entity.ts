// src/domain/entity/ClientEntity.ts
import { Entity, PrimaryGeneratedColumn , Column } from 'typeorm';

@Entity('INVENTARIO')
export class InvetoryEntity {
  @PrimaryGeneratedColumn({ name: 'ID_Inventario'})
  id?: number;

  @Column({ name: 'Nombre'})
  name?: string;

  @Column({ name: 'Cantidad' })
  quantity?: number;
  
  @Column({ name: 'Estado'})
  state?: string;

  @Column({ name: 'Id_Centro '})
  idCenter?: number;
}