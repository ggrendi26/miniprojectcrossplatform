import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cpu } from 'src/app/models/cpu.model';

@Injectable({
  providedIn: 'root'
})
export class CpuService {
  private cpus: Cpu[] = [
    {
      id: 'cp1',
      merek: 'AMD',
      model: 'A10-5800K',
      foto: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/8/27/28366187/28366187_eee98eaa-0b64-4dfc-a720-ebfb31fe67a1_682_682.jpg',
      base_clock: 3.8,
      boost_clock: 4.3,
      core: 4,
      thread: 8,
      stok: 15,
      harga: 2077000
    },
    {
      id: 'cp2',
      merek: 'Intel',
      model: 'Core i7-6700K',
      foto: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2016/9/22/2678891/2678891_3532f784-a53d-41ab-b9a5-3ab6050c43bd.jpg',
      base_clock: 4.0,
      boost_clock: 4.2,
      core: 4,
      thread: 8,
      stok: 10,
      harga: 5615000
    },
    {
      id: 'cp3',
      merek: 'AMD',
      model: 'RYZEN 9 3900X',
      foto: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/7/22/2537679/2537679_5bec9a82-ea29-4f5c-bb9c-142460b04376_800_800',
      base_clock: 3.8,
      boost_clock: 4.6,
      core: 12,
      thread: 24,
      stok: 8,
      harga: 7675000
    },
  ]
  constructor() { }
  
  getAllCpu(){
    return this.cpus;
  }
  
  getCpu(cpuId: string){
    return this.cpus.find(cpu =>{
      return cpu.id == cpuId;
    });
  }
  addCpu(form: NgForm){
    const idLength: number = this.cpus.length + 1;
    this.cpus.push(
      {
        id: 'cp'.concat(idLength.toString()),
        merek: form.value.merek,
        model: form.value.model,
        foto: form.value.imageUrl,
        base_clock: form.value.base_clock,
        boost_clock: form.value.boost_clock,
        core: form.value.core,
        thread: form.value.thread,
        stok: form.value.stok,
        harga: form.value.harga
      }
    )
  }

  deleteCpu(cpuId: string){
    this.cpus = this.cpus.filter(cpu => {
      return cpu.id !== cpuId;
    });
  }

  editCpu(form: NgForm, cpuId: string){
    return {...this.cpus.find(cpu => {
      if(cpu.id === cpuId){
        cpu.merek = form.value.merek,
        cpu.model = form.value.model,
        cpu.foto = form.value.imageUrl,
        cpu.base_clock = form.value.base_clock,
        cpu.boost_clock = form.value.boost_clock,
        cpu.core = form.value.core,
        cpu.thread = form.value.thread,
        cpu.stok = form.value.stok,
        cpu.harga = form.value.harga
      }
    })}
  }
}
