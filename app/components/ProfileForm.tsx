"use client";
import { useCallback, useEffect, useState } from "react";
import Avatar from "./Avatar";
import { Database } from "../types/database.types";
import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";

export default function ProfileForm({ session }: { session: Session | null }) {
    
}
