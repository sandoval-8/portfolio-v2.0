import { Component, OnInit } from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //----------------------------------

    interval(30).subscribe(segundo =>{
      this.textoFinal = this.textoFinal.concat(this.texto.charAt(this.position));
      this.position++;
    });
  }
  contadorPalabra = 0;
  strongItem = 0;
  palabra = 0;
  letra = 0;
  largo = 0;
//===========================================================
  arrayTexto:string[] = [];
  palabrasReservadas:string[] = ['public','class','method'];
  textoFormateado:string = '';
  position = 0;

  textoFinal:string = '';
  texto:string = "@Override\n" +
    "public String encode(CharSequence rawPassword) {\n" +
    "   if (rawPassword == null) {\n" +
    "       throw new IllegalArgumentException('rawPassword cannot be null');\n" +
    "   }\n" +
    "   String salt = getSalt();\n" +
    "   return BCrypt.hashpw(rawPassword.toString(), salt);\n" +
    "}\n" +
    " \n" +
    "private String getSalt() {\n" +
    "   if (this.random != null) {\n" +
    "       return BCrypt.gensalt(this.version.getVersion(), this.strength, this.random);\n" +
    "   }\n" +
    "   return BCrypt.gensalt(this.version.getVersion(), this.strength);\n" +
    "}"


}

//pinta el array en texto con etiqueta
/*pintar(arrayTexto:string[]):string{
  let texto:string = '';
  for(let palabra of arrayTexto){
    for (let reservada of this.palabrasReservadas){
      if (palabra==reservada){
        texto.concat(' <div style="color: mediumorchid">' +palabra+ '</div>');
        console.log('Entro al IF');
        break;
      }
    }
  }
  return texto;
} */

//------------------------------------------------------------------
/*  escribir(text:string, arrayPosition:number){
    interval(80).subscribe(() => {
//      this.text3 = this.text3.concat(this.texto3.charAt(this.position));
      this.texto = this.texto.concat(text.charAt(this.position));
      this.position++;
    });
  } */

/* SEGUIR REVISANDO ESTE CODIGO GAROMPA PARA PONERLE COLOR A TU VIDA.
  let palabra = matriz[this.palabra];
      let letra = palabra.charAt(this.letra);

      if(letra.charAt(0)=='<'){ //DECIDE SI COMIENZA CON '<' -------------------
        palabra = palabra.split('<R>')[1];
      //  let palabraDeletreada = palabraSinTag.charAt()
        if (elemento!=null){
          elemento.insertAdjacentHTML("beforebegin", '<strong class="rojo"></strong>'); //CREAMOS EL <strong>

          let strong = document.getElementsByClassName('rojo').item(this.strongItem); //Nos metemos dentro.
          if(this.contadorPalabra < palabra.length){
            if(strong!=null){
              console.log("Entra al strong")
              strong.insertAdjacentHTML('beforeend', palabra.charAt(this.contadorPalabra));
            }else {
              console.log("no entra al strong")
            }
            this.contadorPalabra++;
          }
        }
      } //-------------------------------------------------------------------------
      if (elemento!=null){
        elemento.insertAdjacentHTML("beforebegin", letra);
      }
      if(this.letra < palabra.length){
        this.letra ++;
      }else {
        this.palabra++;
        this.letra = 0;
      }
 */

