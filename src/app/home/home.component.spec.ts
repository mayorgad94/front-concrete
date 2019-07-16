import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { DetailsComponent } from '../details/details.component';
import { FormsModule }   from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { OrderModule } from 'ngx-order-pipe';
import { Router, RouterOutlet,ActivatedRoute } from "@angular/router";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockRouter;
  let location, router: Router;
  const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'details/:nameGit', component: DetailsComponent }
  ];

  beforeEach(async(() => {
    mockRouter = { navigate: jasmine.createSpy('navigate') };  
    TestBed.configureTestingModule({
      declarations: [ HomeComponent,DetailsComponent,NavbarComponent ],
      imports: [FormsModule,RouterModule.forRoot(routes),OrderModule],
      providers: [{ provide: Router, useValue: mockRouter}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create HomeComponent', () => {
    expect(component).toBeTruthy();
  });

  it('search hansolo repo', () => {
    fixture.detectChanges();  
    component.onClickSubmit('hansolo');
    component.redirecToDetails('hansolo');
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/details/hansolo']); 
  });

});

