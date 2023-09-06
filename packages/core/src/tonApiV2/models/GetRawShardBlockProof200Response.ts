/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BlockRaw } from './BlockRaw';
import {
    BlockRawFromJSON,
    BlockRawFromJSONTyped,
    BlockRawToJSON,
} from './BlockRaw';
import type { GetRawShardBlockProof200ResponseLinksInner } from './GetRawShardBlockProof200ResponseLinksInner';
import {
    GetRawShardBlockProof200ResponseLinksInnerFromJSON,
    GetRawShardBlockProof200ResponseLinksInnerFromJSONTyped,
    GetRawShardBlockProof200ResponseLinksInnerToJSON,
} from './GetRawShardBlockProof200ResponseLinksInner';

/**
 * 
 * @export
 * @interface GetRawShardBlockProof200Response
 */
export interface GetRawShardBlockProof200Response {
    /**
     * 
     * @type {BlockRaw}
     * @memberof GetRawShardBlockProof200Response
     */
    masterchainId: BlockRaw;
    /**
     * 
     * @type {Array<GetRawShardBlockProof200ResponseLinksInner>}
     * @memberof GetRawShardBlockProof200Response
     */
    links: Array<GetRawShardBlockProof200ResponseLinksInner>;
}

/**
 * Check if a given object implements the GetRawShardBlockProof200Response interface.
 */
export function instanceOfGetRawShardBlockProof200Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "masterchainId" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GetRawShardBlockProof200ResponseFromJSON(json: any): GetRawShardBlockProof200Response {
    return GetRawShardBlockProof200ResponseFromJSONTyped(json, false);
}

export function GetRawShardBlockProof200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetRawShardBlockProof200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'masterchainId': BlockRawFromJSON(json['masterchain_id']),
        'links': ((json['links'] as Array<any>).map(GetRawShardBlockProof200ResponseLinksInnerFromJSON)),
    };
}

export function GetRawShardBlockProof200ResponseToJSON(value?: GetRawShardBlockProof200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'masterchain_id': BlockRawToJSON(value.masterchainId),
        'links': ((value.links as Array<any>).map(GetRawShardBlockProof200ResponseLinksInnerToJSON)),
    };
}

