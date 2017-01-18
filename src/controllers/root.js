

angular.module('app')

.directive('gameTree', [
  function(){
    return {
      templateUrl: "tree.html"
    }
  }])

.controller('RootController', [
  '$scope', '$timeout', 'user', '$mdSidenav', '$rootScope',
  function($scope, $timeout, user, $mdSidenav, $rootScope){

  $scope.user = user

  $rootScope.game = {  
    "rooms":[
      {
        "key":"0",
        "type":"lobbyRoom",
        "name":"ILearnTest",
        "root":true,
        "links":[
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "parent": "0"
      },
      {
        "key":"1",
        "type":"lobbyRoom",
        "name":"Fundamentals of Testing",
        "links":[
          "1.1",
          "1.2",
          "1.3",
          "1.4",
          "1.5",
          "1.6"
        ],
        "parent": "0"
      },
      {
        "key":"1.1",
        "type":"lobbyRoom",
        "name":"Why is Testing Necessary?",
        "links":[],
        "next": "1.2",
        "parent": "1"
      },
      {
        "key":"1.2",
        "type":"lobbyRoom",
        "name":"What is Testing?",
        "links":[],
        "next": "1.3",
        "previous": "1.1",
        "parent": "1"
      },
      {
        "key":"1.3",
        "type":"lobbyRoom",
        "name":"Seven Testing Principles",
        "links":[],
        "next": "1.4",
        "previous": "1.2",
        "parent": "1"
      },
      {
        "key":"1.4",
        "type":"lobbyRoom",
        "name":"Fundamental Test Process",
        "links":[],
        "next": "1.5",
        "previous": "1.3",
        "parent": "1"
      },
      {
        "key":"1.5",
        "type":"lobbyRoom",
        "name":"The Psychology of Testing",
        "links":[],
        "next": "1.6",
        "previous": "1.4",
        "parent": "1"
      },
      {
        "key":"1.6",
        "type":"lobbyRoom",
        "name":"Code of Ethics",
        "links":[],
        "previous": "1.5",
        "parent": "1"
      },
      {
        "key":"2",
        "type":"lobbyRoom",
        "name":"Tests Through Lifecycle",
        "links":[
          "2.1",
          "2.2",
          "2.3",
          "2.4"
        ],
        "parent": "0"
      },
      {
        "key":"2.1",
        "type":"lobbyRoom",
        "name":"Software Development",
        "links":[],
        "next": "2.2",
        "parent": "2"
      },
      {
        "key":"2.2",
        "type":"lobbyRoom",
        "name":"Test Levels",
        "links":[],
        "next": "2.3",
        "previous": "2.1",
        "parent": "2"
      },
      {
        "key":"2.3",
        "type":"lobbyRoom",
        "name":"Test Types",
        "links":[],
        "next": "2.4",
        "previous": "2.2",
        "parent": "2"
      },
      {
        "key":"2.4",
        "type":"lobbyRoom",
        "name":"Maintenance Testing",
        "links":[],
        "previous": "2.3",
        "parent": "2"
      },
      {
        "key":"3",
        "type":"lobbyRoom",
        "name":"Static Techniques",
        "links":[
          "3.1",
          "3.2",
          "3.3",
          "3.4"
        ],
        "parent": "0"
      },
      {
        "key":"3.1",
        "type":"learningRoom",
        "name":"Static Techniques and Test Process",
        "learningObjectives":[
          {
            "title":"LO 3.1.1",
            "content":"Recognize software work products that can be examined by different static techniques. (K1)"
          },
          {
            "title":"LO 3.1.2",
            "content":"Describe the importance and value of considering static techniques for the assessment of software work products. (K2)"
          },
          {
            "title":"LO 3.1.3",
            "content":"Explain the difference between static and dynamic techniques, considering objectives, types of defects to be indentified, and the role of these techniques within the software life cycle. (K2)"
          }
        ],
        "contents":[
          {
            "title":"3.1 Static Techniques and the Test Process",
            "content":"Unlike dynamic testing, which requires the execution of software, static testing techniques rely on the manual examination (reviews) and automated analysis (static analysis) of the code or other project documentation without the execution of the code. <br><br> Reviews are a way of testing software work products (including code) and can be performed well before dynamic test execution. Defects detected during reviews early in the life cycle (e.g., defects found in requirements) are often much cheaper to remove than those detected by running tests in the execution code. <br><br> A review could be done entirely as a manual activity, but there is also a tool support. The main manual activity is to examine a work product and make comments about it. Any software product can be reviewed, including requirements specifications, design specifications, code, test plans, test, test specifications, test cases, test scripts, user guides or web pages."
          },
          {
            "title":"3.1 Static Techniques and the Test Process",
            "content":"Benefits of reviews include early defect detection and correction, development productivity improvements, reduced development timescales, reduced testing cost time, lifetime cost reduction, fewer defects and improved communication. Reviews can find omissions, for example, in requirements, which are unlikely to be found in dynamic testing. <br><br> Reviews, static analysis and dynamic testing have the same objective - identifying defects. They are complementary; the different techniques can find different types of defects effectively and efficiently. Compared to dynamic testing, static techniques find causes of failures (defects) rather than the failures themselves. <br><br> Typical defects that are easier to find in reviews than in dynamic testing include: deviations from standards, requirement defects, design defects, insufficient maintainability and incorrect interface specifications."
          }
        ],
        "links":[],
        "next": "3.2",
        "parent": "3"
      },
      {
        "key":"3.2",
        "type":"learningRoom",
        "name":"Review Process",
        "learningObjectives":[
          {
            "title":"LO 3.2.1",
            "content":"Recall the activities, roles and resposibilities of a typical formal review. (K1)"
          },
          {
            "title":"LO 3.2.2",
            "content":"Explain the differences between different types of reviews: informal review, technical review, walkthrough and inspection. (K2)"
          },
          {
            "title":"LO 3.2.3",
            "content":"Explain the factors for successful performance of reviews. (K2)"
          }
        ],
        "contents":[
          {
            "title":"3.2 Review Process",
            "content":"The different types of reviews vary from informal, characterized by no written instruction for reviewers, to systematic, characterized by team participation, documented results of the review, and documented procedures for conducting the review. The formality of a review process is related to factors such as the maturity of the development process, any legal or regulatory requirements or the need for an audit trail. <br><br> The way a review is carried out depends on the agreed objectives of the review (e.g., find defects, gain understanding, educate testers and new team members, or discussion and decision by consensus). <br><br> <b>Roles and Resposibilities</b> <br><br> <b>Author</b> : Writer or person with chief responsibility for the documents to be reviewed. <br> <b>Reviewer</b> : Person with a specific technical or business background identify and describe findings (e.g. defects) in product under review. <br> <b>Scribe</b> : Documents all the issues, problems and open points that were identified during the meeting. <br> <b>Moderator</b> : Leads the review of documents, plans and runs the review, mediates between the various points of view. <br> <b>Manager</b> : Decides on the execution of reviews, allocates times in project schedules, determines if the review objectives have been met."
          },
          {
            "title":"3.2 Review Process",
            "content":"<ol><li><b>Planning</b><ul><li>Defining the review criteria</li><li>Selecting the personnel</li><li>Allocating roles</li><li>Defining the entry and exit criteria for more formal review types (e.g., inspections)</li><li>Selecting which parts of documents to review</li><li>Checking entry area</li></ul></li><br><li><b>Kick-off</b><ul><li>Distributing documents</li><li>Explaining the objectives, process and documents to the participants</li></ul></li><br><li><b>Individual preparation</b><ul><li>Preparing for the review meeting by reviewing the document(s)</li><li>Noting potential defects, question and comments</li></ul></li><br><li><b>Review Meeting (examination/evaluation/recording of results)</b><ul><li>Discussing or logging, with documented results or minutes</li><li>Noting defects, making recommendations regarding handling the defects, making decisions about the defects</li><li>Evaluating and recording issues during any physical meetings or tracking any group electronic communications</li></ul></li><br><li><b>Rework</b><ul><li>Fixing defects found (typically done by the author)</li><li>Recording updated status of defects</li></ul></li><br><li><b>Follow-up</b><ul><li>Checking that defects have been addressed</li><li>Gathering metrics</li><li>Checking on exit criteria</li></ul></li></ol>"
          }
        ],
        "challenges":[
          {
            "type":"Find the Word",
            "exercises":[
              {
                "statement":"Recording updated status of defects.",
                "answer":"rework",
                "helper":"Fixing defects found.",
                "helpUsed":false
              },
              {
                "statement":"Defining the review criteria. Allocating roles.",
                "answer":"planning",
                "helper":"Selecting which parts of documents to review. Selecting the personnel.",
                "helpUsed":false
              },
              {
                "statement":"Preparing for the review meeting. Noting potential defects.",
                "answer":"individual preparation",
                "helper":"Noting questions and comments.",
                "helpUsed":false
              }
            ]
          },
          {
            "type":"Find the Word",
            "exercises":[
              {
                "statement":"Discussing or logging, with documented results. Noting defects, and making decisions about them.",
                "answer":"review meeting",
                "helper":"Evaluation and recording issues.",
                "helpUsed":false
              },
              {
                "statement":"Distributing documents.",
                "answer":"kick-off",
                "helper":"Explaining the objectives, process and documents to participants.",
                "helpUsed":false
              },
              {
                "statement":"Checking that defects have been addressed.",
                "answer":"follow-up",
                "helper":"Gathering metrics. Checking on exit criteria.",
                "helpUsed":false
              }
            ]
          }
        ],
        "links":[],
        "next": "3.3",
        "previous": "3.1",
        "parent": "3"
      },
      {
        "key":"3.3",
        "type":"learningRoom",
        "name":"Static Analysis by Tools",
        "learningObjectives":[
          {
            "title":"LO 3.3.1",
            "content":"Recall typical defects and errors identified by statis analysis and compare them to reviews and dynamic testing. (K1)"
          },
          {
            "title":"LO 3.3.2",
            "content":"Describe, using examples, the typical benefits of statis analysis. (K2)"
          },
          {
            "title":"LO 3.3.3",
            "content":"List typical code and design defects that may be identified by static analysis tools. (K1)"
          }
        ],
        "contents":[
          {
            "title":"3.3 Static Analysis by Tools",
            "content":"The objective of statis analysis is to find defects in software source code and software models. <br><br> Static analysis is performed without actually executing the software being examined by the tool; dynamic testing does execute the software code. Static analysis can locate defects that are hard to find in dynamic testing. <br><br> As with reviews, static analysis finds defects rather than failures. Static analysis tools analysis program code (e.g., control flow and data flow), as well as generated output such as HTML and XML."
          },
          {
            "title":"3.3 Static Analysis by Tools",
            "content":"The value of static analysis is: <br><ul><li>Early detection of defects prior to test execution</li><li>Early warning about suspicious aspects of the code or design by the calculation of metrics, such as a high complexity measure</li><li>Identification of defects not easily found by dynamic testing</li><li>Detecting dependencies and inconsistencies in software models such as links</li><li>Improved maintainability of code and design</li><li>Prevention of defects, if lessons are learned in development</li></ul> <br><br> Typical defects discovered by static analysis tools include: <br><ul><li>Referencing a variable with and undefined value</li><li>Inconsistent interfaces interfacesbetween modules and components</li><li>Variables that are not used or are improperly declared</li><li>Unreachable (dead) code</li><li>Missing and erroneous logic (potentially loops)</li><li>Overly complicated constructs</li><li>Programming standards violations</li><li>Security vulnerabilities</li><li>Syntax violations of code and software models</li></ul>"
          },
          {
            "title":"3.3 Static Analysis by Tools",
            "content":"This is an exercise for this chapter: <br><br> <ol><li>double Sqrt(double X){</li><li>&nbsp;&nbsp;&nbsp;&nbsp;double returnValue;</li><li>&nbsp;&nbsp;&nbsp;&nbsp;if(X > 0.0){</li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; double W;</li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; while(ABS(W*W-X) > 0.01){</li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; W = W - ((W*W-X)/(2.0*W));</li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }</li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; returnValue = X;</li><li>&nbsp;&nbsp;&nbsp;&nbsp; } else {</li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; returnValue = 0.0;</li><li>&nbsp;&nbsp;&nbsp;&nbsp; }</li><li>&nbsp;&nbsp;&nbsp;&nbsp; return(returnValue);</li><li> }</li> </ol> <br><br> Assign the data flow attributes (d- define, u - undefine, r - reference or - if none applies) to the variable X."
          },
        ],
        "challenges":[
          {
            "type":"Multiple Choice",
            "exercises": [
              {
                "statement":"Line 1 of the previous code.",
                "answer":"d",
                "options":[
                  "d",
                  "r",
                  "u",
                  "-"
                ]
              },
              {
                "statement":"Line 2 of the previous code.",
                "answer":"-",
                "options":[
                  "d",
                  "r",
                  "u",
                  "-"
                ]
              },
              {
                "statement":"Line 3 of the previous code.",
                "answer":"r",
                "options":[
                  "d",
                  "r",
                  "u",
                  "-"
                ]
              },
              {
                "statement":"Line 4 of the previous code.",
                "answer":"-",
                "options":[
                  "d",
                  "r",
                  "u",
                  "-"
                ]
              },
            ]
          },
          {
            "type":"Multiple Choice",
            "exercises": [
              {
                "statement":"Line 5 of the previous code.",
                "answer":"r",
                "options":[
                  "d",
                  "r",
                  "u",
                  "-"
                ]
              },
              {
                "statement":"Line 6 of the previous code.",
                "answer":"r",
                "options":[
                  "d",
                  "r",
                  "u",
                  "-"
                ]
              },
              {
                "statement":"Line 8 of the previous code.",
                "answer":"r",
                "options":[
                  "d",
                  "r",
                  "u",
                  "-"
                ]
              },
              {
                "statement":"Line 10 of the previous code.",
                "answer":"-",
                "options":[
                  "d",
                  "r",
                  "u",
                  "-"
                ]
              },
              {
                "statement":"Line 12 of the previous code.",
                "answer":"-",
                "options":[
                  "d",
                  "r",
                  "u",
                  "-"
                ]
              }
            ]
          }
        ],
        "links":[],
        "next": "3.4",
        "previous": "3.2",
        "parent": "3"
      },
      {
        "key":"3.4",
        "type":"learningRoom",
        "name":"Final Test",
        "challenges":[
          {
            "type":"Multiple Choice",
            "exercises": [
              {
                "statement":"Static testing techniques rely on the manual code examination and automated analysis after the execution of the code.",
                "answer":"False",
                "options":[
                  "True",
                  "False"
                ]
              },
              {
                "statement":"Reviews are the least effective way of testing code.",
                "answer":"False",
                "options":[
                  "True",
                  "False"
                ]
              },
              {
                "statement":"Unreachable code would best be found using:",
                "answer":"Static analysis",
                "options":[
                  "Reviews",
                  "Inspections",
                  "Coverage tool",
                  "Static analysis"
                ]
              },
              {
                "statement":"Static analysis and dynamic testing have the same objective - identyfing defects.",
                "answer":"True",
                "options":[
                  "True",
                  "False"
                ]
              },
              {
                "statement":"During a formal review, which activity is resposible for fixing defects found?",
                "answer":"Rework",
                "options":[
                  "Planning",
                  "Examination",
                  "Rework",
                  "Follow-up"
                ]
              },
              {
                "statement":"Which choice is NOT a typical defect discovered by static analysis tools?",
                "answer":"Defined Variable",
                "options":[
                  "Dead code",
                  "Infinite loop",
                  "Syntax Error",
                  "Defined Variable"
                ]
              }
            ]
          }
        ],
        "links":[],
        "previous": "3.3",
        "parent": "3"
      },
      {
        "key":"4",
        "type":"lobbyRoom",
        "name":"Test Design Techniques",
        "links":[
          "4.1",
          "4.2",
          "4.3",
          "4.4",
          "4.5",
          "4.6",
          "4.7"
        ],
        "parent": "0"
      },
      {
        "key":"4.1",
        "type":"learningRoom",
        "name":"The Test Development Process",
        "learningObjectives":[
          {
            "title":"LO 4.1.1",
            "content":"Differentiate between a test design specification, test case specification and test procedure specification. (K2)"
          },
          {
            "title":"LO 4.1.2",
            "content":"Compare the terms test condition, test case and test procedure. (K2)"
          },
          {
            "title":"LO 4.1.3",
            "content":"Evaluate the quality of test cases in terms of clear traceality to the requirements and expected results. (K2)"
          },
          {
            "title":"LO 4.1.4",
            "content":"Translate test cases into a well-structured test procedure specification at a level of detail relevant to the knowledge of the testers. (K3)"
          },
        ],
        "contents":[
          {
            "title":"4.1 The Test Development Process",
            "content":"The test development process described in this section can be done in different ways, form very informal with little or no documentation, to very formal (as it is described below). The level of formality depends on the context of the testing, including the maturity of testing and development processes, time constraints, safety or regulatory requirements, and the people involved. <br><br> During test analysis, the test basis documentation is analyzed in order to determine what to test, i.e., to identify the test conditions. A test condition is defined as an item or event that could be verified by one or more test cases (e.g., a function, transaction, quality characteristic or structural element). <br><br> Establishing traceability from test conditions back to the specifications and requirements enables both effective impact analysis when requirements change, and determining requirements coverage for a serie of uses based on, among other considerations, the identified risks. <br><br> During test design the test cases and test data are created and specified. A test case consists of a set of input values, execution preconditions, expected results and execution postconditions, defined to cover a certain test objective(s) or test condition(s). The 'Standard for Software Test Documentation' (IEEE STD 829-1998) describes the context of test design specifications (containing test conditions) and test case specifications."
          },
          {
            "title":"4.1 The Test Development Process",
            "content":"Expected results should be produced as part of the specification of a test case and include outputs, changes to data and states, and any other consequences of the test. If expected results have not been defined, then a plausible, but erroneous, result may be interpreted as the correct one. Expected results should ideally be defined prior to test execution. <br><br> During test implementation the test cases are developed, implemented, prioritized and organized in the test procedure specification (IEEE STD 829-1998). The test procedure specifies the sequence of actions for the execution of a test. If tests are run using a test execution tool, the sequence of actions for the execution of a test. If tests are run using a test execution tool, the sequence of actions is specified in a test script (which is an automated test procedure). <br><br> The various test procedures and automated test scripts are subsequently formed into a test execution schedule that defines the order in which the various test procedues, and possibly automated scripts, are executed. The test execution schedule that defines the order in which the various test procedures, and possibly automated scripts, are executed. The test execution schedule will take into account such factors as regression tests, prioritization, and technical and logical dependencies."
          }
        ],
        "links":[],
        "next": "4.2",
        "parent": "4"
      },
      {
        "key":"4.2",
        "type":"learningRoom",
        "name":"Categories of Test Design Techniques",
        "learningObjectives":[
          {
            "title":"LO 4.2.1",
            "content":"Recall reasons that both specification-based (black-box) and structure-based (white-box) test design techniques are useful and list the common techniques for each. (K1)"
          },
          {
            "title":"LO 4.2.2",
            "content":"Explain the characteristics, commonalities, and differences between specification-based testing, structure-testing and experience-based testing. (K2)"
          }
        ],
        "contents":[
          {
            "title":"4.2 Categories of Test Design Techniques",
            "content":"The purpose of a test design technique is to identify test conditions, test cases, and test data. <br><br> It is a classic distinction to denote test techniques as black-box or white-box. Black-box test design techniques (also called specification-based techniques) are a way to derive and select test conditions, test cases, or test data based on an analysis of the test basis documentation. This includes both function and non-functional testing. Black-box testing, by definition, does not use any information regarding the internal structure of the component or system to be tested. White-box test design techniques (also called structural or structure-based techniques) are based on an analysis of the structure of the component or system. Black-box and white-box testing may also be combined with experience-based techniques to leverage the experience of developers, testers and users to determine what should be tested. <br><br> Some techniques fall clearly into a single category; others have elements of more that one category. <br><br> Here specification-based text design techniques are refered as black-box techniques and structure-based test design techniques as white-box techniques. In addition experience-based test design techniques are covered."
          },
          {
            "title":"4.2 Categories of Test Design Techniques",
            "content":"Common characteristics of specification-based test design techniques include: <ul><li>Models, either formal or informal, are used for the specification of the problem to be solved, the software or its components</li><li>Test cases can be derived systematically from these models</li></ul> <br><br> Common characteristics of structure-based test design techniques include: <ul><li>Information about how the software is constructed is used to derive the test cases (e.g., code and detailed design information)</li><li>The extent of coverage of the software can be measured for existing test cases, and further test cases can be derived systematically to increase coverage</li></ul> <br><br> Common characteristics of experience-based test design techniques include: <ul><li>The knowledge and experience of people are used to derive the test cases</li><li>The knowledge of testers, developers, users and other stakeholders about the software, its usage and its environment is one source of information</li><li>Knowledge about likely defects and their distribution is another source of information</li></ul>"
          }
        ],
        "challenges":[
          {
            "type":"Select the Keywords",
            "exercises":[
              {
                "statement":"Which concepts belong to the following test design technique?",
                "topics" : {
                  "bb": {
                    "label": "Black-box techniques"
                  },
                  "wb": {
                    "label": "White-box techniques"
                  }
                },
                "items": [
                  {
                    "topic": "bb",
                    "concept": "Decision Table"
                  },
                  {
                    "topic": "bb",
                    "concept": "Equivalence Partitioning"
                  },
                  {
                    "topic": "bb",
                    "concept": "Use Case Testing"
                  },
                  {
                    "topic": "bb",
                    "concept": "State Transition"
                  },
                  {
                    "topic": "bb",
                    "concept": "Boundary Value Analysis"
                  },
                  {
                    "topic": "wb",
                    "concept": "Condition Coverage"
                  },
                  {
                    "topic": "wb",
                    "concept": "Statement Coverage"
                  },
                  {
                    "topic": "wb",
                    "concept": "Decision Coverage"
                  }
                ]
              }
            ]
          }
        ],
        "links":[],
        "next": "4.3",
        "previous": "4.1",
        "parent": "4"
      },
      {
        "key":"4.3",
        "type":"learningRoom",
        "name":"Black-box Techniques",
        "learningObjectives":[
          {
            "title":"LO 4.3.1",
            "content":"Write test cases from given software models using equivalence partitioning, boundary value analysis, decision tables and state transition diagrams/tables. (K3)"
          },
          {
            "title":"LO 4.3.2",
            "content":"Explain the main purpose of each of the four testing techniques, what level and type of testing could use the technique, and how the coverage may be measured. (K2)"
          },
          {
            "title":"LO 4.3.3",
            "content":"Explain the concept ot use case testing and its benefits. (K2)"
          }
        ],
        "links":[
          "4.3.1",
          "4.3.2",
          "4.3.3",
          "4.3.4",
          "4.3.5",
        ],
        "next": "4.4",
        "previous": "4.2",
        "parent": "4"
      },
      {
        "key":"4.3.1",
        "type":"learningRoom",
        "name":"Equivalence Partitioning",
        "contents":[
          {
            "title":"4.3.1 Equivalence Partitioning",
            "content":"In equivalence partitioning, inputs to the software or system are divided into groups that are expected to exhibit similar behaviour, so they are likely to be processed in the same way. Equivalence partitions (or classes) can be found for both valid data, i.e., values that should be accepted and invalid data, i.e., values that should be rejected. Partitions can also be identified for outputs, internal values, time-related values (e.g., before or after an event) and for interface parameters (e.g., integrated components being tested during integration testing). Tests can be designed to cover all valid and invalid partitions. Equivalence partitioning is applicable at all levels of testing. <br><br> Equivalence partitioning can be used to achieve input and output coverage goals. It can be applied to human input, input via interfaces to a system, or interface parameters in integration testing. <br><br> Equivalence classes: partitions of the input set in which input data have the same effect on the program (e.g, the result in the same output)."
          },
          {
            "title":"4.3.1 Equivalence Partitioning",
            "content":"<b> Weak/Strong ECT</b> <br><br> For an example SUT suppose there are three input variables from three domains: A, B, C <br><br> Weak Equivalence Class Testing: Choosing one variable value from each equivalence class <br><br> Strong Equivalence Class Testing: Is based on the Cartesian product of the partition subsets (AxBxC), i.e., testing all interactions of all equivalence classes."
          }
        ],
        "links":[],
        "next": "4.3.2",
        "parent": "4.3"
      },
      {
        "key":"4.3.2",
        "type":"learningRoom",
        "name":"Boundary value analysis",
        "contents":[
          {
            "title":"4.3.2 Boundary value analysis",
            "content":"Behaviour at the edge of each equivalence partition is more likely to be incorrect than behaviour within the partition, so boundaries are an area where testing is likely to yield defects. The maximum and minimum values of a partition are its boundary values. A boundary value for a valid partition is a valid boundary value; he boundary of an invalid partition is an invalid boundary value. Testes can be designed to cover both valid and invalid boundary values. When designing test cases, a test for each boundary value is chosen. <br><br> Boundary value analysis can be applied at all levels. It is relatively easy to apply and its defect-finding capability is high. Detailed specifications are helpful in determining the interesting boundaries. <br><br> This technique is often considered as an extension of equivalence partitioning or other black-box test design techniques. It can be used on equivalence classes for user input on screen as well as, for example, on time ranges (e.g., time out, transactional speed requirements) or table ranges (e.g., table size is 256x256)."
          },
          {
            "title":"4.3.2 Boundary value analysis",
            "content":"In equivalence class testing, we partition input domains into equivalence classes, on the assumption that the behaviour of the program is 'similar' for all input values of an equivalence class, but this assumption may not be true in all cases as some typical programming errors happen to be at the boundary between different equivalence classes. <br><br> This is what boundary value testing focuses on: Simpler but complementary to equivalence class testing. <br><br> In boundary-value analysis (testing) the focus is on the boundary of the input space for identyfing test cases. This rationale is that errors tens to occur near extreme values of input variables. <br><br> So it is necessary to set values for input variable at their minimum, just above the minimum, a nominal value, just below their maximum, and at their maximum. <br><br> Convention for the above notions: <br> min, min+, nom, max-, max+ <br><br> A function with n variables will require 4n+1 test cases. Works well with variables that represent bounded physical quantitites."
          }
        ],
        "challenges":[
          {
            "type":"Select the Keywords",
            "exercises":[
              {
                "statement":"Assume a function F, with two variables x1 and x2. Boundaries: a <= x1 <= b, c < x2 < d. Which variables belong to the following values?",
                "topics" : {
                  "bv": {
                    "label": "Boundary values"
                  },
                  "nbv": {
                    "label": "Non Boundary values"
                  }
                },
                "items": [
                  {
                    "topic": "bv",
                    "concept": "x1 < a"
                  },
                  {
                    "topic": "bv",
                    "concept": "x1 = a"
                  },
                  {
                    "topic": "bv",
                    "concept": "x1 = b"
                  },
                  {
                    "topic": "bv",
                    "concept": "x1 > b"
                  },
                  {
                    "topic": "bv",
                    "concept": "x2 < d"
                  },
                  {
                    "topic": "bv",
                    "concept": "x2 = d"
                  },
                  {
                    "topic": "bv",
                    "concept": "x2 > c"
                  },
                  {
                    "topic": "bv",
                    "concept": "x2 = c"
                  },
                  {
                    "topic": "nbv",
                    "concept": "x1 > a"
                  },
                  {
                    "topic": "nbv",
                    "concept": "x1 < b"
                  },
                  {
                    "topic": "nbv",
                    "concept": "x2 > d"
                  },
                  {
                    "topic": "nbv",
                    "concept": "x2 < c"
                  },
                ]
              }
            ]
          }
        ],
        "links":[],
        "next": "4.3.3",
        "previous": "4.3.1",
        "parent": "4.3"
      },
      {
        "key":"4.3.3",
        "type":"learningRoom",
        "name":"Decision Table Testing",
        "contents":[
          {
            "title":"4.3.3 Decision Table Testing",
            "content":"Decision tables are a good way to capture system requirements that contain logical conditions, and to document internal system design. They may be used to record complex business rules that a system is to implement. When creating decision tables, the specification is analyzed, and conditions and actions of the systems are identified. The input conditions and actions are most often stated in such a way that they must be true or false for all input conditions, and the resulting actions for each combination of conditions. Each column of the table corresponds to a business rule that defines an unique combination of conditions and which result in the execution of the actions associated with that rule. The coverage standard commonly used with decision table testing is to have at least one test per column in the table, which typically involves covering all combinations of triggering conditions. <br><br> The strength of decision table testing is that it creates combinations of conditions that otherwise might not have been exercised during testing. It may be applied to all situations when the action of the software depends on several logical decisions."
          },
          {
            "title":"4.3.3 Decision Table Testing",
            "content":"<b> Steps to create a decision table </b> <br> <ol><li>List all causes in the decision table</li><li>Calculate the number of possible conditions</li><li>Fill columns will all possible combinations</li><li>Reduce test combinations</li><li>Check covered combinations</li><li>Add effects to the table</li></ol> <br><br> <b> 1. List all causes </b> <br> <ul><li>Write down the values the cause/condition can assume</li><li>Cluster related causes</li><li>Put the most dominating cause first</li><li>Put multi valued causes last</li></ul>"
          },
          {
            "title":"4.3.3 Decision Table Testing",
            "content":"<b> 2. Calculate combinations </b> <br> <ul><li>If all causes are simply Y/N values: 2^(number of causes)</li><li>If 1 cause with 3 values and 3 with 2: 3^(1) * 2^(3) = 24</li><li>Or, use the values column and multiply each value down the column, eg: 3*2*2*2 = 24</li></ul> <br><br> <b> 3. Fill columns </b> <br> <ul><li>Determine Repeat Factor (RF): divide remaining combinations by the number of possible values for that</li><li>Write RF times the first value, then RF times the next one etc. until row is full</li><li>Next row, go to 1</li></ul> <br><br> <b> 4. Reduce combinations </b> <br> <ul><li>Find indifferent combinations - place a '-'</li><li>Join columns where columns are identical</li><li>Ensure the effects are the same</li></ul>"
          },
          {
            "title":"4.3.3 Decision Table Testing",
            "content":"<b> 5. Check covered combinations </b> <br> <ul><li>For each columng calculate the combinations it represents</li><li>A '-' represents as many combinations as the cause has</li><li>Multiply for each '-' down the column</li><li>Add up total and compare with step 2</li></ul><b> 6. Add effects to table </b> <br> <ul><li>FRead column by column and determine the effects</li><li>One effect can occur in multiple test combinations</li></ul>"
          },
        ],
        "links":[],
        "next": "4.3.4",
        "previous": "4.3.2",
        "parent": "4.3"
      },
      {
        "key":"4.3.4",
        "type":"learningRoom",
        "name":"State Transition Testing",
        "contents":[
          {
            "title":"4.3.4 State Transition Testing",
            "content":"A system may exhibit a different response depending on current conditions or previous history (its state). In this case, that aspect of the system can be shown with a state transition diagram. It allows the tester to view the software in term of its states, transitions between states, the inputs or events that trigger state changes (transitions) and the actions which may result from those transitions. The states of the system or object under test are separate, identifiable and finite in number. <br><br> A state table shows the relationship between the states and inputs, and can highlight possible transitions that are invalid. <br><br> Tests can be designed to cover a typical sequence of states, to cover every state, to exercise every transition, to exercise specific sequences of transitions or to test invalid transitions. <br><br> State transition testing is much used within the embedded software industry and technical automation in general. However, the technique is also suitable for modeling a business object having specific states or testing screen-dialogue flows (e.g., for internet applications or business scenarios)."
          }
        ],
        "links":[],
        "next": "4.3.5",
        "previous": "4.3.3",
        "parent": "4.3"
      },
      {
        "key":"4.3.5",
        "type":"learningRoom",
        "name":"Use Case Testing",
        "contents":[
          {
            "title":"4.3.5 Use Case Testing",
            "content":"Tests can be derived from use cases. A use case describes interactions between actors (users or systems), which produce a result of value to a system user or the customer. Use cases may be described at the abstract level (business use case, technology-free, business process level) or at the system level (system use case on the system functionality level). Each use case has preconditions which need to be met for the use case to work successfully. Each use case terminates with postconditions which are the observable results and final state of the system after the use case has been completed. A use case usually has a mainstream (i.e., most likely) scenario and alternative scenarios. <br><br> Use cases describe the 'process flows' through a system based on its actual likely use, so the test cases derived form use cases are most useful in uncovering defect in the process flows during real-world use of the system. Use cases are very useful for acceptance tests with customer/user participation. They also help uncover integration defects caused by the interaction and interference of different components, which individual component testing would not see. Designing test cases from use cases may be combined with other specification-based test techniques."
          }
        ],
        "challenges":[
          {
            "type":"Select the Keywords",
            "exercises":[
              {
                "statement":"In a system where it's possible to execute the following actions: Maintain System, Subscribe to Network, Unsubscribe from Network, Remove User From Network, Place Call, Answer Call. Which should be executed from the following user point?",
                "topics" : {
                  "a": {
                    "label": "Admin"
                  },
                  "u": {
                    "label": "User"
                  }
                },
                "items": [
                  {
                    "topic": "u",
                    "concept": "Subscribe to Network"
                  },
                  {
                    "topic": "u",
                    "concept": "Unsubscribe from Network"
                  },
                  {
                    "topic": "u",
                    "concept": "Place Call"
                  },
                  {
                    "topic": "u",
                    "concept": "Answer Call"
                  },
                  {
                    "topic": "a",
                    "concept": "Maintain System"
                  },
                  {
                    "topic": "a",
                    "concept": "Remove User From Network"
                  },
                ]
              }
            ]
          }
        ],
        "links":[],
        "previous": "4.3.4",
        "parent": "4.3"
      },
      {
        "key":"4.4",
        "type":"learningRoom",
        "name":"White-box Techniques",
        "learningObjectives":[
          {
            "title":"LO 4.4.1",
            "content":"Describe the concept and value of code coverage. (K2)"
          },
          {
            "title":"LO 4.4.2",
            "content":"Explain the concepts of statement and decision coverage, and give reasons why these concepts can also be used at test levels other than component testing (e.g., on business procedures at system level). (K2)"
          },
          {
            "title":"LO 4.4.3",
            "content":"Write test cases from given control flows using statement and decision test design techniques. (K3)"
          },
          {
            "title":"LO 4.4.4",
            "content":"Assess statement and decision coverage for completeness with respect to defined exit criteria. (K4)"
          },
        ],
        "contents":[
          {
            "title":"4.4 White-box Techniques",
            "content":"Structure-based or white-box testing is based on an identified structure of the software or the system, as seen in the following examples: <br> <ul><li>Component level: the structure of a software component, i.e., statements, decisions, branches or even distinct paths</li><li>Integration level: the structure may be a call tree (a diagram in which modules call other modules)</li><li>System level: the structure may be a menu structure, business process or web page structure</li></ul> <br><br> In this section, three code-related structural test design techniques for code coverage, based on statements, branches and decisions, are discussed. For decision testing, a control flow diagram may be used to visualize the alternatives for each decision."
          },
          {
            "title":"Differences among statements, decisions and conditions",
            "content":"<ol><li>PROGRAM sum(maxint, N : INT)</li><li>&nbsp;&nbsp;&nbsp;&nbsp; INT res := 0;</li><li>&nbsp;&nbsp;&nbsp;&nbsp; INT i := 0;</li><li></li><li>&nbsp;&nbsp;&nbsp;&nbsp; IF (N < 0)</li><li>&nbsp;&nbsp;&nbsp;&nbsp; THEN</li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; N := -N;</li><li></li><li>&nbsp;&nbsp;&nbsp;&nbsp; WHILE (i < N) AND (res <= maxint)</li><li>&nbsp;&nbsp;&nbsp;&nbsp; DO</li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; i := i + 1;</li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; res := res + i;</li><li>&nbsp;&nbsp;&nbsp;&nbsp; OD;</li><li></li><li>&nbsp;&nbsp;&nbsp;&nbsp; IF (res <= maxint)</li><li>&nbsp;&nbsp;&nbsp;&nbsp; THEN</li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; OUTPUT (res);</li><li>&nbsp;&nbsp;&nbsp;&nbsp; ELSE</li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; OUTPUT ('too large');</li><li></li><li>END</li></ol>"
          },
          {
            "title":"Differences among statements, decisions and conditions",
            "content":"<b>Statements</b> are covered by the following lines: 2, 3, 5, 6, 7, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19 <br><br> <b>Decisions</b> are covered by the following lines: 5, 6, 9, 10, 13, 15, 16, 18 <br><br> <b>Conditions</b> are covered by the following lines: 5, 9, 15"
          },
        ],
        "links":[
          "4.4.1",
          "4.4.2",
          "4.4.3",
          "4.4.4"
        ],
        "next": "4.5",
        "previous": "4.3",
        "parent": "4"
      },
      {
        "key":"4.4.1",
        "type":"learningRoom",
        "name":"Statement Coverage",
        "contents":[
          {
            "title":"4.4.1 Statement Coverage",
            "content":"In component testing, statement coverage is the assessment of the percentage of executable statements that have beeen exercised by a test case suite. The statement testing derives test cases to execute specific statements, normally to increase statement coverage. <br><br> Statement coverage is determined by the number of executable statements covered by (designed or executed) test cases divided by the number of all executable statements in the code under test. <br><br> Execute (exercise) every statement of a program. Generate a set of test cases such that each statement of the program is executed at least once."
          }
        ],
        "links":[],
        "next": "4.4.2",  
        "parent": "4.4"
      },
      {
        "key":"4.4.2",
        "type":"learningRoom",
        "name":"Decision Coverage",
        "contents":[
          {
            "title":"4.4.2 Decision Coverage",
            "content":"Decision coverage, related to branch testing, is the assessment of the percentage of decision outcomes (e.g., the True and False options of an IF statement) that have been exercised by a test case suite. The decision testing technique derives test cases to execute specific decision outcomes. Branches originate from decision points in the code and show the transfer of control to different locations in the code. <br><br> Decision coverage is determined by the number of all decision outcomes covered by (designed or executed) test cases divided by the number of all possible decision outcomes in the code under test. <br><br> Decision testing is a form of control flow testing as it follows a specific flow of control through the decision points. Decision coverage is stronger than statement coverage; 100% decision coverage guarantees 100% statement coverage, but not vice versa."
          }
        ],
        "links":[],
        "next": "4.4.3",
        "previous": "4.4.1",
        "parent": "4.4"
      },
      {
        "key":"4.4.3",
        "type":"learningRoom",
        "name":"Condition Coverage",
        "contents":[
          {
            "title":"4.4.3 Condition Coverage",
            "content":"Design test cases such that each possible outcome of each condition in a decision (composite condition) occurs at least once. <br><br> <b>Example:</b> <br><br> &nbsp;&nbsp;&nbsp;&nbsp; Decision (i < N) and (result <= maxint) <br> &nbsp;&nbsp;&nbsp;&nbsp; consists of two conditions: (i < N), (result <= maxint) <br><br> Test cases should be designed such that each condition gets value true or false at least once, for example: <br><br> &nbsp;&nbsp;&nbsp;&nbsp; Consider: i = 0, N = 2, result = 1, maxint = 0 <br> &nbsp;&nbsp;&nbsp;&nbsp; In this case, first condition will be true and second one false. The decision will be false. <br><br> &nbsp;&nbsp;&nbsp;&nbsp; Now consider: i = 3, N = 0, result = 1, maxint = 0 <br> &nbsp;&nbsp;&nbsp;&nbsp; In this case, the first one will be false and the second one will be true. The decision will be false. <br><br> &nbsp;&nbsp;&nbsp;&nbsp; Although decision is false in the two test cases, we have tested every condition for true and false."
          }
        ],
        "links":[],
        "next": "4.4.4",
        "previous": "4.4.2",
        "parent": "4.4"
      },
      {
        "key":"4.4.4",
        "type":"learningRoom",
        "name":"Path Coverage",
        "contents":[
          {
            "title":"4.4.4 Path Coverage",
            "content":"Path coverage consists in the execution of every possible path of a program, i.e., every possible sequence of statements. <br><br> Strongest white-box criterion (based on control flow analysis). <br><br> Usually impossible: infinitely many paths (in case of loops). <br><br> So: not a realistic option. <br><br> But note: enormous reduction with respect to all possible test cases (each sequence of statements executed for only one value) (doesn't mean exhaustive testing)."
          }
        ],
        "links":[],
        "previous": "4.4.3",
        "parent": "4.4"
      },
      {
        "key":"4.5",
        "type":"learningRoom",
        "name":"Experience-based Techniques",
        "learningObjectives":[
          {
            "title":"LO 4.5.1",
            "content":"Recall reasons for writing test cases based on intuition, experience and knowledge about common defects. (K1)"
          },
          {
            "title":"LO 4.5.2",
            "content":"Compare experience-based techniques with specification-based techniques. (K2)"
          }
        ],
        "contents":[
          {
            "title":"4.5 Experience-based Techniques",
            "content":"Experience-based testing is where tests are derived from the tester's skill and intuition and their experience with similar applications and technologies. When used to augment systematic techniques, these techniques can be useful in identyfing special tests not easily captured by formal techniques, specially when applied after more formal approaches. However, this technique may yield wodely varying degrees of effectiveness, depending on the testers' experience. <br><br> A commonly used experience-based technique is error guessing. Generally testers antecipate defects based on experience. A structured approach to the error guessing technique is to enumerate a list of possible defects and to design tests that attack these defects. This systematic approach is called fault attack. These defect and failure lists can be built based on experience, available defect and failure data, and from common knowledge about why software fails. <br><br> Exploratory testing is concurrent test design, test execution, test logging and learning, based on a test charter containing test objectives, and carried out within time-boxes. It is an approach that is most useful where there are few or inadequeate specifications and severe time pressure, or is order to augment or complement other, more formal testing. It can serve as a check on the test process, to help ensure that the most serious defects are found."
          }
        ],
        "links":[],
        "next": "4.6",
        "previous": "4.4",
        "parent": "4"
      },
      {
        "key":"4.6",
        "type":"learningRoom",
        "name":"Choosing Test Techniques",
        "learningObjectives":[
          {
            "title":"LO 4.6.1",
            "content":"Classify test design techniques according to their fitness to a given context, for the test basis, respective models and software characteristics. (K2)"
          }
        ],
        "contents":[
          {
            "title":"4.6 Choosing Test Techniques",
            "content":"The choice of which test techniques to use depends on a number of factors, including the type of system, regulatory standards, customer or contratual requirements, level of risk, type of risk, test objective, documentation available, knowledge of the testers, time and budget, development life cycle, use case models and previous experience with types of defects found. <br><br> Some techniques are more applicable to certain situations and test levels; others are applicable to all test levels. <br><br> When creating test cases, testers generally use a combination of test techniques including process, rule and data-driven techniques to ensure adequate coverage of the object under test."
          }
        ],
        "links":[],
        "next": "4.7",
        "previous": "4.5",
        "parent": "4"
      },
      {
        "key":"4.7",
        "type":"learningRoom",
        "name":"Final Test",
        "challenges":[
          {
            "type":"Multiple Choice",
            "exercises": [
              {
                "statement":"Equivalence partitioning, boundary value analysis, decision tables, state transition testing and use case testing are white box techniques.",
                "answer":"False",
                "options":[
                  "True",
                  "False"
                ]
              },
              {
                "statement":"A state table shows the relationship between the states and inputs, and can highlight possible transitions that are invalid.",
                "answer":"True",
                "options":[
                  "True",
                  "False"
                ]
              },
              {
                "statement":"Which black box technique divides inputs into groups that are expected to exhibit similar behaviour?",
                "answer":"Equivalence partitioning",
                "options":[
                  "Decision table",
                  "Equivalence partitioning",
                  "Use case testing",
                  "State transition testing"
                ]
              },
              {
                "statement":"Which technique is often considered as an extension of other black box test design techniques?",
                "answer":"Boundary value analysis",
                "options":[
                  "Boundary value analysis",
                  "Equivalence partitioning",
                  "Use case testing",
                  "State transition testing"
                ]
              },
              {
                "statement":"The strength of decision table testing is that it creates combinations of conditions that otherwise might not have been exercised during testing.",
                "answer":"True",
                "options":[
                  "True",
                  "False"
                ]
              },
              {
                "statement":"What is need to be met for a use case to work successfully?",
                "answer":"Preconditions",
                "options":[
                  "System analysis",
                  "Review",
                  "Preconditions",
                  "Postconditions"
                ]
              }
            ]
          }
        ],
        "links":[],
        "previous": "4.6",
        "parent": "4"
      },
      {
        "key":"5",
        "type":"lobbyRoom",
        "name":"Test Management",
        "links":[
          "5.1",
          "5.2",
          "5.3",
          "5.4",
          "5.5",
          "5.6",
        ],
        "parent": "0"
      },
      {
        "key":"5.1",
        "type":"lobbyRoom",
        "name":"Test Organization",
        "links":[],
        "next": "5.2",
        "parent": "5"
      },
      {
        "key":"5.2",
        "type":"lobbyRoom",
        "name":"Test Planning and Estimation",
        "links":[],
        "next": "5.3",
        "previous": "5.1",
        "parent": "5"
      },
      {
        "key":"5.3",
        "type":"lobbyRoom",
        "name":"Test Progress, Monitoring and Control",
        "links":[],
        "next": "5.4",
        "previous": "5.2",
        "parent": "5"
      },
      {
        "key":"5.4",
        "type":"lobbyRoom",
        "name":"Configuration Management",
        "links":[],
        "next": "5.5",
        "previous": "5.3",
        "parent": "5"
      },
      {
        "key":"5.5",
        "type":"lobbyRoom",
        "name":"Risk and Testing",
        "links":[],
        "next": "5.6",
        "previous": "5.4",
        "parent": "5"
      },
      {
        "key":"5.6",
        "type":"lobbyRoom",
        "name":"Incident Management",
        "links":[],
        "previous": "5.5",
        "parent": "5"
      },
      {
        "key":"6",
        "type":"lobbyRoom",
        "name":"Support Tools for Tests",
        "links":[
          "6.1",
          "6.2",
          "6.3"
        ],
        "parent": "0"
      },
      {
        "key":"6.1",
        "type":"lobbyRoom",
        "name":"Types of Test Tools",
        "links":[],
        "next": "6.2",
        "parent": "6"
      },
      {
        "key":"6.2",
        "type":"lobbyRoom",
        "name":"Effective Use of Tools",
        "links":[],
        "next": "6.3",
        "previous": "6.1",
        "parent": "6"
      },
      {
        "key":"6.3",
        "type":"lobbyRoom",
        "name":"Introducing a Tool into an Organization",
        "links":[],
        "previous": "6.2",
        "parent": "6"
      }
    ]
  }

  $rootScope.createGameTree = function(jsonFile){

    $scope.roomMap = _.keyBy(_.cloneDeep(jsonFile.rooms), "key")
    _.each($scope.roomMap, function(room){

      _.each(room.links, function(link){

        room.linkedRooms = room.linkedRooms || []
        room.linkedRooms.push($scope.roomMap[link])

      })
    })

    user.reset()
    $rootScope.at = getRootRoom()
  }

  $rootScope.createGameTree($rootScope.game)

  $scope.calcPotentialRoomTreePoints = function(roomKey){

    var visited = {}
    var total = 0
    function visitRoom(roomKey){

      if (visited[roomKey]) return
      var room = $scope.roomMap[roomKey]
      if (room.challenges != undefined) 
        _.each(room.challenges, function(challenge){
          if(challenge.exercises)
            total += challenge.exercises.length
        })   
      visited[roomKey] = true
      _.each(room.links, function(linkedRoomKey){
        visitRoom(linkedRoomKey)
      })
    }
    visitRoom(roomKey)
    return total
  }

  $scope.calcUserRoomTreePoints = function(roomKey){

    var visited = {}
    var total = 0
    function visitRoom(roomKey){    

      if (visited[roomKey]) return
      var room = $scope.roomMap[roomKey]
      
      if (user.challengeCompleted[roomKey])
        total += user.challengeCompleted[roomKey].points

      visited[roomKey] = true
      _.each(room.links, function(linkedRoomKey){
        visitRoom(linkedRoomKey)
      })
    }
    visitRoom(roomKey)
    return total
  }

  $rootScope.at = getRootRoom()
  $scope.rootRoom = getRootRoom()


  function getRootRoom(){
    for(x in $rootScope.game.rooms){
      if($rootScope.game.rooms[x].root == true)
        return $rootScope.game.rooms[x]
    }
  }

  $scope.getRoom = function(key){
    return $scope.roomMap[key]
  }

  $scope.go = function(roomKey){
    $rootScope.at = $scope.getRoom(roomKey)
  }

  $scope.toggleLeft = buildToggler('left');
  $scope.toggleRight = buildToggler('right');

  function buildToggler(componentId) {
    return function() {
      $mdSidenav(componentId).toggle();
    }
  }

}])

