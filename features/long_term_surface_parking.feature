Feature: How much for Long-Term Surface Parking?
	The user wants to know how much for the long-term surface parking

	Scenario Outline: Long-Term Surface Parking
		Given I am calculating the long-term surface parking cost
		When I ask how much is for the long-term surface parking from "<entryDate>" "<entryTime>" "<entryAMPM>" to "<leavingDate>" "<leavingTime>" "<leavingAMPM>"
		Then The estimated long-term surface parking cost should be "<rate>"

	Examples:
		| entryDate | entryTime | entryAMPM | leavingDate | leavingTime | leavingAMPM 	| rate 		| 
		# $ 2.00 per hour
		| 1/15/2021 | 8:00 		| AM 		| 1/15/2021   | 9:00 		| AM 			| $ 2.00 	| 
		# $ 10.00 daily maximum
		| 1/15/2021 | 8:00 		| AM 		| 1/16/2021   | 8:00 		| AM 			| $ 10.00 	| 
		# $ 60.00 per week (7th day free)
		| 1/15/2021 | 8:00 		| AM 		| 1/22/2021   | 8:00 		| AM 			| $ 60.00 	| 
