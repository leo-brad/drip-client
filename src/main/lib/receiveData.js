import net from 'net';
import Ipc from '~/main/class/Ipc';

export default function receiveData(ipc) {
  let isReady = false;
  const buffer = [];
  const socket = net.connect({
    port: 3000,
  });
  socket.setEncoding('utf-8');
  socket.on('data', (data) => {
    if (isReady) {
      ipc.send('drip', data);
    } else {
      buffer.push(data);
    }
  });
  ipc.on('render/ready', () => {
    while (buffer.length > 0) {
      ipc.send('drip', buffer.shift());
    }
    isReady = true;
  });
}
