

function openTab() {
    var newTab = browser.tabs.create({
        url: 'https://github.com/cat-lin-morgan',
        active: true,
    })
}

browser.browserAction.onClicked.addListener(openTab);