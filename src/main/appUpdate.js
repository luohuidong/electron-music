const log = require('electron-log')
const { autoUpdater } = require('electron-updater')

module.exports = function (app, win) {
  //-------------------------------------------------------------------
  // Logging
  //
  // THIS SECTION IS NOT REQUIRED
  //
  // This logging setup is not required for auto-updates to work,
  // but it sure makes debugging easier :)
  //-------------------------------------------------------------------
  autoUpdater.logger = log
  autoUpdater.logger.transports.file.level = 'info'
  log.info('App starting...')

  function sendContentToRender(data) {
    win.webContents.send('update-message', data)
  }

  autoUpdater.on('checking-for-update', () => {
    console.log('checking-for-update')
    sendContentToRender('checking-for-update')
  })

  autoUpdater.on('update-available', (ev, info) => {
    console.log('TCL: info', info)
    sendContentToRender('update-available')
  })

  autoUpdater.on('update-not-available', (ev, info) => {
    console.log('TCL: info', info)
  })

  autoUpdater.on('error', (ev, err) => {
    console.log('TCL: err', err)
    sendContentToRender('自动更新失败')

  })

  autoUpdater.on('download-progress', (ev, progressObj) => {
    sendContentToRender(progressObj)
    console.log('TCL: progressObj', progressObj)
  })

  autoUpdater.on('update-downloaded', (ev, info) => {
    console.log('TCL: info', info)
    setTimeout(function() {
      console.log('abc')
      autoUpdater.quitAndInstall();
    }, 5000)
  })

  app.on('ready', function()  {
    autoUpdater.checkForUpdates()
  })
}
