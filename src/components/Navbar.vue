<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <!-- <a class="navbar-brand" href="#">Navbar</a> -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto justifiy-content-end">
      <li class="nav-item active">
        <a class="nav-link" href="/login">Login </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Sign in</a>
      </li>
      
    </ul>
    
  </div>
</nav>
</template>

<script>

export default {
  name: 'NavbarApp',
  props: {
    msg: String
  }
}

</script>
