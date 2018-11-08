export type Identity = string | [string, IdentityCategory];

export type IdentityCategory = 'global' | 'individual' | 'organization' | 'network' | 'region';