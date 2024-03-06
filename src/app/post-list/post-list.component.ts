import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  template: `
    <h2>Posts</h2>
    <ul>
      <li *ngFor="let post of posts">{{ post.title }}</li>
    </ul>

    <div>
      <input [(ngModel)]="newPostTitle" placeholder="New Post Title" />
      <button (click)="addPost()">Add Post</button>
    </div>
  `,
})
export class PostListComponent implements OnInit {
  posts: any[] = [];
  newPostTitle: string | undefined;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  addPost(): void {
    const newPost = { title: this.newPostTitle };
    this.postService.addPost(newPost).subscribe((data) => {
      this.posts.push(data);
      this.newPostTitle = '';
    });
  }
}
