import AppLayout from "@/src/layouts/AppLayout";

export default function OtherPage() {
  return (
    <AppLayout>
      <div className="mx-auto w-full max-w-7xl sm:px-6 lg:px-8 py-6">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Other Section</h1>
            <p className="mt-2 text-slate-600">
              This section is a placeholder for additional content such as
              resources or links.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/10">
            <h2 className="text-xl font-semibold text-slate-900">
              Coming soon
            </h2>
            <p className="mt-4 text-slate-700 leading-7">
              Add more features or informational content here as your app
              expands.
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
