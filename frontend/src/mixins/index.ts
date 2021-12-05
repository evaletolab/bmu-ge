import Vue from 'vue'
import Component from 'vue-class-component'

import { $config } from '../services';


// You can declare mixins as the same style as components.
@Component
export class ConfigEnabled extends Vue {
    get config(): any{
        return $config.config;
    }
}
