async function recordWebsite() {
  // Create a new MediaRecorder object.
  const recorder = new MediaRecorder();

  // Get the URL of the website to record.
  const url = "https://sastro-go.vercel.app/web-player/";

  // Open a headed browser to the website.
  const browser = await navigator.permissions.query({ name: "microphone" });
  if (browser.state === "granted") {
    const win = await new Promise((resolve, reject) => {
      const iframe = document.createElement("iframe");
      iframe.src = url;
      iframe.style.display = "none";
      document.body.appendChild(iframe);
      iframe.onload = () => resolve();
    });

    // Start recording the website.
    recorder.start();

    // Wait for 30 seconds.
    await new Promise((resolve, reject) => setTimeout(resolve, 30000));

    // Stop recording the website.
    recorder.stop();

    // Save the recording as an MP4 file.
    const blob = await recorder.getBlob();
    const filename = `recording.mp4`;
    const file = await navigator.clipboard.write(blob, { filename });

    // Notify the user that the recording has been saved.
    alert(`The recording has been saved as ${filename}.`);
  } else {
    alert("The microphone permission is not granted.");
  }
}

recordWebsite();
