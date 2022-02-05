<template>
  <div class="header">
    <div class="header__logo">Деловая колбаса</div>
    <ul class="header__list">
      <li class="header__item"><a href="/">Главная</a></li>
      <li class="header__item"><a href="/about">О нас</a></li>
      <li class="header__item"><a href="/add">Добавить</a></li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HeaderComponent',
  data() {
    return {
      widget: null,
    }
  },
  computed: {
    ...mapGetters({
      infoData: 'mainpage/getWidget',
    }),
  },
  async mounted() {
    const data = await this.infoData
    this.widget = data.data
  },
}
</script>

<style scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px 10px;
}
.header__list {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  gap: 10px;
}
.header__logo {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border-bottom: 1px solid black;
}
.header__item {
  padding: 7px 22px;
  border-radius: 8px;
  -webkit-box-shadow: 1px 2px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 1px 2px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 1px 2px 8px 0px rgba(34, 60, 80, 0.2);
  transition: 0.3s;
  background: transparent;
}
.header__item:hover {
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  background: white;
}

.header__item a {
  color: #444444;
  text-decoration: none;
}

.widget {
  display: flex;
  width: 90px;
  height: 40px;
  overflow: hidden;
  overflow-x: scroll;
  gap: 10px;
}

.widget {
  scrollbar-width: thin;
  scrollbar-color: blue transparent;
}

/* Works on Chrome, Edge, and Safari */
.widget::-webkit-scrollbar {
  width: 1px;
}

.widget::-webkit-scrollbar-track {
  background: transparent;
}

.widget::-webkit-scrollbar-thumb {
  background-color: black;
  border-radius: 4px;
  width: 1px;
}
</style>
