import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import {PostsService } from '../posts.service';
@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html'
})

export class PostListComponent implements OnInit, OnDestroy{
    // posts = [
    //     {
    //         title: 'First post', content: 'this is first content'
    //     },
    //     {
    //         title: 'second post', content: 'this is second content'
    //     }
    // ];
    posts: Post[] = []; //input is binding from parent component
    private postsSub: Subscription;
constructor(public postsService: PostsService) {}

    ngOnInit() //Use the constructor to initialize class members and for dependency injection. Use ngOnInit for initialization work. ... It is a predefined method in a TypeScript class which is called when the class is instantiated.
    {
        this.postsService.getPosts();
      this.postsSub = this.postsService.getPostUpdatedListener()
        .subscribe((posts: Post[]) => {
            this.posts = posts;
        });
    }

 onDelete(postId: string){
     this.postsService.deletePost(postId);
 }

    ngOnDestroy(){
        this.postsSub.unsubscribe();
    }

}