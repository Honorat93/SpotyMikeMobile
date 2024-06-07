import { Injectable , inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Song } from '../interface/song';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor() { }

  private apiUrl = 'http://localhost:3000';
  private http = inject (HttpClient);

  getSongs(): Observable<Song[]>{
    return this.http.get<Song[]>(`${this.apiUrl}/songs`);
  }
}
