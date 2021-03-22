Feature: How much for Valet Parking?
	The user wants to know how much for the valet parking

	Scenario Outline: Valet Parking
		Given I am calculating the valet parking cost
		When I ask how much is for the valet parking from "<entryDate>" "<entryTime>" "<entryAMPM>" to "<leavingDate>" "<leavingTime>" "<leavingAMPM>"
		Then The estimated valet parking cost should be "<rate>"

	Examples:
		| entryDate | entryTime | entryAMPM | leavingDate | leavingTime | leavingAMPM 	| rate 		| 
		# $ 18.00 per day
		| 1/15/2021 | 8:00 		| AM 		| 1/16/2021   | 8:00 		| AM 			| $ 18.00 	| 
		# $ 12.00 for five hours or less
		| 1/15/2021 | 8:00 		| AM 		| 1/15/2021   | 1:00 		| PM 			| $ 12.00 	| 
