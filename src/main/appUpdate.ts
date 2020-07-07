import log from 'electron-log';
import { autoUpdater } from 'electron-updater';

export default function () {
  autoUpdater.logger = log;
  log.info('App starting...');

  autoUpdater.checkForUpdatesAndNotify();
}
