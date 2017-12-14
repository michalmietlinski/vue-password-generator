<template>
  <div class="">
    <div class="left-column">
    <h2>What do you need?</h2>
    <ul>
      <li>How many elements?<br/>
        <input type="number" min="4" v-model="elementnumber" @input="updatenum"/></li>
        <li>How many variants?<br/>
        <input type="number" v-model="variantnumber" @input="updatevar"/></li>
    </ul>
    <ul>
      <li>Include capitals?<br/>
        <input type="checkbox" v-model="capitals"/></li>
        <li>Include numbers?<br/>
        <input type="checkbox" v-model="numbers"/></li>
        <li>Include specials?<br/>
        <input type="checkbox" v-model="specials"/></li>
        <li>Each one required?<br/>
        <input type="checkbox" v-model="required"/></li>
      </ul>
    <ul class="results">
      <li v-for="(mds, index) in md5data"><h2>Proposition {{index +1}}</h2>Your password: {{mds.text}}<button  @click="fcopy(index, mds.text)">Copy to Clipboard</button> <br/>
      MD5 hash: {{mds.hash}}  <button @click="fcopy(index, mds.hash)">Copy to Clipboard</button></li>
    </ul>
     <textarea type="text" id="temp"  ></textarea> 
  </div>
    <div class="right-column">
    <selected-options></selected-options>
  </div>
  </div>
  
</template>

<script>
import selectedOptions from './selectedOptions'
import generate from './generator.js'

export default {
  name: 'Formcontainer',
  components: { selectedOptions },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      elementnumber: this.$store.state.elements,
      variantnumber: this.$store.state.variants,
      specials: false,
      numbers: false,
      capitals: false,
      required: false
    }
  },
  computed: {
    md5data () {
      return generate(this.elementnumber, this.variantnumber, this.capitals, this.specials, this.numbers, this.required)
    }
  },
  methods: {
    updatenum () {
      this.$store.dispatch('updateNumber', this.elementnumber)
    },
    updatevar () {
      this.$store.dispatch('updateVariant', this.variantnumber)
    },
    fcopy (id,val) {
      let el = document.getElementById('temp')
      el.value=val;
      
   
      setTimeout(function(){el.select();
      document.execCommand('copy');},0)
      
        el.blur()
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
.left-column{
  width:70%;
  float:left;
  border-right:3px solid #000;
}
.results li{
  box-sizing: border-box;
  padding:10px 10px;
  background: #d5d5d5;
  position:relative;
  margin:0;
  margin-bottom:10px;
  margin-left:2%;
  width:45%;
  float:left;
  text-align:left;
}
textarea#temp{
  /*visibility:hidden;*/
  width:0;
  height:0;
  position:absolute;
  right:0;
  top:0;
}
.results button{
  float:right;
}
</style>
