import push from '../push';
import { CreateElement, RenderContext } from 'vue';

export default {

  name: 'CmbLink',

  functional: true,

  render(h: CreateElement, context: RenderContext) {

    return h(
      context.props.tag || 'div',
      {
        class: {
          [<string>context.data.staticClass]: true
        },
        on: {
          click: push.bind(null, context.props.to)
        }
      },
      context.children
    );
  },
}