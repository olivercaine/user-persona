angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
				Id: 0,
				Name: "Falcor",
				Photo: "falcor.jpg",
				Quote: "A quotation that captures the essence of this person's personality",
				Age: 497,
				Occupation: "Being a Luckdragon",
				Family: "A mother and 5 children",
				Location: "The Southern Oracle",
				Character: "Friendly, calm and loyal.",
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
			},
			{	
				Id: 1,
				Name: "Atreyu",
				Photo: "atreyu.jpg",
				Quote: "A quotation that captures the essence of this person's personality",
				Age: 17,
				Occupation: "Searching for a cure for the Empress",
				Family: "No parents, only family are the people who raised him.",
				Location: "The Grassy Plains of Fantasia",
				Character: "Strong, reliable and fearless.",
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
			}
		];
		$scope.model = $scope.Personas[0];

	}])