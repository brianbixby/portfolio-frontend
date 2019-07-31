export const browserFetch = browser => ({
  type: 'BROWSER_FETCH',
  payload: browser,
});

export const browserFetchRequest = () => dispatch => {
  const isChromium = window.chrome;
  const winNav = window.navigator;
  const vendorName = winNav.vendor;
  const isOpera = typeof window.opr !== "undefined";
  const isIEedge = winNav.userAgent.indexOf("Edge") > -1;
  const isIOSChrome = winNav.userAgent.match("CriOS");
  let browser;
  
  if (isIOSChrome) {
     // is Google Chrome on IOS
     browser = "iosChrome";
  } else if(
    isChromium !== null &&
    typeof isChromium !== "undefined" &&
    vendorName === "Google Inc." &&
    isOpera === false &&
    isIEedge === false
  ) {
     // is Google Chrome
     browser = "chrome";
  } else { 
     browser = "notChrome";
  }
  dispatch(browserFetch(browser));
};