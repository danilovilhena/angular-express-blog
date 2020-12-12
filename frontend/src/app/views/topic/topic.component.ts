import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  topic = '';
  topicString = '';
  posts: any;
  author: any;
  
  constructor(private _route: ActivatedRoute, private _location: Location, private _backendService: BackendService) {
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.topic = params.topic;
    });

    this._backendService.getPostsByTopic(this.topic)
    .subscribe(
      data => {
        this.posts = data;
        this.posts.sort((a:any, b:any) => { return b.creation_date - a.creation_date});
        this.topicString = this.posts[0].topics[0]
        this.posts[0].topics.forEach((topic: any) => {
          if(topic.substr(0,3).toLowerCase() == topic.substr(0,3)){
            this.topicString = topic
          }
        });
      },
      error => console.log(error)
    )
  }

  navigateBack(){
    this._location.back();
  }
}
