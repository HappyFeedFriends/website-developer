import TaskManagerIcon from '../client/images/task-manager.png'
import PhpStormIcon from '../client/images/ide_phpStorm.png'
import VsCodeIcon from '../client/images/ide_vscode.png'
import BrowserYandexIcon from '../client/images/browser_yandex.png'
import BrowserChromeIcon from '../client/images/browser_chrome.png'
import BrowserSafariIcon from '../client/images/browser_safari.png'
import BrowserFirefoxIcon from '../client/images/browser_firefox.png'
import TelegramIcon from '../client/images/telegram.png'

export const enum IDE {
  VsCode,
  PhpStorm,
}

export const enum Browser {
  Chrome,
  Yandex,
  Safari,
  Mozilla,
}


export const PROGRAMS_LIST = [
  { id: 1, name: 'Task Manager', icon: TaskManagerIcon },
  { id: 2, name: 'PhpStorm', icon: PhpStormIcon },
  { id: 3, name: 'Visual Studio Code', icon: VsCodeIcon },
  { id: 4, name: 'Yandex', icon: BrowserYandexIcon },
  { id: 5, name: 'Chrome', icon: BrowserChromeIcon },
  { id: 6, name: 'Safari', icon: BrowserSafariIcon },
  { id: 7, name: 'Firefox', icon: BrowserFirefoxIcon },
  { id: 8, name: 'Telegram', icon: TelegramIcon },
]