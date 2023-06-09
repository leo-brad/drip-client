import React from 'react';
import style from './index.module.css';
import OfflineComponent from '~/render/script/component/OfflineComponent';
import TabButton from '~/render/script/component/TabButton';
import global from '~/render/script/obj/global';

const {
  share: {
    emitter,
  },
  instances,
} = global;

class TabHeader extends OfflineComponent {
  constructor(props) {
    super(props);
    this.state = {
      instance: '',
      instances: [],
    };
    this.updateView = this.updateView.bind(this);
  }

  bind() {
    emitter.on('main/reset', this.updateView);
    emitter.on('instance/add', this.updateView);
    emitter.on('instance/reduce', this.updateView);
  }

  remove() {
    emitter.remove('main/reset', this.updateView);
    emitter.remove('instance/add', this.updateView);
    emitter.remove('instance/reduce', this.updateView);
  }

  updateView(data) {
    const {
      share: {
        focus,
      },
    } = global;
    if (focus) {
      const { instances, } = global;
      this.setState({
        instances,
      });
    }
  }

  render() {
    const {
      instances,
    } = this.state;
    const buttons = instances.map((i, k) => {
      switch (k) {
        case 0:
          return <TabButton t="f" i={i} key={k} k={k} />
        case instances.length - 1:
          return <TabButton t="l" i={i} key={k} k={k} />;
        default:
          return <TabButton i={i} key={k} k={k} />
      }
    });
    return (
      <div className={style.tabHeader}>
        {buttons}
      </div>
    );
  }
}

export default TabHeader;
