<template>
  <div>
    <router-view ></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    window.onerror = (err, lineNo) => {
      console.error(err, lineNo,);
    };
  },
}
</script>
<style scoped>
*{
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
}
</style>

