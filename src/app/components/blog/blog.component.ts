import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post';
import { ServicioService } from 'src/app/servicio.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Post;

  constructor(private servicioService: ServicioService) {
  }

  async ngOnInit() {

    this.posts = await this.servicioService.getAllPosts()
    console.log(this.posts);

  }

}
