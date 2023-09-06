/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: contact@fslabs.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AccountAddress } from './AccountAddress';
import {
    AccountAddressFromJSON,
    AccountAddressFromJSONTyped,
    AccountAddressToJSON,
} from './AccountAddress';
import type { Refund } from './Refund';
import {
    RefundFromJSON,
    RefundFromJSONTyped,
    RefundToJSON,
} from './Refund';

/**
 * 
 * @export
 * @interface TonTransferAction
 */
export interface TonTransferAction {
    /**
     * amount in nanotons
     * @type {number}
     * @memberof TonTransferAction
     */
    amount: number;
    /**
     * 
     * @type {string}
     * @memberof TonTransferAction
     */
    comment?: string;
    /**
     * raw hex encoded payload
     * @type {string}
     * @memberof TonTransferAction
     */
    payload?: string;
    /**
     * 
     * @type {AccountAddress}
     * @memberof TonTransferAction
     */
    recipient: AccountAddress;
    /**
     * 
     * @type {Refund}
     * @memberof TonTransferAction
     */
    refund?: Refund;
    /**
     * 
     * @type {AccountAddress}
     * @memberof TonTransferAction
     */
    sender: AccountAddress;
}

/**
 * Check if a given object implements the TonTransferAction interface.
 */
export function instanceOfTonTransferAction(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "recipient" in value;
    isInstance = isInstance && "sender" in value;

    return isInstance;
}

export function TonTransferActionFromJSON(json: any): TonTransferAction {
    return TonTransferActionFromJSONTyped(json, false);
}

export function TonTransferActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): TonTransferAction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': json['amount'],
        'comment': !exists(json, 'comment') ? undefined : json['comment'],
        'payload': !exists(json, 'payload') ? undefined : json['payload'],
        'recipient': AccountAddressFromJSON(json['recipient']),
        'refund': !exists(json, 'refund') ? undefined : RefundFromJSON(json['refund']),
        'sender': AccountAddressFromJSON(json['sender']),
    };
}

export function TonTransferActionToJSON(value?: TonTransferAction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'comment': value.comment,
        'payload': value.payload,
        'recipient': AccountAddressToJSON(value.recipient),
        'refund': RefundToJSON(value.refund),
        'sender': AccountAddressToJSON(value.sender),
    };
}

