import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Motherboard } from 'src/app/models/motherboard.model';

@Injectable({
  providedIn: 'root'
})
export class MotherboardService {
  private motherboards: Motherboard[] = [
    {
      id: 'mb1',
      merek: 'Gigabyte',
      model: 'Geforce GTX 1660 Ti AORUS',
      foto: 'https://www.asrock.com/mb/photo/Z390%20Phantom%20Gaming%209(M1).png',
      chipset: 'GeForce® GTX 1660 Ti',
      merek_proces: 'Intel',
      stok: 16,
      harga: 4395000
    },
    {
      id: 'mb2',
      merek: 'ASUS',
      model: 'ROG Maximus XII Hero',
      foto: 'https://images-na.ssl-images-amazon.com/images/I/81EFM7JVPKL._AC_SL1500_.jpg',
      chipset: 'LGA 1200',
      merek_proces: 'Intel',
      stok: 10,
      harga: 5645000
    },
    {
      id: 'mb3',
      merek: 'MSI',
      model: 'X99A TOMAHAWK',
      foto: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2017/4/25/5438964/5438964_9e1fe22d-ea82-4731-a6e3-269246f6b376_750_499.jpg',
      chipset: 'AM4',
      merek_proces: 'Intel',
      stok: 13,
      harga: 4270000
    },
  ]
  constructor() { }

  getAllMotherboard(){
    return this.motherboards;
  }

  getMotherboard(motherboardId: string){
    return this.motherboards.find(motherboard => {
      return motherboard.id === motherboardId;
    });
  }

  addMotherboard(form: NgForm){
    const idLength: number = this.motherboards.length + 1;
    this.motherboards.push(
      {
        id: 'mb'.concat(idLength.toString()),
        merek: form.value.merek,
        model: form.value.model,
        foto: form.value.imageUrl,
        chipset: form.value.chipset,
        merek_proces: form.value.merek_proces,
        stok: form.value.stok,
        harga: form.value.harga
      }
    )
  }

  deleteMotherboard(motherboardId: string){
    this.motherboards = this.motherboards.filter(motherboard => {
      return motherboard.id !== motherboardId;
    })
  }

  editMotherboard(form: NgForm, motherboardId: string){
    return {...this.motherboards.find(motherboard => {
      if(motherboard.id === motherboardId){
        motherboard.merek = form.value.merek,
        motherboard.model = form.value.model,
        motherboard.foto = form.value.imageUrl,
        motherboard.chipset = form.value.chipset,
        motherboard.merek_proces = form.value.merek_proces,
        motherboard.stok = form.value.stok,
        motherboard.harga = form.value.harga
      }
    })};
  }
}
