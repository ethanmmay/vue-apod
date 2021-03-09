<template>
  <div class="container-fluid bg-img" :style="{'background-image': 'url(' + state.url +')'}">
    <div class="row">
      <div class="col-12 d-flex p-3">
        <form @submit.prevent="picFromDate">
          <input type="text" placeholder="ex: 2002-03-06 (March 6th, 2002)" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" v-model="state.date">
          <button type="submit">></button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { apodService } from './services/APODService'
import { AppState } from './AppState'

export default {
  name: 'App',
  setup () {
    const state = reactive({
      date: '',
      url: computed(() => AppState.apod_img_url)
    })
    return {
      state,
      async picFromDate () {
        try {
          // NOTE Search APOD API for pic from date here
          await apodService.getPicFromDate(state.date)
          state.date = ''
        } catch (error) {
          console.error(error)
        }
      }
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.bg-img {
  height: 100vh;
  background-size: cover;
}

input, button {
  border: 1px solid #00000001;
  background-color: #333333b3;
  color: white;
}

input {
  width: 250px;
  border-radius: 15px;
  padding: 5px;
}

button {
  border-radius: 50%;
  width: 32px;
  height: 32px;
  margin-left: 5px;
}

input:hover, button:hover {
  background-color: #333333ce;
  border: 1px solid #33333390;
}

input::placeholder {
  color: #ffffffbf;
}
</style>
