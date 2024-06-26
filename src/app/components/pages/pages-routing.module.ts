import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilesComponent } from './files/files.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '**',
                redirectTo: 'main',
            },
            {
                path: 'files',
                component: FilesComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule { }
