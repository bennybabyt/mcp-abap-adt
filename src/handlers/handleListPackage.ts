import { makeAdtRequest, return_error, return_response, getBaseUrl } from '../lib/utils';

export async function handleListPackage(args: any) {
    try {
        const searchTerm = args?.search_term || '*';
        const maxResults = args?.max_results || 100;

        const searchUrl = `${await getBaseUrl()}/sap/bc/adt/repository/informationsystem/search`;
        const params = {
            operation: 'quickSearch',
            query: encodeURIComponent(searchTerm),
            objectType: 'DEVC/K',
            maxResults: maxResults
        };

        const response = await makeAdtRequest(searchUrl, 'GET', 30000, undefined, params);
        return return_response(response);

    } catch (error) {
        return return_error(error);
    }
}
