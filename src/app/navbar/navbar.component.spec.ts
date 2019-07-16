import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { HomeComponent } from '../home/home.component';
import { DetailsComponent } from '../details/details.component';
import { Routes, RouterModule } from '@angular/router';
import { Router, RouterOutlet,ActivatedRoute } from "@angular/router";
import { OrderModule } from 'ngx-order-pipe';
import { FormsModule }   from '@angular/forms';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let mockRouter;
  let location, router: Router;
  const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'details/:nameGit', component: DetailsComponent }
  ];

  beforeEach(async(() => {
    mockRouter = { navigate: jasmine.createSpy('navigate') };
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent, HomeComponent, DetailsComponent ],
      imports: [FormsModule,RouterModule.forRoot(routes),OrderModule],
      providers: [{ provide: Router, useValue: mockRouter}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create NavbarComponent', () => {
    expect(component).toBeTruthy();
  });

  it('search hansolo repo', () => {
    fixture.detectChanges();  
    component.onClickSubmit('hansolo');
    component.redirecToDetails('hansolo');
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/details/hansolo']); 
  });

  it('Back to Home', () => {
    fixture.detectChanges();  
    component.goHome();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/']);
  });
});
