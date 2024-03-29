const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');
const {Menu} = require('electron');

let win;

function createWindow() {
    win = new BrowserWindow({
        width:800, 
        height:600, 
        icon:__dirname + '/image.png'
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    win.on('closed', () => {
        win = null;
    });
}

//BrowserWindow.setMenu(null);
/*app.on('browser-window-created',function(e,window) {
    window.setMenu(null);
});*/

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit();
    }
});