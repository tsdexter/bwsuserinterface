export const onOpen = () => {
  const menu = SpreadsheetApp.getUi()
    .createMenu('BWS App') // edit me!
    .addItem('Show Web App (desktop)', 'openWebApp')
    .addItem('Show Web App (mobile)', 'openWebAppMobile')
    .addItem('Sheet Editor', 'openDialog')
    .addItem('Sheet Editor (Bootstrap)', 'openDialogBootstrap')
    .addItem('About me', 'openAboutSidebar');

  menu.addToUi();
};

export const doGet = () => {
  const html = HtmlService.createHtmlOutputFromFile('web-app');
  return html.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
};

export const openWebApp = () => {
  const html = HtmlService.createHtmlOutputFromFile('web-app')
    .setWidth(1200)
    .setHeight(800);
  SpreadsheetApp.getUi().showModalDialog(html, 'Desktop Web App View');
};

export const openWebAppMobile = () => {
  const html = HtmlService.createHtmlOutputFromFile('web-app')
    .setWidth(375)
    .setHeight(812);
  SpreadsheetApp.getUi().showModalDialog(html, 'Mobile Web App View');
};

export const openDialog = () => {
  const html = HtmlService.createHtmlOutputFromFile('dialog-demo')
    .setWidth(600)
    .setHeight(600);
  SpreadsheetApp.getUi().showModalDialog(html, 'Sheet Editor');
};

export const openDialogBootstrap = () => {
  const html = HtmlService.createHtmlOutputFromFile('dialog-demo-bootstrap')
    .setWidth(600)
    .setHeight(600);
  SpreadsheetApp.getUi().showModalDialog(html, 'Sheet Editor (Bootstrap)');
};

export const openAboutSidebar = () => {
  const html = HtmlService.createHtmlOutputFromFile('sidebar-about-page');
  SpreadsheetApp.getUi().showSidebar(html);
};
