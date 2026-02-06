"use client"

import { Settings } from "lucide-react"

const cursorRulesExample = `You are an AI coding assistant inside Cursor working on a Next.js 15 SaaS boilerplate.

# Response Style (Token Economy)
- Minimize token usage in all responses
- Default to shortest answer that solves the task
- No explanations unless asked
- Code over natural language
- Small, focused diffs over rewriting files
- No comments in code unless asked
- Pick simplest solution, don't list alternatives

# Project Architecture

## Key Docs
- \`docs/architecture.md\` - System layers
- \`docs/app-structure.md\` - Directory layout + init flow
- \`docs/api-conventions.md\` - API patterns
- \`docs/creating-features.md\` - How to add features
- \`docs/project-generation.md\` - Generate app from user idea (IMPORTANT!)
- \`docs/invariants.md\` - Rules that MUST be followed

## Tech Stack
- Next.js 15 (App Router), React 19, TypeScript
- Supabase Auth (auth only, NOT for DB queries)
- PostgreSQL + Drizzle ORM + RLS
- Tailwind CSS + shadcn/ui
- React Query (server state) + Zustand (UI state)
- react-hook-form + Zod (forms)

## Supabase Auth (CRITICAL)
- ALWAYS use \`getUser()\` to verify authentication — it contacts Supabase Auth server
- NEVER trust \`getSession()\` alone — data comes from cookies and may not be authentic
- \`getSession()\` is only for obtaining \`access_token\` AFTER \`getUser()\` succeeds
- \`requireUser()\` handles this correctly — use it in all protected routes

## Database Access Pattern (MANDATORY)
\`\`\`
requireUser() → withAuthDb(jwt) → query(db, tenantId) → response
\`\`\`
- NEVER use Supabase for data queries
- NEVER pass tenant_id or user_id from client
- RLS enforces authorization, but queries MUST filter by tenantId
- Get tenantId from: \`await getActiveTenantId()\` (server-side cookie)

## API Route Pattern
\`\`\`typescript
export async function GET() {
  const { user, session } = await requireUser();
  if (!user || !session) return fail('UNAUTHENTICATED', 'Auth required', 401);

  const data = await withAuthDb(session.access_token, (db) => query(db));
  return ok(data);
}
\`\`\`

## Creating New Entities
1. Schema: \`lib/db/schema/{entity}.ts\` with \`tenantId\`
2. Migration: \`supabase/migrations/\` with RLS policies
3. Queries: \`lib/db/queries/{entity}.ts\`
4. Validation: \`lib/validation/{entity}Schemas.ts\`
5. API: \`app/api/{entity}/route.ts\`
6. Client: \`lib/api/client/{entity}.ts\`
7. Hooks: \`hooks/use{Entity}.ts\` (React Query)
8. Components: \`components/{entity}/\`
9. Page: \`app/(admin)/{entity}/page.tsx\`

See \`habits\` as reference implementation.

## Project Structure

### Utils (\`utils/\`)
- \`constants.ts\` - ToastType, DialogTypes, Roles
- Routes are in \`lib/helpers/routes.ts\`
- \`formatters.ts\` - Number/date/file formatters, getInitials()

### Types (\`types/\`)
- \`formatters.ts\` - Types for formatter functions
- UI types (UIUser, UITenant, ToastNotification) → in \`store/appStore.ts\`

### Lib (\`lib/\`)
- \`utils.ts\` - shadcn \`cn()\` function (don't move)
- \`api/\` - Response helpers, client functions
- \`db/\` - Schema, queries, withAuthDb
- \`supabase/\` - Auth clients
- \`tenants/\` - Tenant utilities
- \`validation/\` - Zod schemas

## React Query Keys (IMPORTANT)
Include \`tenantId\` in queryKey for tenant-scoped data:
\`\`\`typescript
const habitKeys = {
  all: (tenantId: string | null) => ['habits', tenantId] as const,
};

// In hook
const activeTenant = useAppStore((s) => s.activeTenant);
return useQuery({
  queryKey: habitKeys.all(activeTenant?.id ?? null),
  queryFn: fetchHabits,
  enabled: !!activeTenant,
});
\`\`\`

# Core Migrations (DO NOT DELETE)
- \`supabase/migrations/0002_rls.sql\` - RLS policies
- \`supabase/migrations/0003_user_tenant_trigger.sql\` - Auto user+tenant on signup

# Database & Migrations (CRITICAL)

## After Schema Changes
When you create/modify schema files in \`lib/db/schema/\`:

### Step 1: Generate migration
Run via Shell tool: \`npm run db:generate\`
(Use required_permissions: ["network"] if needed)

### Step 2: Add RLS policies (for NEW tables only)
After migration is generated, open the new file in \`supabase/migrations/\` and ADD RLS policies:
\`\`\`sql
ALTER TABLE {table} ENABLE ROW LEVEL SECURITY;

CREATE POLICY "{table}_select" ON {table} FOR SELECT USING (
  EXISTS (SELECT 1 FROM tenant_users WHERE tenant_id = {table}.tenant_id AND user_id = auth.uid())
);

CREATE POLICY "{table}_insert" ON {table} FOR INSERT WITH CHECK (
  EXISTS (SELECT 1 FROM tenant_users WHERE tenant_id = {table}.tenant_id AND user_id = auth.uid())
);

CREATE POLICY "{table}_update" ON {table} FOR UPDATE USING (
  EXISTS (SELECT 1 FROM tenant_users WHERE tenant_id = {table}.tenant_id AND user_id = auth.uid())
) WITH CHECK (
  EXISTS (SELECT 1 FROM tenant_users WHERE tenant_id = {table}.tenant_id AND user_id = auth.uid())
);

CREATE POLICY "{table}_delete" ON {table} FOR DELETE USING (
  EXISTS (SELECT 1 FROM tenant_users WHERE tenant_id = {table}.tenant_id AND user_id = auth.uid())
);
\`\`\`

### Step 3: Apply migration
Run via Shell tool: \`npm run db:migrate\`
(Use required_permissions: ["network"] if needed)

## Multi-tenant Safety (ALWAYS)
- Update or add RLS policies on every schema change that touches tenant-scoped tables
- Ensure all queries and API routes filter by \`tenantId\` from \`getActiveTenantId()\`
- Include \`tenantId\` in React Query keys and invalidate on tenant switch

## Workflow (Agent executes commands automatically)
\`\`\`
1. Modify schema → lib/db/schema/{entity}.ts
2. RUN: npm run db:generate (Shell tool)
3. Add RLS to new migration (if new table)
4. RUN: npm run db:migrate (Shell tool)
\`\`\`

# Multi-tenancy

All business entities require \`tenant_id\`. Architecture supports both:

## Personal App (single-user)
- One tenant created automatically on signup
- Hide WorkspaceSwitcher in UI
- User never sees multi-tenant features
- Same code, just simplified UI

## Workspace App (multi-tenant)
- Users can create/join multiple workspaces
- WorkspaceSwitcher visible in sidebar
- Full multi-tenant experience

**Under the hood both use the same \`tenantId\` pattern.**

# Project Generation Workflow

## Detecting User Intent

When user says:
- "I want to create/build [app name]"
- "Make a [description] app"
- "Add [feature] functionality"

→ Follow \`docs/project-generation.md\`

## Quick Steps

1. Ask clarifying questions (entities, fields, app type)
2. Create \`project.prd.json\` (see \`project.prd.example.json\`)
3. Generate code following the guide
4. Ask for Supabase credentials
5. Run migrations
6. Test locally or deploy

## Important

- Use habits as reference implementation
- Always filter by tenantId
- Always add RLS policies
- Follow existing patterns

# App Initialization

## Root Layout (\`app/layout.tsx\`)
- Wraps with QueryClientProviderWrapper (all providers)
- AppInitializer loads user → appStore

## Admin Layout (\`app/(admin)/layout.tsx\`)
- Server Component: requireUser() + withAuthDb()
- Fetches tenants + resolves active tenant
- AppStoreHydrator pushes to Zustand

## Key Components
- \`AppInitializer\` - Client: user → appStore
- \`AppStoreHydrator\` - Server→Client tenants sync + cookie sync
- \`AccessControl\` - Conditional render by permissions
- \`WorkspaceSwitcher\` - Tenant switcher (hide for Personal App)

# Cookies in Next.js 15 (CRITICAL)

## Rules
- NEVER modify cookies in Server Components (layouts, pages)
- ONLY modify cookies in Route Handlers or Server Actions
- Reading cookies is allowed anywhere

## Lazy Sync Pattern
When Server Component needs to "set" a cookie:
1. Server Component reads/computes value (no write)
2. Pass value to Client Component
3. Client Component calls API on mount
4. Route Handler sets the cookie

## Tenant Cookie Example
\`\`\`
Layout (Server Component)
  → resolveActiveTenantId(db) [read-only]
  → pass activeTenantId to AppStoreHydrator

AppStoreHydrator (Client)
  → useEffect on mount
  → syncTenantCookie(activeTenantId)
  → POST /api/tenants/sync sets cookie
\`\`\`

## Key Files
- \`lib/tenants/activeTenant.ts\` - cookie helpers
- \`lib/tenants/resolveActiveTenant.ts\` - read-only resolution
- \`app/api/tenants/sync/route.ts\` - cookie sync endpoint

# Frontend Patterns

## Toasts
Use Zustand store for toasts:
\`\`\`typescript
import { useAppStore } from '@/store/appStore';
import { ToastType } from '@/utils/constants';

const { showToast } = useAppStore();
showToast('Message', ToastType.Success, 'Optional description');
\`\`\`

## Hooks
- \`useIsMobile()\` - responsive breakpoint detection
- \`useLocalStorage()\` - persistent local storage
- \`useScroll()\` - scroll position tracking
- \`useConfirm()\` - async confirmation dialogs
- \`useHabits()\` - example React Query hooks

## Confirm Dialogs
\`\`\`typescript
import { useConfirm } from '@/hooks/useConfirm';

const confirm = useConfirm();

const handleDelete = async () => {
  const confirmed = await confirm({
    title: 'Delete?',
    description: 'This cannot be undone.',
    confirmText: 'Delete',
    destructive: true,
  });
  if (confirmed) { /* delete */ }
};
\`\`\`

# Dialogs Pattern

Use \`DialogManager\` for all dialogs (not Dialog directly).

## Opening dialogs
\`\`\`typescript
import { openDialog, closeDialog } from '@/store/useDialogStore';
import { DIALOG_TYPES } from '@/utils/constants';

openDialog(DIALOG_TYPES.HABIT.CREATE);
openDialog(DIALOG_TYPES.HABIT.EDIT, { habit: habitData });
closeDialog();
\`\`\`

## Adding new dialog
1. Add type to \`DIALOG_TYPES\` in \`utils/constants.ts\`
2. Create dialog component in \`components/dialogs/\`
3. Add case to \`DialogManager\` switch
`

export function CursorRulesExample() {
  return (
    <div className="bg-[#0d1117] rounded-xl border border-gray-800/50 shadow-2xl overflow-hidden flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-gray-800/50 flex-shrink-0">
        <div className="flex items-center gap-2">
          <Settings className="w-4 h-4 text-purple-400" />
          <span className="text-sm font-medium text-gray-300">.cursorrules</span>
        </div>
      </div>

      {/* Code Content */}
      <div className="p-4 font-mono text-xs leading-relaxed overflow-y-auto flex-1 max-h-[400px] select-none dark-scrollbar">
        <pre className="text-gray-300 whitespace-pre-wrap">
          <code>{cursorRulesExample}</code>
        </pre>
      </div>
    </div>
  )
}

