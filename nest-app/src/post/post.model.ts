import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { User, UserInput } from './../user/user.model';

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
@InputType()
export class PostInput {
  @Field(() => String)
  title: string;

  @Field(() => String)
  content: string;

  @Field(() => String, { nullable: true })
  image: string;

  @Field(() => UserInput)
  user: UserInput;

  @Field(() => Boolean, { nullable: true })
  active: boolean;
}
