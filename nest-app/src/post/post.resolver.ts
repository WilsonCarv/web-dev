import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { Post, PostInput } from './post.model';
import { PostService } from './post.service';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query(() => [Post])
  getPostByUser(@Args('user') userId: string): Promise<Post[]> {
    return this.postService.getPostByUser(userId);
  }
  @Mutation(() => Post)
  createPost(@Args('post') post: PostInput): Promise<Post> {
    return this.postService.createPost(post);
  }
}
