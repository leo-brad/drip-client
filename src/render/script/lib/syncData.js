import global from '~/render/script/obj/global';

const {
  share: {
    emitter,
  },
} = global;

function syncContent() {
  const {
    content,
  } = global;
  emitter.on('content/update', (data) => {
    const { instance, field, string, } = data;
    if (field === 'stderr') {
      new Notification(
        'drip',
        { body:  'instance ' + instance +  ' happen a wrong.', },
      );
    }
    let i = content[instance];
    if (!Array.isArray(i)) {
      content[instance] = [];
    }
    i = content[instance];
    i.push({ field, string, });
  });
}

function syncInstance() {
  const {
    instance,
    instances,
  } = global;
  emitter.on('instance/add', (instance) => {
    if (instances.length === 0) {
      global.instance = instance;
      setTimeout(() => {
        const event = 'instance/add/first';
        emitter.send(instance, [event]);
      }, 0);
    }
    global.instances.push(instance);
  });
  emitter.on('instance/reduce', (instance) => {
    for (let i = 0; i < instances.length; i += 1) {
      if (instance === instances[i]) {
        global.instances.splice(i, 1);
        break;
      }
    }
  });
  emitter.on('instance/change', (instance) => {
    global.instance = instance;
  });
  emitter.on('main/restart', () => {
    global = Object.assign(global, {
      instance: '',
      instances: [],
    });
  });
}

function syncStatus() {
  const { status, } = global;
  emitter.on('status/update', ({ instance, field, }) => {
    status[instance] = field;
  });
}

function syncMain() {
  emitter.on('content/reset', () => {
    emitter.reset();
    global.pkg = {};
    global.content = {};
    global.component = {};
    global.instance = '';
    global.instances = [];
    global.status = {};
    global.share = {
      emitter,
      focus: true,
    };
    global.content = {};
    global.component = {};
  });
}

export default function syncData() {
  syncContent();
  syncInstance();
  syncStatus();
  syncMain();
}
