import AppLayout from "@/src/layouts/AppLayout";

export default function AboutUsPage() {
  return (
    <AppLayout>
      <div className="mx-auto w-full max-w-7xl sm:px-6 lg:px-8 py-6">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">About Us</h1>
            <p className="mt-2 text-slate-600">
              Learn more about the team and mission behind this AI code review
              assistant.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/10">
            <h2 className="text-xl font-semibold text-slate-900">
              Our mission
            </h2>
            <p className="mt-4 text-slate-700 leading-7">
              We help developers review code faster by combining AI-powered
              analysis with an intuitive workflow.
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
