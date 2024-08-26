// src/domain/entity/ClientEntity.ts
import { Entity, PrimaryGeneratedColumn , Column } from 'typeorm';

@Entity('Producto')
export class ProductsEntity {
  @PrimaryGeneratedColumn({ name: 'Id_Producto'})
  id?: number;

  @Column({ name: 'Nombre'})
  name?: string;

  @Column({ name: 'Descripcion' })
  description?: string;

  @Column({ name: 'Estado' })
  state?: string;
  
  @Column({ name: 'Stock'})
  stock?: number;

  @Column({ name: 'Imagen' })
  img?: string;

  @Column({ name: 'Precio'})
  price?: number;

  @Column({ name: 'Id_Centro'})
  idCenter?: number;
}