function showNavigation() {
  let navMenu = document.querySelector('.menu-navbar');
  if (navMenu.style.display === 'flex') { 
      navMenu.style.display = 'none'
  } else { 
      navMenu.style.display = 'flex'
  }
}

// Quando clicar no menu hamburguer vai executar a funçao showNavigation.
// a funçao vai criar uma variável que vai selecionar a ul com a class .menu-navbar.
// se a navMenu tiver um estilo display flex, vai ter uma navMenu com estilo display none(none: retira o elemento do layout)
// se não a navMenu vai ter um estilo display flex.