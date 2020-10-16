import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ram } from 'src/app/models/ram.model';

@Injectable({
  providedIn: 'root'
})
export class RamService {
  private rams: Ram[] = [
    {
      id: 'rm1',
      merek: 'Kingston',
      model: 'HyperX Fury Black DDR4 2400 MHz',
      foto: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2020/6/15/101869928/101869928_63a318e6-f051-4a2f-8fed-15e31fd7c350_700_700',
      speed: 2400,
      ukuran: 4,
      stok: 17,
      harga: 480000
    },
    {
      id: 'rm2',
      merek: 'Team T-Force',
      model: 'Zeus DDR4 PC25600 Dual Channel',
      foto: 'https://ecs7.tokopedia.net/img/cache/700/hDjmkQ/2020/10/13/27253b81-3be0-424a-a79a-0260f2505fa7.jpg',
      speed: 3200,
      ukuran: 32,
      stok: 13,
      harga: 1690000
    },
    {
      id: 'rm3',
      merek: 'Gskill ',
      model: 'DDR4 TridentZ RGB PC25600 Dual Channel F4-3200C15D-32GTZR',
      foto: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2020/6/6/8672066/8672066_18af406c-3cdf-4d92-87ef-1ee9e1a16828_700_700.jpg',
      speed: 3200,
      ukuran: 32,
      stok: 8,
      harga: 3460000
    }
  ]
  constructor() { }
  
  getAllRam(){
    return this.rams;
  }

  getRam(ramId: string){
    return this.rams.find(ram => {
      return ram.id === ramId;
    });
  }

  addRam(form: NgForm){
    const idLength: number = this.rams.length + 1;
    this.rams.push(
      {
        id: 'rm'.concat(idLength.toString()),
        merek: form.value.merek,
        model: form.value.model,
        foto: form.value.imageUrl,
        speed: form.value.speed,
        ukuran: form.value.ukuran,
        stok: form.value.stok,
        harga: form.value.harga
      }
    )
  }

  deleteRam(ramId: string){
    this.rams = this.rams.filter(ram => {
      return ram.id !== ramId;
    });
  }

  editRam(form: NgForm, ramId: string){
    return {...this.rams.find(ram => {
      if(ram.id === ramId){
        ram.merek = form.value.merek,
        ram.model = form.value.model,
        ram.foto = form.value.imageUrl,
        ram.speed = form.value.speed,
        ram.ukuran = form.value.ukuran,
        ram.stok = form.value.stok,
        ram.harga = form.value.harga
      }
    })};
  }
}
