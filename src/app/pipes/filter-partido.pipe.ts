import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPartido'
})
export class FilterPartidoPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    // if(arg ==='' || arg.length<3) return value;
    const resultPosts=[];
    for(const post of value){
      if(post.equipo1.toLowerCase().indexOf(arg.toLowerCase())>-1){
        // console.log("Si jala");
        resultPosts.push(post)

      }
      else if(post.equipo2.toLowerCase().indexOf(arg.toLowerCase())>-1){
        resultPosts.push(post)
      }
      else if(post.horario.toLowerCase().indexOf(arg.toLowerCase())>-1){
        resultPosts.push(post)
      }
      else if(post.estadio.toLowerCase().indexOf(arg.toLowerCase())>-1){
        resultPosts.push(post)
      }
      else if(post.lugar.toLowerCase().indexOf(arg.toLowerCase())>-1){
        resultPosts.push(post)
      }
      else if(post.torneo.toLowerCase().indexOf(arg.toLowerCase())>-1){
        resultPosts.push(post)
      }

    };
    return resultPosts;


  }

}
