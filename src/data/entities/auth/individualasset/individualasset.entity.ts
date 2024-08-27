// src/domain/entity/ClientEntity.ts
import { Entity, PrimaryGeneratedColumn , Column } from 'typeorm';

@Entity('BienIndividual')
export class IndividualAssetsEntity {

  @PrimaryGeneratedColumn({ name: 'Id_BienIndividual'})
  id?: number;

  @Column({ name: 'Nombre'})
  name?: string;

  @Column({ name: 'Descripcion' })
  description?: string;

  @Column({ type: 'date', name: 'fecha_adquisición'})
  adquisitionDate?: Date;

  @Column({ name: 'Estado' })
  state?: string;

  @Column({ name: 'Condicion' })
  condition?: string;

  @Column({ name: 'Imagen' })
  img?: string;

  @Column({ type: 'date', name: 'Ultimo_mantenimiento'})
  lastMaintenance?: Date;

  @Column({ type: 'date', name: 'Siguiente_mantenimiento'})
  nextMaintenance?: Date;

  @Column({ name: 'Id_Bienes' })
  idAssets?: number;
  
}