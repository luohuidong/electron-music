import { app, BrowserWindow } from 'electron'

const gotTheLock = app.requestSingleInstanceLock()

export default function handleSingleInstance(mainWindow: BrowserWindow | null) {
  if (!gotTheLock) {
    app.quit()
  } else {
    app.on('second-instance', () => {
      // Someone tried to run a second instance, we should focus our window.
      if (mainWindow) {
        if (mainWindow.isMinimized()) {
          mainWindow.restore()
        }
        mainWindow.focus()
      }
    })
  }
}


