<template>
  <div>
    <transition name="slide">
      <div class="page" :class="{open:open,closed:!open}">
          
          <!-- <div class=""> -->
          <!-- <h2>{{title}}</h2> -->
          <div class="icon">
            <PRIcons name="close" color="#fff" @wasClicked="close" />
          </div>
          <!-- <slot/> -->

<!----------------------------------------->
<!----------- Menu content ---------------->
<!----------------------------------------->

            
        <div class="logo-header">
            <img class="contain" src="https://catalogue-bm.geneve.ch/in/rest/annotationSVC/Attachment/attach_cmsUpload_03f62061-c26f-467c-8627-93a727ddb0d7" height=100% width="100%">
        </div>



        <a href="https://www.twitter.com">
          <div class="ui-button height3 width8 menu"> 
            <p class="vcenter">Historique</p> 
            <div class="ui-icon vcenter align-right">
              <img src="icons/dot.svg" alt="">
            </div>
          </div>
        </a>

        <a href="https://www.twitter.com">
          <div class="ui-button height3 width8 menu"> 
            <p class="vcenter">Tutorial</p> 
            <div class="ui-icon vcenter align-right">
              <img src="icons/dot.svg" alt="">
            </div>
          </div>
        </a>

        <a href="https://www.twitter.com">
          <div class="ui-button height3 width8 menu"> 
            <p class="vcenter">Contact</p> 
            <div class="ui-icon vcenter align-right">
              <img src="icons/dot.svg" alt="">
            </div>
          </div>
        </a>

    <div class="separator"></div>

    <br>

        <a href="mailto:elvis@mappingfestival.com">
          <div class="ui-button height2 width8 menu noborder">  
            <p class="vcenter small">À propos</p> 
          </div>
        </a>


        <a href="https://www.facebook.com/mappingfest">
          <div class="ui-button height2 width8 menu noborder">  
            <p class="vcenter small">Facebook</p> 
            <div class="ui-icon vcenter small align-right">
              <img src="icons/social_facebook.svg" alt="">
            </div>
          </div>
        </a>

        <a href="https://www.instagram.com/mappingfestival">
          <div class="ui-button height2 width8 menu noborder">  
            <p class="vcenter small">Instagram</p> 
            <div class="ui-icon vcenter small align-right">
              <img src="icons/social_instagram.svg" alt="">
            </div>
          </div>
        </a>

        <a href="https://vimeo.com/mappingfestival">
          <div class="ui-button height2 width8 menu noborder">  
            <p class="vcenter small">Twitter</p> 
            <div class="ui-icon vcenter small align-right">
              <img src="icons/social_vimeo.svg" alt="">
            </div>
          </div>
        </a>

<!--------------------------------------------->
<!----------- END Menu content ---------------->
<!--------------------------------------------->

        <slot/>




          <div class="page-footer credits hide">
            <div class="section">
              <b>v{{version}}</b>
            </div>
          </div>
        </div>

    </transition>
    <div v-if="open">
      <div class="backdrop" @click="close"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
   
    .page{
      position: fixed;
      width: 300px;
      height: 100%;
      top: 0;
      /* box-shadow: 20px 0px 16px -1px rgb(255 255 255 / 40%); */
      border-right: 1px solid hsla(220, 40%, 33%, .5);
      background-color: hsla(206, 20%, 60%, .98);
      z-index: 40;
      margin: 0;
      padding: var(--margin);
    }

    .page.open{
      transition: transform .3s ease-in-out;
      transform: translateX(0);
      }

    @media (max-width: 1081px) {
      .page{
        /*flex-basis: 0px;*/
        // overflow: hidden;
        // visibility:  hidden;
        box-shadow: 20px 0px 16px -1px rgb(255 255 255 / 0%);
        // padding: 0;
        transform: translateX(-100%);
      }
    }

    .slide-enter-active, .slide-leave-active {
      transition: transform .3s ease-in-out;
    }

    .slide-enter, .slide-leave-to {
      transform: translateX(-100%);
    }

    .slide-enter-to, .slide-leave {
      transform: translateX(0);
    }






    
    .backdrop{
      position:fixed;
      background-color: rgba(0, 0, 0, 0.1);
      width:100%;
      height:100%;
      top:0;
      left:0;
      z-index: 39;
      touch-action: none;
    }
    
    .icon{
      position: absolute;
      right: 10px;
      top: 10px;
      width: 30px;
      z-index: 1;
      visibility: hidden;
      transform: translateY(-100%);
    }

    @media (max-width: 1081px) {
      .icon{
        visibility: visible;
        transform: translateY(0);
        }
      }

  .logo-header{
    // min-height: 10%;
    margin-top: calc(var(--margin)*2);
    margin-bottom: calc(var(--margin)*2);
  }
    
    .btn {
      border-radius: 50px;
      background: var(--md-theme-default-primary);
      border: 4px solid white;
      color: white;
      text-align: center;
      padding: 10px 20px !important;
      margin: auto;
      font-size: 14px;
      outline: 0;
      display: block;
    }

    .link{
      text-decoration: none;
    }

</style>

<script lang="ts">
/* eslint-disable */
import PRIcons from './PRIcons.vue';
import Toggle from './Toggle.vue';

import { Component, Prop, Vue } from 'vue-property-decorator';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import { $config } from '../services';
import  cfg from '../../package.json';

@Component({
  components: { PRIcons, Toggle },
})
export default class PageSlide extends Vue {

  @Prop() readonly title!: string; 
  @Prop() readonly open!: boolean; 
  version = cfg.version;


  mounted(){
    // const container = this.$refs.container as any;
    // disableBodyScroll(container);
  }

  close(){
    const container = this.$refs.container as any;
    this.$emit('onClose', null);
    // enableBodyScroll(container);
  }

  get uid(){
    return $config.getDeviceID();
  }
}

</script>

