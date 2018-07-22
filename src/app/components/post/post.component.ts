import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { PostService } from "../../services/post.service";

import { Post } from "../../models/Post";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post;

  constructor(
    private _route: ActivatedRoute,
    private _PostService: PostService,
    private _locatoin: Location
  ) { }

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id')
    this._PostService.getPost(id).subscribe(post => this.post = post)
    console.log(id);
  }

}
