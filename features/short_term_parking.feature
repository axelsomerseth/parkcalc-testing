Feature: How much for Short-Term Parking?
	The user wants to know how much for the short-term parking

	Scenario Outline: Short-Term (hourly) Parking
		Given I am calculating the short-term parking cost
		When I ask how much is for the short-term parking from "<entryDate>" "<entryTime>" "<entryAMPM>" to "<leavingDate>" "<leavingTime>" "<leavingAMPM>"
		Then The estimated short-term parking cost should be "<rate>"

	Examples:
		| entryDate | entryTime | entryAMPM | leavingDate | leavingTime | leavingAMPM 	| rate 		| 
		# $ 2.00 first hour
		| 1/15/2021 | 8:00 		| AM 		| 1/15/2021   | 9:00 		| AM 			| $ 2.00 	| 
		# $ 2.00 first hour; $1.00 each additional 1/2 hour
		| 1/15/2021 | 8:00 		| AM 		| 1/15/2021   | 10:00 		| AM 			| $ 4.00 	| 
		# $ 24.00 daily maximum
		| 1/15/2021 | 8:00 		| AM 		| 1/16/2021   | 8:00 		| AM 			| $ 24.00 	| 