import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateComponent } from "./components/create/create.component";
import { EditComponent } from "./components/edit/edit.component";
import { ListComponent } from "./components/list/list.component";

const routes: Routes = [
  { path: "create", component: CreateComponent },
  { path: "edit/:id", component: EditComponent },
  { path: "list", component: ListComponent },
  { path: "", redirectTo: "list", pathMatch: "full" },//when you type wrong url it must go to not found page so that use pathmatch =full
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
