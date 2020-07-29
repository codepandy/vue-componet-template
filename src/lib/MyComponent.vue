<template>
  <div class="msg" @click="alertMsg">
    {{msg}}
  </div>
</template>

<script>
  export default {
    name:'MyComponent',
    props:{
      msg:String
    },
    methods:{
      alertMsg(){
        alert(this.msg);
      }
    }
  }
</script>

<style scoped>
.msg{
  font-size: 30px;
  color: green;
}
</style>
