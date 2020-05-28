import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";

import { IssueService } from "src/app/issue.service";
import { Issue } from "../../issue.model";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"],
})
export class EditComponent implements OnInit {
  id: String;
  issue: any = {};
  updateForm: FormGroup;

  constructor(
    private issueService: IssueService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {}

  createForm() {
    this.updateForm = this.fb.group({
      title: ["", Validators.required],
      responsible: "",
      description: "",
      severity: "",
      status: "",
    });
  }

  ngOnInit(): void {}
}
