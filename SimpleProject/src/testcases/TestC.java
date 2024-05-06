package testcases;

import org.testng.annotations.Test;

import util.Validations;

public class TestC extends TestBase{

	@Test
	public void testC() throws InterruptedException {
		System.out.println("Starting C");
		//openBrowser();
		//Validations v = new Validations();
		//v.validateTitle("xxxxxxx");
		Thread.sleep(5000);
		//driver.quit();
		i=i+100;
		System.out.println("End C "+i);
	}
}
