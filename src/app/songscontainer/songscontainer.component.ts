import { Component, OnInit, Output } from '@angular/core';
import { AppComponent } from '../app.component';
import { CaratulaComponent } from '../caratula/caratula.component';
import { Song } from '../Song';
import { SongComponent } from '../song/song.component';

@Component({
  selector: 'app-songscontainer',
  templateUrl: './songscontainer.component.html',
  styleUrls: ['./songscontainer.component.css']
})
export class SongscontainerComponent implements OnInit {

  @Output() songs!:Song[];
  @Output() selectSong!:Song;
  static flagList:Boolean = false;

  constructor() { 
    this.songs =[
      (new SongComponent("mi carro","manolo",1956,"disco","estilo","caratula",1,1)),
      (new SongComponent("mi carro2","manolo2",19562,"disco2","estilo2","caratula2",12,12)),
      (new SongComponent("mi carro3","manolo3",1953,"disco3","estilo3","caratula3",33,33)),
      (new SongComponent("mi carro4","manolo4",1954,"disco4","estilo4","caratula4",44,44)),
      
  ];
    

  }

  ngOnInit(): void {
   
   
  }


  onItemSelector(value :any) {
    console.log(value);
    
    }

    public getSelectSong(value :any, value2:any){
      
      this.songs.forEach(song => {
        if(song.numDisco==value && song.numCancion==value2){
          this.selectSong = song;
          SongscontainerComponent.flagList=true;
        }
      });
      
    }

    flagList(){
      console.log(SongscontainerComponent.flagList);
      return SongscontainerComponent.flagList;
      console.log(SongscontainerComponent.flagList);
    }

    getSelect():Song{
      return this.selectSong;
    }

  // public sendSong(num:Number){
  //   let boton = document.getElementById('detail');
  //   if (boton.value==num){

  //   }
  // }

  // public add (song:Song){
  //   this.songs.push(song);
  // }

  //Mostrar listado de canciones
  //Permitir selecionar cancion a reproducir


}
