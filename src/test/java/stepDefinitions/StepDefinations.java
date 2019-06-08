package stepDefinitions;

import org.openqa.selenium.WebDriver;

import constants.ConfigFileReader;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.TekSchoolHomePage;

public class StepDefinations {

	WebDriver driver;
	TekSchoolHomePage tekSchoolHopePage;
	ConfigFileReader configFileReader;

	@Given("^User is on Home Page$")
	public void user_is_on_Home_Page() {

	}

	@When("^User Navigate to LogIn Page$")
	public void user_Navigate_to_LogIn_Page() {

	}

	@When("^User enters UserName and Password$")
	public void user_enters_UserName_and_Password() {

	}

	@Then("^Message displayed Login Successfully$")
	public void message_displayed_Login_Successfully() {

	}

	@When("^User LogOut from the Application$")
	public void user_LogOut_from_the_Application() {

	}

	@Then("^Message displayed LogOut Successfully$")
	public void message_displayed_LogOut_Successfully() {

	}

	@Given("^User go to Tek School page$")
	public void user_go_to_Tek_School_page() {
		configFileReader = new ConfigFileReader();
		driver.get(configFileReader.getApplicationUrl());

	}

	@Given("^User click on test environment$")
	public void user_click_on_test_environment() {

	}

	@When("^User see test environment page$")
	public void user_see_test_environment_page() {

	}

	@Then("^User verify test environment title$")
	public void user_verify_test_environment_title() {

	}

	@When("^User click on myAccount$")
	public void user_click_on_myAccount() {

	}

	@When("^User select login from dropdown$")
	public void user_select_login_from_dropdown() {

	}

	@Then("^User should see login page$")
	public void user_should_see_login_page() {

	}

	@When("^User enter username (.+)$")
	public void user_enter_username_test_test_com() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		throw new PendingException();
	}

	@When("^User enter password (.+)$")
	public void user_enter_password_test(int arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		throw new PendingException();
	}

	@When("^Click continue button$")
	public void click_continue_button() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		throw new PendingException();
	}

	@Then("^User should be logged in successfully$")
	public void user_should_be_logged_in_successfully() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		throw new PendingException();
	}

	@When("^User enter username test(\\d+)@test\\.com$")
	public void user_enter_username_test_test_com(int arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		throw new PendingException();
	}

}
