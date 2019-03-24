const assert = require('assert');
const expect = require("chai").expect;
const request = require('request-promise');
const Tvmaze = require("../index");

const BASE_URL = "https://api.tvmaze.com/";
let requestOpts = {
	method: 'GET',
	uri: 'https://api.tvmaze.com/79789',
	json: true
}

// SEARCH

describe('Search functionality', function() {

	it('Search', function(done) {
		Tvmaze.search("firefly")
		.then(response => {

			requestOpts.uri = BASE_URL + "search/shows?q=firefly";

			request(requestOpts)
			.then(expected => {
				expect(response).to.eql(expected);
				done();
			})
			.catch(error => {
				done(error);
			})

		})
		.catch(error => {
			done(error);
		})
	});

	it('singleSearch', function(done) {
		Tvmaze.singleSearch("star vs the forces of evil")
		.then(response => {

			requestOpts.uri = BASE_URL + "singlesearch/shows?q=star vs the forces of evil";

			request(requestOpts)
			.then(expected => {
				expect(response).to.eql(expected);
				done();
			})
			.catch(error => {
				done(error);
			})

		})
		.catch(error => {
			done(error);
		})
	});

	it('singleSearch with embed', function(done) {
		Tvmaze.singleSearch("star vs the forces of evil", ['episodes'])
		.then(response => {

			requestOpts.uri = BASE_URL + "singlesearch/shows?q=star vs the forces of evil&embed=episodes";

			request(requestOpts)
			.then(expected => {
				expect(response).to.eql(expected);
				done();
			})
			.catch(error => {
				done(error);
			})

		})
		.catch(error => {
			done(error);
		})
	});

	it('searchPeople', function(done) {
		Tvmaze.searchPeople("stephen Colbert")
		.then(response => {

			requestOpts.uri = BASE_URL + "search/people?q=stephen Colbert";

			request(requestOpts)
			.then(expected => {
				expect(response).to.eql(expected);
				done();
			})
			.catch(error => {
				done(error);
			})

		})
		.catch(error => {
			done(error);
		})
	});
});

// LOOKUP

describe('Lookup functions', function() {

	it('lookup', function(done) {
		Tvmaze.lookup("imdb", "tt2758770")
		.then(response => {

			requestOpts.uri = BASE_URL + "lookup/shows?imdb=tt2758770";

			request(requestOpts)
			.then(expected => {
				expect(response).to.eql(expected);
				done();
			})
			.catch(error => {
				done(error);
			})

		})
		.catch(error => {
			done(error);
		})
	});

	it('lookupThetvdb', function(done) {
		Tvmaze.lookupThetvdb("270701")
		.then(response => {

			requestOpts.uri = BASE_URL + "lookup/shows?thetvdb=270701";

			request(requestOpts)
			.then(expected => {
				expect(response).to.eql(expected);
				done();
			})
			.catch(error => {
				done(error);
			})

		})
		.catch(error => {
			done(error);
		})
	});

	it('lookupImdb', function(done) {
		Tvmaze.lookupImdb("tt3530232")
		.then(response => {

			requestOpts.uri = BASE_URL + "lookup/shows?imdb=tt3530232";

			request(requestOpts)
			.then(expected => {
				expect(response).to.eql(expected);
				done();
			})
			.catch(error => {
				done(error);
			})

		})
		.catch(error => {
			done(error);
		})
	});

	it('lookupTvrage', function(done) {
		Tvmaze.lookupTvrage("24493")
		.then(response => {

			requestOpts.uri = BASE_URL + "lookup/shows?tvrage=24493";

			request(requestOpts)
			.then(expected => {
				expect(response).to.eql(expected);
				done();
			})
			.catch(error => {
				done(error);
			})

		})
		.catch(error => {
			done(error);
		})
	});

});

// SHOWS

