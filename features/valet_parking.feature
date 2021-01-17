Feature: How much for Valet Parking?
	Everybody wants to know how much for the valet parking

	Scenario Outline: Valet Parking
		Given I am calculating the parking cost
		When I ask how much is for the valet parking from "<entryDate>" "<entryTime>" "<entryAMPM>" to "<leavingDate>" "<leavingTime>" "<leavingAMPM>"
		Then The estimated parking cost should be "<rate>"

	Examples:
		| entryDate | entryTime | entryAMPM | leavingDate | leavingTime | leavingAMPM 	| rate 		| 
		| 1/16/2021 | 8:00 		| AM 		| 1/16/2021   | 11:00 		| AM 			| $ 12.00 	| 
		| 1/15/2021 | 8:00 		| AM 		| 1/16/2021   | 8:00 		| AM 			| $ 18.00 	| 