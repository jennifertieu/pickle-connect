"use client"; 
import { useCallback, useEffect, useState } from "react";
import { Database } from "../types/database.types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function UserForm() {
    const supabase = createClientComponentClient<Database>();
    
};