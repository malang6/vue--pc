<template>
<!-- 使用了默认插槽 因为按钮的文字是不确定的 -->
  <button @click="handleClick"><slot/></button>
</template>

<script>
export default {
  name: 'Button',
  data(){
      return {
          isClick:false
      }
  },
  methods:{
      handleClick(event){
          if(this.isClick) return;
          this.isClick = true;
          // this.$emit("click", event); 返回的不是promise对象，没法确定什么时候可以再次点击

          const promise = this.$listeners.click(event)
          if(promise){
            promise.finally(()=>{
              this.isClick = false; //当触发事件，发送请求后不管请求成功还是失败，只要请求结束后，就要让按钮可以被再次点击
            })
          }else{
              this.isClick = false;
          }
          
      }
  }
}
</script>

<style lang="less" scoped>

</style>
