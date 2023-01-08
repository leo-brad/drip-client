import { contextBridge, } from 'electron';
//import ReceiveData from '~/main/class/ReceiveData';
import receiveData from '~/main/lib/receiveData';
import Ipc from '~/main/class/Ipc';

const ipc = new Ipc();
receiveData(ipc);

contextBridge.exposeInMainWorld('ipc', {
  on: ipc.on.bind(ipc),
  send: ipc.send.bind(ipc),
});
