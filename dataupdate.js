var year;
	d3.select('#slider7').call(d3.slider().axis(true).min(1800).max(2000).step(10).on("slide", function(evt, value){
		year = value;


		if(year < 1820){
			map.bubbles([
		    	{
				    name: 'Melanesia',
				    radius: 5,
				    fillKey: 'MELANESIA',
				    latitude: 10.415,
				    longitude: 145.1619
				},
				{
				    name: 'Micronesia',
				    radius: 5,
				    fillKey: 'MICRONESIA',
				    latitude: -7.415,
				    longitude: 145.1619
				},
				{
				    name: 'Polynesia',
				    radius: 35,
				    fillKey: 'VISITED',
				    latitude: 1.415,
				    longitude: 166.1619,
				    influenceby: 'Great Britain and the USA',
				    influence: '-Protestant hymns and strophic form which inspired himenes'
				}],
				{
				popupTemplate: function(geo, data) {
					if(data.influenceby){
						return '<div class="hoverinfo"><strong>' + data.name + '</strong><br><u>Influence by:</u><br>' + data.influenceby + '<br><u>Result:</u><br> ' + data.influence + '</div>';
					}
					else{
						return '<div class="hoverinfo"><strong>' + data.name + '</strong></div>';
					}
		    	}
		    });

			map.updateChoropleth({
			});
			map.arc([
				{
					//GBR
					origin:{
						latitude: 53.415,
				    	longitude: -1.1619,
					},
					//polynesia
					destination:{
						latitude: 1.415,
				    	longitude: 166.1619,
					}
				},
				{
					//USA
					origin:{
						latitude: 40.4333,
						longitude: -100
					},
					//poly
					destination:{
						latitude: 1.415,
				    	longitude: 166.1619,
					}
				},
				{
					//france
					origin:{
						latitude: 47.4333,
						longitude: 5
					},
					//cuba
					destination:{
						latitude: 20,
						longitude: -75
					}
				}

			],  {strokeWidth: 2, arcSharpness: 1.4});
		}



		else if(year < 1840){
			map.bubbles([
		    	{
				    name: 'Melanesia',
				    radius: 5,
				    fillKey: 'MELANESIA',
				    latitude: 10.415,
				    longitude: 145.1619
				},
				{
				    name: 'Micronesia',
				    radius: 5,
				    fillKey: 'MICRONESIA',
				    latitude: -7.415,
				    longitude: 145.1619
				},
				{
				    name: 'Polynesia',
				    radius: 35,
				    fillKey: 'VISITED',
				    latitude: 1.415,
				    longitude: 166.1619,
				    influenceby: 'American and Britain',
				    influence: '-Protestant hymns and strophic form which inspired himenes'
				}],
				{
				popupTemplate: function(geo, data) {
					if(data.influenceby){
						return '<div class="hoverinfo"><strong>' + data.name + '</strong><br><u>Influence by:</u><br>' + data.influenceby + '<br><u>Result:</u><br> ' + data.influence + '</div>';
					}
					else{
						return '<div class="hoverinfo"><strong>' + data.name + '</strong></div>';
					}
		    	}
		    });

			map.updateChoropleth({
				DOM:{
				}
			});
			map.arc([
				
				{
					//GBR
					origin:{
						latitude: 53.415,
				    	longitude: -1.1619,
					},
					//polynesia
					destination:{
						latitude: 1.415,
				    	longitude: 166.1619,
					}
				},
				{
					//USA
					origin:{
						latitude: 40.4333,
						longitude: -100
					},
					//poly
					destination:{
						latitude: 1.415,
				    	longitude: 166.1619,
					}
				},
				{
					//france
					origin:{
						latitude: 47.4333,
						longitude: 5
					},
					//cuba
					destination:{
						latitude: 20,
						longitude: -75
					}
				}
			],  {strokeWidth: 2, arcSharpness: 1.4});
		}



		else if(year < 1860){
			map.bubbles([
		    	{
				    name: 'Melanesia',
				    radius: 5,
				    fillKey: 'MELANESIA',
				    latitude: 10.415,
				    longitude: 145.1619
				},
				{
				    name: 'Micronesia',
				    radius: 5,
				    fillKey: 'MICRONESIA',
				    latitude: -7.415,
				    longitude: 145.1619
				},
				{
				    name: 'Polynesia',
				    radius: 5,
				    fillKey: 'POLYNESIA',
				    latitude: 1.415,
				    longitude: 166.1619
				}],
				{
				popupTemplate: function(geo, data) {
					if(data.influenceby){
						return '<div class="hoverinfo"><strong>' + data.name + '</strong><br><u>Influence by:</u><br>' + data.influenceby + '<br><u>Result:</u><br> ' + data.influence + '</div>';
					}
					else{
						return '<div class="hoverinfo"><strong>' + data.name + '</strong></div>';
					}
		    	}
		    });

			map.updateChoropleth({
				DOM:{
					fillKey: 'VISITED',
					influence: '1840-1880<br>-Merengue aspects<br>-polka and accordion',
					influenceby: 'Germany'
				}
			});
			map.arc([
				{
					//germany
					origin:{
						latitude:50,
						longitude: 9
					},
					//DR
					destination:{
						latitude: 20,
						longitude: -70
					}
				},
				{
					//GBR
					origin:{
						latitude: 53.415,
				    	longitude: -1.1619,
					},
					//polynesia
					destination:{
						latitude: 1.415,
				    	longitude: 166.1619,
					}
				},
				{
					//USA
					origin:{
						latitude: 40.4333,
						longitude: -100
					},
					//poly
					destination:{
						latitude: 1.415,
				    	longitude: 166.1619,
					}
				},
				{
					//france
					origin:{
						latitude: 47.4333,
						longitude: 5
					},
					//cuba
					destination:{
						latitude: 20,
						longitude: -75
					}
				}
			],  {strokeWidth: 2, arcSharpness: 1.4});
		}



		else if(year < 1880){
			map.bubbles([
		    	{
				    name: 'Melanesia',
				    radius: 5,
				    fillKey: 'MELANESIA',
				    latitude: 10.415,
				    longitude: 145.1619
				},
				{
				    name: 'Micronesia',
				    radius: 5,
				    fillKey: 'MICRONESIA',
				    latitude: -7.415,
				    longitude: 145.1619
				},
				{
				    name: 'Polynesia',
				    radius: 5,
				    fillKey: 'POLYNESIA',
				    latitude: 1.415,
				    longitude: 166.1619
				}],
				{
				popupTemplate: function(geo, data) {
					if(data.influenceby){
						return '<div class="hoverinfo"><strong>' + data.name + '</strong><br><u>Influence by:</u><br>' + data.influenceby + '<br><u>Result:</u><br> ' + data.influence + '</div>';
					}
					else{
						return '<div class="hoverinfo"><strong>' + data.name + '</strong></div>';
					}
		    	}
		    });

			map.updateChoropleth({
				DOM:{
					fillKey: 'UNKNOWN'
				}
			});
			map.arc([
				{
					//germany
					origin:{
						latitude:50,
						longitude: 9
					},
					//DR
					destination:{
						latitude: 20,
						longitude: -70
					}
				},
				{
					//GBR
					origin:{
						latitude: 53.415,
				    	longitude: -1.1619,
					},
					//polynesia
					destination:{
						latitude: 1.415,
				    	longitude: 166.1619,
					}
				},
				{
					//USA
					origin:{
						latitude: 40.4333,
						longitude: -100
					},
					//poly
					destination:{
						latitude: 1.415,
				    	longitude: 166.1619,
					}
				},
				{
					//france
					origin:{
						latitude: 47.4333,
						longitude: 5
					},
					//cuba
					destination:{
						latitude: 20,
						longitude: -75
					}
				}
			],  {strokeWidth: 2, arcSharpness: 1.4});
		}


		else if(year < 1900){

			map.updateChoropleth({

			});

			map.arc([
				{
					//spain
					origin:{
						latitude: 40.4333,
						longitude: -5
					},
					//micronesia
					destination:{
						latitude: -7.415,
			    		longitude: 145.1619
					}
				},
				{
					//spain
					origin:{
						latitude: 40.4333,
						longitude: -5
					},
					//cuba
					destination:{
						latitude: 20,
						longitude: -75
					}
				},
				{
					//ger
					origin:{
						latitude: 50.4333,
						longitude: 10
					},
					//cuba
					destination:{
						latitude: 20,
						longitude: -75
					}
				},
				{
					//germany
					origin:{
						latitude:50,
						longitude: 9
					},
					//DR
					destination:{
						latitude: 20,
						longitude: -70
					}
				},
				{
					//GBR
					origin:{
						latitude: 53.415,
				    	longitude: -1.1619,
					},
					//polynesia
					destination:{
						latitude: 1.415,
				    	longitude: 166.1619,
					}
				},
				{
					//USA
					origin:{
						latitude: 40.4333,
						longitude: -100
					},
					//poly
					destination:{
						latitude: 1.415,
				    	longitude: 166.1619,
					}
				},
				{
					//france
					origin:{
						latitude: 47.4333,
						longitude: 5
					},
					//cuba
					destination:{
						latitude: 20,
						longitude: -75
					}
				}
			],  {strokeWidth: 2, arcSharpness: 1.4});

			map.bubbles([
	    	{
			    name: 'Melanesia',
			    radius: 5,
			    fillKey: 'MELANESIA',
			    latitude: 10.415,
			    longitude: 145.1619,
			    
			    
			},
			{
			    name: 'Micronesia',
			    radius: 25,
			    fillKey: 'VISITED',
			    latitude: -7.415,
			    longitude: 145.1619,
			    influenceby: 'Spain',
			    influence: '-metal jew\'s harps accordions, harmonicas'
			},
			{
			    name: 'Polynesia',
			    radius: 5,
			    fillKey: 'POLYNESIA',
			    latitude: 1.415,
			    longitude: 166.1619
			}],
			{
				popupTemplate: function(geo, data) {
					if(data.influenceby){
						return '<div class="hoverinfo"><strong>' + data.name + '</strong><br><u>Influence by:</u><br>' + data.influenceby + '<br><u>Result:</u><br> ' + data.influence + '</div>';
					}
					else{
						return '<div class="hoverinfo"><strong>' + data.name + '</strong></div>';
					}
				}
    		});
		}


		else if(year < 1920){
			map.updateChoropleth({
			});
			map.arc([
				{
					//germany
					origin:{
						latitude: 50.4333,
						longitude: 10
					},
					//micronesia
					destination:{
						latitude: -7.415,
					    longitude: 145.1619,
					}
				},
				{
					//australia
					origin:{
						latitude: -25.4333,
						longitude: 135
					},
					//melanesia
					destination:{
						latitude: 10.415,
			   			longitude: 145.1619
					}
				},
				{
					//spain
					origin:{
						latitude: 40.4333,
						longitude: -5
					},
					//micronesia
					destination:{
						latitude: -7.415,
			    		longitude: 145.1619
					}
				},
				{
					//spain
					origin:{
						latitude: 40.4333,
						longitude: -5
					},
					//cuba
					destination:{
						latitude: 20,
						longitude: -75
					}
				},
				{
					//ger
					origin:{
						latitude: 50.4333,
						longitude: 10
					},
					//cuba
					destination:{
						latitude: 20,
						longitude: -75
					}
				},
				{
					//germany
					origin:{
						latitude:50,
						longitude: 9
					},
					//DR
					destination:{
						latitude: 20,
						longitude: -70
					}
				},
				{
					//GBR
					origin:{
						latitude: 53.415,
				    	longitude: -1.1619,
					},
					//polynesia
					destination:{
						latitude: 1.415,
				    	longitude: 166.1619,
					}
				},
				{
					//USA
					origin:{
						latitude: 40.4333,
						longitude: -100
					},
					//poly
					destination:{
						latitude: 1.415,
				    	longitude: 166.1619,
					}
				},
				{
					//france
					origin:{
						latitude: 47.4333,
						longitude: 5
					},
					//cuba
					destination:{
						latitude: 20,
						longitude: -75
					}
				}
			],  {strokeWidth: 2, arcSharpness: 1.4});

			map.bubbles([
	    	{
			    name: 'Melanesia',
			    radius: 25,
			    fillKey: 'VISITED',
			    latitude: 10.415,
			    longitude: 145.1619,
			    influenceby: 'Australia',
			    influence: '-Militarism <br>-Singsing competition'
			},
			{
			    name: 'Micronesia',
			    radius: 25,
			    fillKey: 'VISITED',
			    latitude: -7.415,
			    longitude: 145.1619,
			    influenceby: 'Germany',
			    influence: '-metal jew\'s harps accordions, harmonicas<br>-military march'
			},
			{
			    name: 'Polynesia',
			    radius: 5,
			    fillKey: 'POLYNESIA',
			    latitude: 1.415,
			    longitude: 166.1619
			}],
			{
				popupTemplate: function(geo, data) {
					if(data.influenceby){
						return '<div class="hoverinfo"><strong>' + data.name + '</strong><br><u>Influence by:</u><br>' + data.influenceby + '<br><u>Result:</u><br> ' + data.influence + '</div>';
					}
					else{
						return '<div class="hoverinfo"><strong>' + data.name + '</strong></div>';
					}
				}
    		});
		}


		else if(year < 1940){
			map.updateChoropleth({
			});
			
			map.bubbles([
	    	{
			    name: 'Melanesia',
			    radius: 5,
			    fillKey: 'MELANESIA',
			    latitude: 10.415,
			    longitude: 145.1619
			    
			},
			{
			    name: 'Micronesia',
			    radius: 25,
			    fillKey: 'VISITED',
			    latitude: -7.415,
			    longitude: 145.1619,
			    influenceby: 'Japan',
			    influence: '-adopted Japanese language<br>-Modeled music on Japanese school songs and pop songs'
			},
			{
			    name: 'Polynesia',
			    radius: 35,
			    fillKey: 'VISITED',
			    latitude: 1.415,
			    longitude: 166.1619,
			    influenceby: 'USA',
			    influence: '-John Frum cults/hymns'
			}],
			{
				popupTemplate: function(geo, data) {
					if(data.influenceby){
						return '<div class="hoverinfo"><strong>' + data.name + '</strong><br><u>Influence by:</u><br>' + data.influenceby + '<br><u>Result:</u><br> ' + data.influence + '</div>';
					}
					else{
						return '<div class="hoverinfo"><strong>' + data.name + '</strong></div>';
					}
				}
    		});

    		map.arc([
				{
					//japan
					origin:{
						latitude: 40.4333,
						longitude: 140
					},
					//micronesia
					destination:{
						latitude: -7.415,
			    		longitude: 145.1619,
					}
				},
				{
					//USA
					origin:{
						latitude: 40.4333,
						longitude: -100
					},
					//poly
					destination:{
						latitude: 1.415,
				    	longitude: 166.1619,
					}
				},
				{
					//germany
					origin:{
						latitude: 50.4333,
						longitude: 10
					},
					//micronesia
					destination:{
						latitude: -7.415,
					    longitude: 145.1619,
					}
				},
				{
					//australia
					origin:{
						latitude: -25.4333,
						longitude: 135
					},
					//melanesia
					destination:{
						latitude: 10.415,
			   			longitude: 145.1619
					}
				},
				{
					//spain
					origin:{
						latitude: 40.4333,
						longitude: -5
					},
					//micronesia
					destination:{
						latitude: -7.415,
			    		longitude: 145.1619
					}
				},
				{
					//spain
					origin:{
						latitude: 40.4333,
						longitude: -5
					},
					//cuba
					destination:{
						latitude: 20,
						longitude: -75
					}
				},
				{
					//ger
					origin:{
						latitude: 50.4333,
						longitude: 10
					},
					//cuba
					destination:{
						latitude: 20,
						longitude: -75
					}
				},
				{
					//germany
					origin:{
						latitude:50,
						longitude: 9
					},
					//DR
					destination:{
						latitude: 20,
						longitude: -70
					}
				},
				{
					//GBR
					origin:{
						latitude: 53.415,
				    	longitude: -1.1619,
					},
					//polynesia
					destination:{
						latitude: 1.415,
				    	longitude: 166.1619,
					}
				},
				{
					//USA
					origin:{
						latitude: 40.4333,
						longitude: -100
					},
					//poly
					destination:{
						latitude: 1.415,
				    	longitude: 166.1619,
					}
				},
				{
					//france
					origin:{
						latitude: 47.4333,
						longitude: 5
					},
					//cuba
					destination:{
						latitude: 20,
						longitude: -75
					}
				}
			],  {strokeWidth: 2, arcSharpness: 1.4});

		}


		else if(year < 1960){
			map.updateChoropleth({
				USA:{
					fillKey: 'UNKNOWN'
				}
			});
			map.arc([
				{
					//USA
					origin:{
						latitude: 40.4333,
						longitude: -100
					},
					//micronesia
					destination:{
						latitude: -7.415,
			   			longitude: 145.1619,
					}
				},
				{
					//japan
					origin:{
						latitude: 40.4333,
						longitude: 140
					},
					//micronesia
					destination:{
						latitude: -7.415,
			    		longitude: 145.1619,
					}
				},
				{
					//USA
					origin:{
						latitude: 40.4333,
						longitude: -100
					},
					//poly
					destination:{
						latitude: 1.415,
				    	longitude: 166.1619,
					}
				},
				{
					//germany
					origin:{
						latitude: 50.4333,
						longitude: 10
					},
					//micronesia
					destination:{
						latitude: -7.415,
					    longitude: 145.1619,
					}
				},
				{
					//australia
					origin:{
						latitude: -25.4333,
						longitude: 135
					},
					//melanesia
					destination:{
						latitude: 10.415,
			   			longitude: 145.1619
					}
				},
				{
					//spain
					origin:{
						latitude: 40.4333,
						longitude: -5
					},
					//micronesia
					destination:{
						latitude: -7.415,
			    		longitude: 145.1619
					}
				},
				{
					//spain
					origin:{
						latitude: 40.4333,
						longitude: -5
					},
					//cuba
					destination:{
						latitude: 20,
						longitude: -75
					}
				},
				{
					//ger
					origin:{
						latitude: 50.4333,
						longitude: 10
					},
					//cuba
					destination:{
						latitude: 20,
						longitude: -75
					}
				},
				{
					//germany
					origin:{
						latitude:50,
						longitude: 9
					},
					//DR
					destination:{
						latitude: 20,
						longitude: -70
					}
				},
				{
					//GBR
					origin:{
						latitude: 53.415,
				    	longitude: -1.1619,
					},
					//polynesia
					destination:{
						latitude: 1.415,
				    	longitude: 166.1619,
					}
				},
				{
					//USA
					origin:{
						latitude: 40.4333,
						longitude: -100
					},
					//poly
					destination:{
						latitude: 1.415,
				    	longitude: 166.1619,
					}
				},
				{
					//france
					origin:{
						latitude: 47.4333,
						longitude: 5
					},
					//cuba
					destination:{
						latitude: 20,
						longitude: -75
					}
				}
			],  {strokeWidth: 2, arcSharpness: 1.4});

			map.bubbles([
	    	{
			    name: 'Melanesia',
			    radius: 5,
			    fillKey: 'MELANESIA',
			    latitude: 10.415,
			    longitude: 145.1619
			    
			},
			{
			    name: 'Micronesia',
			    radius: 25,
			    fillKey: 'VISITED',
			    latitude: -7.415,
			    longitude: 145.1619,
			    influenceby: 'USA',
			    influence: '-Introduced new technologies such as the CD and radio<br>-Disco music made its way in'
			},
			{
			    name: 'Polynesia',
			    radius: 35,
			    fillKey: 'VISITED',
			    latitude: 1.415,
			    longitude: 166.1619,
			    influenceby: 'USA',
			    influence: '-John Frum cults/hymns'
			}],
			{
				popupTemplate: function(geo, data) {
					if(data.influenceby){
						return '<div class="hoverinfo"><strong>' + data.name + '</strong><br><u>Influence by:</u><br>' + data.influenceby + '<br><u>Result:</u><br> ' + data.influence + '</div>';
					}
					else{
						return '<div class="hoverinfo"><strong>' + data.name + '</strong></div>';
					}
				}
    		});
		}



		else if(year < 1980){
			map.updateChoropleth({
				USA:{
					influenceby: 'Cuba and Puerto Rico in the 1970s',
					influence: 'Salsa music in NYC and Miami',
					fillKey: 'VISITED'
				}
			});
			map.arc([
				{
					//PR
					origin:{
						latitude: 20,
						longitude: -65
					},
					//USA
					destination:{
						latitude: 40.4333,
						longitude: -100
					}
				},
				{
					//USA
					origin:{
						latitude: 40.4333,
						longitude: -100
					},
					//micronesia
					destination:{
						latitude: -7.415,
			    		longitude: 145.1619,
					}
				},
				{
					//USA
					origin:{
						latitude: 40.4333,
						longitude: -100
					},
					//micronesia
					destination:{
						latitude: -7.415,
			   			longitude: 145.1619,
					}
				},
				{
					//japan
					origin:{
						latitude: 40.4333,
						longitude: 140
					},
					//micronesia
					destination:{
						latitude: -7.415,
			    		longitude: 145.1619,
					}
				},
				{
					//USA
					origin:{
						latitude: 40.4333,
						longitude: -100
					},
					//poly
					destination:{
						latitude: 1.415,
				    	longitude: 166.1619,
					}
				},
				{
					//germany
					origin:{
						latitude: 50.4333,
						longitude: 10
					},
					//micronesia
					destination:{
						latitude: -7.415,
					    longitude: 145.1619,
					}
				},
				{
					//australia
					origin:{
						latitude: -25.4333,
						longitude: 135
					},
					//melanesia
					destination:{
						latitude: 10.415,
			   			longitude: 145.1619
					}
				},
				{
					//spain
					origin:{
						latitude: 40.4333,
						longitude: -5
					},
					//micronesia
					destination:{
						latitude: -7.415,
			    		longitude: 145.1619
					}
				},
				{
					//spain
					origin:{
						latitude: 40.4333,
						longitude: -5
					},
					//cuba
					destination:{
						latitude: 20,
						longitude: -75
					}
				},
				{
					//ger
					origin:{
						latitude: 50.4333,
						longitude: 10
					},
					//cuba
					destination:{
						latitude: 20,
						longitude: -75
					}
				},
				{
					//germany
					origin:{
						latitude:50,
						longitude: 9
					},
					//DR
					destination:{
						latitude: 20,
						longitude: -70
					}
				},
				{
					//GBR
					origin:{
						latitude: 53.415,
				    	longitude: -1.1619,
					},
					//polynesia
					destination:{
						latitude: 1.415,
				    	longitude: 166.1619,
					}
				},
				{
					//USA
					origin:{
						latitude: 40.4333,
						longitude: -100
					},
					//poly
					destination:{
						latitude: 1.415,
				    	longitude: 166.1619,
					}
				},
				{
					//france
					origin:{
						latitude: 47.4333,
						longitude: 5
					},
					//cuba
					destination:{
						latitude: 20,
						longitude: -75
					}
				}
			],  {strokeWidth: 2, arcSharpness: 1.4});

			map.bubbles([
	    	{
			    name: 'Melanesia',
			    radius: 5,
			    fillKey: 'MELANESIA',
			    latitude: 10.415,
			    longitude: 145.1619
			    
			},
			{
			    name: 'Micronesia',
			    radius: 25,
			    fillKey: 'VISITED',
			    latitude: -7.415,
			    longitude: 145.1619,
			    influenceby: 'USA',
			    influence: '-Introduced new technologies such as the CD and radio<br>-Disco music made its way in'
			},
			{
			    name: 'Polynesia',
			    radius: 5,
			    fillKey: 'POLYNESIA',
			    latitude: 1.415,
			    longitude: 166.1619
			}],
			{
				popupTemplate: function(geo, data) {
					if(data.influenceby){
						return '<div class="hoverinfo"><strong>' + data.name + '</strong><br><u>Influence by:</u><br>' + data.influenceby + '<br><u>Result:</u><br> ' + data.influence + '</div>';
					}
					else{
						return '<div class="hoverinfo"><strong>' + data.name + '</strong></div>';
					}
				}
    		});
		}



		else {
			map.bubbles([
		    	{
				    name: 'Melanesia',
				    radius: 5,
				    fillKey: 'MELANESIA',
				    latitude: 10.415,
				    longitude: 145.1619
				},
				{
				    name: 'Micronesia',
				    radius: 5,
				    fillKey: 'MICRONESIA',
				    latitude: -7.415,
				    longitude: 145.1619
				},
				{
				    name: 'Polynesia',
				    radius: 5,
				    fillKey: 'POLYNESIA',
				    latitude: 1.415,
				    longitude: 166.1619
				}],
				{
				popupTemplate: function(geo, data) {
					return '<div class="hoverinfo"><strong>' + data.name + '</strong></div>';
		    	}
		    });

			map.updateChoropleth({
				USA:{
					influenceby:'Puerto Rico in the late 20th century',
					influence:'Reggaeton',
					fillKey: 'VISITED'
				}
			});
			map.arc([
				{
					//USA
					origin:{
						latitude: 40.4333,
						longitude: -100
					},
					//micronesia
					destination:{
						latitude: -7.415,
			    		longitude: 145.1619,
					}
				},
				{
					//USA
					origin:{
						latitude: 40.4333,
						longitude: -100
					},
					//micronesia
					destination:{
						latitude: -7.415,
			   			longitude: 145.1619,
					}
				},
				{
					//japan
					origin:{
						latitude: 40.4333,
						longitude: 140
					},
					//micronesia
					destination:{
						latitude: -7.415,
			    		longitude: 145.1619,
					}
				},
				{
					//USA
					origin:{
						latitude: 40.4333,
						longitude: -100
					},
					//poly
					destination:{
						latitude: 1.415,
				    	longitude: 166.1619,
					}
				},
				{
					//germany
					origin:{
						latitude: 50.4333,
						longitude: 10
					},
					//micronesia
					destination:{
						latitude: -7.415,
					    longitude: 145.1619,
					}
				},
				{
					//australia
					origin:{
						latitude: -25.4333,
						longitude: 135
					},
					//melanesia
					destination:{
						latitude: 10.415,
			   			longitude: 145.1619
					}
				},
				{
					//spain
					origin:{
						latitude: 40.4333,
						longitude: -5
					},
					//micronesia
					destination:{
						latitude: -7.415,
			    		longitude: 145.1619
					}
				},
				{
					//spain
					origin:{
						latitude: 40.4333,
						longitude: -5
					},
					//cuba
					destination:{
						latitude: 20,
						longitude: -75
					}
				},
				{
					//ger
					origin:{
						latitude: 50.4333,
						longitude: 10
					},
					//cuba
					destination:{
						latitude: 20,
						longitude: -75
					}
				},
				{
					//germany
					origin:{
						latitude:50,
						longitude: 9
					},
					//DR
					destination:{
						latitude: 20,
						longitude: -70
					}
				},
				{
					//GBR
					origin:{
						latitude: 53.415,
				    	longitude: -1.1619,
					},
					//polynesia
					destination:{
						latitude: 1.415,
				    	longitude: 166.1619,
					}
				},
				{
					//USA
					origin:{
						latitude: 40.4333,
						longitude: -100
					},
					//poly
					destination:{
						latitude: 1.415,
				    	longitude: 166.1619,
					}
				},
				{
					//france
					origin:{
						latitude: 47.4333,
						longitude: 5
					},
					//cuba
					destination:{
						latitude: 20,
						longitude: -75
					}
				},
				{
					//PR
					origin:{
						latitude: 20,
						longitude: -65
					},
					//USA
					destination:{
						latitude: 40.4333,
						longitude: -100
					}
				}
			],  {strokeWidth: 2, arcSharpness: 1.4});
		}

	}));

	
