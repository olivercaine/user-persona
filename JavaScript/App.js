angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.model = {
			Name: "Ollie Caine",
			Photo: "https://scontent.flhr2-1.fna.fbcdn.net/v/t1.0-9/12074615_10156192249655173_3878151669290973367_n.jpg?oh=2e895b5188e66dd417a8fbf7103288f7&oe=59019C14",
			Quote: "A quotation that captures the essence of this person's personality",
			Age: 31,
			Occupation: "Computer Monkey",
			Family: "Back in the UK",
			Location: "Sydney",
			Character: "Stubborn, opinionated, headstrong.",
			PersonalityTraits: [
				{ Name: "Introvert/Extrovert", Value: 50 },
				{ Name: "Analytical/Creative", Value: 50 },
				{ Name: "Conservative/Liberal", Value: 50 },
				{ Name: "Passive/Active", Value: 50 }
			], 
			Goals: ["The goals this user hopes to achieve.", "A task that needs to be completed.", "A life goal to be reached.", "An experience to be felt."],
			Frustrations: ["The frustrations this user would like to avoid.", "The obstacle that prevents the user from achieving their goals.", "The problems with the solutions already available.", "The product or service which does not currently exist."],
			Bio: "The bio should be a short paragraph to describe the user journey. It should include some of their history leading up to a current use case. It may be helpful to incorporate information listed across the template and add pertinent details that may have been left out. Highlight factors of the user's personal and professional life that make this user an ideal customer of your product.",
			Motivations: [
				{ Name: "Incentive", Value: 50 },
				{ Name: "Fear", Value: 50 },
				{ Name: "Achievement", Value: 50 },
				{ Name: "Growth", Value: 50 },
				{ Name: "Power", Value: 50 },
				{ Name: "Social", Value: 50 }
			], 
			PreferredChannels: [
				{ Name: "Traditional Ads", Value: 50 },
				{ Name: "Online & Social Media", Value: 50 },
				{ Name: "Referral", Value: 50 },
				{ Name: "Guerrilla Efforts", Value: 50 }
			]
		};

	}])