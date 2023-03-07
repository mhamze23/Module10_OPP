// Profile Cards
const headerCard= (cards) => `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Profiles</title>

  <!-- Bootstrap -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">

  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body class="pb-5">

  <!-- Header -->
  <header class="bg-primary py-3 mb-4">
    <h1 class="text-center text-white">
      <i class="fas fa-users mr-1"></i>
      My Team
    </h1>
  </header>

  <!-- Profile Cards Container -->
  <main class="container">
    <div class="row d-flex justify-content-center align-items-center">
      ${cards}
    </div>
  </main>

</body>

</html>

`;


module.exports = headerCard;