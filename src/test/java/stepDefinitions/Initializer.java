package stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import constants.ConfigFileReader;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Initializer {

	WebDriver driver;
	ConfigFileReader configFileReader;

	// Cucumber Hooks
	// @before and @after
	// @before Hooks will run before each scenario/scenario outline
	// @after Hooks will run after each scenario/scenario outline

	// this method will run before each scenario
	@Before
	public void beforeScenario() {
		configFileReader= new ConfigFileReader();
		System.setProperty("webdriver.chrome.driver", configFileReader.getDriverPath());
		driver = new ChromeDriver();
		driver.manage().deleteAllCookies();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(configFileReader.getImplicitlyWait(), TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(configFileReader.getImplicitlyWait(),TimeUnit.SECONDS);
	}

	// this methid will run after each scenario
	@After
	public void afterScenario() {
		driver.close();
		driver.quit();

	}

}
