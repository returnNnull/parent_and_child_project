<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="container">
      <div class="logo-wrapper">
        <img alt="Alef logo" class="logo" src="@/assets/logo.svg" />

      </div>


      <div class="nav-wrapper">

        <nav>
          <RouterLink to="/">Форма</RouterLink>
          <RouterLink to="/preview">Превью</RouterLink>
        </nav>
      </div>
    </div>
  </header>

    <RouterView />



</template>

<style scoped>



header {
  position: fixed;
  height: var(--header-height);
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  background: var(--vt-c-white);
  box-shadow: 0 1px 0 0 rgba(17, 17, 17, 0.10);
  z-index: 99999;
}

footer{
  position: absolute;
  display: flex;
  justify-content: center;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #fafafa
}

footer > * {
  margin: 1em;
}


nav {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

}


.nav-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.logo-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5em 1em;
}

.logo {
  width: auto;
  height: 100%;
  object-fit: contain;
}
</style>
