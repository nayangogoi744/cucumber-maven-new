Feature: Test facebook smoke scenario
	Scenario Outline: Test Login with valid credentials
	Given  Open firefox and start application
	When  I enter valid "<username>" and "<password>"
	Then  user should be able to login successfully
	Then application should be closed
	
	Examples:
	| username | password |
	|	nayangogoi712@gmail.com | manage123 |
	| nayangogoi112@gmail.com | abcert |
	| nayangogoier12@gmail.com | new |