import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GalleryImagesComponent } from './gallery-images/gallery-images.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { ImageCard } from './image-card.model';

/**
 * @description Componente principal de la aplicación MiniAppGallery
 * Gestiona la galería de imágenes aleatorias y permite seleccionar una imagen para verla en detalle
 */
@Component({
  selector: 'app-root', //Selector para usar este componente en otros templates
  standalone: true, //Indica que el componente es independiente y puede ser usado sin un módulo principal
  imports: [
    CommonModule,        //Importa las directivas comunes de Angular
    RouterOutlet,        //Para manejar rutas dentro de la aplicación
    GalleryImagesComponent, //Componente que muestra la galería de imágenes
    ImageViewerComponent   //Componente para visualizar una imagen seleccionada
  ],
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']   
})


export class AppComponent {
  title = 'MiniApp Gallery'; 
  mockData: ImageCard[] = []; //Arreglo que almacena los datos de las imágenes generadas
  selectedImage: ImageCard | null = null; //Imagen actualmente seleccionada. Es 'null' si no hay ninguna seleccionada

  /**
   * @description Constructor de la clase 
   * Llama al método generateImageData para generar imágenes aleatorias
   */
  constructor() {
    this.generateImageData(27); //Generar datos de 27 imágenes aleatorias
  }

  /**
   * @description Genera datos de imágenes aleatorias y los almacena en mockData
   * @param count - Cantidad de imágenes a generar
   */
  generateImageData(count: number) {
    for (let i = 1; i <= count; i++) {
      this.mockData.push({
        imageSrc: `https://picsum.photos/200/200?random=${i}`, //URL de una imagen aleatoria
        imageAlt: `Random Image ${i}`                          //Texto alternativo para la imagen
      });
    }
  }

  /**
   * @description Selecciona una imagen para mostrarla en el visor
   * @param image - Imagen seleccionada por el usuario
   */
  onSelectImage(image: ImageCard) {
    this.selectedImage = image; //Establece la imagen seleccionada
  }

  /**
   * @description Cierra el visor de imágenes y deselecciona la imagen actual
   */
  onCloseImage() {
    this.selectedImage = null; //Deselecciona la imagen, estableciendo null
  }
}
