import { BrowserWindow } from 'electron';

const mode = process.env.NODE_ENV;
const isDevMode = mode === 'development';

const windowsMap = new Map();

export default function createSubWindows(routePath: string) {
  if (windowsMap.has(routePath)) {
    const win = windowsMap.get(routePath);
    win.focus();
    return;
  }

  // Create the browser window.
  let win: BrowserWindow | null = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 600,
    show: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  windowsMap.set(routePath, win);

  win.once('ready-to-show', () => {
    win && win.show();
  });

  if (isDevMode) {
    win.loadURL(`http://localhost:8080#${routePath}`);
  } else {
    // and load the index.html of the app.
    // filePath should be a path to an HTML file relative to the root of your application
    win.loadFile(`dist-webpack/renderer/index.html#${routePath}`);
  }

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
    windowsMap.delete(routePath);
  });
}
