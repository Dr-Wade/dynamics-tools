import { DynamicsWebApi, type Config } from "dynamics-web-api";
import { ConfidentialClientApplication } from "@azure/msal-node";

export interface CreateClientOptions {
    serverUrl: string;
    tenantId: string;
    clientId: string;
    clientSecret: string;
    apiVersion?: string;
    webApiOverrides?: Partial<Config>;
}

export const createClient = (opts: CreateClientOptions): DynamicsWebApi => {
    const authority = `https://login.microsoftonline.com/${opts.tenantId}`;
    const cca = new ConfidentialClientApplication({
        auth: {
            clientId: opts.clientId,
            clientSecret: opts.clientSecret,
            knownAuthorities: ["login.microsoftonline.com"]
        }
    });
    const onTokenRefresh = async () => {
        const result = await cca.acquireTokenByClientCredential({
            authority,
            scopes: [`${opts.serverUrl}/.default`]
        });
        if (!result?.accessToken) {
            throw new Error("Failed to acquire Dataverse access token");
        }
        return result;
    };
    return new DynamicsWebApi({
        serverUrl: opts.serverUrl,
        dataApi: { version: opts.apiVersion ?? "9.2" },
        onTokenRefresh,
        ...opts.webApiOverrides
    });
};
