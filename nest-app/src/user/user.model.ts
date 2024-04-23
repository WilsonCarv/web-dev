import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType('User')
export class User {
  @Field(() => ID)
  id: string;
  @Field(() => String)
  name: string;
  @Field(() => String)
  email: string;
  @Field(() => String, { nullable: true })
  password: string;
  @Field(() => String)
  role: string;
  @Field(() => Boolean)
  state: boolean;
}
@InputType()
export class UserInput {
  @Field(() => ID)
  id: string;
}
