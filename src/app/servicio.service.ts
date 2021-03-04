
import { Injectable } from '@angular/core';
import { Post } from './post.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  arrPosts: Post[];
  arrCategorias: string[];
  arrFiltrado: Post[];


  constructor() {

    if (localStorage.getItem('arrayPosts')) {
      this.arrPosts = JSON.parse(localStorage.getItem('arrayPosts'));
    }
    else {
      this.arrPosts = [
        {
          titulo: 'Islandia experience',
          texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, itaque?',
          autor: 'Alejandro Cabello',
          imagen: 'https://www.itaka.pl/blog/wp-content/uploads/2020/05/islandia-blog-itaki-zdjecie-glowne-zorza-polarna-wodospady-800x520.jpg',
          fecha: '2018-10-25',
          categoria: 'viajes',
        },
        {
          titulo: 'Comiendo en Streetxo',
          texto: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium nemo doloribus porro corrupti eligendi neque sunt, autem architecto modi voluptas.',
          autor: 'Patricia Contreras',
          imagen: 'https://aws.traveler.es/prod/designs/v1/assets/745x497/142313.jpg',
          fecha: '2021-02-27',
          categoria: 'comida',
        },
        {
          titulo: 'Escocia misteriosa',
          texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aut itaque, aspernatur officia a praesentium.',
          autor: 'Lucia Trigo',
          imagen: 'https://static.masedimburgo.com/wp-content/uploads/2019/05/28211104/Los-castillos-mas-bonitos-de-Escocia-Culzean-Castle-15002-1500x1000.jpg',
          fecha: '2017-05-16',
          categoria: 'viajes',
        },
        {
          titulo: 'Fotografía conceptual',
          texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, itaque?',
          autor: 'Flora Boris',
          imagen: 'https://i.pinimg.com/originals/e5/06/17/e50617d721da0d68ce803f3325651ebb.jpg',
          fecha: '2019-07-12',
          categoria: 'fotografia',
        },
      ]

      localStorage.setItem('arrayPosts', JSON.stringify(this.arrPosts));
    }

  }

  getAllPosts(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrPosts);
    });
  }

  agregarPost(pFormulario) {
    this.arrPosts.push(pFormulario);
    localStorage.setItem('arrayPosts', JSON.stringify(this.arrPosts));

  }

  getCategorias() {
    this.arrCategorias = this.arrPosts.map(post => {
      return post.categoria;
    });

    return [...new Set(this.arrCategorias)]
  }


  getPostsByCategoria(pCategoria): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrFiltrado = this.arrPosts.filter(post => {
        return post.categoria === pCategoria
      }));
    });
  }
}


