import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Barang } from 'src/app/models/barang.model';
import { CpuService } from '../cpu/cpu.service';
import { GpuService } from '../gpu/gpu.service';
import { MotherboardService } from '../motherboard/motherboard.service';
import { RamService } from '../ram/ram.service';

@Injectable({
  providedIn: 'root'
})
export class BarangService {

  barangs: Barang[] = [];

  constructor(
    private cpuService: CpuService,
    private motherboardService: MotherboardService,
    private gpuService: GpuService,
    private ramService: RamService
  ) {
    this.saveAllBarang();
  }

  saveAllBarang(){
    this.cpuService.getAllCpu().forEach(cpu => {
      this.barangs.push(
        {
          id: cpu.id,
          merek: cpu.merek,
          model: cpu.model,
          foto: cpu.foto,
          stok: cpu.stok,
          harga: cpu.harga
        }
      )
    });

    this.gpuService.getAllGpu().forEach(gpu => {
      this.barangs.push(
        {
          id: gpu.id,
          merek: gpu.merek,
          model: gpu.model,
          foto: gpu.foto,
          stok: gpu.stok,
          harga: gpu.harga
        }
      )
    });

    this.motherboardService.getAllMotherboard().forEach(motherboard => {
      this.barangs.push(
        {
          id: motherboard.id,
          merek: motherboard.merek,
          model: motherboard.model,
          foto: motherboard.foto,
          stok: motherboard.stok,
          harga: motherboard.harga
        }
      )
    });
    
    this.ramService.getAllRam().forEach(ram => {
      this.barangs.push(
        {
          id: ram.id,
          merek: ram.merek,
          model: ram.model,
          foto: ram.foto,
          stok: ram.stok,
          harga: ram.harga
        }
      )
    });
  }

  saveCpu(){
    const last: any =  this.cpuService.getAllCpu()[this.cpuService.getAllCpu().length - 1];
    this.barangs.push(last)
  }

  saveGpu(){
    const last: any = this.gpuService.getAllGpu()[this.gpuService.getAllGpu().length - 1];
    this.barangs.push(last);
  }

  saveMother(){
    const last: any = this.motherboardService.getAllMotherboard()[this.motherboardService.getAllMotherboard().length - 1];
    this.barangs.push(last);
  }

  saveRam(){
    const last: any = this.ramService.getAllRam()[this.ramService.getAllRam().length - 1];
    this.barangs.push(last);
  }

  getAllBarang(){
    return this.barangs;
  }

  getBarangMTZ(){
    return this.barangs.filter(barang =>{
      return barang.stok > 0;
    })
  }

  deleteBarang(barangId: string){
    this.barangs = this.barangs.filter(barang => {
      return barang.id !== barangId;
    })
  }

  editBarang(form: NgForm, barangId: string){
    return {...this.barangs.find(barang => {
      if(barang.id === barangId){
          barang.merek = form.value.merek,
          barang.model = form.value.model,
          barang.foto = form.value.imageUrl,
          barang.stok = form.value.stock,
          barang.harga = form.value.harga
      }
    })}
  }

}