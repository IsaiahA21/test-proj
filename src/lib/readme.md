### createClient
* import @supabase/supabase-js
* Does not handle cookies/headers automatically
* Works independently of request/response

### createServerClient
* @supabase/ssr
* Server-side rendering (SSR) contexts
* Automatically manages cookies/headers
* Requires req and res for SSR contexts
* Next.js getServerSideProps , API routes