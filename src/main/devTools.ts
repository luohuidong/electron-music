import path from 'path';
import os from 'os';
import fs from 'fs';
import { BrowserWindow, app } from 'electron';
import process from 'process';

const isDevMode = process.env.NODE_ENV === 'development';

function handleAddDevToolsExtension(extendsionId: string) {
  const extendsionPath = path.join(os.homedir(), 'AppData\\Roaming', 'Google\\Chrome\\User Data\\Default\\Extensions', extendsionId);

  fs.stat(extendsionPath, (err, stats) => {
    if (err) {
      return;
    }
    if (stats.isDirectory()) {
      BrowserWindow.addDevToolsExtension(extendsionPath);
    }
  });
}


export default function initialDevTools() {
  handleAddDevToolsExtension('fmkadmapgofadopljbjfkapdkoienihi');
}

// Only to load development tools in development mode
if (isDevMode) {
  app.on('ready', () => initialDevTools());
}
