import type Address from "./Address";
import type LanguageRef from "./LanguageRef";
export declare enum SharingType {
    Broadcast = "broadcast",
    Permissionless = "permissionless",
    Permissioned = "permissioned",
    Holochain = "holochain",
    HolochainChannel = "holochainChannel"
}
export declare function sharingTypeFromString(str: string): SharingType;
export default class SharedPerspective {
    name: string;
    description: string;
    type: SharingType;
    linkLanguages: LanguageRef[];
    allowedExpressionLanguages: Address[];
    requiredExpressionLanguages: Address[];
    constructor(name: string, description: string, type: SharingType);
}
