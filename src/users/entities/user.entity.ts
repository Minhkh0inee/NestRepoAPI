import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity('user')
export class User {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;
}
