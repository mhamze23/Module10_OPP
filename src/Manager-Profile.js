// Manager Profile
const managerProfile= (profile) => `
<div class="card m-4 shadow" style="width: 300px;">
<div class="card-header bg-danger text-white">
  <h3 class="card-title">${profile.getName()}</h3>
  <h4 class="card-subtitle mb-2">
    <i class="fas fa-mug-hot me-1"></i>
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
      <span class="fw-bold me-1">Office:</span>
      ${profile.getOffice()}
    </li>
  </ul>
</div>
</div>
`;

module.exports = managerProfile;


