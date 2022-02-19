import { Injectable } from '@angular/core';
import { Item } from '../components/men/item.interface';

import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class NegocioService {

  /*
  items: Array<Item> = [
    {
      id: 112231,
      title: "Chaqueta de plumas color blanco hueso de Arcminute",
      descripcion: "Nacida en Ghana y con base en Londres, Arcminute vuelve a sus raíces para traernos un streetwear que se distingue del resto. Inspirándose en la cultura, los viajes y el sentido de comunidad, podemos encontrar gráficos potentes, logos y tonalidades muy características en toda la colección de la marca. Compra de todo, desde pantalones de chándal, forros polares y chalecos hasta sudaderas (con capucha y sin capucha)",
      category: "Chaquetas y abrigos",
      precio: "138,99€",
      image: "../assets/chaqueta1.jpg",
      image_details: "../assets/chaqueta1-details.jpg"
    },

    {
      id: 112232,
      title: "Chaqueta de aviador gris con forro de piel de Sith June",
      descripcion: "Sixth June se lanzó en Paris en 2008, reavivando el estilo urbano. Con su toque innovador y reactivo, sus camisetas largas, chaquetas bomber y jerséis le han ayudado a convertirse en una de las marcas con más demanda.",
      category: "Chaquetas y abrigos",
      precio: "165,99€",
      image: "../assets/chaqueta2.jpg",
      image_details: "../assets/chaqueta2-details.jpg"
    },

    {
      id: 112233,
      title: "Chaqueta utilitaria verde estilo coach RYV de adidas Originals",
      descripcion: "Adidas no necesita presentación. Las famosas 3 rayas de la marca pueden verse en pistas, campos y en las últimas tendencias de moda urbana. Echa un vistazo al editorial de adidas en MDB para elegir tu modelo, desde las modernas zapatillas de las icónicas colecciones 80 Superstar, Stan Smith, Gazelle y Continental hasta chándales, camisetas y sudaderas inspirados en los archivos de adidas Originals",
      category: "Chaquetas y abrigos",
      precio: "84,95€",
      image: "../assets/chaqueta3.jpg",
      image_details: "../assets/chaqueta3-details.jpg"
    },

    {
      id: 112234,
      title: "Chaqueta en color crudo de borreguillo de Topman",
      descripcion: "Topman te viste con lo último en moda masculina para cualquier tipo de evento social gracias a su gama de ropa, zapatos y accesorios. Echa un vistazo a nuestra selección de Topman en MDB y descubre las prendas denim y las camisetas básicas de la marca para conseguir un estilo casual, u opta por camisas y pantalones de sastre para los días que requieren un poco más de elegancia.",
      category: "Chaquetas y abrigos",
      precio: "82,99€",
      image: "../assets/chaqueta4.jpg",
      image_details: "../assets/chaqueta4-details.jpg"
    },
  ];
  */

  items_women: Array<Item> = [
    {
      id: "112235",
      title: "Camisa suave de manga larga con mezcla de estampados",
      descripcion: "Si hay algo de lo que la marca australiana Cotton On se ha dado buena cuenta es de lo importante que es ir un paso más allá en el mundo de la moda. Desde prendas sueltas a conjunto y prendas de punto amplias hasta modelos de denim que son diferentes, su gama de ropa tiene ese tirón de añádeme a la bolsa. Echa un vistazo a la edición de Cotton On de MDB si quieres descubrir nuestras prendas favoritas de su última colección, que incluye conjuntos, jerséis y vaqueros que sientan de maravilla.",
      category: "Tops",
      precio: "18,99€",
      image: "../assets/top1.jpg",
      image_details: "../assets/top1-details.jpg"
    },

    {
      id: "112236",
      title: "Camiseta extragrande de manga larga ",
      descripcion: "Para cualquier tipo de ocasión, New Girl Order se especializa en las tendencias llamativas y atrevidas con su colección cargada de personalidad. Hemos reunido algunos de nuestros estilos favoritos de camisetas con gráficos, vestidos tipo camisola y monos largos metalizados para esos días en los que quieres dejar huella. ¿Terciopelo con teñido anudado y estampado de cebra flúor? Claro, también los tiene.",
      category: "Tops",
      precio: "15,99€",
      image: "../assets/top2.jpg",
      image_details: "../assets/top2-details.jpg"
    },

    {
      id: "112237",
      title: "Camiseta extragrande de canalé en lila de Cotton",
      descripcion: "Así es MDB DESIGN - tus diseños favoritos de todas las tendencias actuales, no importa quién seas, de dónde seas o a qué te dediques. Exclusivo en MDB, nuestra marca universal está aquí para ti y viene en todos nuestros tipos de cortes: MDB Curve, Tall, Petite y Maternity. Creado por nosotros, combinado por ti.",
      category: "Tops",
      precio: "14,95€",
      image: "../assets/top3.JPG",
      image_details: "../assets/top3-details.jpg"
    },

    {
      id: "112238",
      title: "Body azul con efecto teñido de In The Style x Jac Jossa",
      descripcion: "¿Te encanta vestirte para ti misma y no para otra persona? In The Style trata de empoderar a las mujeres a través de la moda gracias a su gama de ropa inspirada en personas famosas. Si necesitas una excusa para darlo todo, echa un vistazo a la colección de vestidos, bodis, faldas y prendas sueltas de conjuntos de la marca, que incluyen colaboraciones con algunos de tus influencers y famosos favoritos. Para esos días más tranquilos, echa un vistazo a vaqueros, jerséis y ropa para estar en casa abrigada, toda ella a tu disposició en nuestra edición de In The Style en MDB.",
      category: "Tops",
      precio: "22,99€",
      image: "../assets/top4.jpg",
      image_details: "../assets/top4-details.jpg"
    },
  ];

  constructor(private fireStore: AngularFirestore) { }

  /*
  public getItems(): Item[] {
    return this.items;
  }
  */

  public getItemsWomen(): Item[] {
    return this.items_women;
  }

  public getItems(): any {
    return this.fireStore.collection('items').snapshotChanges();
  }

  buscarItem(documentId: string): any {
    // if (parseInt(documentId) > 112234) {
    //   console.log(documentId);
    //   return this.items_women.filter((item) => {
    //     return item.id == documentId;
    //   })[0];
    // } else {
      return this.fireStore.collection('items').doc(documentId).snapshotChanges();
    }
  // }

  /*
  public buscarItem(id: number): Item {
    // Filtrar el array por aquellos elementos cuyo id sea igual al recibido como parametro
    // Como al filtar me devuelve otro array, me quedo solo con el primer elemento
    if (id > 112234) {
      return this.items_women.filter((item) => {
        return item.id == id
      })[0];
    } else {
      return this.items.filter((item) => {
        return item.id == id
      })[0];
    }
  }
  */

}
