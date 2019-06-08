package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class RegisterPage {
	
	//Task two:
	//Create a new class in pageObjects  package
	//Name the class RegisterPage
	//Get all web elements of that page
	
	public void registerPage (WebDriver driver) {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy (how = How.XPATH, using = "//input[@name='firstname']")
	private WebElement firstName;
	@FindBy (how = How.XPATH, using = "//input[@name='lastname']")
	private WebElement lastName;
	@FindBy (how = How.XPATH, using = "//input[@name='email']")
	private WebElement email;
	@FindBy (how = How.XPATH, using = "//input[@name='telephone']")
	private WebElement telephone;
	@FindBy (how = How.XPATH, using = "//input[@name='password']")
	private WebElement password;
	@FindBy (how = How.XPATH, using = "//input[@name='confirm']")
	private WebElement passwordConfirm;
	@FindBy (how = How.XPATH , using ="//input[@type='radio' and @value='1']")
    private WebElement subscribeYes;
	@FindBy (how = How.XPATH , using ="//input[@type='radio' and @value='0']")
    private WebElement subscribeNo;
	@FindBy (how = How.XPATH , using ="//input[@name='agree']")
    private WebElement agreetoPrivacy;
	
	
	
}






	
	

