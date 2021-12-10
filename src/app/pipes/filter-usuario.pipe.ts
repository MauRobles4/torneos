import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUsuario'
})
export class FilterUsuarioPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    // if(arg ==='' || arg.length<3) return value;
    const resultPosts = [];
    for (const post of value) {
      if (post.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        // console.log("Si jala");
        resultPosts.push(post)

      }
      else if (post.correo.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(post)
      }
      else if (post.tipo.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(post)
      }

    };
    return resultPosts;
  }

}
