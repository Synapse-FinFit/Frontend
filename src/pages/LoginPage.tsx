export const LoginPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
            <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4 text-slate-900">
                    FinFit 로그인
                </h1>
                <p className="text-sm text-slate-500 mb-6">
                    Google 계정으로 로그인하여 소비 분석을 시작하세요.
                </p>
                <button
                    className="w-full py-2 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition"
                >
                    Google 계정으로 로그인
                </button>
            </div>
        </div>
    );
};