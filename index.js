const electron = require('electron');
const {app, BrowserWindow} = electron;
const path = require('path');
const url = require('url');

const PORT = process.env.ENV === 'development' ? 3000 : 8080;

require('./server');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

function createWindow () {
  const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize;
  const icon = path.join(__dirname, 'packed', 'favicon.ico');
  win = new BrowserWindow({width, height, icon});
  win.loadURL(`http://localhost:${PORT}`);

  // Open the DevTools.
  win.webContents.openDevTools();

  // Emitted when the window is closed.
  win.on('closed', () => {
    win = null
  })
}

//Create window when ready
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') { //MacOS fix
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});