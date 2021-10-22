const linksSocialMedia = {
  github: 'ozniGabriel',
  youtube: 'ozni_gabriel',
  instagram: 'ozni_gabriel',
  facebook: 'ozni_gabiel',
  twitter: 'ozni_gabriel'
}

function changeSocialMediaLinks() {
  for (let li of socialMedia.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

function getGithubProfileInfos() {
  let url = `https://api.github.com/users/${linksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(json => setInfosOfGithub(json))
}

function setInfosOfGithub(data) {
  userImage.src = data.avatar_url
  login.textContent = data.name
  userLoginGithub.textContent = data.login
  userLink.href = data.html_url
  bio.textContent = data.bio
}
changeSocialMediaLinks()
getGithubProfileInfos()
