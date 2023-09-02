const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  await page.goto("https://www.youtube.com/watch?v=mhY_PhCCMgY");

  // Start recording the website.
  const mediaStream = await page.mediaDevices.getDisplayMedia({
    audio: false,
  });
  const recorder = new MediaRecorder(mediaStream);

  // Wait for 30 seconds.
  await new Promise((resolve, reject) => setTimeout(resolve, 30000));

  // Stop recording the website.
  recorder.stop();

  // Save the recording as an MP4 file.
  const blob = await recorder.getBlob();
  const filename = `recording.mp4`;
  const file = await browser.saveFile(blob, filename);

  // Notify the user that the recording has been saved.
  console.log(`The recording has been saved as ${filename}.`);

  // Close the browser.
  await browser.close();
})();
