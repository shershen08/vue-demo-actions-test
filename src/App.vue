<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    {{intro}}
    <!-- <button v-on:click="showAlert"> -->
    <button @click="showAlert"
            v-bind:id="'foo-' + bar"
            class="this-is-always-there"
            v-bind:class="{'my-class': myvar}"
            @mouseenter="showAlert">
      click me
    </button>

    <button @click="toggle">
      toggle
    </button>

       <button @click="toggle">
      toggle
    </button>

    <div v-html="someServerHTML">

    </div>

    <input @change="showAlert"
    id="main-input"
    @keyup="showAlert"/>

    {{foo}}

    {{foo + 'dfgh' + foo}}

    <br>
    --
    {{bar}}
    <br>
    {{bar + 4}}
    <br>
    {{add2(3)}}
    <!-- 3 -->
    <!-- <HelloWorld msg="good evening"/> -->
  </div>
</template>

<script>

// components App ---> HelloWorld
// 1 ES import
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  props: ['intro'],
  data () {
    return {
      foo: 'good evening',
      bar: 42,
      myvar: true,
      someServerHTML: '<h1 title="title">hey HTML</h1>'
    }
  },
  methods: {
    showAlert (event) {
      console.log(event.type)
      this.$emit('changeValue')
      this.someServerHTML = '.....'
    },
    toggle () {
      this.myvar = !this.myvar
    },
    add2 (value) {
      // this.
      return value + 2
    }
  },

  components: { 
    // HelloWorld 
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.my-class {
  background-color: #fc0;;
}
</style>
