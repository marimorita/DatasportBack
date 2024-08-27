// src/domain/entity/ClientEntity.ts
import { Entity, PrimaryGeneratedColumn , Column } from 'typeorm';

@Entity('bienes')
export class AssetsEntity {

  @PrimaryGeneratedColumn({ name: 'Id_Bienes'})
  id?: number;

  @Column({ name: 'Nombre'})
  name?: string;

  @Column({ name: 'Descripcion' })
  description?: string;

  @Column({ name: 'Imagen' })
  img?: string;

  @Column({ name: 'Cantidad' })
  stock?: number;

}