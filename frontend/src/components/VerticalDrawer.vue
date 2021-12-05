<template>
    <transition name="slide">
        <div class="container" v-if="open">
            <div class="backdrop" @click="close"></div>
            <div class="vertical-drawer-container" @click="stopTheEvent">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>


<style lang="scss" scoped>
    .container{
        position: fixed;
        width: 100%;
        height:100%;
        bottom:0;
        left:0;
        z-index: 1000;
    }
    .vertical-drawer-container{
        position: fixed;
        width: 100vw;
        height: 40vh;
        background-color: black;
        bottom:0;
        left: 0;
        z-index: 1000;
        // pointer-events: none;
    }

    .backdrop{
        position:fixed;
        background-color: rgba(0, 0, 0, 0.0);
        width:100%;
        height:100%;
        bottom:0;
        left:0;
        z-index: 0;
    }
    
    .slide-enter-active, .slide-leave-active {
        transition: transform .3s ease-in-out;
    }

    .slide-enter, .slide-leave-to {
        transform: translateY(100%);
    }

    .slide-enter-to, .slide-leave {
        transform: translateY(0);
    }
    

</style>


<script lang="ts">
/* eslint-disable */

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class VerticalDrawer extends Vue {
    @Prop() open!: boolean;
    
    close(){
        this.$emit('closerequest', null);
    }
    stopTheEvent(e:Event){
        e.stopPropagation();
    }

}
</script>