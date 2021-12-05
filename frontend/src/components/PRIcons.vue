<template>
  <!--- TOP -->
  <svg v-if="name === 'add'" :viewBox="viewBox" preserveAspectRatio="none" >
    <!-- <style type="text/css">
      .st0{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}
    </style> -->
    
    <g>
      <g>
        <path :style="{fill:colorTertiary}" d="M24,2.1c12.1,0,22,9.8,22,21.9S36.1,46,24,46S2,36.2,2,24.1S11.9,2.1,24,2.1 M24,0.1C10.8,0.1,0,10.9,0,24.1
          S10.8,48,24,48s24-10.8,24-23.9S37.2,0.1,24,0.1L24,0.1z"/>
      </g>
    </g>
    <g>
      <defs>
        <rect id="SVGID_1_" x="0" y="0" width="48" height="48"/>
      </defs>
      <clipPath id="SVGID_2_">
        <use xlink:href="#SVGID_1_"  style="overflow:visible;"/>
      </clipPath>
    </g>
    <line :style="{stroke:colorTertiary}" style="{fill:none;stroke-width:2;stroke-miterlimit:10;}" x1="24" y1="31.9" x2="24" y2="16.1"/>
    <line :style="{stroke:colorTertiary}" style="{fill:none;stroke-width:2;stroke-miterlimit:10;}" x1="31.9" y1="24" x2="16.1" y2="24"/>
  </svg>
  <!--- arrow-left -->
  <svg v-else-if="name === 'arrow-left'" :viewBox="viewBox" preserveAspectRatio="none" >
    <polygon points="39.6,21.6 16.1,21.6 25.3,12.5 22,9.2 7.2,24 22,38.8 25.3,35.5 15.9,26.2 39.6,26.2 "/>
  </svg>
  <!--- arrow-right -->
  <svg v-else-if="name === 'arrow-right'" viewBox="0 0 100 100" preserveAspectRatio="none" >    
    <polygon points="7.2,26.4 30.7,26.4 21.5,35.5 24.8,38.8 39.6,24 24.8,9.2 21.5,12.5 30.9,21.8 7.2,21.8 "/>
  </svg>
  <!--- center-me-active -->
  <svg v-else-if="name === 'center-me-active'" :viewBox="viewBox" preserveAspectRatio="none" >
    <!-- <style type="text/css">
      .st0{fill:#FFFFFF;}
      .st1{fill:#6788F4;}
    </style> -->
    <circle class="st0" cx="294.8" cy="297.6" r="231.7"/>
    <path class="st1" d="M553.6,300.5c0,142.9-115.9,258.8-258.8,258.8S35.9,443.4,35.9,300.5S151.8,41.6,294.7,41.6
      S553.6,157.5,553.6,300.5z M473.6,282.3l-288.3-99.4l99.4,288.3l44.4-144.5L473.6,282.3z"/>
  </svg>
  <!--- center-me-inactive -->
  <svg v-else-if="name === 'center-me-inactive'" viewBox="0 0 100 100" preserveAspectRatio="none" >
    <!-- <style type="text/css">
      .st0{fill:#FFFFFF;stroke:#000000;stroke-miterlimit:10;}
    </style> -->
    <g>
      <path class="st0" d="M294.7,48.8c138.9,0,251.7,112.7,251.7,251.7c0,138.9-112.7,251.6-251.6,251.6S43.1,439.4,43.1,300.5
        S155.8,48.8,294.7,48.8"/>
    </g>
    <path d="M553.6,300.5c0,142.9-115.9,258.8-258.8,258.8S35.9,443.4,35.9,300.5S151.8,41.6,294.7,41.6S553.6,157.5,553.6,300.5z
      M473.6,282.3l-288.3-99.4l99.4,288.3l44.4-144.5L473.6,282.3z"/>
  </svg>
  <!--- close -->
  <svg v-else-if="name === 'close'" @click="$emit('wasClicked')" viewBox="0 0 128 128" preserveAspectRatio="none" >
    <!-- <style type="text/css">
      .st0{fill:none;stroke:#000000;stroke-width:6.144;}
      .st1{fill:none;}
    </style> -->
    <g>
      <line :style="{stroke:colorPrimary}" style="{fill:none;stroke-width:6.144;}" x1="41.3" y1="41.3" x2="86.7" y2="86.7"/>
      <line :style="{stroke:colorPrimary}" style="{fill:none;stroke-width:6.144;}" x1="86.7" y1="41.3" x2="41.3" y2="86.7"/>
    </g>
    <circle style="fill:none" cx="64" cy="64" r="64"/>
  </svg>  
  <!--- dot -->
  <svg v-else-if="name === 'dot'" viewBox="0 0 100 100" preserveAspectRatio="none" >
    <g>
      <path d="M115.2,76.8c7.1,0,12.8-5.7,12.8-12.8s-5.7-12.8-12.8-12.8s-12.8,5.7-12.8,12.8S108.1,76.8,115.2,76.8"/>
    </g>
  </svg>  
  <!--- exit -->
  <svg v-else-if="name === 'exit'" :viewBox="viewBox" preserveAspectRatio="none" >
    <!-- <style type="text/css">
      .st0{fill:#FFFFFF;}
      .st1{fill:#1D1D1B;}
    </style> -->
    
    <path class="st0" d="M24,0C10.8,0,0,10.8,0,24s10.8,24,24,24s24-10.8,24-24S37.2,0,24,0z"/>
    <g>
      <polygon class="st1" points="20.5,25.2 32.2,25.2 27.2,30.2 29.3,32.2 37.7,23.7 29.3,15.3 27.2,17.3 32.3,22.3 20.5,22.3 	"/>
      <polygon class="st1" points="24,18.4 24,15.6 13.4,15.6 13.4,31.9 24,31.9 24,29 16.2,29 16.2,18.4 	"/>
    </g>
  </svg>
  <!--- filter -->
  <svg v-else-if="name === 'filter'" :viewBox="viewBox" preserveAspectRatio="none" >
    <!-- <style type="text/css">
      .st0{fill:none;stroke:#000000;stroke-width:6.144;}
      .st1{fill:none;}
      .st2{fill:#FFFFFF;}
    </style> -->
    <line class="st0" x1="25.3" y1="50.4" x2="101.6" y2="50.4"/>
    <g>
      <path d="M49.3,63.3c7.1,0,12.8-5.7,12.8-12.8s-5.7-12.8-12.8-12.8c-7.1,0-12.8,5.7-12.8,12.8S42.2,63.3,49.3,63.3"/>
    </g>
    <line class="st0" x1="101.6" y1="81" x2="25.3" y2="81"/>
    <g>
      <path d="M77.5,68.2c-7.1,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8c7.1,0,12.8-5.7,12.8-12.8S84.6,68.2,77.5,68.2"/>
    </g>
    <circle class="st1" cx="64" cy="64" r="64"/>
  </svg>
  <!--- map -->
  <svg v-else-if="name === 'map'" @click="$emit('wasClicked')"  viewBox="0 0 48 48" preserveAspectRatio="none" >
    
    <path d="M6.57,13.41a3.38,3.38,0,0,1-1.09-.19l.4-1.11a2.09,2.09,0,0,0,.69.12,1.93,1.93,0,0,0,.75-.15l.45,1.09A3.06,3.06,0,0,1,6.57,13.41Zm8.67-.78-1.66-1,.58-1,1.66.94Zm-6.46,0-.6-1,1.64-1,.6,1ZM12.7,11.2a2,2,0,0,0-.76-.15,2.14,2.14,0,0,0-.67.11l-.41-1.1a3.07,3.07,0,0,1,1.08-.19,3.2,3.2,0,0,1,1.22.24ZM4,11a1,1,0,1,0,1,1A1,1,0,0,0,4,11ZM17.55,4,12,0,6.45,4,0,0V20l6.45,4L12,20l5.55,4L24,20V0ZM22,18.89l-4,2.48V17H17v4.14l-4-2.88V14H11v4.25L7,21.14V16H6v5.36L2,18.89V3.59L6,6.07V9H7V6.07l4-2.88V7h2V3.19l4,2.88V8h1V6.07l4-2.48ZM20.67,14l-1.29-1.28,1.27-1.29-.71-.7L18.67,12l-1.29-1.27-.71.7L18,12.75,16.7,14l.7.71,1.28-1.3L20,14.72Z" transform="translate(0 0)"/>  </svg>
  <!--- more -->
  <svg v-else-if="name === 'more'" @click="$emit('wasClicked')"  viewBox="0 0 48 48" preserveAspectRatio="none" >
    <!-- <style type="text/css">
      .st0{fill:none;}
      .st1{fill:#1D1D1B;}
    </style> -->
    
    <rect class="st0" width="64" height="64"/>
    <g>
      <circle class="st1" cx="31.9" cy="32" r="3.3"/>
      <circle class="st1" cx="31.9" cy="20.6" r="3.3"/>
      <circle class="st1" cx="31.9" cy="43.4" r="3.3"/>
    </g>
  </svg>
  <!--- myself -->
  <svg v-else-if="name === 'myself'" @click="$emit('wasClicked')"  viewBox="0 0 48 48" preserveAspectRatio="none" >
    <!-- <style type="text/css">
      .st0{fill:none;stroke:#000000;stroke-width:6.144;}
      .st1{fill:none;}
      .st2{fill:#FFFFFF;}
    </style> -->
    <circle cx="64" cy="64" r="64"/>
    <circle class="st2" cx="64" cy="64" r="44.8"/>
    <circle cx="64" cy="64" r="31.4"/>
    <circle class="st2" cx="64" cy="64" r="22"/>
  </svg>
  <!--- paint -->
  <svg v-else-if="name === 'paint'" @click="$emit('wasClicked')"  viewBox="0 0 48 48" preserveAspectRatio="none" >    
    <g>
      <g>
        <g>
          <path :style="{ fill: colorTertiary }" d="M24,2.1c12.1,0,22,9.9,22,22C46,36.2,36.1,46,24,46S2,36.2,2,24.1C2,12,11.9,2.1,24,2.1 M24,0.1c-13.2,0-24,10.8-24,24
            S10.8,48,24,48s24-10.8,24-23.9S37.2,0.1,24,0.1L24,0.1z"/>
        </g>
      </g>
      <path :style="{ fill: colorTertiary }" d="M23.9,21.6l4.3,2.1c-0.1,2.1-0.4,3.7-1,4.8c-0.7,1.3-1.5,2-2.7,2.6c-1.7,0.8-4.4,1-7.4,1.1c0.2-0.3,0.5-0.7,0.7-1
        c0.7-1.6,0.9-3.2,1.3-4.7c0.3-1.5,0.8-2.7,1.5-3.6C21.1,22.2,22,21.7,23.9,21.6 M29.6,13l3.1,1.6L29,21.2l-3-1.5L29.6,13z
        M28.5,9.4L23.4,19c-2.2,0.2-3.9,1-5,2.2c-1.2,1.4-1.7,3.1-2.1,4.7s-0.7,3.2-1.1,4.3c-0.5,1.1-1,1.8-2,2.2H9.4v2.7h4l0,0
        c4.7,0,8.9,0.1,12.2-1.5c1.7-0.8,3.1-2,4-3.8c0.9-1.7,1.3-3.8,1.3-6.5l5.5-9.8l-1.2-0.6L28.5,9.4z"/>
    </g>
  </svg>
  <!-- facebook -->
  <svg v-else-if="name === 'facebook'" @click="$emit('wasClicked')"  viewBox="0 0 48 48" preserveAspectRatio="none">
    <!-- <style type="text/css">
      .st0{fill:none;}
    </style> -->
    
    <polyline class="st0" points="64,64 0,64 0,0 "/>
    <path d="M32,6C17.4,5.9,5.5,17.8,5.5,32.4C5.4,47,17.3,58.9,31.9,59s26.5-11.8,26.6-26.4c0,0,0,0,0-0.1C58.4,17.9,46.6,6,32,6z
      M38.6,23.6h-2.9c-1.2,0-1.4,0.5-1.4,1.7v2.7h4.4l-0.6,4.4h-3.9v15.5h-6.6V32.5h-4.4v-4.4h4.4V23c0-3.9,2.1-5.9,6.7-5.9h4.4V23.6z"
      />
  </svg>
  <!-- instagram -->
  <svg v-else-if="name === 'instagram'" @click="$emit('wasClicked')"  viewBox="0 0 48 48" preserveAspectRatio="none">
    <path d="M438.8,119c-5-13-11.8-23.9-22.8-35c-11-11-22-17.7-35-22.8c-12.5-4.9-26.9-8.1-48-9.1c-21-1-27.8-1-81.4-1
      s-60.4-0.2-81.4,1.6l0,0c-21,0-35.4,3.9-48,8.7c-13,5-24,11.5-35,22.4s-17.8,22-22.8,35c-4.9,12.5-8.2,26.9-9.2,48
      c-1,21.1-1.2,27.8-1.2,81.5c0,53.6,0.3,60.4,1.2,81.4c1,21,4.3,35.4,9.2,48c5,13,11.8,24,22.8,35c11,11,22,17.8,35,22.8
      c12.5,4.9,26.9,8.2,48,9.2c21.1,1,27.8,1.2,81.4,1.2s60.4-0.3,81.4-1.2c21-1,35.4-4.3,48-9.2c13-5,24-11.8,35-22.8
      c11-11,17.8-22,22.8-35c4.9-12.5,8.2-26.9,9.2-48c1-21.1,1.1-27.8,1.1-81.4S448.9,188,448,167C447,146,443.7,131.6,438.8,119
      M412.4,328.3c-0.9,19.3-4.1,29.8-6.8,36.6c-3.6,9.2-7.9,15.8-14.7,22.7c-6.9,6.9-13.5,11.2-22.7,14.7c-7,2.7-17.4,5.9-36.6,6.8
      c-20.8,1-26.8,1.1-79.6,1.1s-59.2-0.2-79.5-1.1l0,0c-19.4-0.9-30-4.1-37-6.8c-9.2-3.6-16-7.9-22.9-14.7
      c-6.9-6.9-11.2-13.5-14.8-22.7c-2.7-7-5.9-17.4-6.8-36.6c-1-20.8-1.1-27.1-1.1-79.8s0.2-59,1.1-79.8c0.9-19.3,4.1-29.7,6.8-36.6
      c3.6-9.2,7.9-15.8,14.7-22.7S126,98,135.2,94.5c7-2.7,17.4-5.9,36.6-6.8c20.8-1,27.1-1.1,79.8-1.1s59,0.2,79.8,1.1
      c19.3,0.9,29.7,4.2,36.6,6.8c9.2,3.5,15.8,7.9,22.7,14.7c6.9,6.9,11.2,13.5,14.7,22.7c2.7,7,5.9,17.4,6.8,36.6
      c1,20.8,1.1,27.1,1.1,79.8C413.6,301.1,413.4,307.4,412.4,328.3"/>
    <path d="M251.7,146.8c-56,0-101.4,45.7-101.4,101.3l0,0c0,56.5,45.4,101.6,101.4,101.6s101.4-45.4,101.4-101.4
      S307.7,146.8,251.7,146.8 M251.7,314.2c-36.4,0-65.8-29.5-65.8-65.9s29.5-65.9,65.8-65.9s65.9,29.5,65.9,65.9
      C317.5,284.7,288,314.2,251.7,314.2"/>
    <path d="M357.1,119.1L357.1,119.1c-13.1,0-23.7,10.7-23.7,23.8c0,13.1,10.6,23.8,23.7,23.8s23.7-10.6,23.7-23.8
      C380.8,129.8,370.2,119.1,357.1,119.1"/>
  </svg>
  <!-- share -->
  <svg v-else-if="name === 'share'" @click="$emit('wasClicked')"  viewBox="0 0 48 48" preserveAspectRatio="none">
    <!-- <style type="text/css">
      .st0{fill:none;}
    </style> -->
    
    <rect class="st0" width="64" height="64"/>
    <path d="M39.1,36.6c-1.4,0-2.8,0.7-3.7,1.8l-8.3-4.3c0.3-0.7,0.4-1.4,0.4-2.1s-0.1-1.4-0.4-2.1l8.3-4.4c1.6,2.1,4.6,2.5,6.7,0.9
      c2.1-1.6,2.5-4.6,0.9-6.7s-4.6-2.5-6.7-0.9c-1.6,1.2-2.3,3.3-1.7,5.3l-8.4,4.4c-1.9-2.5-5.6-3-8.1-1.1s-3,5.6-1.1,8.1s5.6,3,8.1,1.1
      c0.4-0.3,0.8-0.7,1.1-1.1l8.4,4.4c-0.8,2.4,0.6,5,3,5.8s5-0.6,5.8-3s-0.6-5-3-5.8C40.1,36.7,39.6,36.7,39.1,36.6L39.1,36.6z"/>
  </svg>
  <!-- twitter -->
  <svg v-else-if="name === 'twitter'" @click="$emit('wasClicked')"  viewBox="0 0 48 48" preserveAspectRatio="none">
    <!-- <style type="text/css">
      .st0{fill:none;}
    </style> -->
    
    <rect class="st0" width="64" height="64"/>
    <g>
      <path id="b38bb1d9-1634-4536-acbd-c76078abca2b" d="M44.9,25.4c0,0.3,0,0.6,0,0.9c0,8.8-6.7,18.8-18.8,18.8l0,0
        c-3.6,0-7.1-1-10.2-3c0.5,0.1,1.1,0.1,1.6,0.1c3,0,5.9-1,8.2-2.8c-2.8,0-5.3-1.9-6.2-4.6c1,0.2,2,0.2,3-0.1
        c-3.1-0.6-5.3-3.3-5.3-6.5v-0.1c0.9,0.5,1.9,0.8,3,0.8c-2.9-1.9-3.8-5.8-2-8.8c3.4,4.1,8.3,6.6,13.6,6.9c-0.8-3.6,1.4-7.1,5-7.9
        c2.3-0.5,4.7,0.2,6.3,1.9c1.5-0.3,2.9-0.8,4.2-1.6c-0.5,1.5-1.5,2.8-2.9,3.7c1.3-0.1,2.6-0.5,3.8-1C47.3,23.3,46.1,24.5,44.9,25.4z
        "/>
    </g>
  </svg>
  <!-- vimeo -->
  <svg v-else-if="name === 'vimeo'" @click="$emit('wasClicked')"  viewBox="0 0 48 48" preserveAspectRatio="none">    
    <g>
      <path d="M50.4,24.1c-2.2,11.6-14.4,21.4-18,23.7c-3.7,2.2-7-0.9-8.2-3.3c-1.4-2.7-5.5-17.4-6.6-18.6c-1.1-1.2-4.4,1.2-4.4,1.2
        l-1.6-2c0,0,6.6-7.5,11.7-8.4c5.4-1,5.3,7.8,6.6,12.6c1.2,4.7,2.1,7.4,3.2,7.4c1.1,0,3.2-2.6,5.4-6.6c2.3-4-0.1-7.6-4.6-5.1
        C35.7,14.9,52.6,12.5,50.4,24.1z"/>
    </g>
  </svg>
  <!-- spot -->
  <svg v-else-if="name === 'spot'" @click="$emit('wasClicked')"  viewBox="0 0 48 48" preserveAspectRatio="none">
    <!-- <style type="text/css">
      .st0{fill:#FFFFFF;}
      .st1{fill:#1D1D1B;}
    </style> -->
    
    <path class="st0" d="M39.6,68.3c-0.9-0.9-22-22.7-22-39.1c0-13.3,10.8-24.1,24.1-24.1s24.1,10.8,24.1,24.1c0,16.5-21.1,38.2-22,39.1
      l-2.2,2.2L39.6,68.3z"/>
    <path class="st1" d="M41.8,8.3c11.5-0.1,21,9.2,21.1,20.7c0,0.1,0,0.1,0,0.2c0,15.4-21.1,37-21.1,37s-21.1-21.6-21.1-37
      c0-11.5,9.4-20.9,20.9-20.9C41.7,8.3,41.7,8.3,41.8,8.3 M41.8,2.3c-14.9-0.1-27,12-27.1,26.9c0,17.4,20.5,38.8,22.8,41.2l4.3,4.4
      l4.3-4.4c2.3-2.4,22.8-23.8,22.8-41.2C68.8,14.3,56.7,2.2,41.8,2.3z"/>
    <circle class="st1" cx="41.7" cy="28.9" r="12"/>
    <circle class="st1" cx="41.7" cy="28.9" r="12.7"/>
  </svg>



</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { $config } from '../services';

@Component
export default class PRIcons extends Vue {
  @Prop({ default : 'home'}) private name!: string;
  @Prop({ default : '1'}) private theme!: string;
  @Prop({ default : '40'}) private width!: string;
  @Prop({ default : '40'}) private height!: string;
  @Prop() private color!: string;

  content = "";

  async created() {
    // const res = await axios.get(this.config.baseUrl + `assets/icons/${this.name}.svg`, {responseType: 'text'});
    // this.content = res.data as string;
  }

  get config() {
    return $config.config;
  }

  get viewBox() {
    return "0 0 48 48";
  }

  get colorPrimary() {
    if(this.color) {
      return this.color;
    }
    return $config.config.colors.primary;
  }

  get colorSecondary() {
    if(this.color) {
      return this.color;
    }
    return $config.config.colors.secondary;
  }

  get colorTertiary() {
    if(this.color) {
      return this.color;
    }
    return $config.config.colors.tertiary;
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.op5{
  opacity: 1;
}
</style>
