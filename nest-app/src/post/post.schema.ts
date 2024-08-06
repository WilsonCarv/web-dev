import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import ObjectId from 'mongoose';
import { randomUUID } from 'crypto';

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
  user: MongooseSchema.Types.ObjectId;

  @Prop({ default: true })
  active: boolean;

  @Prop({ required: false, type: Object })
  metadata: any;

  @Prop({ required: false, type: [Object] })
  comments: any[];

  @Prop({ default: randomUUID() })
  docId: string;

  @Prop({ default: 0 })
  likes: number;

  @Prop({ type: Map, of: String })
  socialMediaHandles: Map<string, string>;
}
export const PostSchema = SchemaFactory.createForClass(Post);
