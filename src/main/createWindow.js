const { BrowserWindow } = require('electron')

const mode = process.env.NODE_ENV
const isDevMode = mode === 'development'

function createWindow(win) {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1080,
    height: 800,
    minWidth: 1080,
    minHeight: 800,
    show: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.once('ready-to-show', () => {
    win.show()
  })

  if (isDevMode) {
    win.loadURL('http://localhost:8080/')

    // Open the DevTools.
    win.webContents.openDevTools()
  } else {
    // and load the index.html of the app.
    // filePath should be a path to an HTML file relative to the root of your application
    win.loadFile('dist-webpack/renderer/index.html')
  }

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })

}

module.exports = createWindow
