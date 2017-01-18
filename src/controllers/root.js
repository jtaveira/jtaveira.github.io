

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
          }
        ],
        "links":[],
        "next": "4.3.2",
        "parent": "4.3"
      },
      {
        "key":"4.3.2",
        "type":"learningRoom",
        "name":"",
        "links":[],
        "next": "4.3.3",
        "previous": "4.3.1",
        "parent": "4.3"
      },
      {
        "key":"4.3.3",
        "type":"learningRoom",
        "name":"",
        "links":[],
        "next": "4.3.4",
        "previous": "4.3.2",
        "parent": "4.3"
      },
      {
        "key":"4.3.4",
        "type":"learningRoom",
        "name":"",
        "links":[],
        "next": "4.3.5",
        "previous": "4.3.3",
        "parent": "4.3"
      },
      {
        "key":"4.3.5",
        "type":"learningRoom",
        "name":"",
        "links":[],
        "previous": "4.3.4",
        "parent": "4.3"
      },
      {
        "key":"4.4",
        "type":"learningRoom",
        "name":"White-box Techniques",
        "links":[],
        "next": "4.5",
        "previous": "4.3",
        "parent": "4"
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

