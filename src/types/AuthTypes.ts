import { Session, User as SupabaseUser } from "@supabase/supabase-js"

interface User {
  id: string,
  aud: string, // 'authenticated'
  role: string, // 'authenticated'
  email: string,
  email_confirmed_at: string, // 2024-03-23T15:19:48.047904072Z
  last_sign_in_at: string,
  updated_at: string,
  phone: string,
  app_metadata: AppMetadata,
  user_metadata: UserMetadata,
  identities: Identity[]
}

type UserMetadata = {
  username: string
}

type AppMetadata = {
  provider: string, // 'email'
  providers: string[], // ['email']
}

type Identity = {
  created_at: string,
  email: string,
  id: string, // uuid like '123df-34dffghe4-dsffhg3246h'
  identity_data: {
    email: string,
    email_verified: boolean,
    phone_verified: boolean,
    sub: string // uuid again
  },
  identity_id: string, // different from the id
  last_signed_in_at: string,
  provider: string,
  updated_at: string,
  user_id: string // uuid, same is 'id' key

}

export interface AuthState {
  session: Session|null,
  user: SupabaseUser|null,
  loading: boolean,
  login: (session: Session, user: SupabaseUser) => void,
  logout: () => void
}