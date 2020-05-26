import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatTableDataSource } from "@angular/material/table";
import { Issue } from "../../issue.model";
import { IssueService } from "src/app/issue.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  issues: Issue[];
  displayedColums = ["title", "responsible", "severity", "status", "actions"];

  constructor(private issueService: IssueService, private router: Router) {}

  ngOnInit(): void {
    this.fetchIssues();
  }

  fetchIssues() {
    this.issueService.getIssues().subscribe((data: Issue[]) => {
      this.issues = data;
      console.log("Data requested");
      console.log(this.issues);
    });
  }
}
