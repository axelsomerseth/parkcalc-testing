Feature: How much for Economy Lot Parking?
	The user wants to know how much for the economy lot parking

	Scenario Outline: Economy Lot Parking
		Given I am calculating the economy lot parking cost
		When I ask how much is for the economy lot parking from "<entryDate>" "<entryTime>" "<entryAMPM>" to "<leavingDate>" "<leavingTime>" "<leavingAMPM>"
		Then The estimated economy lot parking cost should be "<rate>"

	Examples:
		| entryDate | entryTime | entryAMPM | leavingDate | leavingTime | leavingAMPM 	| rate 		| 
		# $ 2.00 per hour
		| 1/15/2021 | 8:00 		| AM 		| 1/15/2021   | 9:00 		| AM 			| $ 2.00 	| 
		# $ 9.00 daily maximum
		| 1/15/2021 | 8:00 		| AM 		| 1/16/2021   | 8:00 		| AM 			| $ 9.00 	| 
		# $ 54.00 per week (7th day free)
		| 1/15/2021 | 8:00 		| AM 		| 1/22/2021   | 8:00 		| AM 			| $ 54.00 	| 
