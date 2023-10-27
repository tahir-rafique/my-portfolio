const body = document.getElementsByTagName('body')[0]
const mode = document.querySelector('.mode')
const topo = document.querySelector('.topo')
const menu = document.querySelector('.icon-menu')
const header = document.getElementsByTagName('header')[0]
const nav = document.querySelector('.nav')
const icon = document.querySelector('.icon')
const a = document.getElementsByTagName('a')
const projeto = document.getElementsByClassName('projeto')
const infors = document.getElementsByClassName('infors')
const sckills = document.querySelectorAll('.sckill')
const resumo = document.querySelector('p.resumo')


function ativar() {
  if(localStorage.color == 'dark-mode') {
      body.classList.add('dark-mode')
      icon.src = './assets/lua.png'
  }else {
      body.classList.remove('dark-mode')
      icon.src = './assets/sol.png'
  }
}

mode.addEventListener('click', () => {
   localStorage.color = body.classList.contains('dark-mode') ? 'linght' : 'dark-mode'
  
  if(localStorage.color == 'dark-mode') {
      body.classList.add('dark-mode')
      icon.src = './assets/lua.png'
  }else {
      body.classList.remove('dark-mode')
      icon.src = './assets/sol.png'
  }

})



// dark / linght
// mode.addEventListener('click', () => {
//   const color = body.classList.contains('dark-mode') ? 'dark-mode' : 'linght'
//   if (body.classList.contains('dark-mode')) {
//     body.classList.remove('dark-mode')
//     icon.src = './assets/lua.png'
//   } else {
//     body.classList.add('dark-mode')
//     icon.src = './assets/sol.png'
//   }
// })

// subir ao topo
document.addEventListener('scroll', () => {
  if (scrollY > 200) {
    topo.style.display = 'block'
  } else {
    topo.style.display = 'none'
  }
  // MUDAR COR DO HEADER
  if (scrollY > 1) {
    header.classList.add('ativarCor')
  } else {
    header.classList.remove('ativarCor')
  }
})

// menu- mobile
menu.addEventListener('click', () => {
  // header.classList.toggle('mobile-menu')

  if (header.classList.contains('mobile-menu')) {
    header.classList.remove('mobile-menu')
    menu.src = './assets/menu-aberto.png'
    body.style.overflow = 'auto'
  } else {
    header.classList.add('mobile-menu')
    menu.src = './assets/fechar.png'
    body.style.overflow = 'hidden'
  }
  for (let i = 0; i < 8; i++) {
    a[i].addEventListener('click', () => {
      header.classList.remove('mobile-menu')
      menu.src = './assets/menu-aberto.png'
      body.style.overflow = 'auto'
    })
  }
})

// mostrar resumo de habilidades
sckills.forEach(sckill => {
  sckill.addEventListener('mouseover', () => {
    for (let i = 0; i < sckills.length; i++) {
      if (sckill == sckills[i]) {
        switch (i) {
          case 0:
            resumo.textContent =
              'HTML é uma linguagem de marcação utilizada na construção de páginas na Web.'
            break
          case 1:
            resumo.textContent =
              'Cascading Style Sheets(CSS) é um mecanismo para adicionar estilos a uma página web.'
            break
          case 2:
            resumo.textContent =
              'JavaScript é uma linguagem de programação que permite implementar elementos dinâmicos em páginas web.'
            break
          case 3:
            resumo.textContent =
              'React é uma biblioteca JavaScript com foco em criar interfaces de usuários de forma componentizada.'
            break
          case 4:
            resumo.textContent =
              'O MySQL é um sistema gerenciador de banco de dados relacional de código aberto usado na maioria das aplicações gratuitas para gerir suas bases de dados. '
            break
          case 5:
            resumo.textContent =
              'Bootstrap é um framework front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples.'
            break
          case 6:
            resumo.textContent =
              'Node.js é um software de código aberto que permite a execução de códigos JavaScript fora de um navegador web'
            break
        }
      }
    }
  })
})

// não mostrar resumo de habilidades
sckills.forEach(sckill => {
  sckill.addEventListener('mouseout', () => {
    for (let i = 0; i < sckills.length; i++) {
      if (sckill == sckills[i]) {
        resumo.textContent = ''
      }
    }
  })
})

