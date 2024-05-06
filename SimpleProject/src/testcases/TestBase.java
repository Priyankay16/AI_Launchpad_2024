package testcases;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestBase {
	
	public static WebDriver driver;
	int i=0;
	
	public void openBrowser() {
		System.setProperty("webdriver.chrome.driver", "D:\\Ashish\\softwares\\drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://yahoo.com");
	}

}
