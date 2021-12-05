<template>
<!--- SOURCE -->
  <section class="drawer " :class="{'open primary':open,'primary':!open}" @click="onToggle">
    <!-- <PRIcons name="sources-bar"  /> -->
    <div ref="container" class="content">
      <slot />
      <div style="height:50px" />
    </div>        
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import PRIcons from '../components/PRIcons.vue';

import { $config } from '../services';

import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

@Component({
  components: {
  },
})
export default class Drawer extends Vue {
  open = false;



  onToggle(){
    this.open = !this.open;
    if(this.open){
      setTimeout(() => {

        const container = this.$refs.container as any;
        disableBodyScroll(container);
      }, 200);
    }

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  section.drawer {
    background: chartreuse;
    color: white;
    position: fixed;
    bottom: 0;
    left:0;
    height: calc(100vh - 100px);
    width: calc( 100vw - 10px );
    text-align: center;
    border-radius: 20px 20px 0 0;
    padding: 0 5px;    
    transform: translateY(calc(100vh - 100px));
    transition: all 200ms;          
  }  

  @media (min-width:426px) {
    section.drawer.open {
      transform: translateY(45px)!important;
    }
  }

  section.drawer.open {
    transform: translateY(10px);
  }
  section.drawer svg {
    width: 55px;
    margin-top: -27px;
    width: auto;
    margin-top: 10px;
    height: 55px;
    transform: translateY(-64px) translateX(0px);
  }

  section.drawer nav{
    width: 40px;
    height: 3px;
    background: rgba(255, 255, 255,.8);
    margin: auto;
    margin-top: 8px;
    display: none;
  }
  section.drawer div.content{    
    font-size: 14px;
    font-weight: 200;
    text-align: left;
    padding: 5px 20px;              
    color: white!important;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    margin-top: -45px;
    height: 65%;

  }

  section.drawer div.content h3{
    text-align: center;
    text-transform: uppercase;
    font-size: 14px;
    margin-bottom: 30px;    
  }

  section.drawer div.content  /deep/ a{
    color: white;
    font-weight: 600;
  }

</style>
