Feature: Test facebook smoke scenario
	Scenario: Test Login with valid credentials
	Given  Open firefox and start application
	When  I enter valid "nayangogoi712@gmail.com" and "manage123"
	Then  user should be able to login successfully
	