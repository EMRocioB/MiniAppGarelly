import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCard } from '../image-card.model';

/**
 * @description Componente que muestra una galería de imágenes. Permite seleccionar una imagen de la galería y notificar al componente padre sobre la selección.
 */
@Component({
  selector: 'app-gallery-images', //Selector para usar este componente en otros templates
  standalone: true, //Indica que este componente es independiente y puede ser usado sin un módulo principal
  imports: [CommonModule], //Importa las funcionalidades básicas de Angular, como directivas comunes
  templateUrl: './gallery-images.component.html', //Ruta del template HTML asociado.
  styleUrls: ['./gallery-images.component.css']   //Ruta de los estilos CSS asociados.
})


export class GalleryImagesComponent {
  /**
   * @description Arreglo de imágenes que recibe el componente desde el componente padre
   * Cada imagen debe cumplir con la estructura definida por la interfaz ImageCard
   */
  @Input() images: ImageCard[] = [];


  /**
   * @description Evento que emite cuando el usuario selecciona una imagen
   * El evento envía la imagen seleccionada al componente padre
   */
  @Output() selectImage = new EventEmitter<ImageCard>();



  /**
   * @description Maneja el clic sobre una imagen y emite el evento selectImage con la imagen seleccionada
   * @param image - Imagen que fue seleccionada por el usuario
   */
  onImageClick(image: ImageCard) {
    this.selectImage.emit(image); //Emite la imagen seleccionada al componente padre.
  }
}


