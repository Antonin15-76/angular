import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Race } from "./race";

export class RaceService {
    url = "http://www.ludivinecrepin.fr/api/";

    httpOption = {
      headers: new HttpHeaders({
        'Content-type' : 'application/json',
      })
    }
  
    constructor(private http: HttpClient) { }
  
    getAllRaces(): Observable<Race[]>{
      return this.http.get<Race[]>(this.url+'race-get.php', this.httpOption);
    }
  
    getRace(id: number): Observable<Race> {
      return this.http.get<Race>(this.url + 'race-get-id.php/' + id, this.httpOption);
    }
  
    addRace(p: Race): void{
      this.http.post<Race>(this.url + 'race-add.php', p, this.httpOption).subscribe();
    }
  
    updateRace(p: Race): Observable<Race> {
      return this.http.put<Race>(this.url + 'race-update.php', p, this.httpOption);
    }
  }  

