const { resolve } = require('path')
const { app, Menu, Tray } = require('electron')
const urlIConTimeIsMoney = resolve(
  __dirname,
  'assets',
  'TimeIsMoneyIcon',
  'TimeIsMoneyIcon@2x.png'
)

app.on('ready', () => {
  const tray = new Tray(urlIConTimeIsMoney)

  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Start',
      type: 'radio',
      click: () => {
        require('child_process').exec('git branch', (err, output) => {
          if (err) console.log(err)

          const currentBranch = output
            .trim()
            .split(' ')
            .slice(1)
            .join('')

          console.log(currentBranch)
        })
      }
    },
    { label: 'Set issue', type: 'radio' }
  ])

  tray.setContextMenu(contextMenu)
})
