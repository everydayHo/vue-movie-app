<template>
  <div class="about">
    <div class="photo">
      <img :src="image" alt="name" />
    </div>
    <div class="name">
      {{ name }}
    </div>
    <div>{{ email }}</div>
    <div>{{ phone }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    image() {
      return this.$store.state.about.image;
    },
    name() {
      return this.$store.state.about.name;
    },
    email() {
      return this.$store.state.about.email;
    },
    phone() {
      return this.$store.state.about.phone;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/scss/main';
.about {
  text-align: center;
  .photo {
    width: 250px;
    height: 350px;
    margin: 40px auto 20px;
    border: 10px solid $gray-300;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: $gray-200;

    img {
      width: 100%;
      height: 100%;
      padding: 10px 0;
    }
  }
  .name {
    font-size: 40px;
    font-family: 'Oswald', sans-serif;
    margin-bottom: 20px;
  }
}
</style>
