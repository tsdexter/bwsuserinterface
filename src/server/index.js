import * as publicUiFunctions from './ui';
import * as publicSheetFunctions from './sheets';

// Expose public functions by attaching to `global`
global.onOpen = publicUiFunctions.onOpen;
global.openDialog = publicUiFunctions.openDialog;
global.openDialogBootstrap = publicUiFunctions.openDialogBootstrap;
global.openAboutSidebar = publicUiFunctions.openAboutSidebar;
global.getSheetsData = publicSheetFunctions.getSheetsData;
global.addSheet = publicSheetFunctions.addSheet;
global.deleteSheet = publicSheetFunctions.deleteSheet;
global.setActiveSheet = publicSheetFunctions.setActiveSheet;

global.doGet = publicUiFunctions.doGet;
global.openWebApp = publicUiFunctions.openWebApp;
global.openWebAppMobile = publicUiFunctions.openWebAppMobile;

// bws
global.getCellValue = publicSheetFunctions.getCellValue;
global.setCellValue = publicSheetFunctions.setCellValue;
