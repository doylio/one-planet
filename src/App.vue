<script setup lang="ts">
import { computed } from "vue";
import EmojiScroller from "./components/EmojiScroller.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import sections from "./constants/scroll-sections";

const sortedSections = computed(() =>
  [...sections].sort((a, b) => a.killRate - b.killRate)
);
</script>

<template>
  <Header />

  <main>
    <div v-for="section in sortedSections" :key="section.title">
      <EmojiScroller
        :description="section.description"
        :emoji="section.emoji"
        :killRate="section.killRate"
        :speed="section.speed"
        :numberSource="section.numberSource"
        :title="section.title"
      />
    </div>
  </main>

  <Footer />
</template>

<style scoped>
main {
  overflow-x: hidden;
}
</style>
