<template>
  <v-container fluid>
    <form
      v-if="info"
      class="add"
      action="https://demo-api.vsdev.space/api/delivery/sales"
      method="post"
      @submit="send"
    >
      <h1 class="heading">Добавления</h1>
      <label v-for="(item, i) in info" :key="i">
        <p>{{ item.title }}</p>
        <input
          v-if="item.type !== 'select'"
          :id="keys[i]"
          v-model="keys[i]"
          class="field"
          :type="item.type"
          :name="keys[i]"
          required
        />
        <select v-else class="field" :name="keys[i]" required v-model="keys[i]">
          <option
            v-for="value in item.values"
            :id="keys[i]"
            :key="value"
            :value="value"
          >
            {{ value }}
          </option>
        </select>
      </label>
      <button class="button" type="submit">Добавить</button>
    </form>
    <LoaderComponent v-else />
    <div class="content">
      <h2>Все доставки</h2>
      <v-row dense>
        <v-col v-for="(el, i) in del" :key="i" class="d-inline">
          <v-card class="mx-auto my-3" width="400" height="700">
            <v-img v-if="el.type === 'truck'" src="/truck_img.png"></v-img>
            <v-img v-if="el.type === 'ship'" src="/ship_img.png"></v-img>
            <v-img v-if="el.type === 'train'" src="/train_img.png"></v-img>
            <v-img v-if="el.type === 'plane'" src="/plane_img.png"></v-img>

            <v-card-title class="px-8">Тип доставки {{ el.type }}</v-card-title>
            <v-card-text>
              <div class="px-8 mb-2 text-subtitle-1">
                Из {{ el.departure_city }}
              </div>
            </v-card-text>
            <v-card-text>
              <div class="px-8 mb-2 text-subtitle-1">
                В {{ el.destination_city }}
              </div>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-card-title class="px-8">{{ el.departure_address }}</v-card-title>
            <v-card-title class="px-8">{{
              el.destination_address
            }}</v-card-title>
            <v-card-text>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>Телефон</v-list-item-title>
                  <v-list-item-subtitle>{{ el.volume }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>Вес</v-list-item-title>
                  <v-list-item-subtitle>{{ el.weight }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import LoaderComponent from '@/components/LoaderComponent.vue'
export default {
  name: 'AddPage',
  components: { LoaderComponent },
  layout: 'DefaultLayout',
  data() {
    return {
      info: null,
      keys: null,
      type: null,
      departure_city: null,
      departure_address: null,
      destination_city: null,
      destination_address: null,
      weight: null,
      volume: null,
      del: [],
    }
  },
  computed: {
    ...mapGetters({
      infoData: 'mainpage/getForm',
      deliviries: 'mainpage/getDel',
    }),
  },
  async mounted() {
    const data = await this.infoData
    this.info = data.data.fields
    this.keys = Object.keys(data.data.fields)
    const dataa = await this.deliviries
    this.del = dataa.data
  },
  updated() {},
  methods: {
    async send(e) {
      e.preventDefault()
      const data = {}
      data.type = e.target[0].value
      data.departure_city = e.target[1].value
      data.departure_address = e.target[2].value
      data.destination_city = e.target[3].value
      data.destination_address = e.target[4].value
      data.weight = e.target[5].value
      data.volume = e.target[6].value
      console.log(data)
      await axios.post('https://demo-api.vsdev.space/api/delivery/sales', data)
      this.type = ''
      this.departure_city = ''
      this.departure_address = ''
      this.destination_city = ''
      this.destination_address = ''
      this.weight = ''
      this.volume = ''
    },
  },
}
</script>
<style>
.about__text {
  padding: 20px;
}
.add {
  display: flex;
  flex-direction: column;
}
.add label {
  margin: 10px auto;
}
.button {
  width: 200px;
  margin: 0 auto;
  border: none;
  padding: 7px 12px;
  border-radius: 5px;
}
.content {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
}
.field {
  appearance: none;
  background-color: transparent;
  border: 2px solid;
  border-radius: 20px;
  padding: 10px;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
}
h2 {
  margin-bottom: 20px;
}
</style>
