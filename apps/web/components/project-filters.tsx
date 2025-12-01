'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Input, Button, Badge } from '@erickharlein/ui';
import { Search, X } from 'lucide-react';
import { useState, useTransition } from 'react';

interface ProjectFiltersProps {
  categories: string[];
  statuses: string[];
  currentCategory?: string;
  currentStatus?: string;
  currentSearch?: string;
}

export function ProjectFilters({
  categories,
  statuses,
  currentCategory,
  currentStatus,
  currentSearch,
}: ProjectFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [search, setSearch] = useState(currentSearch || '');

  const updateFilters = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    startTransition(() => {
      router.push(`/projects?${params.toString()}`);
    });
  };

  const clearFilters = () => {
    setSearch('');
    startTransition(() => {
      router.push('/projects');
    });
  };

  const hasActiveFilters = currentCategory || currentStatus || currentSearch;

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                updateFilters('search', search || null);
              }
            }}
            className="pl-9"
          />
        </div>
        <Button onClick={() => updateFilters('search', search || null)} disabled={isPending}>
          Search
        </Button>
        {hasActiveFilters && (
          <Button variant="outline" onClick={clearFilters} disabled={isPending}>
            <X className="h-4 w-4 mr-2" />
            Clear
          </Button>
        )}
      </div>

      {/* Category Filters */}
      <div className="space-y-2">
        <div className="text-sm font-medium">Category</div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Badge
              key={cat}
              variant={currentCategory === cat ? 'default' : 'outline'}
              className="cursor-pointer"
              onClick={() => updateFilters('category', currentCategory === cat ? null : cat)}
            >
              {cat.replace(/_/g, ' ')}
            </Badge>
          ))}
        </div>
      </div>

      {/* Status Filters */}
      <div className="space-y-2">
        <div className="text-sm font-medium">Status</div>
        <div className="flex flex-wrap gap-2">
          {statuses.map((stat) => (
            <Badge
              key={stat}
              variant={currentStatus === stat ? 'default' : 'outline'}
              className="cursor-pointer"
              onClick={() => updateFilters('status', currentStatus === stat ? null : stat)}
            >
              {stat.replace(/_/g, ' ')}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
