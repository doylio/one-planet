<script setup lang="ts">
import { shuffle } from "@/utils/array";
import { ref, computed, effect } from "vue";

const days = ref(1);

const avgAnnualDiet = [
  { name: "cow", qty: 0.1, emoji: "🐮" },
  { name: "pig", qty: 0.3, emoji: "🐷" },
  { name: "chicken", qty: 28.4, emoji: "🐔" },
  { name: "turkey", qty: 0.694, emoji: "🦃" },
];

const reducedEmojis = computed(() =>
  avgAnnualDiet.flatMap((animal) =>
    Array.from({ length: Math.round((animal.qty * days.value) / 7) }).fill(
      animal.emoji
    )
  )
);
</script>

<template>
  <div class="container">
    <p>
      Skipping meat
      <input
        :value="days"
        type="number"
        min="1"
        max="7"
        @change="(e) => (days = e.target?.value)"
      />
      days a week could save {{ reducedEmojis.length }} conscious animals from
      suffering this year.
    </p>
    <div class="animal-box">
      {{ shuffle(reducedEmojis).join("") }}
    </div>
  </div>
</template>

<style scoped>
.container {
  border: 1px solid grey;
  border-radius: 8px;
  margin: 1rem;
  max-width: max(90vw, 500px);
}

.animal-box {
  font-size: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

.animal-box div {
  width: 50px;
}

p {
  font-size: 1.3em;
}

input {
  width: 40px;
  font-size: 1em;
}
</style>
