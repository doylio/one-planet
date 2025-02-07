<script setup lang="ts">
import type { ScrollSection } from "@/constants/scroll-sections";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const { killRate, speed, description } = defineProps<ScrollSection>();

const emojiSize = ref(50);

const windowWidth = ref(window.innerWidth);
const updateWidth = () => {
  windowWidth.value = window.innerWidth;
};
onMounted(() => {
  window.addEventListener("resize", updateWidth);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", updateWidth);
});

const numRows = Math.ceil(killRate / speed);

const numColumns = computed(
  () => Math.ceil(windowWidth.value / emojiSize.value) - 3
);

const animationTime = computed(() => numRows / killRate);

const parsedDescription = computed(() => {
  return description.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener" class="inline-link">$1</a>'
  );
});
</script>

<template>
  <div
    class="emoji-scroller"
    :style="{
      '--emoji-size': `${emojiSize}px`,
      '--animation-time': `${animationTime}s`,
    }"
  >
    <div class="header">
      <h1>
        {{ title }}
        <span class="kill-rate"
          >{{ killRate }} / second

          <sup class="source-link">
            <a :href="numberSource"> 1</a>
          </sup>
        </span>
      </h1>
      <p v-html="parsedDescription"></p>
    </div>
    <div class="scroll-box">
      <div class="scroller">
        <div v-for="i in numRows" :key="i">
          <div class="emoji-row">
            <div v-for="i in 4" :key="i">
              <div class="emoji-box">{{ killEmoji ?? "💀" }}</div>
            </div>

            <div v-for="i in numColumns" :key="i">
              <div class="emoji-box">{{ emoji[i % emoji.length] }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.emoji-scroller {
  margin-bottom: 2rem;
  min-height: 100vh;
  margin: 0 auto;
  width: 100%;
}

.header {
  margin: 2rem;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

.kill-rate {
  font-size: 1.2rem;
  position: relative;
  color: #777;
}

.scroll-box {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
}

.scroller {
  position: relative;
  animation: scroll var(--animation-time) linear infinite;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(var(--emoji-size));
  }
}

.emoji-row {
  display: flex;
  flex-direction: row-reverse;
  white-space: nowrap;
  align-items: flex-end;
}

.emoji-box {
  transform: scaleX(-1);
  width: var(--emoji-size);
  height: var(--emoji-size);
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

:deep(.inline-link) {
  color: #3498db;
  text-decoration: none;
  border-bottom: 1px solid currentColor;
}

:deep(.inline-link:hover) {
  opacity: 0.8;
}
</style>
