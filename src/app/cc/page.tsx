"use client"

import { useSuspenseQuery } from "@apollo/client"
import { ContainerCharacteres } from "../components";
import { getAll } from "@/lib/characters-queries";

const query = getAll;

export default function ClientPage() {
  const { data }: any = useSuspenseQuery(query)
  
  return <ContainerCharacteres characters={data.characters.results} />
}