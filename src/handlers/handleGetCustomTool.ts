import { McpError, ErrorCode } from '../lib/utils';
import { makeAdtRequest, return_error, return_response, getBaseUrl } from '../lib/utils';

export async function handleGetCustomTool(args: any) {
    try {
        if (!args?.name) {
            throw new McpError(ErrorCode.InvalidParams, 'Name is required');
        }
        const encodedName = encodeURIComponent(args.name);
        const queryString = args.arguments ? new URLSearchParams(args.arguments).toString() : '';
        const url = `${await getBaseUrl()}/z_mcp_abap_adt/getfrom/${encodedName}?${queryString}`;
        const response = await makeAdtRequest(url, 'GET', 30000);
                if (response.data) {
            response.data = JSON.stringify(response.data);
         }
        return return_response(response);
    } catch (error) {
        return return_error(error);
    }
}
