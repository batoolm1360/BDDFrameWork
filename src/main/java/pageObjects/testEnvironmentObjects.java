


	//Create a new class in pageObjects package
	//name the class testEnvironmentObjects
	//get My Account web element
	//get Login web element
	//Get Register web element 
	//Create three methods to click on My Account, login  and Register 
	//Then get web element for email field, password field, and and login button
	
	package pageObjects;

	import org.openqa.selenium.WebDriver;
	import org.openqa.selenium.WebElement;
	import org.openqa.selenium.support.FindBy;
	import org.openqa.selenium.support.How;
	import org.openqa.selenium.support.PageFactory;

	public class testEnvironmentObjects {

		public void TestEnviromentPage (WebDriver driver) {
			PageFactory.initElements(driver, this);
		}
		
		@FindBy (how = How.XPATH , using ="//a[@title='My Account']")
	    private WebElement myAccount;
		@FindBy (how = How.XPATH , using ="(//a[text()='Register'])[1]")
	    private WebElement register;
		@FindBy (how = How.XPATH , using ="(//a[text()='Login'])[1]")
	    private WebElement loginMenu;
		@FindBy (how = How.XPATH , using ="//a[@id='input-email']")
	    private WebElement email;
		@FindBy (how = How.XPATH , using ="//a[@id='input-password']")
	    private WebElement password;
		@FindBy (how = How.XPATH , using ="//a[@value='Login']")
	    private WebElement loginButton;
		
		  public void clickOnMyAccount() {
			  myAccount.click();
		    }
		  public void clickOnRegister() {
			  register.click();
		    }
		  
		  public void clickOnLogin() {
			  loginMenu.click();
		    }
		
		
	}
