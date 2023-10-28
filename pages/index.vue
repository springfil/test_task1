<template>
  <div class="article_list_block">
    <div v-for="(articleBlock, id) in response.body[0].data.articles" :key="id">
      <img class="article_image_block" :src="articleBlock.image" :alt="`Изображение для статьи ${id + 1}`">
      <p class="article_image_block">{{ articleBlock.title }}</p>
      <button>
        <div>
          {{ articleBlock.link }}
          <NuxtLink :to="articleBlock.link" @click="handleLinkClick(articleBlock.link)">Читать</NuxtLink>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup>

const { data: response } = await useFetch("/api/home", {
  method: "GET",
});

const handleLinkClick = (link) => {
  console.log(`Нажата ссылка: ${link}`);
};

useHead({
    title: response.value.meta.title,
    meta: [{ name: "description", content: "response.value.meta.description" }],
});

</script>

<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}
.card-container {
    display: flex;
    justify-content: center;
}
.card {
    margin: 10px;
    border: 1px solid #ccc;
    text-align: center;
}

.card-img {
    width: 427px;
    height: 320px;
    border-radius: 2px;
}
.btn {
    display: inline-block;
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
}
</style>
