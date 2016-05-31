export default (name, delay, opts = {}) => {
    /**
     * TEST 1: Make URL fetches
     */

    // return fetch(`/seo-experiment-3/ajax/${name}/${delay}`, Object.assign({}, opts, {
    //     headers: new Headers({
    //         Accept: 'application/vnd.org.internations.mobile.v1+json'
    //     })
    // }))
    //     .then(resp => resp.json())
    //     .then(({ content }) => content);

   /**
    * TEST 2: Draw data out of the document body
    */

    const thennable = (res) => {
        return {
            then: (cb) =>
                setTimeout(() => cb(res), delay*1000)
        };
    };

    const loadJSONFromBody = (selector) => {
        const container = document.querySelector(selector);
        if (!container) {
            throw new Error(`Container ${selector} not found`);
        }

        const containerText = container.textContent;
        if (!containerText) {
            throw new Error('Container text empty');
        }

        // return new Promise((resolve, reject) =>
        //     setTimeout(() => resolve(JSON.parse(containerText)), delay)
        // );
        
        return thennable(JSON.parse(containerText));
    }

    return loadJSONFromBody(`#${name}-${delay}`);
}
