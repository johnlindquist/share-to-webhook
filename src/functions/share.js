let Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: process.env.AIRTABLE_API_KEY
});
let base = Airtable.base(process.env.AIRTABLE_BASE);


exports.handler = async (event) => {
    let { share, description } = JSON.parse(event.body)

    let result = await base("funny").create({
        description,
        share
    })

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "LOL"
        })
    }
}