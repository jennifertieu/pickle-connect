import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "../types/database.types";
import ProfileForm from "../components/ProfileForm";

export default async function Profile() {
    const supabase = createServerComponentClient<Database>({ cookies });

    const {
        data: { session },
    } = await supabase.auth.getSession();

    return <ProfileForm session={session} />;
}