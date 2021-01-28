import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

@Component({
  selector: "app-discover",
  templateUrl: "./discover.component.html",
  styleUrls: ["./discover.component.css"]
})
export class DiscoverComponent {
  bookId: string;
  book: any = {};
  
  constructor(private apollo: Apollo) {}

  getAuthorNames(authors) {
    if (authors && authors.length > 1)
      return authors.reduce((acc, cur) => acc.name + ", " + cur.name);
    else if (authors && authors.length == 0) return authors[0].name;
  }

  findBook() {
    
    this.apollo
      .query<any>({
        query: gql`
          query($id: ID!) {
            
              title
              content
              authors {
              
              }
            }
          
        `,
      
      })
     
  }
}
