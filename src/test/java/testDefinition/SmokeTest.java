package testDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class SmokeTest {

	WebDriver driver;

	@Given("^Open firefox and start application$")
	public void Open_firefox_and_start_application() throws Throwable {
		String os = System.getProperty("os.name");
		System.out.println(os);
		if(os.equals("Windows 10")){
		System.setProperty("webdriver.gecko.driver","C:\\Essentials\\jar_files\\geckodriver.exe");}
		else
		System.setProperty("webdriver.gecko.driver", "//home//nayan//geckodriver-v0.24.0-linux64//geckodriver");
		
	    driver = new FirefoxDriver();
	    driver.manage().window().maximize();
	    driver.get("http://www.facebook.com");
	}

	@When("^I enter valid \"([^\"]*)\" and \"([^\"]*)\"$")
	public void I_enter_valid_username_and_password(String user , String pass) throws Throwable {
	    driver.findElement(By.id("email")).sendKeys(user);
	    driver.findElement(By.id("pass")).sendKeys(pass);
	}

	@Then("^user should be able to login successfully$")
	public void user_should_be_able_to_login_successfully() throws Throwable {
	    driver.findElement(By.id("loginbutton")).click();
	    Thread.sleep(2000);
	   
	}
	@Then("application should be closed")
	public void application_should_be_closed() {
	    driver.quit();
	}

}
