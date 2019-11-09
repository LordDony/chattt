import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'chat';
    public user: any = [];
    public is_active: boolean;
    constructor(private auth: AuthService, private router: Router) {
       
    }

    logout() {
        this.auth.logout(this.user).subscribe(res => {
            localStorage.removeItem('auth');
            this.router.navigate(['/login']);
        }, (error) => console.log(error.message));
    }
}
