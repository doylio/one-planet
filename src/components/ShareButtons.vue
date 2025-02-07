<script setup lang="ts">
const props = defineProps<{
  url?: string;
  title?: string;
  description?: string;
}>();

const shareUrl = props.url || "http://example.com";
const shareTitle =
  props.title || "One Planet - Let's make a difference together";
const shareDescription =
  props.description ||
  "Learn how we can make a difference and help create a better future for all beings on our planet.";

const encodedUrl = encodeURIComponent(shareUrl);
const encodedTitle = encodeURIComponent(shareTitle);
const encodedDescription = encodeURIComponent(shareDescription);

const shareLinks = {
  twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&via=oneplanet`,
  facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}%0A${encodedDescription}`,
  linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}&source=OnePlanet`,
};
</script>

<template>
  <div class="share-buttons">
    <a
      :href="shareLinks.twitter"
      target="_blank"
      rel="noopener noreferrer"
      class="share-button twitter"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        />
      </svg>
      Share on X
    </a>
    <a
      :href="shareLinks.facebook"
      target="_blank"
      rel="noopener noreferrer"
      class="share-button facebook"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z"
        />
      </svg>
      Share on Facebook
    </a>
    <a
      :href="shareLinks.linkedin"
      target="_blank"
      rel="noopener noreferrer"
      class="share-button linkedin"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
        />
      </svg>
      Share on LinkedIn
    </a>
  </div>
</template>

<style scoped>
.share-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1rem;
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.share-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 12px;
  color: white;
  font-weight: 500;
  text-decoration: none;
  transition: transform 0.2s, opacity 0.2s;
  width: 100%;
}

.share-button:hover {
  opacity: 0.95;
  transform: translateY(-2px);
}

.twitter {
  background-color: #000000;
}

.facebook {
  background-color: #1877f2;
}

.linkedin {
  background-color: #0077b5;
}

.share-button svg {
  width: 20px;
  height: 20px;
}
</style>
