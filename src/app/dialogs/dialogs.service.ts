import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class DialogsService {
  confirm(message?: string): Observable<boolean> {
    const confirmation = window.confirm(message || 'Is it OK?');
    return of(confirmation);
  }
}
