import { convertFhirBundleToCda } from "@metriport/core/fhir-to-cda/fhir-to-cda";
import { FhirToCdaConverter, FhirToCdaConverterRequest } from "./connector";
import { uploadCdaDocuments } from "@metriport/core/fhir-to-cda/upload";

export class FhirToCdaConverterDirect implements FhirToCdaConverter {
  async requestConvert({
    cxId,
    patientId,
    docId,
    organization,
    bundle,
  }: FhirToCdaConverterRequest): Promise<void> {
    const converted = convertFhirBundleToCda(bundle);
    await uploadCdaDocuments({
      cxId,
      patientId,
      cdaBundles: converted,
      organization,
      docId,
    });
  }
}
