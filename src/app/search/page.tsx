
"use client"

import React, { Suspense } from 'react'
import { SearchResultLoader } from '@/components/loaders'
import SearchResult from '@/views/SearchResult'

function SearchPage() {
  return (
    <Suspense fallback={<SearchResultLoader />}>
      <SearchResult />
    </Suspense>
  )
}

export default function SearchRoute() {
    return (
        <Suspense fallback={<SearchResultLoader />}>
            <SearchPage />
        </Suspense>
    )
}
