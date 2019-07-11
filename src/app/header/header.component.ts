import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from '../data-storage.service';
import { HttpClient } from '@angular/common/http';
// import {  } from "rxjs";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output()featureSelected = new EventEmitter<string>();
  constructor(private dataStorageService: DataStorageService, private http: HttpClient) { }

  ngOnInit() {
  }

  onSaveData(){
        this.dataStorageService.storeRecipe();
  }

  onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
