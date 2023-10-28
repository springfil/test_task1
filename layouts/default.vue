<template>
    <div class="wrapper">
        <header>
            <div class="header">
                <NuxtLink to="/"><img class="header__logo" src="~/assets/img/logo.png" alt="logo"></NuxtLink>
            </div>
        </header>
        <main class="container">
        <slot />
        </main>
        <footer>
            <h1>FOOTER</h1>
        </footer>
    </div>
</template>

<style lang="scss" scoped>

.header {
  display: flex;
  justify-content: center;

  &__logo {
    padding-top: 28px;
    padding-bottom: 25px;
  }
}

footer {
  height: 85px;
  background-color: black;
}
</style>