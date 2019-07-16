import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitHubService } from '../API/gitHubApi/git-hub.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private apiService: GitHubService,private router: Router) { }

  public nameGit;
  public user;
  public repositories;
  public load = true;
  public notData = false;
  public order: string = 'stargazers_count';

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.nameGit = params.get('nameGit');
      this.getUserGit(this.nameGit);
    });
  }

  getUserGit(name){
    this.apiService.getUser(name).subscribe((res :any)=>{
        console.log(res)
        this.user = res;
        this.load = false
        this.getRepositories(name);
    }, error => {
      this.router.navigate(['/notFound']);
    });  
  }
  getRepositories(name){
    this.apiService.getUserDetail(this.nameGit).subscribe((res)=>{
      console.log(res)
        this.repositories = res;
    }); 
  }

}
