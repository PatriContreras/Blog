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
    this.arrPosts = [
      {
        titulo: 'Islandia experience',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, itaque?',
        autor: 'Alejandro Cabello',
        imagen: 'https://www.itaka.pl/blog/wp-content/uploads/2020/05/islandia-blog-itaki-zdjecie-glowne-zorza-polarna-wodospady-800x520.jpg',
        fecha: 'Noviembre 2018',
        categoria: 'viajes',
      },
      {
        titulo: 'Comiendo en Streetxo',
        texto: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium nemo doloribus porro corrupti eligendi neque sunt, autem architecto modi voluptas.',
        autor: 'Patricia Contreras',
        imagen: 'https://aws.traveler.es/prod/designs/v1/assets/745x497/142313.jpg',
        fecha: 'Febrero 2021',
        categoria: 'comida',
      },
      {
        titulo: 'Escocia misteriosa',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aut itaque, aspernatur officia a praesentium.',
        autor: 'Lucia Trigo',
        imagen: 'https://static.masedimburgo.com/wp-content/uploads/2019/05/28211104/Los-castillos-mas-bonitos-de-Escocia-Culzean-Castle-15002-1500x1000.jpg',
        fecha: 'Mayo 2017',
        categoria: 'viajes',
      },
      {
        titulo: 'Fotografía conceptual',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, itaque?',
        autor: 'Flora Boris',
        imagen: 'https://i.pinimg.com/originals/e5/06/17/e50617d721da0d68ce803f3325651ebb.jpg',
        fecha: 'Febero 2019',
        categoria: 'fotografia',
      },
    ]
  }

  getAllPosts(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrPosts);
    });
  }

  agregarPost(pFormulario) {
    this.arrPosts.push(pFormulario);
    //localStorage.setItem('nuevoPost', JSON.stringify(pFormulario));
    // console.log(this.arrPosts);
  }

  getCategorias() {
    this.arrCategorias = this.arrPosts.map(post => { // Me quedo con la propiedad que quiero.
      return post.categoria;
    });

    return [...new Set(this.arrCategorias)] // new Set --> no admite duplicados. 

  }


  getPostsByCategoria(pCategoria): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrFiltrado = this.arrPosts.filter(post => {
        return post.categoria === pCategoria
      }));
    });
  }
}


