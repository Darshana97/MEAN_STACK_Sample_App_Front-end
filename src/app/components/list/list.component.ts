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
  constructor(private issueService: IssueService) {}

  ngOnInit(): void {
    this.issueService.getIssues().subscribe((issues) => {
      console.log(issues);
    });
  }
}
