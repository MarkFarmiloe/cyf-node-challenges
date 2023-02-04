const types = ['pharmacies', 'colleges', 'hospitals', 'doctors'];

const header = 'INSERT INTO locations (area, location_type, name, website, phone, address) VALUES';

console.log(header);

const dupQuotes = s => s ? s.replace(/'/g, "''") : "";

const harrow = require('./Harrow.json');
const heathrow = require('./Heathrow.json');
const stratford = require('./Stratford.json');

types.forEach(t => {
    harrow[t].forEach(({area, location_type, name, website, phone, address}) => {
        console.log(`('Harrow', '${t}', '${dupQuotes(name)}', '${dupQuotes(website)}', '${dupQuotes(phone)}', '${dupQuotes(address)}'),`);
    });
    heathrow[t].forEach(({area, location_type, name, website, phone, address}) => {
        console.log(`('Heathrow', '${t}', '${dupQuotes(name)}', '${dupQuotes(website)}', '${dupQuotes(phone)}', '${dupQuotes(address)}'),`);
    });
    stratford[t].forEach(({area, location_type, name, website, phone, address}) => {
        console.log(`('Stratford', '${t}', '${dupQuotes(name)}', '${dupQuotes(website)}', '${dupQuotes(phone)}', '${dupQuotes(address)}'),`);
    });
});

