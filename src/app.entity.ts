import {Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

@Entity() 
export class AppEntity {   
   // @ApiProperty()
   @PrimaryColumn() 
   id?: number; 

   // @ApiProperty()
   @Column() 
   Name?: string; 

   // @ApiProperty()
   @Column() 
   age?: number; 
}