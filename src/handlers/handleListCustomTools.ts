import { makeAdtRequest, return_error, return_response, getBaseUrl } from '../lib/utils';

export async function handleListCustomTools() {
    try {
        const url = `${await getBaseUrl()}/z_mcp_abap_adt/listCustomTools`;
        const response = await makeAdtRequest(url, 'GET', 30000);
        if (response.data) {
            response.data = JSON.stringify(response.data);
         }
        
        return return_response(response);
    } catch (error) {
        return return_error(error);
    }
}
