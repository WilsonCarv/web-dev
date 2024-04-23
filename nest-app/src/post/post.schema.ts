import mongoose, { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ID } from '@nestjs/graphql';
import ObjectId from 'mongoose';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: false })
  image: string;

  @Prop({ required: true, tye: ObjectId, ref: 'User' })
  userId: string;

  @Prop({ default: true })
  active: boolean;

  @Prop({ required: false, type: Object })
  metadata: any;

  @Prop({ required: false, type: [Object] })
  comments: any[];
}
export const PostSchema = SchemaFactory.createForClass(Post);
