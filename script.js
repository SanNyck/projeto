function toggleMode() {
 const html = document.documentElement
 html.classList.toggle("light")
 
 
 const img = document.querySelector("#profile img")
 
 if(html.classList.contains('light')) {
  img.setAttribute('src','./assets/avatar.png')
 
 }else {
  img.setAttribute('src','./assets/avatar-light.png')
 }
 //pegar a tag img

 //se tiver light mode adicionar a imagem light
 //se tiver sem light mode , manter a imagem normal
 //substituir a imagem
}