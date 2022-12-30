import eventEmitter from '~/render/script/obj/eventEmitter';

export default function onlineAndOffline(store) {
  window.addEventListener('online', () => {
    eventEmitter.send('online');
  });
  window.addEventListener('offline', () => {
    EventEmitter.send('offline');
  });
}
