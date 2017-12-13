<template>
  <div class="hello">
   <h2>What you have chosen</h2>
   How many digits: {{digits}}</br/>
 How many variants: {{variants}}</br/>
  </div>
</template>

<script>
export default {
  name: 'selectedOptions',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {

    digits  () {
      return this.$store.state.elements
    },
    variants () {
      return this.$store.state.variants
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
