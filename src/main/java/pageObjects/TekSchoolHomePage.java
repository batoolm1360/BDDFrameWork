package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class TekSchoolHomePage {

	public TekSchoolHomePage(WebDriver driver) {
		PageFactory.initElements(driver, this);

		// how we find the object pattern:
		// 1. @By annotation
		// 2. @findBy annotation

	}

	@FindBy(how = How.XPATH, using = "(//a[text() = 'login'])[2]")
	private WebElement loginButton;

	public void cliakOnLogin() {
		loginButton.click();

	}
	
	@FindBy(how = How.XPATH, using = "//a[text() = 'test environment']")
	private WebElement testEnvironment;
	
	public void clickOnTestEnvironment() {
		testEnvironment.click();
		
	}
	

}
