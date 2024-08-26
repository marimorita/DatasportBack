// src/domain/entity/ClientEntity.ts
import { Entity, PrimaryGeneratedColumn , Column } from 'typeorm';

@Entity('BienIndividual')
export class IndividualAssetsEntity {

  @PrimaryGeneratedColumn({ name: 'idBienes'})
  id?: number;

  @Column({ name: 'Nombre'})
  name?: string;

  @Column({ name: 'Descripcion' })
  description?: string;

  @Column({ name: 'Cantidad' })
  stock?: number;

  @Column({ name: 'Precio'})
  price?: number;
  
  @Column({ name: 'Imagen' })
  img?: string;

  @Column({ name: 'Condicion' })
  condition?: string;

  @Column({ type: 'date', name: 'ultimo_mantenimiento'})
  lastMaintenance?: Date;

  @Column({ type: 'date', name: 'siguiente_mantenimiento'})
  nextMaintenance?: Date;
}