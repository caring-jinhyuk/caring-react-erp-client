/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type S3Signature = {
    'Content-Type'?: string;
    Host?: string;
    Policy?: string;
    'X-Amz-Algorithm'?: string;
    'X-Amz-Credential'?: string;
    'X-Amz-Date'?: string;
    'X-Amz-Signature'?: string;
    acl?: string;
    key?: string;
    'x-amz-meta-uuid'?: string;
};
