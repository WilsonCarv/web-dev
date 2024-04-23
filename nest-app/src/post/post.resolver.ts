import { Query, Resolver, Args } from '@nestjs/graphql';
import { Post } from './post.model';
import { PostService } from './post.service';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query(() => [Post])
  getPostByUser(@Args('userId') userId: string): Promise<Post[]> {
    return this.postService.getPostByUser(userId);
  }
}
