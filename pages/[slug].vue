<template>
    <div>
      <NuxtLink to="/"><p>zopa</p></NuxtLink>
      <p>{{ response }}</p>
    </div>
</template>

<script setup>
const route  = useRoute()
const slug = computed(() => `${route.params.slug}`)

  
const {data: response}  = await useFetch(`api/${slug.value}`)


// useHead({
//   title: response.value.meta.title,
//   meta: [
//     { name: 'description', content: 'response.value.meta.description'}
//   ]  
// });
</script>

<style lang="scss" scoped>

</style>