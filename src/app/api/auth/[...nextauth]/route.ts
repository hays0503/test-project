import { authConfig } from '@/configs/auth';
import NextAuth from "next-auth"

export const { auth, signIn, signOut, handlers:{GET,POST}} = NextAuth(authConfig);

// export { handlers as GET, handlers as POST}