import './style.css';
import { setupCounter } from './counter';
import { invoke } from '@tauri-apps/api';
import { readText } from '@tauri-apps/api/clipboard';

const response = await invoke('greet', { name: 'World' });
console.log(response);

const clipboardText = await readText();
console.log(clipboardText);

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
