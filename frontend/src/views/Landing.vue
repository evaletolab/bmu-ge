



<template>
  <div class="landing">
    <!-- TOOLBAR -->

    <div class="main">
      <!-- DESTOP -->
      <section class="qrcode ">
        <img src="/images/qr-code.png" />
      </section>

      <!-- WELCOME -->
      <section class="continue">
        <img src="/images/logo-150ans-blanc.png" />
        <div>
        </div>

      </section>
    </div>
  </div>
</template>
<style lang="scss" scoped>

  .landing{
    background: var(--md-theme-default-primary);
    color: var(--md-theme-default-primary-text);
    background-image: url('/images/pilet-ui-bck.jpg');

    position: absolute;
    width: 100vw;
    height: 100%;
    background-size: cover;

    .version {
      opacity: .5;
      margin: 5px;
      padding: 2px;
      font-size: 13px;
      color: white;      
    }

    .main{
      padding: 30px;
      margin: 0;
      height: calc( 100% - 60px );
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-content: center;
      justify-content: center;
      align-items: stretch;

      section.qrcode{
        max-width: 350px;
        flex-basis: 100%;
        order: 1;
        flex:1;
        img{
          max-width: 300px;
          width: 100%;
          @media (max-width: 500px) {
            width: 50%;
          }
        }

      }

      section.continue {
        flex:0 1 auto;
        max-width: 350px;
        text-align: left;
        position: relative;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        div{
          margin-top: auto;
          margin-bottom: 0;        
        }
        img{
          margin-bottom: auto;
          margin-top: 0;        
          max-width: 300px;
          width: 100%;
          margin-left: -20px;
          margin-top: -20px;

        }
      }
      
    }
  }


</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { $config, $metric } from '../services';

import PRIcons from '../components/PRIcons.vue';
import  cfg from '../../package.json';

@Component({
  components: {
    PRIcons,
  },
})
export default class Landing extends Vue {
  open = false;
  pseudo = '';
  version = cfg.version;

  async mounted(){
    if ($config.isDesktop()) {
      return;
    }

    //
    // preload building
    const loader = new Image();
    loader.src = "/images/building/building_complete_sm.png";

    setTimeout(()=>{
      this.$router.push({path:'/home' }).catch(()=>{});
    },5000);
  }

  get config(){
    return $config.config;
  }

  i18n(key: string) {
    return $config.i18n(key);
  }


  onOpen(){
      return this.$router.push({path:'/home' });
  }
}
</script>
