var numberCorrect = 0;
var q_Index = 0
 

 var creditCardArray = [ ["Question 1: If you are late on ANY of your bills your credit card company can raise your interest rate. (true or false)", "true"], ["Question 2: If you have an average credit card interest rate and only make the minimum payment on a purchase how much more did that purchase cost you? \n a) double \n b) 20% \n c) 10%" , "a"],["Question 3: Current federal law has capped late payment fees at $45 dollars. (true or false)", "true"]];
		
	      function ccaQuestion()
        {    
			do
			{        
					
					var input = prompt(creditCardArray[q_Index][0])
						if (input == creditCardArray[q_Index][1])
						{                            
							numberCorrect++            
							alert("Correct! Great Job!            Total Number Correct: " + numberCorrect)  
							q_Index++                                          
						}
						else
						{
							alert("Sorry, that is incorrect           Total Number Correct: " + numberCorrect)
							q_Index++
						}
            }while (q_Index < creditCardArray.length) 
			
			q_Index=0
        }
		
var creditScoreArray = [ ["Question 1: Where can you get a free credit score? \n a.)FreeCreditReport.com \n b.)FreeCreditScore.com \n c.)AnnualCreditReport.com", "c"], ["Question 2: Bankruptcy will stay on your credit report for 10 years.(true or false)" , "true"],["Question 3: What is the largest factor in your credit score at 35%? \n a) Total amount owed. \n b) Payment history. \n c)Length of credit history", "b"]];
 
	      function csaQuestion()
        {    
			do
			{        
					var input = prompt(creditScoreArray[q_Index][0])
						if (input == creditScoreArray[q_Index][1])
						{                            
							numberCorrect++            
							alert("Correct! Great Job!\tTotal Number Correct: " + numberCorrect)   
							q_Index++                                          
						}
						else
						{
							alert("Sorry, that is incorrect            Total Number Correct: " + numberCorrect)
							q_Index++
						}
            }while (q_Index < creditScoreArray.length) 
			
			q_Index=0
        }
		
var budgetingArray = [ ["Question 1: Your housing and debt monthly costs should be no more than what percent of your budget? \n a) 10% \n b) 40% \n c) 30%", "c"], ["Question 2: What is the government website gives advise on personal finance? \n a) www.mymoney.gov \n b) www.budgetwithgov.gov \n c) www.financialplanning.gov" , "a"],["Question 3: What percent of U.S. citizens nearing retirement have sufficient investment to maintain their current lifestyle? \n a) 80% \n b) more then 50% \n c) less then 10%", "c"] ];
 
	      function bQuestion()
        {    
			do
			{        
					var input = prompt(budgetingArray[q_Index][0])
						if (input == budgetingArray[q_Index][1])
						{                            
							numberCorrect++            
							alert("Correct! Great Job!            Total Number Correct: " + numberCorrect)   
							q_Index++                                          
						}
						else
						{
							alert("Sorry, that is incorrect            Total Number Correct: " + numberCorrect)
							q_Index++
						}
            }while (q_Index < budgetingArray.length) 
			
			q_Index=0
        }