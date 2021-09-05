# Test Plans:

  

## How to use this document ?
&nbsp;

  

Each feature should have an associated test plan (happy paths, sad paths and edge cases scenarios) to describe how a feature should function, examining it from many angles.

  

During the definition phase, a QA engineer will start to create a test plan for the feature. This way there is ample time for it to be completed, reviewed, and executed before the test plan is over.

  

The test plans I propose here, have 6 main parts:

  

1. the scenario ID: id

2. the scenario Description: which explains the steps or action that will be executed.

3. the expected result, which describes what the outcome will be for a given action.

4. the latest result (Yes/No) to be updated after each execution

5. Automation status field: for whether or not the scenario will be automated.
6. Comments : if needed
7. Test Patterns : Test patterns to follow (the purpose here is to force the tester to start thinking in parallel to the tests implementation)

  
&nbsp;

## Some important rules and highly recommended guidelines to follow when possible:
&nbsp;

  

- There is one unique scenario per row.

- Once a test plan is complete, you can end up with anywhere from 10 to 100 scenarios. The number doesn't really matter so much. What's more important is that the test plan identifies all the possible actions the user can take when using a feature.

- When a test plan is complete, have a review meeting Send out the test plan to attendees to asynchronously read through the scenarios and identify gaps or fill uncertainties (here I love the comment feature of google docs. I found this perfect for reviewing/clarifying points in async. And we can mix this with huddle or any other type of meeting when needed). Once all the feedback has been addressed and the test plan is solidified, it can then be referred to later when testing individual components or stories of the feature as they become complete.

- Demo + Exploratory testing : In addition to reviewing the test plan as a group, I encourage the team to do group or mob testing session together for 30minutes-2h to run through each scenario in the test plans. This happens in advance of the release and can give team members the chance to use the feature across different browsers, platforms, or devices. (let's clarify a bit this point :)  it is not a really 100% testing session, instead, the purpose could be to meet and make fun with team and learn/demo new features while finding possible bugs and sharing knowledge ..etc)

- A test plan is a living document that should be updated as scenarios change, as tests are executed, and as the priorities for the day change. Testing is based on what is the activity for the day and the outcome of the day before.

- Test designing and abstract thinking is the most important. Attention! Do not spend many hours and effort coming up with a great test plan document with unused sections. This is not the right way to do anymore. (Like in a waterfall environment, where quite often the test plan document is one that is hardly ever looked at during the life-cycle of the product.) It is clearly evident that test plan doesn’t reveal defects but test scenarios will. The effort needs to be shifted on creating better scenarios than creating a nice unused document.

==> That’s why my test plans are just tables with 7 columns and 1 row per test scenario.

  
  
&nbsp;

## Test Plan 1 : Feature “User/Register”
&nbsp;

  
  
| Scenario Id | Scenario Description| Expected Result| Latest Result <br>(Pass/Fail) | Automated <br>(Yes/No) |Comments| Test patterns|                                      
| - | -- | - | - | - | - |-|
| UR01| | |  | |||


&nbsp;
&nbsp;
## Test Plan 2 : Feature “User/Login”
&nbsp;

  
| Scenario Id | Scenario Description| Expected Result| Latest Result <br>(Pass/Fail) | Automated <br>(Yes/No) |Comments| Test patterns|                                      
| - | -- | - | - | - | - |-|
| UL01| | |  | |||

