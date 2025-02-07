<script setup lang="ts">
interface Props {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  width?: string;
}

withDefaults(defineProps<Props>(), {
  variant: "primary",
  size: "medium",
  target: "_self",
});
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    class="animated-button"
    :class="[`variant-${variant}`, `size-${size}`]"
    :href="href"
    :target="href ? target : undefined"
    :rel="target === '_blank' ? 'noopener noreferrer' : undefined"
    :style="width ? { width } : undefined"
  >
    <span class="button-content">
      <slot></slot>
    </span>
  </component>
</template>

<style scoped>
.animated-button {
  position: relative;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  overflow: hidden;
  display: inline-block;
}

.animated-button:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.animated-button:hover::before {
  width: 300px;
  height: 300px;
}

.animated-button:active {
  transform: translateY(0);
}

/* Variants */
.variant-primary {
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
}

.variant-secondary {
  background-color: transparent;
  border: 2px solid hsla(160, 100%, 37%, 1);
  color: hsla(160, 100%, 37%, 1);
}

/* Sizes */
.size-small {
  padding: 8px 16px;
  font-size: 0.875rem;
}

.size-medium {
  padding: 12px 24px;
  font-size: 1rem;
}

.size-large {
  padding: 16px 32px;
  font-size: 1.125rem;
}

/* Button content */
.button-content {
  position: relative;
  z-index: 1;
}

/* Make anchor tag behave like button */
a.animated-button {
  display: inline-block;
  text-decoration: none;
  text-align: center;
  line-height: normal;
}
</style>
