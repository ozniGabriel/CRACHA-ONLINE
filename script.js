const linksSocialMedia = {
  github: 'ozniGabriel',
  youtube: 'ozni_gabriel',
  instagram: 'ozni_gabriel',
  facebook: 'ozni_gabiel',
  twitter: 'ozni_gabriel'
}

/* ESSA FUNÇÃO ADICIONA OS LINKS DAS MINHAS REDES SOCIAIS NAS TAGS (a) DA PÁGINA */
function changeSocialMediaLinks(links) {
  for (let li of socialMedia.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${links[social]}`
  }
  return getGithubProfileInfos(links)
}

/* ESSA FUNÇÃO CONSOME A API DO GITHUB, QUE RETORNARÁ MEUS DADOS PRA EXIBIR NA PÁGINA */
function getGithubProfileInfos(links) {
  let url = `https://api.github.com/users/${links.github}`
  fetch(url)
    .then(response => response.json())
    .then(json => showInfosOfGithub(json))
}

/* ESSA FUNÇÃO EXIBI NA PÁGINA AS INFORMAÇÕES QUE A API RETORNOU */
function showInfosOfGithub(data) {
  userImage.src = data.avatar_url
  login.textContent = data.name
  userLoginGithub.textContent = data.login
  userLink.href = data.html_url
  bio.textContent = data.bio
}

personalize.addEventListener('click', getNewData)

/* ESSA FUNÇÃO PEGA DO USUARIO NOVOS DADOS PARA PERSONALIZAR A PÁGINA */
function getNewData() {
  const newLinksSocialMedia = {
    github: window.prompt('Digite seu Login do Github'),
    youtube: window.prompt('Digite seu Login do Youtube'),
    instagram: window.prompt('Digite seu Login do Instagram'),
    facebook: window.prompt('Digite seu Login do Facebook'),
    twitter: window.prompt('Digite seu Login do Twitter')
  }
  return changeSocialMediaLinks(newLinksSocialMedia)
}

changeSocialMediaLinks(linksSocialMedia)
