import axios from 'axios';
import get from 'lodash/get';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getSearchResults() {
        try {
            const response = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);

            this.results = response.data.recipes;
        } catch (error) {
            console.log(error.response);
            const myError = new Error(get(error, 'response.data.error', 'Oops! There was an error. Sorry :C'));
            myError.number = get(error, 'response.status', -1);
            throw myError;
        }
    }
}