const { default: installExtension, REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } = require('electron-devtools-installer')

function initialDevTools() {
  [REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS].forEach(element => {
    installExtension(element)
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log('An error occurred: ', err))
  })
}

module.exports = initialDevTools
