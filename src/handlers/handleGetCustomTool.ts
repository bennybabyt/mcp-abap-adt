import { McpError, ErrorCode } from '../lib/utils';
import { makeAdtRequest, return_error, return_response, getBaseUrl } from '../lib/utils';

export async function handleGetCustomTool(args: any) {
    try {
        if (!args?.tool) {
            throw new McpError(ErrorCode.InvalidParams, 'Tool is required');
        }
        if (!args?.query) {
            throw new McpError(ErrorCode.InvalidParams, 'Query is required');
        }
        const encodedTool = encodeURIComponent(args.tool);
        const url = `${await getBaseUrl()}/z_mcp_abap_adt/getfrom/${encodedTool}?${args.query}`;
        const response = await makeAdtRequest(url, 'GET', 30000);
                if (response.data) {
            response.data = JSON.stringify(response.data);
         }
        return return_response(response);
    } catch (error) {
        return return_error(error);
    }
}
