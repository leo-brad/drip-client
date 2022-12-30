import React from 'react';
import style from './index.module.css';
import eventEmitter from '~/render/script/obj/eventEmitter';

class Content extends React.Component {
  render() {
    const {
      content: {
        index,
        contents,
      },
      instance: {
        instance,
      },
      pkg: {
        pkg,
      },
    } = this.props;
    const idx = index[instance];
    let content;
    if (typeof idx === 'number' && contents[idx]) {
      const [_, p] = instance.match(/^\[(\w+)\]:(\w+)$/);
      const Pkg = pkg[p];
      const data = contents[idx];
      content = <Pkg data={data} eventEmitter={eventEmitter} />
    } else {
      content = null;
    }
    return content;
  }
}

export default Content;
