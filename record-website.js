const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: "new", enableDesktopCapture: true });
  const page = await browser.newPage();

  await page.goto("https://sastro-go.vercel.app/web-player/");

  // Start recording the website.
  const recorder = await page.startRecording({
    audio: false,
  });

  // Wait for 30 seconds.
  await new Promise((resolve, reject) => setTimeout(resolve, 30000));

  // Stop recording the website.
  await recorder.stop();

  // Save the recording as an MP4 file.
  const blob = await recorder.getBlob();
  const filename = `recording.mp4`;
  const file = await browser.saveFile(blob, filename);

  // Notify the user that the recording has been saved.
  console.log(`The recording has been saved as ${filename}.`);

  // Close the browser.
  await browser.close();
})();
