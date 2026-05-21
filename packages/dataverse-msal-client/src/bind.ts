const GUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export const bindRef = (entitySet: string, id: string): string => {
    const cleaned = id.replace(/[{}]/g, "");
    if (!GUID_RE.test(cleaned)) {
        throw new Error(`bindRef: '${id}' is not a valid GUID`);
    }
    return `/${entitySet}(${cleaned})`;
};

export const bindKey = <K extends string>(navProperty: K): `${K}@odata.bind` =>
    `${navProperty}@odata.bind` as const;
