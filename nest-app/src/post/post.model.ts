import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

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

  @Field(() => ID)
  userId: string;

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

  @Field(() => ID)
  userId: string;

  @Field(() => Boolean, { nullable: true })
  active: boolean;
}
