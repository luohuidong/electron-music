import fs from 'fs';
import { spawn, SpawnOptionsWithoutStdio } from 'child_process';

class AnalyzeBundle {
  statsFilePath = 'tmp/stats.json';

  private mkTmpDir() {
    try {
      fs.readdirSync('tmp');
    } catch (error) {
      fs.mkdirSync('tmp');
    }
  }

  private rumCmd(
    command: string,
    args?: readonly string[],
    options?: SpawnOptionsWithoutStdio
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      const childProcess = spawn(command, args, options);

      childProcess.stderr.on('data', (data) => {
        reject(`stderr: ${data}`);
      });

      childProcess.on('close', (code) => {
        resolve(`child process exited with code ${code}`);
      });

      childProcess.stdout.pipe(process.stdout);
      childProcess.stderr.pipe(process.stderr);
    });
  }

  private createStatsFile() {
    return this.rumCmd(
      'npx',
      [
        'webpack',
        '--config',
        'webpack/webpack.renderer.prod.js',
        '--profile',
        '--json',
        this.statsFilePath,
      ],
      {
        env: Object.assign(process.env, {
          NODE_ENV: 'production',
        }),
      }
    );
  }

  private analyzeStatsFile() {
    return this.rumCmd(
      'npx',
      [
        'webpack-bundle-analyzer',
        this.statsFilePath,
        'dist-webpack-renderer',
        '-m',
        'static',
        '-r',
        'tmp/report.html',
      ],
      {
        env: Object.assign(process.env, {
          NODE_ENV: 'production',
        }),
      }
    );
  }

  async analyzeBundle() {
    this.mkTmpDir();
    try {
      await this.createStatsFile();
      await this.analyzeStatsFile();
    } catch (error) {
      console.log('err', error);
    }
  }
}

new AnalyzeBundle().analyzeBundle();