describe('Show functions', function() {
	it('show', function(done) {
		Tvmaze.show(396)
		.then(response => {

			requestOpts.uri = BASE_URL + "shows/396";

			request(requestOpts)
			.then(expected => {
				expect(response).to.eql(expected);
				done();
			})
			.catch(error => {
				done(error);
			})

		})
		.catch(error => {
			done(error);
		})
	});

	it('show with embed', function(done) {
		Tvmaze.show(396, ['episodes'])
		.then(response => {

			requestOpts.uri = BASE_URL + "shows/396?embed=episodes";

			request(requestOpts)
			.then(expected => {
				expect(response).to.eql(expected);
				done();
			})
			.catch(error => {
				done(error);
			})

		})
		.catch(error => {
			done(error);
		})
	});

	it('episodes', function(done) {
		Tvmaze.episodes(396)
		.then(response => {

			requestOpts.uri = BASE_URL + "shows/396/episodes";

			request(requestOpts)
			.then(expected => {
				expect(response).to.eql(expected);
				done();
			})
			.catch(error => {
				done(error);
			})

		})
		.catch(error => {
			done(error);
		})
	});

	it('episode', function(done) {
		Tvmaze.episode(396, 1, 1)
		.then(response => {

			requestOpts.uri = BASE_URL + "shows/396/episodebynumber?season=1&number=1";

			request(requestOpts)
			.then(expected => {
				expect(response).to.eql(expected);
				done();
			})
			.catch(error => {
				done(error);
			})

		})
		.catch(error => {
			done(error);
		})
	});

	it('episodesByDate', function(done) {
		Tvmaze.episodesByDate(321, "2019-03-15")
		.then(response => {

			requestOpts.uri = BASE_URL + "shows/321/episodesbydate?date=2019-03-15";

			request(requestOpts)
			.then(expected => {
				expect(response).to.eql(expected);
				done();
			})
			.catch(error => {
				done(error);
			})

		})
		.catch(error => {
			done(error);
		})
	});

	it('seasons', function(done) {
		Tvmaze.seasons(321)
		.then(response => {

			requestOpts.uri = BASE_URL + "shows/321/seasons";

			request(requestOpts)
			.then(expected => {
				expect(response).to.eql(expected);
				done();
			})
			.catch(error => {
				done(error);
			})

		})
		.catch(error => {
			done(error);
		})
	});

	it('seasonEpisodes', function(done) {
		Tvmaze.seasonEpisodes(1)
		.then(response => {

			requestOpts.uri = BASE_URL + "seasons/1/episodes";

			request(requestOpts)
			.then(expected => {
				expect(response).to.eql(expected);
				done();
			})
			.catch(error => {
				done(error);
			})

		})
		.catch(error => {
			done(error);
		})
	});

	it('cast', function(done) {
		Tvmaze.cast(174)
		.then(response => {

			requestOpts.uri = BASE_URL + "shows/174/cast";

			request(requestOpts)
			.then(expected => {
				expect(response).to.eql(expected);
				done();
			})
			.catch(error => {
				done(error);
			})

		})
		.catch(error => {
			done(error);
		})
	});

	it('crew', function(done) {
		Tvmaze.crew(174)
		.then(response => {

			requestOpts.uri = BASE_URL + "shows/174/crew";

			request(requestOpts)
			.then(expected => {
				expect(response).to.eql(expected);
				done();
			})
			.catch(error => {
				done(error);
			})

		})
		.catch(error => {
			done(error);
		})
	});

	it('aliases', function(done) {
		Tvmaze.aliases(49)
		.then(response => {

			requestOpts.uri = BASE_URL + "shows/49/akas";

			request(requestOpts)
			.then(expected => {
				expect(response).to.eql(expected);
				done();
			})
			.catch(error => {
				done(error);
			})

		})
		.catch(error => {
			done(error);
		})
	});

	it('showIndex', function(done) {
		Tvmaze.showsIndex(1)
		.then(response => {

			requestOpts.uri = BASE_URL + "shows?page=1";

			request(requestOpts)
			.then(expected => {
				expect(response).to.eql(expected);
				done();
			})
			.catch(error => {
				done(error);
			})

		})
		.catch(error => {
			done(error);
		})
	});

	it('showUpdates', function(done) {
		Tvmaze.showUpdates()
		.then(response => {

			requestOpts.uri = BASE_URL + "updates/shows";

			request(requestOpts)
			.then(expected => {
				expect(response).to.eql(expected);
				done();
			})
			.catch(error => {
				done(error);
			})

		})
		.catch(error => {
			done(error);
		})
	});
});

// people

describe('People functions', function() {
	it('person', function(done) {
		Tvmaze.person(37135)
		.then(response => {

			requestOpts.uri = BASE_URL + "people/37135";

			request(requestOpts)
			.then(expected => {
				expect(response).to.eql(expected);
				done();
			})
			.catch(error => {
				done(error);
			})

		})
		.catch(error => {
			done(error);
		})
	});

	it('person embed', function(done) {
		Tvmaze.person(37135, ['castcredits'])
		.then(response => {

			requestOpts.uri = BASE_URL + "people/37135?embed=castcredits";

			request(requestOpts)
			.then(expected => {
				expect(response).to.eql(expected);
				done();
			})
			.catch(error => {
				done(error);
			})

		})
		.catch(error => {
			done(error);
		})
	});

	it('personCastCredits', function(done) {
		Tvmaze.personCastCredits(37135)
		.then(response => {

			requestOpts.uri = BASE_URL + "people/37135/castcredits";

			request(requestOpts)
			.then(expected => {
				expect(response).to.eql(expected);
				done();
			})
			.catch(error => {
				done(error);
			})

		})
		.catch(error => {
			done(error);
		})
	});

	it('personCrewCredits', function(done) {
		Tvmaze.personCrewCredits(37135)
		.then(response => {

			requestOpts.uri = BASE_URL + "people/37135/crewcredits";

			request(requestOpts)
			.then(expected => {
				expect(response).to.eql(expected);
				done();
			})
			.catch(error => {
				done(error);
			})

		})
		.catch(error => {
			done(error);
		})
	});
});


// Scheduling

describe('Schedule functions', function() {

	it('schedule', function(done) {
		Tvmaze.schedule("GB", "2019-03-23")
		.then(response => {

			requestOpts.uri = BASE_URL + "schedule?countrycode=GB&date=2019-03-23";

			request(requestOpts)
			.then(expected => {
				expect(response).to.eql(expected);
				done();
			})
			.catch(error => {
				done(error);
			})

		})
		.catch(error => {
			done(error);
		})
	});

	it('fullSchedule', function(done) {
		this.timeout(15000);

		Tvmaze.fullSchedule()
		.then(response => {

			requestOpts.uri = BASE_URL + "schedule/full";

			request(requestOpts)
			.then(expected => {
				expect(response).to.eql(expected);
				done();
			})
			.catch(error => {
				done(error);
			})

		})
		.catch(error => {
			done(error);
		})
	});

});
