import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { randomUUID, UUID } from 'crypto';

@ObjectType('Comment')
class Comment {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field(() => String, { nullable: true })
  body: string;

  @Field({ nullable: true })
  date: Date;
}

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

  @Field(() => ID, { nullable: true })
  user: string;

  @Field(() => Boolean)
  active: boolean;

  @Field(() => String)
  docId: UUID;

  @Field(() => Number)
  likes: number;

  @Field(() => [Comment])
  comments: Comment[];
}

@InputType()
class CommentInput {
  @Field(() => ID, { defaultValue: randomUUID() })
  id: string;

  @Field(() => String, { nullable: false })
  body: string;

  @Field({ defaultValue: new Date() })
  date: Date;
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
  user: string;

  @Field(() => Boolean, { nullable: true })
  active: boolean;

  @Field(() => [CommentInput], { nullable: true })
  comments: CommentInput[];
}
