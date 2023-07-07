type resultType = {
    busId: number,
    from: string,
    to: string,
    day: number,
}

export type resultsType = resultType[]


// busIds range is from 1 to 10
/*
from and to is in ['Alameda', 'Alhambra', 'Anaheim', 'Antioch', 'Arcadia', 'Bakersfield', 'Barstow', 'Belmont', 'Berkeley',
    'Beverly Hills', 'Brea', 'Buena Park', 'Burbank', 'Calexico', 'Calistoga', 'Carlsbad', 'Carmel', 'Chico',
    'Chula Vista', 'Claremont', 'Compton', 'Concord', 'Corona', 'Coronado', 'Costa Mesa', 'Culver City', 'Daly City']
*/
// day is from 1 to 30
// the number of results is 100
export const results: resultType[] = [
    {
        "busId": 7,
        "from": "Claremont",
        "to": "Calistoga",
        "day": 11
    },
    {
        "busId": 8,
        "from": "Compton",
        "to": "Barstow",
        "day": 26
    },
    {
        "busId": 3,
        "from": "Corona",
        "to": "Brea",
        "day": 11
    },
    {
        "busId": 8,
        "from": "Compton",
        "to": "Antioch",
        "day": 8
    },
    {
        "busId": 8,
        "from": "Anaheim",
        "to": "Concord",
        "day": 21
    },
    {
        "busId": 2,
        "from": "Coronado",
        "to": "Buena Park",
        "day": 30
    },
    {
        "busId": 6,
        "from": "Alhambra",
        "to": "Compton",
        "day": 1
    },
    {
        "busId": 10,
        "from": "Concord",
        "to": "Buena Park",
        "day": 25
    },
    {
        "busId": 1,
        "from": "Daly City",
        "to": "Daly City",
        "day": 10
    },
    {
        "busId": 3,
        "from": "Buena Park",
        "to": "Corona",
        "day": 20
    },
    {
        "busId": 9,
        "from": "Anaheim",
        "to": "Arcadia",
        "day": 19
    },
    {
        "busId": 7,
        "from": "Compton",
        "to": "Berkeley",
        "day": 7
    },
    {
        "busId": 2,
        "from": "Antioch",
        "to": "Costa Mesa",
        "day": 28
    },
    {
        "busId": 2,
        "from": "Culver City",
        "to": "Berkeley",
        "day": 26
    },
    {
        "busId": 5,
        "from": "Alhambra",
        "to": "Claremont",
        "day": 28
    },
    {
        "busId": 7,
        "from": "Buena Park",
        "to": "Belmont",
        "day": 15
    },
    {
        "busId": 3,
        "from": "Calexico",
        "to": "Carmel",
        "day": 4
    },
    {
        "busId": 2,
        "from": "Belmont",
        "to": "Antioch",
        "day": 2
    },
    {
        "busId": 6,
        "from": "Concord",
        "to": "Beverly Hills",
        "day": 4
    },
    {
        "busId": 6,
        "from": "Chico",
        "to": "Culver City",
        "day": 12
    },
    {
        "busId": 2,
        "from": "Beverly Hills",
        "to": "Antioch",
        "day": 14
    },
    {
        "busId": 8,
        "from": "Calexico",
        "to": "Corona",
        "day": 28
    },
    {
        "busId": 9,
        "from": "Belmont",
        "to": "Compton",
        "day": 16
    },
    {
        "busId": 2,
        "from": "Calistoga",
        "to": "Compton",
        "day": 24
    },
    {
        "busId": 10,
        "from": "Costa Mesa",
        "to": "Burbank",
        "day": 9
    },
    {
        "busId": 1,
        "from": "Costa Mesa",
        "to": "Barstow",
        "day": 9
    },
    {
        "busId": 8,
        "from": "Alameda",
        "to": "Buena Park",
        "day": 8
    },
    {
        "busId": 8,
        "from": "Brea",
        "to": "Chula Vista",
        "day": 17
    },
    {
        "busId": 8,
        "from": "Anaheim",
        "to": "Anaheim",
        "day": 1
    },
    {
        "busId": 5,
        "from": "Beverly Hills",
        "to": "Barstow",
        "day": 26
    },
    {
        "busId": 9,
        "from": "Barstow",
        "to": "Berkeley",
        "day": 8
    },
    {
        "busId": 2,
        "from": "Alameda",
        "to": "Carlsbad",
        "day": 23
    },
    {
        "busId": 7,
        "from": "Coronado",
        "to": "Arcadia",
        "day": 3
    },
    {
        "busId": 8,
        "from": "Concord",
        "to": "Daly City",
        "day": 3
    },
    {
        "busId": 1,
        "from": "Anaheim",
        "to": "Arcadia",
        "day": 15
    },
    {
        "busId": 3,
        "from": "Alameda",
        "to": "Arcadia",
        "day": 26
    },
    {
        "busId": 7,
        "from": "Calexico",
        "to": "Barstow",
        "day": 27
    },
    {
        "busId": 9,
        "from": "Calistoga",
        "to": "Calistoga",
        "day": 26
    },
    {
        "busId": 10,
        "from": "Burbank",
        "to": "Chula Vista",
        "day": 7
    },
    {
        "busId": 1,
        "from": "Claremont",
        "to": "Antioch",
        "day": 30
    },
    {
        "busId": 5,
        "from": "Corona",
        "to": "Barstow",
        "day": 13
    },
    {
        "busId": 4,
        "from": "Burbank",
        "to": "Barstow",
        "day": 27
    },
    {
        "busId": 3,
        "from": "Concord",
        "to": "Alhambra",
        "day": 10
    },
    {
        "busId": 9,
        "from": "Compton",
        "to": "Bakersfield",
        "day": 28
    },
    {
        "busId": 4,
        "from": "Brea",
        "to": "Culver City",
        "day": 23
    },
    {
        "busId": 9,
        "from": "Barstow",
        "to": "Alameda",
        "day": 1
    },
    {
        "busId": 9,
        "from": "Daly City",
        "to": "Costa Mesa",
        "day": 20
    },
    {
        "busId": 9,
        "from": "Anaheim",
        "to": "Barstow",
        "day": 6
    },
    {
        "busId": 8,
        "from": "Daly City",
        "to": "Berkeley",
        "day": 30
    },
    {
        "busId": 5,
        "from": "Alameda",
        "to": "Chula Vista",
        "day": 10
    },
    {
        "busId": 8,
        "from": "Calistoga",
        "to": "Daly City",
        "day": 22
    },
    {
        "busId": 8,
        "from": "Berkeley",
        "to": "Claremont",
        "day": 17
    },
    {
        "busId": 1,
        "from": "Culver City",
        "to": "Claremont",
        "day": 12
    },
    {
        "busId": 7,
        "from": "Alhambra",
        "to": "Anaheim",
        "day": 17
    },
    {
        "busId": 5,
        "from": "Carmel",
        "to": "Coronado",
        "day": 17
    },
    {
        "busId": 1,
        "from": "Alhambra",
        "to": "Alhambra",
        "day": 28
    },
    {
        "busId": 6,
        "from": "Corona",
        "to": "Arcadia",
        "day": 1
    },
    {
        "busId": 1,
        "from": "Chula Vista",
        "to": "Alhambra",
        "day": 21
    },
    {
        "busId": 10,
        "from": "Bakersfield",
        "to": "Corona",
        "day": 4
    },
    {
        "busId": 7,
        "from": "Brea",
        "to": "Coronado",
        "day": 27
    },
    {
        "busId": 1,
        "from": "Bakersfield",
        "to": "Coronado",
        "day": 5
    },
    {
        "busId": 4,
        "from": "Alhambra",
        "to": "Bakersfield",
        "day": 22
    },
    {
        "busId": 1,
        "from": "Berkeley",
        "to": "Daly City",
        "day": 6
    },
    {
        "busId": 3,
        "from": "Claremont",
        "to": "Daly City",
        "day": 4
    },
    {
        "busId": 3,
        "from": "Culver City",
        "to": "Anaheim",
        "day": 19
    },
    {
        "busId": 4,
        "from": "Barstow",
        "to": "Claremont",
        "day": 9
    },
    {
        "busId": 1,
        "from": "Belmont",
        "to": "Barstow",
        "day": 18
    },
    {
        "busId": 8,
        "from": "Alameda",
        "to": "Brea",
        "day": 28
    },
    {
        "busId": 9,
        "from": "Costa Mesa",
        "to": "Chico",
        "day": 23
    },
    {
        "busId": 10,
        "from": "Anaheim",
        "to": "Barstow",
        "day": 28
    },
    {
        "busId": 10,
        "from": "Carlsbad",
        "to": "Costa Mesa",
        "day": 20
    },
    {
        "busId": 1,
        "from": "Alhambra",
        "to": "Alameda",
        "day": 16
    },
    {
        "busId": 5,
        "from": "Arcadia",
        "to": "Daly City",
        "day": 23
    },
    {
        "busId": 9,
        "from": "Berkeley",
        "to": "Anaheim",
        "day": 19
    },
    {
        "busId": 3,
        "from": "Claremont",
        "to": "Coronado",
        "day": 22
    },
    {
        "busId": 8,
        "from": "Alameda",
        "to": "Coronado",
        "day": 20
    },
    {
        "busId": 1,
        "from": "Belmont",
        "to": "Antioch",
        "day": 6
    },
    {
        "busId": 8,
        "from": "Claremont",
        "to": "Anaheim",
        "day": 16
    },
    {
        "busId": 9,
        "from": "Anaheim",
        "to": "Costa Mesa",
        "day": 29
    },
    {
        "busId": 2,
        "from": "Calexico",
        "to": "Chico",
        "day": 2
    },
    {
        "busId": 6,
        "from": "Anaheim",
        "to": "Carlsbad",
        "day": 29
    },
    {
        "busId": 9,
        "from": "Antioch",
        "to": "Alameda",
        "day": 4
    },
    {
        "busId": 1,
        "from": "Calexico",
        "to": "Compton",
        "day": 16
    },
    {
        "busId": 4,
        "from": "Coronado",
        "to": "Belmont",
        "day": 7
    },
    {
        "busId": 3,
        "from": "Carmel",
        "to": "Alameda",
        "day": 16
    },
    {
        "busId": 3,
        "from": "Concord",
        "to": "Corona",
        "day": 22
    },
    {
        "busId": 6,
        "from": "Bakersfield",
        "to": "Burbank",
        "day": 19
    },
    {
        "busId": 6,
        "from": "Belmont",
        "to": "Daly City",
        "day": 27
    },
    {
        "busId": 2,
        "from": "Compton",
        "to": "Alameda",
        "day": 28
    },
    {
        "busId": 1,
        "from": "Arcadia",
        "to": "Carlsbad",
        "day": 19
    },
    {
        "busId": 4,
        "from": "Anaheim",
        "to": "Carmel",
        "day": 17
    },
    {
        "busId": 5,
        "from": "Bakersfield",
        "to": "Anaheim",
        "day": 28
    },
    {
        "busId": 9,
        "from": "Arcadia",
        "to": "Coronado",
        "day": 29
    },
    {
        "busId": 1,
        "from": "Calexico",
        "to": "Compton",
        "day": 3
    },
    {
        "busId": 1,
        "from": "Claremont",
        "to": "Compton",
        "day": 23
    },
    {
        "busId": 1,
        "from": "Anaheim",
        "to": "Chico",
        "day": 25
    },
    {
        "busId": 10,
        "from": "Concord",
        "to": "Culver City",
        "day": 3
    },
    {
        "busId": 8,
        "from": "Calexico",
        "to": "Coronado",
        "day": 18
    },
    {
        "busId": 6,
        "from": "Corona",
        "to": "Alhambra",
        "day": 27
    },
    {
        "busId": 10,
        "from": "Alhambra",
        "to": "Culver City",
        "day": 17
    }
]