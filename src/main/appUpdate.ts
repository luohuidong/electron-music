import log from 'electron-log';
import { autoUpdater } from 'electron-updater';

export default function () {
  autoUpdater.logger = log;
  autoUpdater.logger.transports.file.level = 'info';
  log.info('App starting...');

  autoUpdater.checkForUpdatesAndNotify();
}
