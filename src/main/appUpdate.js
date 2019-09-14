const log = require('electron-log')
const { autoUpdater } = require('electron-updater')
const { ipcMain } = require('electron')

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

  autoUpdater.on('error', (error) => {
    log.info(`Auto update error: ${error}`)
  })

  autoUpdater.on('checking-for-update', () => {
    log.info('checking-for-update')
  })

  autoUpdater.on('update-available', () => {
    log.info('update-available')
  })

  autoUpdater.on('update-not-available', () => {
    log.info('update-not-available')
  })

  autoUpdater.on('download-progress', (progress) => {
    const { percent } = progress
    log.info(`download-progress: ${percent}`)
  })

  autoUpdater.on('update-downloaded', (info) => {
    const { downloadedFile } = info
    log.info(downloadedFile)
  })

  ipcMain.on('user-request-updating-app', () => {
    console.log('user-request-updating-app')
  })

  // autoUpdater.checkForUpdates()
}
