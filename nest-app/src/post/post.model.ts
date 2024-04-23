import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from './../user/user.model';

@ObjectType('Post')
export class Post {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  content: string;

  @Field(() => String, { nullable: true })
  image: string;

  @Field(() => User)
  user: User;

  @Field(() => Boolean)
  active: boolean;
}
