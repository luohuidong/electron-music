const log = require('electron-log')
const { autoUpdater } = require('electron-updater')

module.exports = function () {
  autoUpdater.logger = log
  autoUpdater.logger.transports.file.level = 'info'
  log.info('App starting...')

  autoUpdater.checkForUpdatesAndNotify()
}
