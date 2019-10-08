import push from './push';
import CmbLink from './components/CmbLink'
import { PluginFunction } from 'vue';

const vueCmbRouter: PluginFunction<void> = Vue => {

  Vue.prototype.$cmbPush = function(to: string) { push(to) }
  Vue.component(CmbLink.name, CmbLink);
}

export default vueCmbRouter;