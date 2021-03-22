Feature: How much for Long-Term Garage Parking?
	The user wants to know how much for the long-term garage parking

	Scenario Outline: Long-Term Garage Parking
		Given I am calculating the long-term garage parking cost
		When I ask how much is for the long-term garage parking from "<entryDate>" "<entryTime>" "<entryAMPM>" to "<leavingDate>" "<leavingTime>" "<leavingAMPM>"
		Then The estimated long-term garage parking cost should be "<rate>"

	Examples:
		| entryDate | entryTime | entryAMPM | leavingDate | leavingTime | leavingAMPM 	| rate 		| 
		# $ 2.00 per hour
		| 1/15/2021 | 8:00 		| AM 		| 1/15/2021   | 9:00 		| AM 			| $ 2.00 	| 
		# $ 12.00 daily maximum
		| 1/15/2021 | 8:00 		| AM 		| 1/16/2021   | 8:00 		| AM 			| $ 12.00 	| 
		# $ 72.00 per week (7th day free)
		| 1/15/2021 | 8:00 		| AM 		| 1/22/2021   | 8:00 		| AM 			| $ 72.00 	| 
