/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../../../../..";

export interface GetDocumentUrlRequest {
    /**
     * The file name of the document
     */
    fileName: string;
    /**
     * The doc type to convert to. Either `html` or `pdf`.
     * This parameter should only be used for converting XML/CDA files.
     *
     */
    conversionType?: Metriport.medical.ConversionType;
}