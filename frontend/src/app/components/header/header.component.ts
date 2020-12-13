import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './header.responsivity.css']
})
export class HeaderComponent implements OnInit {

  user: any;

  isHome = document.location.pathname == '/';
  isAbout = document.location.pathname.includes('sobre');
  isTopics = document.location.pathname.includes('assunto');
  loggedIn = false;
  
  constructor(private _backendService: BackendService, private _router: Router) {
    this._backendService.getUser()
    .subscribe(
      data => {
        console.log(data)
        this.user = data
        this.loggedIn = true
      },
      error => console.log(error)
    )
  }

  ngOnInit(): void { 

  }

  logout(){
    localStorage.removeItem('token')
    this.loggedIn = false
    this._router.navigate(['/'])
  }

  submitForm(){
    let query = (document.getElementById('searchInput') as HTMLInputElement).value
    query = this.slugify(query)
    this._router.navigate(['/busca', query]).then(() => window.location.reload());
  }

  encode(str: string){
    return encodeURIComponent(str)
  }

  slugify(str: string){
    str = str.replace(/^\s+|\s+$/g, '');
    str = str.toLowerCase();

    var from = "àáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to = "aaaaaeeeeiiiioooouuuunc------";
  
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
  
    str = str.replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  
    return str;
  }
}
