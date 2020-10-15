<template>
  <div id="box">
    <div id="switch" :class="flag ? 'act' : ''">
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "demo",
  props: ['flag'],
  data() {
    return {
    };
  },
 
};
</script> 

<style scoped lang="scss">
#switch {
  position: relative;
  display: inline-block;
  // box-sizing: content-box;
  width: 54px;
  height: 15px;
  font-size: 30px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  transition: background-color 0.3s;
  div {
    position: absolute;
    top: -10px;
    left: -2px;
    z-index: 1;
    width: 30px;
    height: 30px;
    background-color: #fafafa;
    border-radius: 100%;
    box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.05), 0 2px 2px 0 rgba(0, 0, 0, 0.1),
      0 3px 3px 0 rgba(0, 0, 0, 0.05);
      transition: all 0.3s;
  }
}
#box {
  .act {
    background-color: #19fa5c;
    div {
      left: 30px;
    }
  }
}
</style>
