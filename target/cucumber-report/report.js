$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:features/MyApplication.feature");
formatter.feature({
  "name": "Test facebook smoke scenario",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Test Login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Open firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "nayangogoi712@gmail.com",
        "manage123"
      ]
    },
    {
      "cells": [
        "nayangogoi112@gmail.com",
        "abcert"
      ]
    },
    {
      "cells": [
        "nayangogoier12@gmail.com",
        "new"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test Login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Open firefox and start application",
  "keyword": "Given "
});
formatter.match({
  "location": "testDefinition.SmokeTest.Open_firefox_and_start_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid \"nayangogoi712@gmail.com\" and \"manage123\"",
  "keyword": "When "
});
formatter.match({
  "location": "testDefinition.SmokeTest.I_enter_valid_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "testDefinition.SmokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "testDefinition.SmokeTest.application_should_be_closed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test Login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Open firefox and start application",
  "keyword": "Given "
});
formatter.match({
  "location": "testDefinition.SmokeTest.Open_firefox_and_start_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid \"nayangogoi112@gmail.com\" and \"abcert\"",
  "keyword": "When "
});
formatter.match({
  "location": "testDefinition.SmokeTest.I_enter_valid_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "testDefinition.SmokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "testDefinition.SmokeTest.application_should_be_closed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test Login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Open firefox and start application",
  "keyword": "Given "
});
formatter.match({
  "location": "testDefinition.SmokeTest.Open_firefox_and_start_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid \"nayangogoier12@gmail.com\" and \"new\"",
  "keyword": "When "
});
formatter.match({
  "location": "testDefinition.SmokeTest.I_enter_valid_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "testDefinition.SmokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "testDefinition.SmokeTest.application_should_be_closed()"
});
formatter.result({
  "status": "passed"
});
});