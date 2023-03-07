// Engineer Profile
const engineerProfile = (profile) => `
<div class="card m-3 shadow" style="width: 300px;">
  <div class="card-header bg-danger text-white">
    <h3 class="card-title">${profile.getName()}</h3>
    <h4 class="card-subtitle">
      <i class="fas fa-glasses me-1"></i>
      ${profile.getRole()}
    </h4>
  </div>
  <div class="card-body bg-light">
    <ul class="list-group">
      <li class="list-group-item">
        <span class="fw-bold me-1">ID:</span>
        ${profile.getID()}
      </li>
      <li class="list-group-item">
        <span class="fw-bold me-1">Email:</span>
        <a href="mailto:${profile.getEmail()}">${profile.getEmail()}</a>
      </li>
      <li class="list-group-item">
        <span class="fw-bold me-1">GitHub:</span>
        <a href="http://www.github.com/${profile.getGithub()}">${profile.getGithub()}</a>
      </li>
    </ul>
  </div>
</div>
`;


module.exports = engineerProfile;