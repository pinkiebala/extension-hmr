
__webpack_public_path__ = chrome.runtime.getURL('')

console.log(__webpack_public_path__)

const script = document.createElement('script')
script.type = 'text/javascript'
script.src = chrome.runtime.getURL('main-dom.js')
document.head.prepend(script)


