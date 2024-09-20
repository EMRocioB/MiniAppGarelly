import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCard } from '../image-card.model';

/**
 * @description Componente que muestra una imagen en un visor. Permite cerrar el visor y notificar al componente padre
 */
@Component({
  selector: 'app-image-viewer', //Selector para usar este componente en otros templates
  standalone: true, //Indica que este componente es independiente y puede ser usado sin un módulo principal
  imports: [CommonModule], //Importa las funcionalidades básicas de Angular, como directivas comunes
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']   
})
export class ImageViewerComponent {
  /**
   * @description Imagen que se muestra en el visor
   * Puede ser un objeto de tipo ImageCard o null si no hay imagen seleccionada
   */
  @Input() image: ImageCard | null = null;


  /**
   * @description Evento que se emite cuando se cierra el visor de imágenes
   * No se envía ningún dato con el evento
   */
  @Output() close = new EventEmitter<void>();


  /**
   * @description Método que se invoca para cerrar el visor
   * Emite el evento close para notificar al componente padre que se debe cerrar el visor
   */
  closeImage() {
    this.close.emit(); //Emite el evento para cerrar el visor
  }
}
