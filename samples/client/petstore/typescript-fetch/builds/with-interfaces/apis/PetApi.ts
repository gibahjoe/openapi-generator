/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    ModelApiResponse,
    ModelApiResponseFromJSON,
    ModelApiResponseToJSON,
    Pet,
    PetFromJSON,
    PetToJSON,
} from '../models';

export interface AddPetRequest {
    body: Pet;
}

export interface DeletePetRequest {
    petId: number;
    apiKey?: string;
}

export interface FindPetsByStatusRequest {
    status: Array<FindPetsByStatusStatusEnum>;
}

export interface FindPetsByTagsRequest {
    tags: Array<string>;
}

export interface GetPetByIdRequest {
    petId: number;
}

export interface UpdatePetRequest {
    body: Pet;
}

export interface UpdatePetWithFormRequest {
    petId: number;
    name?: string;
    status?: string;
}

export interface UploadFileRequest {
    petId: number;
    additionalMetadata?: string;
    file?: Blob;
}

/**
 * PetApi - interface
 * @export
 * @interface PetApiInterface
 */
export interface PetApiInterface {
    /**
     * 
     * @summary Add a new pet to the store
     * @param {Pet} body Pet object that needs to be added to the store
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PetApiInterface
     */
    addPetRaw(requestParameters: AddPetRequest): Promise<runtime.ApiResponse<void>>;

    /**
     * Add a new pet to the store
     */
    addPet(requestParameters: AddPetRequest): Promise<void>;

    /**
     * 
     * @summary Deletes a pet
     * @param {number} petId Pet id to delete
     * @param {string} [apiKey] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PetApiInterface
     */
    deletePetRaw(requestParameters: DeletePetRequest): Promise<runtime.ApiResponse<void>>;

    /**
     * Deletes a pet
     */
    deletePet(requestParameters: DeletePetRequest): Promise<void>;

    /**
     * Multiple status values can be provided with comma separated strings
     * @summary Finds Pets by status
     * @param {Array<'available' | 'pending' | 'sold'>} status Status values that need to be considered for filter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PetApiInterface
     */
    findPetsByStatusRaw(requestParameters: FindPetsByStatusRequest): Promise<runtime.ApiResponse<Array<Pet>>>;

    /**
     * Multiple status values can be provided with comma separated strings
     * Finds Pets by status
     */
    findPetsByStatus(requestParameters: FindPetsByStatusRequest): Promise<Array<Pet>>;

    /**
     * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * @summary Finds Pets by tags
     * @param {Array<string>} tags Tags to filter by
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PetApiInterface
     */
    findPetsByTagsRaw(requestParameters: FindPetsByTagsRequest): Promise<runtime.ApiResponse<Array<Pet>>>;

    /**
     * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * Finds Pets by tags
     */
    findPetsByTags(requestParameters: FindPetsByTagsRequest): Promise<Array<Pet>>;

    /**
     * Returns a single pet
     * @summary Find pet by ID
     * @param {number} petId ID of pet to return
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PetApiInterface
     */
    getPetByIdRaw(requestParameters: GetPetByIdRequest): Promise<runtime.ApiResponse<Pet>>;

    /**
     * Returns a single pet
     * Find pet by ID
     */
    getPetById(requestParameters: GetPetByIdRequest): Promise<Pet>;

    /**
     * 
     * @summary Update an existing pet
     * @param {Pet} body Pet object that needs to be added to the store
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PetApiInterface
     */
    updatePetRaw(requestParameters: UpdatePetRequest): Promise<runtime.ApiResponse<void>>;

    /**
     * Update an existing pet
     */
    updatePet(requestParameters: UpdatePetRequest): Promise<void>;

    /**
     * 
     * @summary Updates a pet in the store with form data
     * @param {number} petId ID of pet that needs to be updated
     * @param {string} [name] Updated name of the pet
     * @param {string} [status] Updated status of the pet
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PetApiInterface
     */
    updatePetWithFormRaw(requestParameters: UpdatePetWithFormRequest): Promise<runtime.ApiResponse<void>>;

    /**
     * Updates a pet in the store with form data
     */
    updatePetWithForm(requestParameters: UpdatePetWithFormRequest): Promise<void>;

    /**
     * 
     * @summary uploads an image
     * @param {number} petId ID of pet to update
     * @param {string} [additionalMetadata] Additional data to pass to server
     * @param {Blob} [file] file to upload
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PetApiInterface
     */
    uploadFileRaw(requestParameters: UploadFileRequest): Promise<runtime.ApiResponse<ModelApiResponse>>;

    /**
     * uploads an image
     */
    uploadFile(requestParameters: UploadFileRequest): Promise<ModelApiResponse>;

}

/**
 * no description
 */
export class PetApi extends runtime.BaseAPI implements PetApiInterface {

