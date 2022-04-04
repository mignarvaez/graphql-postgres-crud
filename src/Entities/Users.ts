// Se importa las funciones para trabajar con entidades
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

/** Entidad que representa a los usuarios */
@Entity()
export class Users extends BaseEntity {
  /** Id autogenerada. Al igual que los demás campos tiene una aserción de propiedad no inicializada*/
  @PrimaryGeneratedColumn()
  id!: number;

  /** Nombre del usuario */
  @Column()
  name!: string;

  /** Nombre de usuario */
  @Column()
  username!: string;

  /** Contraseña del usuario */
  @Column()
  password!: string;
}
