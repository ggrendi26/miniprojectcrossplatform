import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Gpu } from 'src/app/models/gpu.model';

@Injectable({
  providedIn: 'root'
})
export class GpuService {
  private gpus: Gpu[] = [
    {
      id: 'gp1',
      merek: 'Asus',
      model: 'GeForce GTX 1650 4GB',
      foto: 'http://www.jagatreview.com/wp-content/uploads/2019/04/ROG-STRIX-GTX1650-O4G-GAMING_boxvga.jpg',
      stok: 13,
      harga: 2305000
    },
    {
      id: 'gp2',
      merek: 'Leadtek',
      model: 'Nvidia Quadro Sync Card II',
      foto: 'https://www.leadtek.com/p_images/zoom/10781_1Z.jpg',
      stok: 7,
      harga: 17200000
    },
    {
      id: 'gp3',
      merek: 'Winfast',
      model: 'Geforce RTX 2080 Ti Hurricane',
      foto: 'https://www.leadtek.com/p_images/zoom/10820_1Z.jpg',
      stok: 6,
      harga: 21400000
    },
    
  ]

  constructor() { }

  getAllGpu(){
    return this.gpus;
  }

  getGpu(gpuId: string){
    return this.gpus.find(gpu => {
      return gpu.id === gpuId;
    });
  }

  addGpu(form: NgForm){
    const idLength: number = this.gpus.length + 1;
    this.gpus.push(
      {
        id: 'gp'.concat(idLength.toString()),
        merek: form.value.merek,
        model: form.value.model,
        foto: form.value.imageUrl,
        stok: form.value.stok,
        harga: form.value.harga
      }
    )
  }

  deleteGpu(gpuId: string){
    this.gpus = this.gpus.filter(gpu => {
      return gpu.id !== gpuId
    });
  }

  editGpu(form: NgForm, gpuId: string){
    return {...this.gpus.find(gpu => {
      if(gpu.id === gpuId){
        gpu.merek = form.value.merek,
        gpu.model = form.value.model,
        gpu.foto = form.value.imageUrl,
        gpu.stok = form.value.stok,
        gpu.harga = form.value.harga
      }
    })};
  }
}
