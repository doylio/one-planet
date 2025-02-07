<template>
  <div class="image-content-layout" :class="{ reverse: reverse }">
    <div class="content-section">
      <slot></slot>
    </div>
    <div class="image-section">
      <img :src="imageUrl" :alt="altText" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  imageUrl: string;
  altText?: string;
  reverse?: boolean;
}

defineProps<Props>();
</script>

<style scoped>
.image-content-layout {
  display: flex;
  gap: 2rem;
  align-items: center;
  padding: 1rem;
  max-width: 1100px;
  margin: 0 auto;
}

.content-section {
  flex: 1;
}

.image-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-section img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.image-content-layout.reverse {
  flex-direction: row-reverse;
}

@media (max-width: 768px) {
  .image-content-layout {
    flex-direction: column;
  }

  .image-content-layout.reverse {
    flex-direction: column; /* Maintain stacked layout on mobile */
  }

  .image-section {
    order: -1; /* Places image above content on mobile */
  }
}
</style>
