<template>
  <header>
    <Logo />
    <div class="nav nav-pills">
      <div v-for="nav in navigation" :key="nav.name" class="nav-item">
        <RouterLink
          :to="nav.href"
          active-class="active"
          :class="{ active: isMatch(nav.path) }"
          class="nav-link"
        >
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo';
export default {
  components: {
    Logo,
  },
  data() {
    return {
      navigation: [
        {
          name: 'Search',
          href: '/',
        },
        {
          name: 'Movie',
          href: '/movie/tt0133093',
          path: /^\/movie/,
        },
        {
          name: 'About',
          href: '/about',
        },
      ],
    };
  },
  methods: {
    isMatch(path) {
      if (!path) return false;
      return path.test(this.$route.fullPath);
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  height: 70px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  .logo {
    margin-right: 40px;
  }
  @include media-breakpoint-down(sm) {
    .nav {
      display: none;
    }
  }
}
</style>
