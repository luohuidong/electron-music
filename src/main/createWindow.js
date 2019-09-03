const { BrowserWindow } = require('electron')

const mode = process.env.NODE_ENV
const isDevMode = mode === 'development'

function createWindow (win) {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1500,
    height: 1000,
    webPreferences: {
      nodeIntegration: true
    }
  })

  if (isDevMode) {
    win.loadURL('http://localhost:8080/')
  } else {
    // and load the index.html of the app.
    // filePath should be a path to an HTML file relative to the root of your application
    win.loadFile('dist-webpack/renderer/index.html')
  }

  // Open the DevTools.
  win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })

}

module.exports = createWindow