    /**
     * Add a new pet to the store
     */
    async addPetRaw(requestParameters: AddPetRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling addPet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("petstore_auth", ["write:pets", "read:pets"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/pet`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PetToJSON(requestParameters.body),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Add a new pet to the store
     */
    async addPet(requestParameters: AddPetRequest): Promise<void> {
        await this.addPetRaw(requestParameters);
    }

    /**
     * Deletes a pet
     */
    async deletePetRaw(requestParameters: DeletePetRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.petId === null || requestParameters.petId === undefined) {
            throw new runtime.RequiredError('petId','Required parameter requestParameters.petId was null or undefined when calling deletePet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.apiKey !== undefined && requestParameters.apiKey !== null) {
            headerParameters['api_key'] = String(requestParameters.apiKey);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("petstore_auth", ["write:pets", "read:pets"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/pet/{petId}`.replace(`{${"petId"}}`, encodeURIComponent(String(requestParameters.petId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a pet
     */
    async deletePet(requestParameters: DeletePetRequest): Promise<void> {
        await this.deletePetRaw(requestParameters);
    }

    /**
     * Multiple status values can be provided with comma separated strings
     * Finds Pets by status
     */
    async findPetsByStatusRaw(requestParameters: FindPetsByStatusRequest): Promise<runtime.ApiResponse<Array<Pet>>> {
        if (requestParameters.status === null || requestParameters.status === undefined) {
            throw new runtime.RequiredError('status','Required parameter requestParameters.status was null or undefined when calling findPetsByStatus.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.status) {
            queryParameters['status'] = requestParameters.status.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("petstore_auth", ["write:pets", "read:pets"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/pet/findByStatus`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PetFromJSON));
    }

    /**
     * Multiple status values can be provided with comma separated strings
     * Finds Pets by status
     */
    async findPetsByStatus(requestParameters: FindPetsByStatusRequest): Promise<Array<Pet>> {
        const response = await this.findPetsByStatusRaw(requestParameters);
        return await response.value();
    }

    /**
     * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * Finds Pets by tags
     */
    async findPetsByTagsRaw(requestParameters: FindPetsByTagsRequest): Promise<runtime.ApiResponse<Array<Pet>>> {
        if (requestParameters.tags === null || requestParameters.tags === undefined) {
            throw new runtime.RequiredError('tags','Required parameter requestParameters.tags was null or undefined when calling findPetsByTags.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.tags) {
            queryParameters['tags'] = requestParameters.tags.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("petstore_auth", ["write:pets", "read:pets"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/pet/findByTags`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PetFromJSON));
    }

    /**
     * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * Finds Pets by tags
     */
    async findPetsByTags(requestParameters: FindPetsByTagsRequest): Promise<Array<Pet>> {
        const response = await this.findPetsByTagsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a single pet
     * Find pet by ID
     */
    async getPetByIdRaw(requestParameters: GetPetByIdRequest): Promise<runtime.ApiResponse<Pet>> {
        if (requestParameters.petId === null || requestParameters.petId === undefined) {
            throw new runtime.RequiredError('petId','Required parameter requestParameters.petId was null or undefined when calling getPetById.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["api_key"] = this.configuration.apiKey("api_key"); // api_key authentication
        }

        const response = await this.request({
            path: `/pet/{petId}`.replace(`{${"petId"}}`, encodeURIComponent(String(requestParameters.petId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PetFromJSON(jsonValue));
    }

    /**
     * Returns a single pet
     * Find pet by ID
     */
    async getPetById(requestParameters: GetPetByIdRequest): Promise<Pet> {
        const response = await this.getPetByIdRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update an existing pet
     */
    async updatePetRaw(requestParameters: UpdatePetRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updatePet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("petstore_auth", ["write:pets", "read:pets"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/pet`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: PetToJSON(requestParameters.body),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Update an existing pet
     */
    async updatePet(requestParameters: UpdatePetRequest): Promise<void> {
        await this.updatePetRaw(requestParameters);
    }

    /**
     * Updates a pet in the store with form data
     */
    async updatePetWithFormRaw(requestParameters: UpdatePetWithFormRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.petId === null || requestParameters.petId === undefined) {
            throw new runtime.RequiredError('petId','Required parameter requestParameters.petId was null or undefined when calling updatePetWithForm.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("petstore_auth", ["write:pets", "read:pets"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const consumes: runtime.Consume[] = [
            { contentType: 'application/x-www-form-urlencoded' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.name !== undefined) {
            formParams.append('name', requestParameters.name as any);
        }

        if (requestParameters.status !== undefined) {
            formParams.append('status', requestParameters.status as any);
        }

        const response = await this.request({
            path: `/pet/{petId}`.replace(`{${"petId"}}`, encodeURIComponent(String(requestParameters.petId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates a pet in the store with form data
     */
    async updatePetWithForm(requestParameters: UpdatePetWithFormRequest): Promise<void> {
        await this.updatePetWithFormRaw(requestParameters);
    }

    /**
     * uploads an image
     */
    async uploadFileRaw(requestParameters: UploadFileRequest): Promise<runtime.ApiResponse<ModelApiResponse>> {
        if (requestParameters.petId === null || requestParameters.petId === undefined) {
            throw new runtime.RequiredError('petId','Required parameter requestParameters.petId was null or undefined when calling uploadFile.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("petstore_auth", ["write:pets", "read:pets"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.additionalMetadata !== undefined) {
            formParams.append('additionalMetadata', requestParameters.additionalMetadata as any);
        }

        if (requestParameters.file !== undefined) {
            formParams.append('file', requestParameters.file as any);
        }

        const response = await this.request({
            path: `/pet/{petId}/uploadImage`.replace(`{${"petId"}}`, encodeURIComponent(String(requestParameters.petId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelApiResponseFromJSON(jsonValue));
    }

    /**
     * uploads an image
     */
    async uploadFile(requestParameters: UploadFileRequest): Promise<ModelApiResponse> {
        const response = await this.uploadFileRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum FindPetsByStatusStatusEnum {
    Available = 'available',
    Pending = 'pending',
    Sold = 'sold'
}
