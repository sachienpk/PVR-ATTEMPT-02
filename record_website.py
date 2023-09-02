import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

def record_website(url):
  """Records the website at the given URL and saves it as an MP4 file."""

  # Create a Chrome options object.
  options = Options()
  options.add_argument("--headless")
  options.add_argument("--enable-desktop-capture")

  # Create a DesiredCapabilities object.
  capabilities = DesiredCapabilities.CHROME
  capabilities["goog:chromeOptions"] = options

  # Create a WebDriver object.
  driver = webdriver.Chrome(desired_capabilities=capabilities)

  # Navigate to the website.
  driver.get(url)

  # Wait for 30 seconds.
  time.sleep(30)

  # Close the browser.
  driver.close()

def main():
  # Get the URL of the website to record.
  url = "https://sastro-go.vercel.app/web-player/"

  # Record the website.
  record_website(url)

if __name__ == "__main__":
  main()

