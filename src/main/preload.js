import { contextBridge, } from 'electron';
import ReceiveData from '~/main/class/ReceiveData';
import Ipc from '~/main/class/Ipc';

const ipc = new Ipc();
new ReceiveData(ipc).start();

contextBridge.exposeInMainWorld('ipc', {
  on: ipc.on.bind(ipc),
  send: ipc.on.bind(ipc),
});
