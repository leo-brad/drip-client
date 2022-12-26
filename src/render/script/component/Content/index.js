import React from 'react';
import style from './index.module.css';

class Content extends React.Component {
  render() {
    const {
      content: {
        index,
        contents,
      },
      instance: {
        instance: i,
      },
      pkg: {
        pkg,
      },
    } = this.props;
    const idx = index[i];
    let content;
    if (typeof idx === 'number' && contents[idx]) {
      content = contents[idx].map((e, j) => {
        const { instance, field, string, } = e;
        const [_, plugin] = instance.match(/^\[(\w+)\]:(\w+)$/);
        const Pkg = pkg[plugin];
        return (
          <li key={j}>
            <Pkg situation={field} string={string} serial={j+1} />
          </li>
        );
      });
    } else {
      content = null;
    }
    return (
      <ul className={style.contentList}>{content}</ul>
    );
  }
}

export default Content;
