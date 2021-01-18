Feature: How much for Short-Term Parking?
	The user wants to know how much for the short-term parking

	Scenario Outline: Short-Term (hourly) Parking
		Given I am calculating the hourly parking cost
		When I ask how much is for the hourly parking from "<entryDate>" "<entryTime>" "<entryAMPM>" to "<leavingDate>" "<leavingTime>" "<leavingAMPM>"
		Then The estimated hourly parking cost should be "<rate>"

	Examples:
		| entryDate | entryTime | entryAMPM | leavingDate | leavingTime | leavingAMPM 	| rate 		|
		| 1/16/2021 | 8:00 		| AM 		| 1/16/2021   | 10:00 		| AM 			| $ 4.00 	|
		| 1/16/2021 | 8:00 		| AM 		| 1/16/2021   | 11:00 		| AM 			| $ 6.00 	|
		| 1/16/2021 | 8:00 		| AM 		| 1/17/2021   | 8:00 		| AM 			| $ 24.00 	| 
		| 1/16/2021 | 8:00 		| AM 		| 1/17/2021   | 10:00 		| AM 			| $ 28.00 	| 
