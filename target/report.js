$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/TekSchoolTest.feature");
formatter.feature({
  "line": 2,
  "name": "Tek School Test",
  "description": "",
  "id": "tek-school-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TekSchoolTest"
    },
    {
      "line": 1,
      "name": "@alltest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Testing login with different user and pass",
  "description": "",
  "id": "tek-school-test;testing-login-with-different-user-and-pass",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tek"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User enter username \u003cuserName\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User enter password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click continue button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "tek-school-test;testing-login-with-different-user-and-pass;",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 28,
      "id": "tek-school-test;testing-login-with-different-user-and-pass;;1"
    },
    {
      "cells": [
        "test@test.com",
        "test001"
      ],
      "line": 29,
      "id": "tek-school-test;testing-login-with-different-user-and-pass;;2"
    },
    {
      "cells": [
        "test1@test.com",
        "test002"
      ],
      "line": 30,
      "id": "tek-school-test;testing-login-with-different-user-and-pass;;3"
    },
    {
      "cells": [
        "test2@test.com",
        "test003"
      ],
      "line": 31,
      "id": "tek-school-test;testing-login-with-different-user-and-pass;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5553771078,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User go to Tek School page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on test environment",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.user_go_to_Tek_School_page()"
});
formatter.result({
  "duration": 248219236,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitions.StepDefinations.user_go_to_Tek_School_page(StepDefinations.java:51)\r\n\tat ✽.Given User go to Tek School page(Features/TekSchoolTest.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.user_click_on_test_environment()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 29,
  "name": "Testing login with different user and pass",
  "description": "",
  "id": "tek-school-test;testing-login-with-different-user-and-pass;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tek"
    },
    {
      "line": 1,
      "name": "@TekSchoolTest"
    },
    {
      "line": 1,
      "name": "@alltest"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User enter username test@test.com",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User enter password test001",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click continue button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "test@test.com",
      "offset": 20
    }
  ],
  "location": "StepDefinations.user_enter_username_test_test_com()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test001",
      "offset": 20
    }
  ],
  "location": "StepDefinations.user_enter_password_test(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.click_continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.user_should_be_logged_in_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 811380960,
  "status": "passed"
});
formatter.before({
  "duration": 4747784890,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User go to Tek School page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on test environment",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.user_go_to_Tek_School_page()"
});
formatter.result({
  "duration": 1455786,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitions.StepDefinations.user_go_to_Tek_School_page(StepDefinations.java:51)\r\n\tat ✽.Given User go to Tek School page(Features/TekSchoolTest.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.user_click_on_test_environment()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 30,
  "name": "Testing login with different user and pass",
  "description": "",
  "id": "tek-school-test;testing-login-with-different-user-and-pass;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tek"
    },
    {
      "line": 1,
      "name": "@TekSchoolTest"
    },
    {
      "line": 1,
      "name": "@alltest"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User enter username test1@test.com",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User enter password test002",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click continue button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "test1@test.com",
      "offset": 20
    }
  ],
  "location": "StepDefinations.user_enter_username_test_test_com()"
});
formatter.result({
  "duration": 0,
  "error_message": "cucumber.runtime.AmbiguousStepDefinitionsException: ✽.When User enter username test1@test.com(Features/TekSchoolTest.feature:22) matches more than one step definition:\n  ^User enter username (.+)$ in StepDefinations.user_enter_username_test_test_com()\n  ^User enter username test(\\d+)@test\\.com$ in StepDefinations.user_enter_username_test_test_com(int)\n\r\n\tat cucumber.runtime.RuntimeGlue.stepDefinitionMatch(RuntimeGlue.java:71)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:267)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "test002",
      "offset": 20
    }
  ],
  "location": "StepDefinations.user_enter_password_test(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.click_continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.user_should_be_logged_in_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 776314090,
  "status": "passed"
});
formatter.before({
  "duration": 3495325157,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User go to Tek School page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on test environment",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.user_go_to_Tek_School_page()"
});
formatter.result({
  "duration": 1265778,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitions.StepDefinations.user_go_to_Tek_School_page(StepDefinations.java:51)\r\n\tat ✽.Given User go to Tek School page(Features/TekSchoolTest.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.user_click_on_test_environment()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 31,
  "name": "Testing login with different user and pass",
  "description": "",
  "id": "tek-school-test;testing-login-with-different-user-and-pass;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tek"
    },
    {
      "line": 1,
      "name": "@TekSchoolTest"
    },
    {
      "line": 1,
      "name": "@alltest"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User enter username test2@test.com",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User enter password test003",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click continue button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "test2@test.com",
      "offset": 20
    }
  ],
  "location": "StepDefinations.user_enter_username_test_test_com()"
});
formatter.result({
  "duration": 0,
  "error_message": "cucumber.runtime.AmbiguousStepDefinitionsException: ✽.When User enter username test2@test.com(Features/TekSchoolTest.feature:22) matches more than one step definition:\n  ^User enter username (.+)$ in StepDefinations.user_enter_username_test_test_com()\n  ^User enter username test(\\d+)@test\\.com$ in StepDefinations.user_enter_username_test_test_com(int)\n\r\n\tat cucumber.runtime.RuntimeGlue.stepDefinitionMatch(RuntimeGlue.java:71)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:267)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "test003",
      "offset": 20
    }
  ],
  "location": "StepDefinations.user_enter_password_test(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.click_continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.user_should_be_logged_in_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 768201737,
  "status": "passed"
});
});