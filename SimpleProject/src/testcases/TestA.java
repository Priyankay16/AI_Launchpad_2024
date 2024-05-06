package testcases;

import org.testng.ITestContext;
import org.testng.Reporter;
import org.testng.annotations.Test;

import util.Validations;

public class TestA extends TestBase{
	
	
	@Test(priority =1)
	public void testA(ITestContext con) throws InterruptedException {
		System.out.println("Starting A");
		//openBrowser();
		i=i+100;
		Validations v = new Validations();
		//v.validateTitle("xxxxxxx");
		Thread.sleep(5000);
		//driver.quit();
		System.out.println("End A "+i);
		String bookingID="19287983123";
		con.setAttribute("id", bookingID);
	}
	
	@Test(priority = 2)
	public void testAA(ITestContext con) {
		System.out.println("Starting AA");
		System.out.println(con.getAttribute("id"));
		Reporter.getCurrentTestResult().getTestContext().getAttribute("id");
	}

}
