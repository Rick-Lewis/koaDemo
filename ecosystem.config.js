module.exports = {
  apps: [{
    name: 'koaServer',
    script: './server/server.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: true,
    // Delay between restart
    watch_delay: 1000,
    ignore_watch: ['node_modules', 'webpack'],
    watch_options: {
      'followSymlinks': false
    },
    max_memory_restart: '1G',
    error_file: './server/logs/app-err.log', // 错误日志路径
    out_file: './server/logs/app-out.log', // 普通日志路径
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy: {
    production: {
      user: 'node',
      host: '212.83.163.1',
      ref: 'origin/master',
      repo: 'git@github.com:repo.git',
      path: '/var/www/production',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
