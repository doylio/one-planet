<script setup lang="ts">
import Button from "./Button.vue";
import ImageContentLayout from "./ImageContentLayout.vue";
import ShareButtons from "./ShareButtons.vue";
</script>

<template>
  <footer>
    <div class="container">
      <h2>It's not hopeless</h2>
      <h4>
        Our actions can make a difference. Here are some ways you can help!
      </h4>
    </div>

    <div class="container">
      <ImageContentLayout
        imageUrl="/images/reduce-meat.jpg"
        altText="Reduce meat intake"
      >
        <h2>Consider reducing your meat intake</h2>
        <h4>
          You don't need to become a vegan to make a difference. Even just doing
          one meatless day a week can mean dozens of animals spared.
        </h4>
      </ImageContentLayout>
    </div>

    <div class="container">
      <ImageContentLayout
        reverse
        imageUrl="/images/cellular-agriculture.jpg"
        altText="Cellular agriculture"
      >
        <h2>Donate to cellular agriculture research</h2>
        <h4>
          Cellular agriculture, or lab grown meat, has the potential to disrupt
          the meat industry. By growing just the parts of an animal we want to
          eat, we can still enjoy a delicious steak with none of the suffering.
        </h4>
        <br />
        <div class="button-container">
          <Button href="https://gfi.org/donate/" width="200px"
            >Good Food Institute</Button
          >
          <Button
            href="https://new-harvest-giving-tuesday.funraise.org/"
            width="200px"
            >New Harvest</Button
          >
        </div>
      </ImageContentLayout>
    </div>

    <div class="container">
      <ImageContentLayout
        imageUrl="/images/happy-animals.jpg"
        altText="Vegan food"
      >
        <h2>Share this with your friends</h2>
        <h4>We can make a difference together.</h4>
        <br />
        <ShareButtons />
      </ImageContentLayout>
    </div>
  </footer>
</template>

<style scoped>
footer {
  margin-top: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.container {
  min-height: 90vh;
  margin: 5rem 0;
  padding: 2rem;
}

.button-container {
  display: flex;
  gap: 1rem;
  justify-content: center;
}
</style>
