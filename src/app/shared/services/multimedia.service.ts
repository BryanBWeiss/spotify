import { EventEmitter, Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { BehaviorSubject, Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
callback: EventEmitter<any> = new EventEmitter<any>()

public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined)
public audio!: HTMLAudioElement

constructor() {
  this.audio = new Audio()

  this.trackInfo$.subscribe(responseOK => {
    if (responseOK) {
      this.setAudio(responseOK)
    }
  })
  this.listenAllEvents()
 }

private listenAllEvents(): void{
  
}

 public setAudio (track: TrackModel): void{
  // console.log('sss', track)
 this.audio.src = `http://localhost:3000/${track.url}`
  this.audio.play()
 }
//  this.audio.src = `http://localhost:3001/api/1.0${track.url}`
}
