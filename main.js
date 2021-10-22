const LinksSocialMedia = {
  github: 'palomapatricia',
  youtube: 'UCubz1pH3h8DvCPuunyT5VCQ',
  facebook: 'palomapatricia.18',
  instagram: 'palomapatricia_',
  twitter: 'rocketseat'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `http://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
    })
}

getGitHubProfileInfos()
