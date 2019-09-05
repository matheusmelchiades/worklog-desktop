const moment = require('moment')
const { resolve } = require('path')
const { app, Menu, Tray, BrowserWindow } = require('electron')
const urlIConTimeIsMoney = resolve(
  __dirname,
  'assets',
  'TimeIsMoneyIcon',
  'TimeIsMoneyIcon@2x.png'
)

const issue = issueFactory()

app.on('ready', () => {
  const tray = new Tray(urlIConTimeIsMoney)

  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Start',
      type: 'radio',
      click: () => {
        const win = new BrowserWindow({
          width: 800,
          height: 600,
          titleBarStyle: 'hiddenInset'
        })

      }
    },
    { label: 'Set issue', type: 'radio' }
  ])

  tray.setContextMenu(contextMenu)
})

function issueFactory (name, description, type, start, end) {
  return {
    name: '',
    description: '',
    type: '',
    start: '',
    end: ''
  }
}
