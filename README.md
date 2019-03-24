# Node-TvMaze

A Promise based node.js wrapper for the public [TVmaze API][8f7cf8e7].

TVmaze API is public with no need for an API key but limitations apply, [read more][e6821a9f].

## Instillation

This can be installed via NPM via:

`npm i --save node-tvmaze`

Or cloned via Git from:

`https://github.com/kennyist/node-tvmaze.git`

## Usage

You can easily import node-tvmaze and use straight away for example:

```
const Tvmaze = require('node-tvmaze');

Tvmaze.search("firefly")
      .then(response => {
        // Response is a JSON object of the results
        resposne.map(item => {
          // Loop through results and print the show name
          console.log(item.show.name);
        })
      })
      .catch(error => {
        // Error is a Request returned error
        console.log(error.body); // log the readable part of the error object
      });
```

See [Request][1dc871a5] for more error details.

## Testing

This module uses Mocha tests that can be run by using:

`npm test`

# Endpoints

All endpoints are fully JSdoc documented

- [Searching](#searching)
- [Lookup](#lookup)
- [Schedule](#schedule)
- [Show information](#shows)
- [People information](#people)
- [Other functions](#other)

## Options

All endpoints allow for options `options` parameter, this is where you can define request header values or switch from https to http, default value:

```
{
  https: true,
  header: {
    'User-Agent': `node-tvmaze/${VERSION}`
  }
}
```

To switch to http you can simply add `{https: false}` to the last parameter of each endpoint. Must be done per call.

## Searching

### search(string, [options]) ⇒ `Promise`

Search through all shows on TVmaze in order or relevance.

Param   | Type     | Description
------- | -------- | ----------------------------------
string  | `string` | input to search by
options | `Object` | optional options object, see above

**Example**:

```javascript
search("Firefly").
     then(response => {
       console.log(response);
     })
     .catch(error => {
       console.log(error);
     })
```

**API Call example:** <http://api.tvmaze.com/search/shows?q=firefly>

<https://www.tvmaze.com/api#show-search>

### singleSearch(string, [options]) ⇒ `Promise`

Return single search result, including more detailed show information

Param   | Type     | Description
------- | -------- | ----------------------------------
string  | `string` | input to search by
options | `Object` | optional options object, see above

**Example**:

```javascript
sinlgeSearch("Firefly", ['episodes']).
     then(response => {
       console.log(response);
     })
     .catch(error => {
       console.log(error);
     })
```

**API Call example:** <http://api.tvmaze.com/singlesearch/shows?q=firefly>

<https://www.tvmaze.com/api#show-single-search>

### searchPeople(string, [options]) ⇒ `Promise`

Search through all people on TVmaze in order or relevance.

Param   | Type     | Description
------- | -------- | ----------------------------------
string  | `string` | input to search by
options | `Object` | optional options object, see above

**Example**:

```javascript
searchPeople("Stephen Colbert").
     then(response => {
       console.log(response);
     })
     .catch(error => {
       console.log(error);
     })
```

**API Call example:** <http://api.tvmaze.com/search/people?q=Stephen%20Colbert>

<https://www.tvmaze.com/api#people-search>

## Lookup

<https://www.tvmaze.com/api#show-lookup>

### lookupThetvdb(id, [options]) ⇒ `Promise`

Lookup a TV show using a TVdb ID

Param   | Type     | Description
------- | -------- | ----------------------------------
string  | `number` | TheTVdb show ID
options | `Object` | optional options object, see above

**Example**:

```javascript
lookupThetvdb("270701").
     then(response => {
       console.log(response);
     })
     .catch(error => {
       console.log(error);
     })
```

**API Call example:** <http://api.tvmaze.com/lookup/shows?thetvdb=270701>

### lookupImdb(id, [options]) ⇒ `Promise`

Lookup a TV show using a IMDB ID

Param   | Type     | Description
------- | -------- | ----------------------------------
string  | `string` | IMDB show ID
options | `Object` | optional options object, see above

**Example**:

```javascript
lookupImdb("tt3530232").
     then(response => {
       console.log(response);
     })
     .catch(error => {
       console.log(error);
     })
```

**API Call example:** <http://api.tvmaze.com/lookup/shows?imdb=tt3530232>

### lookupTvrage(id, [options]) ⇒ `Promise`

Lookup a TV show using a TVrage ID

Param   | Type     | Description
------- | -------- | ----------------------------------
string  | `number` | TVrage show ID
options | `Object` | optional options object, see above

**Example**:

```javascript
lookupTvrage(270701).
     then(response => {
       console.log(response);
     })
     .catch(error => {
       console.log(error);
     })
```

**API Call example:** <http://api.tvmaze.com/lookup/shows?thetvdb=270701>

## Schedule

### schedule(countryCode, date, [options]) ⇒ `Promise`

Get the TV schedule for a country and date

Param   | Type     | Description
------- | -------- | --------------------------------------------------------------------------
string  | `string` | [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) code of the country
date    | `string` | [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Dates) formatted date
options | `Object` | optional options object, see above

**Example**:

```javascript
schedule("GB", "2019-03-23").
     then(response => {
       console.log(response);
     })
     .catch(error => {
       console.log(error);
     })
```

**API Call example:** <http://api.tvmaze.com/schedule?country=GB&date=2019-03-23>

<https://www.tvmaze.com/api#schedule>

### fullSchedule([options]) ⇒ `Promise`

Get the every future episode known to TVmaze

Param   | Type     | Description
------- | -------- | ----------------------------------
options | `Object` | optional options object, see above

**Example**:

```javascript
schedule().
     then(response => {
       console.log(response);
     })
     .catch(error => {
       console.log(error);
     })
```

**API Call example:** <http://api.tvmaze.com/schedule/full>

<https://www.tvmaze.com/api#full-schedule>

## Shows

### show(showid, [emded], [options]) ⇒ `Promise`

Get the main information for a show, supports embedding

Param   | Type       | Description
------- | ---------- | -----------------------------------------------------------------------------------------------------------------
showid  | `number`   | TVmaze show ID
embed   | `[string]` | Optional string array containing required embeds, see [embed documentation](https://www.tvmaze.com/api#embedding)
options | `Object`   | optional options object, see above

**Example**:

```javascript
show("396", ['episodes']).
     then(response => {
       console.log(response);
     })
     .catch(error => {
       console.log(error);
     })
```

**API Call example:** <http://api.tvmaze.com/shows/396?embed=episodes>

<https://www.tvmaze.com/api#show-main-information><br>
<https://www.tvmaze.com/api#embedding>

### episodes(showid, [specials], [options]) ⇒ `Promise`

Get a complete list of episodes in airing order

Param    | Type      | Description
-------- | --------- | -------------------------------------------------
showid   | `number`  | TVmaze show ID
specials | `boolean` | Optional include special episodes, defaults false
options  | `Object`  | optional options object, see above

**Example**:

```javascript
episodes(396, true).
     then(response => {
       console.log(response);
     })
     .catch(error => {
       console.log(error);
     })
```

**API Call example:** <http://api.tvmaze.com/shows/396/episodes?specials=1>

<https://www.tvmaze.com/api#show-episode-list>

### episode(showid, season, episode, [options]) ⇒ `Promise`

Get information for a single episode of a show

Param   | Type     | Description
------- | -------- | ----------------------------------
showid  | `number` | TVmaze show ID
season  | `number` | season number
episode | `number` | episode number
options | `Object` | optional options object, see above

**Example**:

```javascript
episode(396, 1, 1).
     then(response => {
       console.log(response);
     })
     .catch(error => {
       console.log(error);
     })
```

**API Call example:** <http://api.tvmaze.com/shows/396/episodebynumber?season=1&number=1>

<https://www.tvmaze.com/api#episode-by-number>

### episodesByDate(showid, date, [options]) ⇒ `Promise`

Get episodes aired on a date

Param   | Type     | Description
------- | -------- | -----------------------------------------------------------------------
showid  | `number` | TVmaze show ID
date    | `string` | [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Dates) formatted date
options | `Object` | optional options object, see above

**Example**:

```javascript
episodesByDate(321, "2019-03-15").
     then(response => {
       console.log(response);
     })
     .catch(error => {
       console.log(error);
     })
```

**API Call example:** <http://api.tvmaze.com/shows/321/episodesbydate?date=2019-03-15>

<https://www.tvmaze.com/api#episodes-by-date>

### seasons(showid, [options]) ⇒ `Promise`

Get season list information

Param   | Type     | Description
------- | -------- | ----------------------------------
showid  | `number` | TVmaze show ID
options | `Object` | optional options object, see above

**Example**:

```javascript
seasons(321).
     then(response => {
       console.log(response);
     })
     .catch(error => {
       console.log(error);
     })
```

**API Call example:** <http://api.tvmaze.com/shows/321/seasons>

<https://www.tvmaze.com/api#show-seasons>

### seasonEpisodes(seasonid, [options]) ⇒ `Promise`

Get all episodes for a season

Param    | Type     | Description
-------- | -------- | ----------------------------------
seasonid | `number` | TVmaze season ID
options  | `Object` | optional options object, see above

**Example**:

```javascript
seasonEpisodes(1).
     then(response => {
       console.log(response);
     })
     .catch(error => {
       console.log(error);
     })
```

**API Call example:** <http://api.tvmaze.com/seasons/1/episodes>

<https://www.tvmaze.com/api#season-episodes>

### cast(showid, [options]) ⇒ `Promise`

Get cast information

Param   | Type     | Description
------- | -------- | ----------------------------------
showid  | `number` | TVmaze show ID
options | `Object` | optional options object, see above

**Example**:

```javascript
cast(174).
     then(response => {
       console.log(response);
     })
     .catch(error => {
       console.log(error);
     })
```

**API Call example:** <http://api.tvmaze.com/shows/174/cast>

<https://www.tvmaze.com/api#show-cast>

### crew(showid, [options]) ⇒ `Promise`

Get crew information

Param   | Type     | Description
------- | -------- | ----------------------------------
showid  | `number` | TVmaze show ID
options | `Object` | optional options object, see above

**Example**:

```javascript
crew(49).
     then(response => {
       console.log(response);
     })
     .catch(error => {
       console.log(error);
     })
```

**API Call example:** <http://api.tvmaze.com/shows/49/crew>

<https://www.tvmaze.com/api#show-crew>

### aliases(showid, [options]) ⇒ `Promise`

Get all show aliases

Param   | Type     | Description
------- | -------- | ----------------------------------
showid  | `number` | TVmaze show ID
options | `Object` | optional options object, see above

**Example**:

```javascript
aliases(49).
     then(response => {
       console.log(response);
     })
     .catch(error => {
       console.log(error);
     })
```

**API Call example:** <http://api.tvmaze.com/shows/49/akas>

<https://www.tvmaze.com/api#show-aka>

### showsIndex(page, [options]) ⇒ `Promise`

Get the full list of shows and details on TVmaze (250 results per page, in ID order)

Param   | Type     | Description
------- | -------- | ----------------------------------
page    | `number` | Page number
options | `Object` | optional options object, see above

**Example**:

```javascript
showsIndex(1).
     then(response => {
       console.log(response);
     })
     .catch(error => {
       console.log(error);
     })
```

**API Call example:** <http://api.tvmaze.com/shows?page=1>

<https://www.tvmaze.com/api#show-index>

### showUpdates([options]) ⇒ `Promise`

Get the full list of show IDs and last updated timestamp (ID order)

Param   | Type     | Description
------- | -------- | ----------------------------------
options | `Object` | optional options object, see above

**Example**:

```javascript
showUpdates().
     then(response => {
       console.log(response);
     })
     .catch(error => {
       console.log(error);
     })
```

**API Call example:** <http://api.tvmaze.com/updates/shows>

<https://www.tvmaze.com/api#show-updates>

## People

### person(personid, [embed], [options]) ⇒ `Promise`

Get all information for a person, Supports embed

Param    | Type       | Description
-------- | ---------- | -----------------------------------------------------------------------------------------------------------------
personid | `number`   | TVmaze person ID
embed    | `[string]` | Optional string array containing required embeds, see [embed documentation](https://www.tvmaze.com/api#embedding)
options  | `Object`   | optional options object, see above

**Example**:

```javascript
person(37135, ['castcredits']).
     then(response => {
       console.log(response);
     })
     .catch(error => {
       console.log(error);
     })
```

**API Call example:** <http://api.tvmaze.com/people/37135?embed=castcredits>

<https://www.tvmaze.com/api#person-main-information><br>
<https://www.tvmaze.com/api#embedding>

### personCastCredits(personid, [embed], [options]) ⇒ `Promise`

Get cast credits for a person, supports embedding

Param    | Type       | Description
-------- | ---------- | -----------------------------------------------------------------------------------------------------------------
personid | `number`   | TVmaze person ID
embed    | `[string]` | Optional string array containing required embeds, see [embed documentation](https://www.tvmaze.com/api#embedding)
options  | `Object`   | optional options object, see above

**Example**:

```javascript
personCastCredits(37135, ['show']).
     then(response => {
       console.log(response);
     })
     .catch(error => {
       console.log(error);
     })
```

**API Call example:** <http://api.tvmaze.com/people/37135/castcredits?embed=show>

<https://www.tvmaze.com/api#person-cast-credits><br>
<https://www.tvmaze.com/api#embedding>

### personCrewCredits(personid, [embed], [options]) ⇒ `Promise`

Get crew credits for a person, supports embedding

Param    | Type       | Description
-------- | ---------- | -----------------------------------------------------------------------------------------------------------------
personid | `number`   | TVmaze person ID
embed    | `[string]` | Optional string array containing required embeds, see [embed documentation](https://www.tvmaze.com/api#embedding)
options  | `Object`   | optional options object, see above

**Example**:

```javascript
personCrewCredits(100, ['show']).
     then(response => {
       console.log(response);
     })
     .catch(error => {
       console.log(error);
     })
```

**API Call example:** <http://api.tvmaze.com/people/37135/crewcredits?embed=show>

<https://www.tvmaze.com/api#person-crew-credits><br>
<https://www.tvmaze.com/api#embedding>

## Other

### lookup(type, id, [options]) ⇒ `Promise`

Lookup a TV show using Tvdb ID, IMDB ID or Tvrage ID

Param   | Type     | Description
------- | -------- | --------------------------------------------
type    | `string` | ID type, values: 'thetvdb', 'imdb', 'tvrage'
id      | `string` | Input ID to search
options | `Object` | optional options object, see above

**Example**:

```javascript
lookup('imdb', "tt2758770").
     then(response => {
       console.log(response);
     })
     .catch(error => {
       console.log(error);
     })
```

**API Call example:** <http://api.tvmaze.com/lookup/shows?imdb=tt2758770>

<https://www.tvmaze.com/api#show-lookup>

### sendRequest(path, options) ⇒ `Promise`

Send API request and return JSON

Param   | Type     | Description
------- | -------- | -------------------------
path    | `string` | API postfix path
options | `Object` | options object, see above

**Example**:

```javascript
sendRequest("people/250/castcredits", {
    query: {
        embed: ['show']
      }
    })
     .then(response => {
       console.log(response);
     })
     .catch(error => {
       console.log(error);
     })
```

**API Call example:** <http://api.tvmaze.com/people/250/crewcredits?embed=show>

--------------------------------------------------------------------------------

© 2019 Tristan 'Kennyist' Cunningham - www.tristanjc.com

[1dc871a5]: https://github.com/request/request "Node Request"
[8f7cf8e7]: https://www.tvmaze.com/api "TVMaze API"
[e6821a9f]: https://www.tvmaze.com/api#rate-limiting "Tv maze rate limiting"
