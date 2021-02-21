import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post.interface';
import { ServicioService } from 'src/app/servicio.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  allPosts: Post[];
  allCategorias: string[];



  constructor(private servicioService: ServicioService) {
  }

  async ngOnInit() {
    this.allPosts = await this.servicioService.getAllPosts()
    this.allCategorias = this.servicioService.getCategorias()
    // console.log(this.allPosts);
  }

  async onChange($event) {
    if ($event.target.value === 'todos') {
      this.allPosts = await this.servicioService.getAllPosts()
    } else {
      this.allPosts = await this.servicioService.getPostsByCategoria($event.target.value);
      console.log($event.target.value);
    }


  }





}
