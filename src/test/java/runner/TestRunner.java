package runner;
import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="features",glue={"testDefinition"},plugin = {"pretty", "html:target/cucumber-report", "json:target/cucumber-report/cucumber.json"})
public class TestRunner {

}
