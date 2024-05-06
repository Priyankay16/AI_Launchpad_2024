package testcases;

import org.testng.ITestContext;
import org.testng.annotations.Test;

import util.Validations;

public class TestB extends TestBase{

	@Test
	public void testB(ITestContext con) throws InterruptedException {
		System.out.println("Starting B "+con.getAttribute("id"));
		//openBrowser();
		i=i+100;
		//Validations v = new Validations();
		//v.validateTitle("xxxxxxx");	
		//driver.quit();
		Thread.sleep(5000);
		System.out.println("End B "+i);
	}
}
