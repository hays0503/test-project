
import GoogleProvider from "next-auth/providers/google"
import Vk from "next-auth/providers/vk"

export const authConfig = {
    providers: [
        GoogleProvider({
            clientId: process.env.AUTH_GOOGLE_ID!,
            clientSecret: process.env.AUTH_GOOGLE_SECRET!,            
        }),
        Vk({
            clientId: process.env.AUTH_VK_ID!,
            clientSecret: process.env.AUTH_VK_SECRET!,
            checks: ['none']
        })
    ],
}
