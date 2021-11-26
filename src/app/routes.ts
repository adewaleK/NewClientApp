import { Routes } from "@angular/router";
import { AllbooksComponent } from "./components/allbooks/allbooks.component";
import { BookComponent } from "./components/book/book.component";
import { CategoryComponent } from "./components/category/category.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";

export const appRoutes : Routes = [
    {path:"", component: HomeComponent},
    {path:"home", component: HomeComponent},
    {path:"book", component: BookComponent},
    {path:"category", component: CategoryComponent},
    {path:"books", component:AllbooksComponent},
    {path:"login", component: LoginComponent},
    {path:"signup", component: SignupComponent},
];